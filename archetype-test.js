(() => {
  const root = document.querySelector("[data-archetype-test]");
  if (!root) return;

  const config = window.MOA_ARCHETYPE_TESTS?.[root.dataset.archetypeTest];
  if (!config) return;

  const progress = root.querySelector("[data-quiz-progress]");
  const progressText = root.querySelector("[data-quiz-progress-text]");
  const stage = root.querySelector("[data-quiz-stage]");
  const backButton = root.querySelector("[data-quiz-back]");
  const error = root.querySelector("[data-quiz-error]");
  const result = root.querySelector("[data-quiz-result]");
  const answers = Array(config.questions.length).fill(null);
  let current = 0;
  let moving = false;

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  const renderQuestion = (animate = false) => {
    const question = config.questions[current];
    progress.max = config.questions.length;
    progress.value = current + 1;
    progress.setAttribute("aria-valuetext", `${current + 1} / ${config.questions.length} 문항`);
    progressText.textContent = `${current + 1} / ${config.questions.length}`;
    backButton.disabled = current === 0;
    backButton.hidden = current === 0;
    error.textContent = "";

    stage.innerHTML = `<fieldset class="archetype-question"><legend class="archetype-question__prompt" tabindex="-1">${escapeHtml(question.prompt)}</legend><div class="archetype-question__choices">${question.choices.map((choice, index) => `<button class="choice-button${answers[current] === index ? " is-selected" : ""}" type="button" data-choice="${index}" aria-pressed="${answers[current] === index}"><span class="choice-button__number">0${index + 1}</span><span>${escapeHtml(choice.text)}</span></button>`).join("")}</div></fieldset>`;
    if (animate) {
      stage.classList.remove("archetype-stage--leaving");
      stage.classList.add("archetype-stage--entering");
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => stage.classList.remove("archetype-stage--entering")));
    }
    stage.querySelector("legend").focus({ preventScroll: true });

    stage.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        answers[current] = Number(button.dataset.choice);
        stage.querySelectorAll("[data-choice]").forEach((option) => {
          const selected = option === button;
          option.classList.toggle("is-selected", selected);
          option.setAttribute("aria-pressed", String(selected));
        });
        error.textContent = "";
        move(1);
      });
    });
  };

  const showResult = () => {
    const scores = Object.fromEntries(Object.keys(config.profiles).map((key) => [key, 0]));
    answers.forEach((answerIndex, questionIndex) => {
      config.questions[questionIndex].choices[answerIndex].scores.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(scores, key)) scores[key] += 1;
      });
    });
    const highScore = Math.max(...Object.values(scores));
    const tied = Object.keys(scores).filter((key) => scores[key] === highScore);
    // Resolve ties from the full answer pattern so the same answers always
    // produce the same result without favoring the final few questions.
    const answerMask = answers.reduce((mask, answer, index) => mask | (answer << index), 0);
    const winner = tied[answerMask % tied.length];
    const profile = config.profiles[winner];
    const compatNames = (ids) => ids.map((id) => config.profiles[id].name).join(" · ");
    const extraContent = profile.details?.length
      ? `<div class="info-grid archetype-result-card__details">${profile.details.map((item) => `<article class="info-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("")}</div>`
      : `<div class="archetype-result-card__compat"><div><span>찰떡 궁합</span><strong>${escapeHtml(compatNames(profile.good))}</strong></div><div><span>서로 알아가면 좋은 유형</span><strong>${escapeHtml(compatNames(profile.tricky))}</strong></div></div>`;

    root.querySelector("[data-quiz-navigation]").hidden = true;
    root.querySelector("[data-quiz-progress-wrap]").hidden = true;
    stage.hidden = true;
    result.style.setProperty("--result-accent", profile.color);
    result.innerHTML = `<article class="archetype-result-card"><div class="archetype-result-card__top"><span class="archetype-result-card__brand">MOA PLAY · ${escapeHtml(config.title)}</span><span class="archetype-result-card__emoji" aria-hidden="true">${profile.emoji}</span><p class="archetype-result-card__label">나의 오늘 유형</p><h3 tabindex="-1">${escapeHtml(profile.name)}</h3><p class="archetype-result-card__catchphrase">${escapeHtml(profile.catchphrase)}</p></div><div class="archetype-result-card__body"><p>${escapeHtml(profile.description)}</p>${extraContent}</div></article><div class="result-actions"><button class="button button-small" type="button" data-quiz-restart>다시 해보기</button><button class="button button-small button-quiet" type="button" data-quiz-share>결과 공유 문구 복사</button></div><p class="share-status" role="status" aria-live="polite" data-quiz-share-status></p>`;
    result.hidden = false;
    result.querySelector("h3").focus({ preventScroll: true });
    result.querySelector("[data-quiz-restart]").addEventListener("click", () => {
      answers.fill(null);
      current = 0;
      result.hidden = true;
      stage.hidden = false;
      root.querySelector("[data-quiz-navigation]").hidden = false;
      root.querySelector("[data-quiz-progress-wrap]").hidden = false;
      renderQuestion(true);
    });
    result.querySelector("[data-quiz-share]").addEventListener("click", async () => {
      const status = result.querySelector("[data-quiz-share-status]");
      const shareText = `${profile.name} · ${profile.catchphrase}\n---------------------------------------------------\n나도 테스트 해보고 싶다면?\n${config.url}`;
      try {
        await navigator.clipboard.writeText(shareText);
        status.textContent = "공유 문구를 복사했어요.";
      } catch {
        status.textContent = "복사할 수 없어요. 결과 문구를 직접 공유해 주세요.";
      }
    });
  };

  const move = (direction) => {
    if (moving) return;
    if (direction < 0 && current === 0) return;
    moving = true;
    stage.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    stage.classList.add("archetype-stage--leaving");
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 160;
    window.setTimeout(() => {
      if (direction > 0 && current === config.questions.length - 1) {
        showResult();
        moving = false;
        return;
      }
      current += direction;
      renderQuestion(true);
      moving = false;
    }, delay);
  };

  backButton.addEventListener("click", () => move(-1));
  renderQuestion();
})();
