(() => {
  const worldcup = document.querySelector("#worldcup-game");
  if (worldcup) {
    const activities = [
      { name: "집에서 좋아하는 영화 보기", detail: "간식과 함께 익숙한 영화나 새 작품을 천천히 감상해요." },
      { name: "동네의 새로운 맛집 가기", detail: "한 번도 먹어 보지 않은 메뉴를 골라 동네를 탐험해요." },
      { name: "공원이나 숲길 산책하기", detail: "가까운 초록 길을 걸으며 머리를 환기해요." },
      { name: "취미 하나에 깊이 몰입하기", detail: "책, 그림, 만들기처럼 좋아하는 일에 시간을 써요." },
      { name: "친구와 카페에서 이야기하기", detail: "근황을 나누고 서로의 이야기를 들어요." },
      { name: "가까운 곳으로 드라이브하기", detail: "목적지를 정하거나 풍경을 따라 잠깐 다녀와요." },
      { name: "집에서 천천히 요리하기", detail: "간단한 재료로 먹고 싶은 음식을 직접 만들어요." },
      { name: "가벼운 운동이나 스트레칭하기", detail: "산책, 요가, 홈트 중 기분에 맞는 움직임을 해요." }
    ];
    const options = document.querySelector("#match-options");
    const label = document.querySelector("#round-label");
    const count = document.querySelector("#match-count");
    const progress = document.querySelector("#game-progress");
    const result = document.querySelector("#worldcup-result");
    const status = document.querySelector("#worldcup-status");
    let round = activities;
    let winners = [];
    let matchIndex = 0;
    let finished = false;

    const roundName = (size) => ({ 8: "1라운드 · 8강", 4: "2라운드 · 4강", 2: "3라운드 · 결승" })[size] || "선택";
    const renderMatch = () => {
      const left = round[matchIndex * 2];
      const right = round[matchIndex * 2 + 1];
      label.textContent = roundName(round.length);
      count.textContent = `${progress.value + 1} / 7`;
      options.replaceChildren();
      [left, right].forEach((activity) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-button";
        button.innerHTML = `<strong>${activity.name}</strong><span>${activity.detail}</span>`;
        button.addEventListener("click", () => choose(activity));
        options.append(button);
      });
    };
    const choose = (activity) => {
      if (finished) return;
      winners.push(activity);
      progress.value += 1;
      matchIndex += 1;
      if (matchIndex < round.length / 2) {
        renderMatch();
        return;
      }
      if (winners.length === 1) {
        showWinner(winners[0]);
        return;
      }
      round = winners;
      winners = [];
      matchIndex = 0;
      renderMatch();
    };
    const showWinner = (winner) => {
      finished = true;
      options.hidden = true;
      label.textContent = "오늘의 선택";
      count.textContent = "7 / 7 완료";
      result.hidden = false;
      result.innerHTML = `<span class="eyebrow-text">이번 월드컵에서 가장 많이 선택한 활동</span><h3>${winner.name}</h3><p>${winner.detail}</p><p>이 선택이 이번 주말의 정답이라는 뜻은 아니에요. 마음에 들었다면 시간과 장소를 정해 작은 계획으로 옮겨 보세요.</p><div class="result-actions"><button class="button button-small" type="button" data-restart>다시 하기</button><button class="button button-small button-quiet" type="button" data-share>결과 복사</button></div>`;
      result.querySelector("[data-restart]").addEventListener("click", reset);
      result.querySelector("[data-share]").addEventListener("click", async (event) => {
        const button = event.currentTarget;
        try {
          await navigator.clipboard.writeText(`모아 주말 취향 월드컵 결과: ${winner.name} — https://moa-dej.pages.dev/worldcup.html`);
          status.textContent = "결과 문구를 복사했어요.";
        } catch {
          status.textContent = "이 브라우저에서는 복사를 사용할 수 없어요. 결과를 직접 공유해 주세요.";
        }
        button.blur();
      });
    };
    function reset() {
      round = activities;
      winners = [];
      matchIndex = 0;
      finished = false;
      progress.value = 0;
      result.hidden = true;
      result.replaceChildren();
      options.hidden = false;
      status.textContent = "";
      renderMatch();
      document.querySelector("#game-heading").focus({ preventScroll: true });
    }
    renderMatch();
  }

  const animalForm = document.querySelector("#animal-quiz");
  if (animalForm) {
    const profiles = {
      dog: { name: "강아지형 · 관계를 잇는 다정함", emoji: "🐕", text: "사람들과 마음을 나누고 먼저 연결을 만드는 답이 많이 나왔어요.", strength: "먼저 안부를 묻고 대화의 문을 여는 능력은 모임과 협업에 따뜻한 흐름을 더할 수 있어요.", balance: "모두의 기분을 책임지려다 지치지 않도록 혼자 쉬는 시간도 약속처럼 잡아 보세요.", prompt: "이번 주에는 누구와 이야기하고 싶나요?" },
      cat: { name: "고양이형 · 자기만의 리듬", emoji: "🐈", text: "혼자 생각하고 나에게 편한 속도를 고르는 답이 많이 나왔어요.", strength: "주변을 관찰하고 관심 있는 일에 깊게 몰입하는 시간이 아이디어와 집중을 키워 줄 수 있어요.", balance: "원하는 것을 주변이 알아주길 기다리기보다 필요할 때 말로 표현하면 관계가 더 편해져요.", prompt: "지금 필요한 혼자만의 시간이나 도움이 있나요?" },
      fox: { name: "여우형 · 관찰하고 설계하는 호기심", emoji: "🦊", text: "정보를 모아 대안을 비교하고 다음 수를 생각하는 답이 많이 나왔어요.", strength: "복잡한 문제를 나누어 보고 선택지 사이의 차이를 설명하는 데 강점을 발휘할 수 있어요.", balance: "더 나은 계획을 찾느라 시작이 늦어질 때는 작고 안전한 실험으로 가정을 확인해 보세요.", prompt: "지금 알고 있는 것만으로 시작할 수 있는 가장 작은 행동은 무엇인가요?" },
      otter: { name: "수달형 · 새로움을 즐기는 탐험", emoji: "🦦", text: "새로운 활동을 시도하고 바뀐 상황에서 다른 재미를 찾는 답이 많이 나왔어요.", strength: "호기심과 빠른 전환은 익숙한 문제에 새로운 접근을 보태고, 경험의 폭을 넓혀 줄 수 있어요.", balance: "여러 경험을 넓히는 만큼 에너지를 회복할 여백과 끝까지 마무리할 시간을 남겨 두세요.", prompt: "이번 주에 부담 없이 처음 해볼 작은 일은 무엇인가요?" },
      deer: { name: "사슴형 · 세심하게 살피는 배려", emoji: "🦌", text: "주변의 필요와 차분한 준비를 살피는 답이 많이 나왔어요.", strength: "작은 신호를 알아차리고 준비를 도와 상황을 안정적으로 만드는 점이 주변에 힘이 될 수 있어요.", balance: "책임을 혼자 떠안지 말고 본인이 원하는 점도 동등하게 말하며 역할을 나눠 보세요.", prompt: "내가 챙긴 만큼 나를 돌보는 데도 시간을 썼나요?" },
      bear: { name: "곰형 · 익숙함에서 찾는 안정감", emoji: "🐻", text: "편안한 루틴과 반복 가능한 방법을 선택하는 답이 많이 나왔어요.", strength: "꾸준함과 안정적인 환경은 일을 오래 이어가고 믿을 수 있는 일상을 만드는 데 도움이 돼요.", balance: "변화가 필요할 땐 익숙한 틀을 모두 버리지 말고 새 요소 하나부터 천천히 더해 보세요.", prompt: "지금의 루틴에 즐거움을 더할 작은 변화는 무엇인가요?" }
    };
    animalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(animalForm);
      const scores = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0]));
      for (let i = 1; i <= 10; i += 1) {
        const answer = data.get(`q${i}`);
        if (!answer) {
          document.querySelector("#animal-error").textContent = "결과를 보려면 열 문항에 모두 답해 주세요.";
          return;
        }
        scores[answer] += 1;
      }
      const highest = Math.max(...Object.values(scores));
      const winners = Object.keys(scores).filter((key) => scores[key] === highest);
      const result = document.querySelector("#animal-result");
      result.innerHTML = `<h3>나의 답에서 가장 많이 나온 분위기</h3><p>10개 질문 중 해당 캐릭터와 연결된 선택을 <strong>${highest}회</strong> 했어요.</p>${winners.map((key) => `<section class="content-panel"><h3>${profiles[key].emoji} ${profiles[key].name}</h3><p>${profiles[key].text}</p><p><strong>잘 발휘되는 점</strong><br>${profiles[key].strength}</p><p><strong>균형을 위한 제안</strong><br>${profiles[key].balance}</p><p><strong>생각해 볼 질문</strong><br>${profiles[key].prompt}</p><small>선택 ${scores[key]} / 10</small></section>`).join("")}<p>점수가 같아 여러 결과가 함께 나올 수 있습니다. 이 결과는 외모나 성격 전체를 평가하지 않습니다.</p><button class="button button-small button-quiet" type="button" data-retry>다시 해보기</button>`;
      result.hidden = false;
      document.querySelector("#animal-error").textContent = "";
      result.querySelector("[data-retry]").addEventListener("click", () => {
        animalForm.reset();
        result.hidden = true;
        document.querySelector("#animal-error").textContent = "";
        animalForm.querySelector("button[type=submit]").focus();
      });
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  const mbtiForm = document.querySelector("#mbti-quiz");
  if (mbtiForm) {
    const axes = [
      { names: ["ei1", "ei2", "ei3", "ei4", "ei5"], a: "E", b: "I", title: "에너지를 얻고 표현하는 방식" },
      { names: ["sn1", "sn2", "sn3", "sn4", "sn5"], a: "S", b: "N", title: "정보를 살피는 방식" },
      { names: ["tf1", "tf2", "tf3", "tf4", "tf5"], a: "T", b: "F", title: "결정을 검토하는 방식" },
      { names: ["jp1", "jp2", "jp3", "jp4", "jp5"], a: "J", b: "P", title: "일정을 다루는 방식" }
    ];
    const meanings = { E: "사람과 바깥 활동", I: "조용한 성찰과 혼자 있는 시간", S: "구체적인 사례와 관찰", N: "패턴과 앞으로의 가능성", T: "원칙과 논리적 일관성", F: "사람과 가치에 미치는 영향", J: "계획과 정리", P: "선택지를 열어 두는 유연성" };
    mbtiForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(mbtiForm);
      const output = [];
      for (const axis of axes) {
        const answers = axis.names.map((name) => data.get(name));
        if (answers.some((answer) => !answer)) {
          document.querySelector("#mbti-error").textContent = "결과를 보려면 스무 문항에 모두 답해 주세요.";
          return;
        }
        const aCount = answers.filter((answer) => answer === axis.a).length;
        const bCount = answers.length - aCount;
        const side = aCount >= 3 ? axis.a : axis.b;
        const leaning = Math.max(aCount, bCount);
        const description = leaning === 3 ? "이번 답변에서는 두 방향이 비슷하게 나타났어요. 상황에 따라 다르게 선택할 수 있습니다." : `이번 답변에서는 ${meanings[side]} 쪽을 더 자주 골랐어요.`;
        output.push(`<article class="info-card"><h3>${axis.title}</h3><p><strong>${side} 쪽 응답 경향</strong></p><p>${axis.a}: ${aCount}개 · ${axis.b}: ${bCount}개</p><p>${description}</p></article>`);
      }
      const summary = axes.map((axis) => {
        const aCount = axis.names.filter((name) => data.get(name) === axis.a).length;
        return aCount >= 3 ? axis.a : axis.b;
      }).join("");
      const result = document.querySelector("#mbti-result");
      result.innerHTML = `<h3>오늘의 응답 조합: ${summary}</h3><p>각 축에서 다섯 문항 중 세 개 이상 고른 방향을 조합해 표시합니다.</p><div class="info-grid">${output.join("")}</div><p>이 네 글자는 모아의 자체 문항에서 나온 비공식 요약입니다. 공식 MBTI 유형 판정이나 고정된 성격 설명으로 사용하지 마세요.</p><button class="button button-small button-quiet" type="button" data-retry>답변 다시 고르기</button>`;
      result.hidden = false;
      document.querySelector("#mbti-error").textContent = "";
      result.querySelector("[data-retry]").addEventListener("click", () => {
        mbtiForm.reset();
        result.hidden = true;
        document.querySelector("#mbti-error").textContent = "";
        mbtiForm.querySelector("button[type=submit]").focus();
      });
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
})();
