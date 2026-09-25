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
      result.innerHTML = `<span class="eyebrow-text">당신이 고른 주말</span><h3>${winner.name}</h3><p>${winner.detail}</p><p>이번 주말에는 이 시간을 작게라도 일정에 넣어 보세요. 가까운 장소와 부담 없는 시간부터 정하면 바로 시작할 수 있어요.</p><div class="result-actions"><button class="button button-small" type="button" data-restart>다시 하기</button><button class="button button-small button-quiet" type="button" data-share>결과 복사</button></div>`;
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
      dog: { name: "강아지형", emoji: "🐕", text: "정이 많고 함께하는 시간을 소중히 여기는 다정한 분위기예요.", love: "좋아하는 사람에게 자주 마음을 표현하고 함께하는 추억을 쌓아요.", work: "팀의 분위기를 부드럽게 만들고 서로 협력하도록 돕는 편이에요." },
      cat: { name: "고양이형", emoji: "🐈", text: "자기만의 리듬과 취향이 분명한 차분한 분위기예요.", love: "서두르기보다 편안함과 신뢰가 쌓일 때 마음을 열어요.", work: "혼자 집중할 시간이 주어지면 꼼꼼하게 결과물을 완성해요." },
      fox: { name: "여우형", emoji: "🦊", text: "호기심이 많고 상황을 재치 있게 살피는 영리한 분위기예요.", love: "센스 있는 대화와 새로운 경험을 함께하는 관계를 좋아해요.", work: "복잡한 일에서 다른 방법을 찾아내고 아이디어를 보태요." },
      otter: { name: "수달형", emoji: "🦦", text: "새로운 재미를 발견하고 주변에 활기를 전하는 분위기예요.", love: "함께 웃고 다양한 데이트를 즐기는 관계에서 빛나요.", work: "변화가 있는 환경에서 아이디어를 내고 빠르게 시도해요." },
      deer: { name: "사슴형", emoji: "🦌", text: "상대의 마음을 잘 살피고 섬세하게 배려하는 분위기예요.", love: "작은 마음 씀씀이와 안정적인 대화에서 애정을 느껴요.", work: "놓치기 쉬운 부분을 챙기고 주변을 세심하게 도와요." },
      bear: { name: "곰형", emoji: "🐻", text: "느긋하고 든든하며 편안함을 나누는 분위기예요.", love: "화려한 이벤트보다 함께하는 편안한 일상을 좋아해요.", work: "꾸준하고 안정적으로 맡은 일을 마무리해 신뢰를 얻어요." }
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
      const winner = winners[Math.floor(Math.random() * winners.length)];
      const result = document.querySelector("#animal-result");
      result.innerHTML = `<span class="eyebrow-text">당신과 닮은 동물</span><h3>${profiles[winner].emoji} ${profiles[winner].name}</h3><p>${profiles[winner].text}</p><div class="info-grid"><article class="info-card"><h3>연애할 때</h3><p>${profiles[winner].love}</p></article><article class="info-card"><h3>함께 일할 때</h3><p>${profiles[winner].work}</p></article></div><p>재미로 보는 캐릭터 결과예요. 사람마다 다양한 면이 있다는 점도 기억해 주세요.</p><button class="button button-small button-quiet" type="button" data-retry>다시 해보기</button>`;
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
    const typeProfiles = {
      ISTJ: ["차분하고 책임감 있게 맡은 일을 해내는 현실적인 사람이에요.", "말보다 꾸준한 행동으로 신뢰를 쌓고 약속을 소중히 여겨요.", "순서와 기준을 세워 꼼꼼하게 마무리하는 데 강점이 있어요."], ISFJ: ["주변을 세심하게 살피고 맡은 일을 성실하게 해내는 다정한 사람이에요.", "상대의 작은 변화를 알아차리고 안정감 있는 관계를 만들어요.", "꼼꼼하게 챙기고 팀이 편안하게 일하도록 도와요."], INFJ: ["사람과 상황의 의미를 깊이 생각하고 따뜻한 방향을 찾는 사람이에요.", "진심이 통하는 깊은 대화와 서로의 성장을 중요하게 여겨요.", "큰 흐름을 읽고 사람들에게 의미 있는 방향을 제안해요."], INTJ: ["독립적으로 생각하고 목표를 향해 계획을 세우는 전략적인 사람이에요.", "서로의 생각과 목표를 존중하는 진솔한 관계를 선호해요.", "복잡한 문제를 구조화하고 장기적인 계획을 세우는 편이에요."],
      ISTP: ["필요한 순간 침착하게 상황을 살피고 직접 해결하는 실용적인 사람이에요.", "각자의 시간을 존중하면서 편안하고 솔직하게 만나는 걸 좋아해요.", "문제가 생기면 원인을 파악해 현실적인 해결책을 찾아요."], ISFP: ["자기만의 감각과 가치에 충실하고 부드럽게 주변을 대하는 사람이에요.", "함께하는 순간의 분위기와 자연스러운 다정함을 소중히 여겨요.", "유연하게 상황을 살피며 감각과 손길이 필요한 일을 잘해요."], INFP: ["마음속 가치와 상상력을 소중히 여기며 진심을 찾는 사람이에요.", "있는 그대로의 모습을 이해하고 존중해 주는 관계를 바라요.", "사람과 아이디어에 의미를 더하는 일에서 열정을 발휘해요."], INTP: ["궁금한 것을 깊이 파고들고 자기만의 관점으로 생각하는 탐구자예요.", "서로의 관심사와 생각을 자유롭게 나눌 수 있는 관계를 좋아해요.", "복잡한 개념을 분석하고 새로운 가능성을 탐색하는 데 강해요."],
      ESTP: ["상황에 빠르게 반응하고 직접 부딪치며 기회를 찾는 활기찬 사람이에요.", "함께 웃고 즉흥적인 경험을 나누는 즐거운 관계를 좋아해요.", "변화가 빠른 상황에서 행동으로 해결책을 찾아요."], ESFP: ["사람들과 즐거움을 나누고 현재의 순간을 밝게 만드는 사람이에요.", "애정을 솔직하게 표현하고 함께하는 시간을 풍성하게 만들어요.", "사람들과 협력하며 생생한 분위기와 경험을 만드는 데 능해요."], ENFP: ["새로운 가능성을 발견하고 사람들에게 에너지를 전하는 호기심 많은 사람이에요.", "서로의 꿈을 응원하며 즐거운 대화를 나누는 관계를 원해요.", "아이디어를 연결하고 주변의 참여를 이끌어내는 편이에요."], ENTP: ["익숙한 생각에 질문을 던지고 새로운 길을 떠올리는 재치 있는 사람이에요.", "유쾌한 대화와 서로의 생각을 주고받는 관계를 즐겨요.", "다양한 관점에서 문제를 바라보고 창의적인 대안을 제안해요."],
      ESTJ: ["분명한 목표를 세우고 책임 있게 일을 이끄는 현실적인 사람이에요.", "믿음과 약속을 중요하게 여기고 마음을 행동으로 표현해요.", "역할과 일정을 정리해 일이 앞으로 나아가도록 이끌어요."], ESFJ: ["사람들과 조화를 이루고 필요한 도움을 먼저 건네는 따뜻한 사람이에요.", "서로 마음을 표현하고 일상의 관심을 나누는 관계를 소중히 여겨요.", "팀의 필요를 살피고 사람들을 연결해 함께 일하도록 도와요."], ENFJ: ["사람의 가능성을 알아보고 함께 성장할 방향을 찾는 격려자예요.", "진심 어린 대화와 서로를 응원하는 관계에서 행복을 느껴요.", "의견을 모으고 구성원들이 힘을 낼 수 있도록 이끌어요."], ENTJ: ["목표를 향해 결단력 있게 움직이고 더 나은 방법을 찾는 리더예요.", "서로를 존중하며 각자의 목표를 함께 키워가는 관계를 좋아해요.", "우선순위를 정하고 사람과 자원을 모아 큰 일을 추진해요."]
    };
    mbtiForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(mbtiForm);
      for (const axis of axes) {
        const answers = axis.names.map((name) => data.get(name));
        if (answers.some((answer) => !answer)) {
          document.querySelector("#mbti-error").textContent = "결과를 보려면 스무 문항에 모두 답해 주세요.";
          return;
        }
      }
      const summary = axes.map((axis) => {
        const aCount = axis.names.filter((name) => data.get(name) === axis.a).length;
        return aCount >= 3 ? axis.a : axis.b;
      }).join("");
      const result = document.querySelector("#mbti-result");
      const profile = typeProfiles[summary];
      result.innerHTML = `<span class="eyebrow-text">당신의 결과</span><h3>당신의 MBTI는 ${summary}입니다</h3><p>${profile[0]}</p><div class="info-grid"><article class="info-card"><h3>연애할 때</h3><p>${profile[1]}</p></article><article class="info-card"><h3>일할 때</h3><p>${profile[2]}</p></article></div><p>가볍게 즐기는 모아의 자체 성향 놀이 결과예요. 공식 MBTI 검사나 모든 사람에게 똑같이 적용되는 설명은 아닙니다.</p><button class="button button-small button-quiet" type="button" data-retry>다시 해보기</button>`;
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
