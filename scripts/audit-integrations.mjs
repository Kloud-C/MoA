import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
let checks = 0;

function assert(condition, message) {
  checks += 1;
  if (!condition) errors.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function walk(directory, predicate) {
  return fs.readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const relative = path.posix.join(directory, entry.name);
    if (entry.isDirectory()) return walk(relative, predicate);
    return predicate(relative) ? [relative] : [];
  });
}

function checkLocalReference(page, reference) {
  if (/^(?:[a-z]+:|\/\/|#)/i.test(reference)) return;
  const clean = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  const target = clean.startsWith("/")
    ? path.join(root, clean.slice(1))
    : path.resolve(root, path.dirname(page), clean);
  assert(fs.existsSync(target), `${page}: missing local reference ${reference}`);
}

const locales = ["ko", "en", "ja", "zh"];
const localePages = Object.fromEntries(locales.map((locale) => [
  locale,
  walk(locale, (file) => file.endsWith(".html")).map((file) => path.posix.basename(file)).sort()
]));
const expectedPages = localePages.ko.join("\n");
for (const locale of locales.slice(1)) {
  assert(localePages[locale].join("\n") === expectedPages, `${locale}: localized page set differs from ko`);
}

const allHtml = locales.flatMap((locale) => walk(locale, (file) => file.endsWith(".html")));
for (const page of allHtml) {
  const html = read(page);
  const declaredLocale = html.match(/<html\b[^>]*\blang=["']([^"']+)/i)?.[1]?.slice(0, 2);
  assert(declaredLocale === page.split("/")[0], `${page}: html lang does not match its locale folder`);
  for (const [, reference] of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
    checkLocalReference(page, reference);
  }
}

for (const [, reference] of read("assets/css/styles.css").matchAll(/url\(["']?([^"')]+)["']?\)/gi)) {
  checkLocalReference("assets/css/styles.css", reference.trim());
}

const sitemap = read("sitemap.xml");
for (const [, url] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)) {
  const pathname = new URL(url, "https://molgga.com").pathname;
  const page = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  assert(fs.existsSync(path.join(root, page.slice(1))), `sitemap.xml: missing page ${pathname}`);
}

const redirectLines = read("_redirects").split(/\r?\n/).filter((line) => line.trim() && !line.trim().startsWith("#"));
for (const line of redirectLines) {
  const [, destination] = line.trim().split(/\s+/);
  if (!destination || destination.includes(":")) continue;
  const page = destination.endsWith("/") ? `${destination}index.html` : destination;
  assert(fs.existsSync(path.join(root, page.slice(1))), `_redirects: missing destination ${destination}`);
}

for (const file of [...walk("assets/js", (entry) => entry.endsWith(".js")), ...walk("functions", (entry) => entry.endsWith(".js")), "scripts/audit-integrations.mjs"]) {
  const result = spawnSync(process.execPath, ["--input-type=module", "--check"], { input: read(file), encoding: "utf8" });
  assert(result.status === 0, `${file}: JavaScript syntax check failed${result.stderr ? ` (${result.stderr.trim()})` : ""}`);
}

const measurementIds = new Set();
for (const page of allHtml) {
  const html = read(page);
  const scripts = [...html.matchAll(/googletagmanager\.com\/gtag\/js\?id=([^&"']+)/g)].map((match) => match[1]);
  const configs = [...html.matchAll(/gtag\(['"]config['"],\s*['"]([^'"]+)/g)].map((match) => match[1]);
  assert(scripts.length === 1 && configs.length === 1 && scripts[0] === configs[0], `${page}: Google Analytics loader/config missing or mismatched`);
  if (scripts[0]) measurementIds.add(scripts[0]);
}
assert(measurementIds.size <= 1, `localized pages use inconsistent Google Analytics IDs: ${[...measurementIds].join(", ")}`);

const appSource = read("assets/js/app.js");
const animalProfiles = new Map([...appSource.matchAll(/^\s{6}([a-z]+): \{[^\n]*?\bimage: "([^"]+)"/gm)].map((match) => [match[1], match[2]]));
const animalHtml = read("ko/animal-test.html");
const animalQuestions = new Set([...animalHtml.matchAll(/\bname="q(\d+)"/g)].map((match) => Number(match[1])));
assert(animalQuestions.size === 10 && [...animalQuestions].every((number) => number >= 1 && number <= 10), "animal quiz: question names must cover q1 through q10");
assert(animalProfiles.size === 6, "animal quiz: expected six result profiles");
for (const [, value] of animalHtml.matchAll(/\bname="q\d+"[^>]*\bvalue="([^"]+)"/g)) {
  for (const profileId of value.split(",")) assert(animalProfiles.has(profileId), `animal quiz: answer scores unknown profile ${profileId}`);
}
for (const [profileId, image] of animalProfiles) {
  assert(fs.existsSync(path.resolve(root, "ko", image)), `animal/${profileId}: missing result image ${image}`);
}

const mbtiProfiles = new Map([...appSource.matchAll(/^\s{6}([A-Z]{4}): \{ title: "[^"]+", image: "([^"]+)"/gm)].map((match) => [match[1], match[2]]));
const mbtiHtml = read("ko/mbti.html");
const expectedMbtiNames = ["ei", "sn", "tf", "jp"].flatMap((axis) => [1, 2, 3, 4, 5].map((number) => `${axis}${number}`));
const mbtiQuestions = new Set([...mbtiHtml.matchAll(/\bname="((?:ei|sn|tf|jp)[1-5])"/g)].map((match) => match[1]));
assert(expectedMbtiNames.every((name) => mbtiQuestions.has(name)) && mbtiQuestions.size === 20, "MBTI quiz: form fields must cover all 20 axis questions");
const expectedAxisValues = { ei: ["E", "I"], sn: ["S", "N"], tf: ["T", "F"], jp: ["J", "P"] };
const mbtiFieldValues = new Map();
for (const [, name, value] of mbtiHtml.matchAll(/\bname="((?:ei|sn|tf|jp)[1-5])"[^>]*\bvalue="([^"]+)"/g)) {
  if (!mbtiFieldValues.has(name)) mbtiFieldValues.set(name, new Set());
  mbtiFieldValues.get(name).add(value);
}
for (const name of expectedMbtiNames) {
  const expected = expectedAxisValues[name.slice(0, 2)];
  const actual = [...(mbtiFieldValues.get(name) || [])].sort();
  assert(JSON.stringify(actual) === JSON.stringify([...expected].sort()), `MBTI quiz: ${name} does not offer both expected axis answers`);
}
const mbtiTypes = ["E", "I"].flatMap((ei) => ["S", "N"].flatMap((sn) => ["T", "F"].flatMap((tf) => ["J", "P"].map((jp) => ei + sn + tf + jp))));
assert(mbtiProfiles.size === 16 && mbtiTypes.every((type) => mbtiProfiles.has(type)), "MBTI quiz: one or more of the 16 result profiles are missing");
for (const [type, image] of mbtiProfiles) {
  assert(fs.existsSync(path.resolve(root, "ko", image)), `MBTI/${type}: missing result image ${image}`);
}

const worldcupSandbox = { window: {} };
vm.runInNewContext(read("assets/js/worldcup-data.js"), worldcupSandbox, { timeout: 1000 });
const frontendCups = worldcupSandbox.window.MOLGGA_WORLDCUPS;
const backendSource = read("functions/_shared/worldcup-config.js").replace(
  "export const WORLD_CUPS =",
  "globalThis.WORLD_CUPS ="
);
const backendSandbox = {};
vm.runInNewContext(backendSource, backendSandbox, { timeout: 1000 });
const backendCups = backendSandbox.WORLD_CUPS;
assert(JSON.stringify(Object.keys(frontendCups).sort()) === JSON.stringify(Object.keys(backendCups).sort()), "worldcup frontend/backend game IDs differ");

for (const [gameId, config] of Object.entries(frontendCups)) {
  const backend = backendCups[gameId];
  if (!backend) continue;
  assert(JSON.stringify([...config.availableBrackets].sort()) === JSON.stringify([...backend.brackets].sort()), `${gameId}: frontend/backend bracket sizes differ`);
  const ids = config.items.map((item) => item.id);
  assert(new Set(ids).size === ids.length, `${gameId}: duplicate item IDs`);
  assert(JSON.stringify([...ids].sort()) === JSON.stringify([...backend.items].sort()), `${gameId}: frontend/backend item IDs differ`);
  for (const bracket of config.availableBrackets) {
    assert(Number.isInteger(bracket) && bracket >= 2 && bracket <= ids.length && (bracket & (bracket - 1)) === 0, `${gameId}: invalid bracket size ${bracket}`);
    let round = [...ids].slice(0, bracket);
    let played = 0;
    while (round.length > 1) {
      round = round.filter((_, index) => index % 2 === 0);
      played += round.length;
    }
    assert(round.length === 1 && played === bracket - 1, `${gameId}: ${bracket}-bracket does not resolve to one winner`);
  }
  for (const item of config.items) {
    for (const locale of locales) {
      assert(typeof item.name?.[locale] === "string" && item.name[locale].trim(), `${gameId}/${item.id}: missing ${locale} name`);
      assert(typeof item.detail?.[locale] === "string" && item.detail[locale].trim(), `${gameId}/${item.id}: missing ${locale} detail`);
    }
    assert(fs.existsSync(path.resolve(root, "ko", item.image)), `${gameId}/${item.id}: missing image ${item.image}`);
  }
  for (const locale of locales) {
    const page = `${locale}/${config.page}`;
    const html = read(page);
    assert(html.includes(`data-worldcup-game="${gameId}"`), `${page}: game root is missing or mismatched`);
    for (const bracket of config.availableBrackets) {
      assert(html.includes(`data-bracket-size="${bracket}"`), `${page}: missing ${bracket}-round selection`);
    }
  }
}
const worldcupScriptVersions = new Set();
for (const page of allHtml.filter((file) => /(?:^|\/)(?:late-night-)?worldcup\.html$/.test(file))) {
  const version = read(page).match(/assets\/js\/worldcup\.js\?v=([^"']+)/)?.[1];
  assert(Boolean(version), `${page}: worldcup.js cache token is missing`);
  if (version) worldcupScriptVersions.add(version);
}
assert(worldcupScriptVersions.size === 1, `World Cup pages use inconsistent worldcup.js cache tokens: ${[...worldcupScriptVersions].join(", ")}`);

const archetypeFiles = [
  "assets/js/teto-egen-data.js",
  "assets/js/attachment-data.js",
  "assets/js/past-life-data.js",
  "assets/js/spending-habits-data.js"
];
const archetypeSandbox = { window: {} };
for (const file of archetypeFiles) vm.runInNewContext(read(file), archetypeSandbox, { timeout: 1000 });
for (const [testId, config] of Object.entries(archetypeSandbox.window.MOA_ARCHETYPE_TESTS || {})) {
  const profileIds = Object.keys(config.profiles || {});
  assert(config.questions?.length > 0, `${testId}: no questions configured`);
  const statedCount = config.eyebrow?.match(/·\s*(\d+)문항/)?.[1];
  assert(Boolean(statedCount) && Number(statedCount) === config.questions.length, `${testId}: eyebrow count is missing or does not match question data`);
  config.questions.forEach((question, questionIndex) => {
    assert(typeof question.prompt === "string" && question.prompt.trim(), `${testId}: question ${questionIndex + 1} has no prompt`);
    assert(/(?:마지막\s*질문|last\s+question|final\s+question)/i.test(question.prompt) === false, `${testId}: question ${questionIndex + 1} hard-codes a final-question label`);
    assert(question.choices?.length >= 2, `${testId}: question ${questionIndex + 1} has fewer than two choices`);
    for (const choice of question.choices || []) {
      assert(choice.scores?.length > 0, `${testId}: question ${questionIndex + 1} has a choice without scores`);
      for (const profileId of choice.scores || []) assert(profileIds.includes(profileId), `${testId}: question ${questionIndex + 1} scores unknown profile ${profileId}`);
    }
  });
  for (const [profileId, profile] of Object.entries(config.profiles || {})) {
    for (const compatibleId of [...(profile.good || []), ...(profile.tricky || [])]) {
      assert(profileIds.includes(compatibleId), `${testId}/${profileId}: compatibility refers to unknown profile ${compatibleId}`);
    }
    const image = profile.image || profile.imageFile;
    if (image) assert(fs.existsSync(path.resolve(root, "ko", image)), `${testId}/${profileId}: missing result image ${image}`);
  }
}

function loadApi(relativePath, exportedName, sandbox) {
  const source = read(relativePath)
    .replace(/^import \{ WORLD_CUPS \} from [^;]+;\s*/m, "")
    .replace(`export async function ${exportedName}`, `globalThis.${exportedName} = async function`);
  vm.runInNewContext(source, sandbox, { timeout: 1000 });
  return sandbox[exportedName];
}

const apiContext = () => ({ WORLD_CUPS: backendCups, URL, Request, Response, JSON, Number, Object, RegExp, TextDecoder, Uint8Array });
const onRequestPost = loadApi("functions/api/worldcup-vote.js", "onRequestPost", apiContext());
const onRequestGet = loadApi("functions/api/worldcup-rankings.js", "onRequestGet", apiContext());
const writes = [];
const mockDb = {
  prepare(sql) {
    return {
      bind(...values) {
        return {
          async run() { writes.push({ sql, values }); return { meta: { changes: 1 } }; },
          async all() { return { results: [{ itemId: "cup-ramyeon", wins: 3 }] }; }
        };
      }
    };
  }
};
const validVote = { gameId: "late-night-food", itemId: "cup-ramyeon", bracketSize: 16, voteId: "audit-vote-123456" };
const post = async (body, origin = "https://molgga.com", db = mockDb) => onRequestPost({
  request: new Request("https://molgga.com/api/worldcup-vote", {
    method: "POST", headers: { origin, "content-type": "application/json" }, body: JSON.stringify(body)
  }), env: { MOLGGA_DB: db }
});

let response = await post(validVote);
let body = await response.json();
assert(response.status === 200 && body.accepted === true, "vote API rejects a valid vote");
assert(writes.length === 1 && writes[0].values.join("|") === "audit-vote-123456|late-night-food|cup-ramyeon|16", "vote API writes unexpected fields");
response = await post(validVote, "https://attacker.example");
assert(response.status === 403, "vote API accepts a mismatched Origin");
response = await post({ ...validVote, itemId: "not-a-menu-item" });
assert(response.status === 400, "vote API accepts an unknown item ID");
response = await post({ ...validVote, gameId: "__proto__" });
assert(response.status === 400, "vote API does not safely reject a prototype-key game ID");
response = await post({ ...validVote, gameId: "constructor" });
assert(response.status === 400, "vote API does not safely reject an inherited-key game ID");
response = await post({ ...validVote, bracketSize: 15 });
assert(response.status === 400, "vote API accepts an unsupported bracket size");
response = await post({ ...validVote, voteId: "short" });
assert(response.status === 400, "vote API accepts a malformed vote ID");
response = await onRequestPost({ request: new Request("https://molgga.com/api/worldcup-vote", { method: "POST", headers: { origin: "https://molgga.com" }, body: "x".repeat(4096) }), env: { MOLGGA_DB: mockDb } });
assert(response.status === 413, "vote API accepts an oversized body without a Content-Length header");
response = await onRequestPost({ request: new Request("https://molgga.com/api/worldcup-vote", { method: "POST", headers: { origin: "https://molgga.com" }, body: "{" }), env: { MOLGGA_DB: mockDb } });
assert(response.status === 400, "vote API accepts malformed JSON");
response = await post(validVote, "https://molgga.com", null);
assert(response.status === 503, "vote API does not report missing database binding");
response = await onRequestGet({ request: new Request("https://molgga.com/api/worldcup-rankings?gameId=late-night-food"), env: { MOLGGA_DB: mockDb } });
body = await response.json();
assert(response.status === 200 && body.items?.[0]?.itemId === "cup-ramyeon", "ranking API fails to return grouped results");
response = await onRequestGet({ request: new Request("https://molgga.com/api/worldcup-rankings?gameId=unknown"), env: { MOLGGA_DB: mockDb } });
assert(response.status === 400, "ranking API accepts an unknown game ID");

const readme = read("README.md");
const documentedDatabase = readme.match(/D1 데이터베이스 `([^`]+)`/)?.[1];
const migrationCommand = readme.match(/wrangler d1 execute ([^\s`]+)/)?.[1];
assert(Boolean(documentedDatabase) && documentedDatabase === migrationCommand, "README: D1 database name differs from migration command");
assert(readme.includes("MOLGGA_DB") && read("functions/api/worldcup-vote.js").includes("env.MOLGGA_DB") && read("functions/api/worldcup-rankings.js").includes("env.MOLGGA_DB"), "D1 binding name differs between documentation and API routes");
const migration = read("migrations/0001_worldcup_votes.sql");
for (const column of ["vote_id", "game_id", "item_id", "bracket_size", "created_at"]) {
  assert(new RegExp(`\\b${column}\\b`, "i").test(migration), `D1 migration is missing ${column}`);
}
assert(/vote_id\s+TEXT\s+PRIMARY KEY/i.test(migration), "D1 vote ID is not a primary key for idempotency");
assert(/CHECK\s*\(bracket_size\s+IN\s*\(8,\s*16,\s*32\)\)/i.test(migration), "D1 bracket constraint differs from supported bracket sizes");
assert(/INSERT\s+OR\s+IGNORE\s+INTO\s+worldcup_votes/i.test(read("functions/api/worldcup-vote.js")), "vote API is missing idempotent insert behavior");
assert(/GROUP\s+BY\s+item_id[\s\S]*ORDER\s+BY\s+wins\s+DESC[\s\S]*LIMIT\s+10/i.test(read("functions/api/worldcup-rankings.js")), "ranking query does not aggregate and limit top items");

if (errors.length) {
  console.error(`Integration audit failed (${errors.length} issues across ${checks} checks):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Integration audit passed: ${checks} checks across ${allHtml.length} localized pages, World Cup data/APIs, archetype data, assets, sitemap, redirects, and D1 docs.`);
}
