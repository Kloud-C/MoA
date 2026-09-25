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
      dog: { name: "강아지형 · 따뜻한 연결", emoji: "🐕", text: "함께하는 사람과 호흡을 맞추고 먼저 다가가는 선택이 많았어요. 친근함이 장점이지만 혼자 쉬고 싶은 순간도 존중해 주세요." },
      cat: { name: "고양이형 · 자기만의 리듬", emoji: "🐈", text: "혼자 생각하거나 나만의 방식으로 즐기는 선택이 많았어요. 독립적인 시간이 충전이 될 수 있고, 필요할 땐 먼저 마음을 표현해도 좋아요." },
      otter: { name: "수달형 · 호기심과 전환", emoji: "🦦", text: "새로운 활동과 즉흥적인 대안을 고르는 편이었어요. 호기심은 일상을 넓혀 주고, 큰 결정을 앞두면 준비 시간도 함께 챙길 수 있어요." },
      deer: { name: "사슴형 · 차분한 배려", emoji: "🦌", text: "익숙한 리듬과 세심한 확인을 선택하는 답이 많았어요. 차분함은 주변을 편안하게 하지만, 새로운 시도를 너무 오래 미루지 않아도 괜찮아요." }
    };
    animalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(animalForm);
      const scores = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0]));
      for (let i = 1; i <= 6; i += 1) {
        const answer = data.get(`q${i}`);
        if (!answer) {
          document.querySelector("#animal-error").textContent = "결과를 보려면 여섯 문항에 모두 답해 주세요.";
          return;
        }
        scores[answer] += 1;
      }
      const highest = Math.max(...Object.values(scores));
      const winners = Object.keys(scores).filter((key) => scores[key] === highest);
      const result = document.querySelector("#animal-result");
      result.innerHTML = `<h3>나의 답에서 가장 많이 나온 분위기</h3>${winners.map((key) => `<p><strong>${profiles[key].emoji} ${profiles[key].name}</strong><br>${profiles[key].text}<br><small>선택 ${scores[key]}회</small></p>`).join("")}<p>이 결과는 외모나 성격 전체를 평가하지 않습니다. 답변에서 같은 캐릭터와 연결한 선택이 많았다는 뜻입니다.</p><button class="button button-small button-quiet" type="button" data-retry>다시 해보기</button>`;
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
      { names: ["ei1", "ei2"], a: "E", b: "I", title: "에너지를 얻고 표현하는 방식" },
      { names: ["sn1", "sn2"], a: "S", b: "N", title: "정보를 살피는 방식" },
      { names: ["tf1", "tf2"], a: "T", b: "F", title: "결정을 검토하는 방식" },
      { names: ["jp1", "jp2"], a: "J", b: "P", title: "일정을 다루는 방식" }
    ];
    const meanings = { E: "사람과 바깥 활동", I: "조용한 성찰과 혼자 있는 시간", S: "구체적인 사례와 관찰", N: "패턴과 앞으로의 가능성", T: "원칙과 논리적 일관성", F: "사람과 가치에 미치는 영향", J: "계획과 정리", P: "선택지를 열어 두는 유연성" };
    mbtiForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(mbtiForm);
      const output = [];
      for (const axis of axes) {
        const answers = axis.names.map((name) => data.get(name));
        if (answers.some((answer) => !answer)) {
          document.querySelector("#mbti-error").textContent = "결과를 보려면 여덟 문항에 모두 답해 주세요.";
          return;
        }
        const aCount = answers.filter((answer) => answer === axis.a).length;
        const side = aCount === 1 ? "양쪽을 비슷하게 선택" : (aCount === 2 ? axis.a : axis.b);
        const description = side === "양쪽을 비슷하게 선택" ? "두 질문에서 선호가 같게 나타났어요. 상황에 따라 다르게 선택할 수 있습니다." : `이번 답변에서는 ${meanings[side]} 쪽을 두 번 선택했어요.`;
        output.push(`<article class="info-card"><h3>${axis.title}</h3><p><strong>${side}</strong></p><p>${description}</p></article>`);
      }
      const result = document.querySelector("#mbti-result");
      result.innerHTML = `<h3>오늘의 네 가지 선호</h3><div class="info-grid">${output.join("")}</div><p>여덟 답변으로 공식 MBTI 유형을 판정할 수는 없습니다. 이 요약은 오늘의 자기 성찰에만 활용해 주세요.</p><button class="button button-small button-quiet" type="button" data-retry>답변 다시 고르기</button>`;
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
