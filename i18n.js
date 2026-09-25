(() => {
  const languages = { ko: "한국어", en: "English (US)", ja: "日本語", zh: "简体中文" };
  const translations = {
    en: {
      "문의": "Contact", "모아 소개": "About Moa", "둘러보기": "Explore", "언어 선택": "Select language",
      "서비스 소개": "About this site", "개인정보처리방침": "Privacy Policy", "개인정보 처리방침": "Privacy Policy", "이용 안내": "Terms of Use", "문의하기": "Contact",
      "직접 골라보고,": "Choose for yourself,", "나만의 취향을 발견해요": "and discover what you love",
      "하나씩 알아가는 취향 콘텐츠": "Discover your tastes, one choice at a time",
      "모아는 간단한 놀이와 킬링타임을 제공합니다. 모든 콘텐츠는 무료이며, 결과는 정답이나 진단이 아닌 가벼운 자기 탐색 자료입니다.": "Moa offers fun quizzes and games for your downtime. All content is free. Results are for self-reflection and are not diagnoses.",
      "콘텐츠 둘러보기": "Explore content", "콘텐츠 만드는 방식": "How we create content", "무엇부터 해볼까요?": "What would you like to try?",
      "문항 수와 진행 방법, 콘텐츠별 참고 범위를 확인하고 시작할 수 있어요.": "Check the number of questions and notes for each activity before you begin.",
      "이상형 월드컵: 내가 원하는 주말": "Weekend Matchup: Your Ideal Weekend", "동물상 테스트": "Animal Personality Quiz", "MBTI 콘텐츠": "MBTI Quiz",
      "테토/에겐 테스트": "Teto/Egen Quiz", "애착 유형 테스트": "Attachment Style Quiz", "전생 테스트": "Past Life Quiz",
      "월드컵 시작": "Start matchup", "테스트하기": "Take the quiz", "결과 안내": "Your result", "참고": "About this quiz",
      "나의 선택": "Your choice", "← 이전": "← Back", "다시 해보기": "Try again", "결과 공유 문구 복사": "Copy result to share",
      "공유 문구를 복사했어요.": "Share text copied.", "복사할 수 없어요. 결과 문구를 직접 공유해 주세요.": "Could not copy. Please share the result manually.",
      "찰떡 궁합": "Great match", "서로 알아가면 좋은 유형": "A type to understand", "나의 전생 캐릭터": "My past-life character",
      "나도 테스트 해보고 싶다면?": "Want to try it too?", "공유 문구를 복사했어요": "Share text copied",
      "찾으시는 페이지가 없어요": "We couldn't find that page", "콘텐츠 목록으로 돌아가기": "Back to all content", "어떻게 진행되나요?": "How does it work?",
      "결과는 어떻게 정해지나요?": "How is the result decided?", "결과를 어떻게 해석해야 하나요?": "How should I interpret the result?", "누가 운영하나요?": "Who runs Moa?",
      "무엇을 제공하나요?": "What does Moa offer?", "콘텐츠를 만드는 기준": "Our content principles", "모아 이용 안내": "Moa Terms of Use",
      "제출": "Submit", "이름": "Name", "이메일": "Email", "문의 내용": "Message", "선택": "Choose"
    },
    ja: {
      "문의": "お問い合わせ", "모아 소개": "MoAについて", "둘러보기": "コンテンツを見る", "언어 선택": "言語を選択",
      "서비스 소개": "サイト紹介", "개인정보처리방침": "プライバシーポリシー", "개인정보 처리방침": "プライバシーポリシー", "이용 안내": "利用案内", "문의하기": "お問い合わせ",
      "직접 골라보고,": "自分で選んで、", "나만의 취향을 발견해요": "自分の好みを見つけよう",
      "하나씩 알아가는 취향 콘텐츠": "選びながら見つける、あなたの好み",
      "모아는 간단한 놀이와 킬링타임을 제공합니다. 모든 콘텐츠는 무료이며, 결과는 정답이나 진단이 아닌 가벼운 자기 탐색 자료입니다.": "MoAは気軽に楽しめるクイズやゲームを提供します。すべて無料です。結果は診断ではなく、自分を知るための参考です。",
      "콘텐츠 둘러보기": "コンテンツを見る", "콘텐츠 만드는 방식": "制作について", "무엇부터 해볼까요?": "何から試しますか？",
      "문항 수와 진행 방법, 콘텐츠별 참고 범위를 확인하고 시작할 수 있어요.": "質問数や遊び方を確認してから始められます。",
      "이상형 월드컵: 내가 원하는 주말": "週末の理想マッチ", "동물상 테스트": "動物タイプ診断", "MBTI 콘텐츠": "MBTIクイズ",
      "테토/에겐 테스트": "テト／エゲン診断", "애착 유형 테스트": "愛着スタイル診断", "전생 테스트": "前世診断",
      "월드컵 시작": "マッチを始める", "테스트하기": "診断する", "결과 안내": "結果", "참고": "この診断について",
      "나의 선택": "あなたの選択", "← 이전": "← 戻る", "다시 해보기": "もう一度", "결과 공유 문구 복사": "結果をコピー",
      "공유 문구를 복사했어요.": "共有文をコピーしました。", "복사할 수 없어요. 결과 문구를 직접 공유해 주세요.": "コピーできませんでした。結果を手動で共有してください。",
      "찰떡 궁합": "相性のよいタイプ", "서로 알아가면 좋은 유형": "理解を深めたいタイプ", "나의 전생 캐릭터": "あなたの前世キャラクター",
      "나도 테스트 해보고 싶다면?": "診断を試してみる？", "찾으시는 페이지가 없어요": "ページが見つかりません", "콘텐츠 목록으로 돌아가기": "コンテンツ一覧へ戻る",
      "어떻게 진행되나요?": "遊び方", "결과는 어떻게 정해지나요?": "結果の決まり方", "결과를 어떻게 해석해야 하나요?": "結果の見方", "누가 운영하나요?": "運営者",
      "무엇을 제공하나요?": "どんなコンテンツがありますか？", "콘텐츠를 만드는 기준": "コンテンツ制作の方針", "모아 이용 안내": "MoA利用案内",
      "제출": "送信", "이름": "お名前", "이메일": "メールアドレス", "문의 내용": "お問い合わせ内容", "선택": "選択"
    },
    zh: {
      "문의": "联系", "모아 소개": "关于 MoA", "둘러보기": "浏览内容", "언어 선택": "选择语言",
      "서비스 소개": "网站介绍", "개인정보처리방침": "隐私政策", "개인정보 처리방침": "隐私政策", "이용 안내": "使用条款", "문의하기": "联系",
      "직접 골라보고,": "亲自选择，", "나만의 취향을 발견해요": "发现自己的喜好",
      "하나씩 알아가는 취향 콘텐츠": "通过每次选择，了解自己的喜好",
      "모아는 간단한 놀이와 킬링타임을 제공합니다. 모든 콘텐츠는 무료이며, 결과는 정답이나 진단이 아닌 가벼운 자기 탐색 자료입니다.": "MoA 提供轻松有趣的测试和小游戏。所有内容均免费。结果仅供自我了解，不构成诊断。",
      "콘텐츠 둘러보기": "浏览内容", "콘텐츠 만드는 방식": "内容制作方式", "무엇부터 해볼까요?": "想先试试什么？",
      "문항 수와 진행 방법, 콘텐츠별 참고 범위를 확인하고 시작할 수 있어요.": "开始前可以查看题目数量、玩法和相关说明。",
      "이상형 월드컵: 내가 원하는 주말": "周末理想选择赛", "동물상 테스트": "动物性格测试", "MBTI 콘텐츠": "MBTI 测试",
      "테토/에겐 테스트": "Teto/Egen 测试", "애착 유형 테스트": "依恋类型测试", "전생 테스트": "前世测试",
      "월드컵 시작": "开始选择赛", "테스트하기": "开始测试", "결과 안내": "结果", "참고": "测试说明",
      "나의 선택": "你的选择", "← 이전": "← 返回", "다시 해보기": "再试一次", "결과 공유 문구 복사": "复制结果分享文案",
      "공유 문구를 복사했어요.": "分享文案已复制。", "복사할 수 없어요. 결과 문구를 직접 공유해 주세요.": "无法复制，请手动分享结果。",
      "찰떡 궁합": "合拍类型", "서로 알아가면 좋은 유형": "值得互相了解的类型", "나의 전생 캐릭터": "我的前世角色",
      "나도 테스트 해보고 싶다면?": "也想试试这个测试吗？", "찾으시는 페이지가 없어요": "找不到该页面", "콘텐츠 목록으로 돌아가기": "返回内容列表",
      "어떻게 진행되나요?": "怎么玩？", "결과는 어떻게 정해지나요?": "结果如何得出？", "결과를 어떻게 해석해야 하나요?": "如何理解结果？", "누가 운영하나요?": "谁在运营？",
      "무엇을 제공하나요?": "这里提供什么？", "콘텐츠를 만드는 기준": "内容制作原则", "모아 이용 안내": "MoA 使用条款",
      "제출": "提交", "이름": "姓名", "이메일": "电子邮箱", "문의 내용": "留言内容", "선택": "选择"
    }
  };
  const pageTranslations = {
    en: {
      "홈": "Home", "주요 메뉴": "Main menu", "현재 위치": "You are here", "정책 메뉴": "Policy links", "© 2026 모아": "© 2026 Moa",
      "이상형 월드컵: 내가 원하는 주말": "Weekend Matchup: My Ideal Weekend", "8가지 주말 활동을 한 쌍씩 비교해 오늘 가장 끌리는 선택을 찾아요.": "Compare eight weekend activities and find the one you want most today.",
      "10가지 생활 속 질문으로 나의 동물 캐릭터를 찾아봐요.": "Find your animal character through 10 everyday questions.",
      "총 20개 질문으로 나의 MBTI를 알아봅니다.(공식 MBTI 검사는 아닙니다.)": "Explore your MBTI preferences with 20 questions. This is not an official MBTI assessment.",
      "12가지 선택으로 알아보는 나의 대화와 표현 스타일.": "Explore your communication and self-expression style with 12 choices.",
      "16문항으로 연애와 인간관계에서 마음을 나누는 방식을 살펴봐요.": "Explore how you connect in romantic relationships and friendships through 16 questions.",
      "30문항으로 전생의 캐릭터를 만나보세요.": "Answer 30 questions to meet your past-life character.",
      "무료 성격 테스트와 취향 테스트를 모아에서 만나보세요.": "Explore free personality and preference quizzes on Moa.", "문의 내용을 작성해 주세요.": "Send us a message.",
      "모아에 의견을 보내주세요": "Send feedback to Moa", "문항의 오류, 이해하기 어려운 안내, 접근성 문제, 새 콘텐츠 제안 등을 환영합니다.": "We welcome reports about quiz errors, unclear instructions, accessibility issues, and ideas for new content.",
      "모아는 어떤 곳인가요?": "What is Moa?", "모아는 짧은 취향 놀이와 설명이 있는 자기 성찰 콘텐츠를 한 곳에서 즐길 수 있도록 만드는 작은 웹사이트입니다. 결과를 과장하기보다, 어떻게 만들어졌고 어디까지 참고할 수 있는지 함께 설명합니다.": "Moa is a small website for quick preference games and guided self-reflection. We explain how results are made and what they can—and cannot—tell you.",
      "무엇을 제공하나요?": "What does Moa offer?", "콘텐츠를 만드는 기준": "How we create content", "결과를 어떻게 해석해야 하나요?": "How should I read the results?", "누가 운영하나요?": "Who runs Moa?",
      "결과 안내": "About the results", "참고": "Notes", "개인정보 처리 방식은": "For details on data handling, see", "자세한 내용은": "For details, see",
      "동물 이름은 외모 판정이 아닌 결과 표현으로 쓰고, MBTI 문항은 정식 검사라고 주장하지 않습니다.": "Animal labels describe quiz results, not appearance. The MBTI quiz is not an official assessment.",
      "답변은 현재 페이지에서 계산하고 저장하지 않습니다.": "Answers are processed on this page and are not stored.", "다른 콘텐츠는": "Explore more content at",
      "개인정보처리방침": "Privacy Policy", "모아 둘러보기": "Explore Moa", "홈으로": "Home", "개선 의견": "Feedback", "개인정보": "Privacy",
      "확인": "Continue", "결과 복사": "Copy result", "내 결과 보기": "See my result", "테스트 진행 상황": "Quiz progress",
      "이 항목을 체크하지 않았습니다.": "Please answer this question.", "월드컵 · 내가 원하는 주말": "Weekend Matchup · My Ideal Weekend",
      "전생 테스트: 나는 전생에 뭐였을까?": "Past Life Quiz: Who Were You?", "30가지 선택으로 바위부터 왕실의 야식 감별사까지 20가지 캐릭터를 만나봐요.": "Meet one of 20 characters, from a rock to a royal food taster, through 30 choices.",
      "모아의 콘텐츠 원칙": "Moa's Content Principles", "질문을 만든 기준, 결과를 해석하는 방법, 개인정보를 다루는 원칙을 확인하세요.": "Learn how questions are made, how to read results, and how we handle personal data.",
      "읽어보기": "Read more", "가볍게 즐기는 나만의 발견": "A little discovery, just for you", "모아는 재미있는 콘텐츠를 모아 소개하는 공간입니다. 결과는 가벼운 참고용으로 즐겨주세요.": "Moa brings together playful content. Treat your results as a lighthearted reference.",
      "모아 소개 보기": "About Moa", "모아 콘텐츠는 이렇게 만들어져요": "How we make Moa content", "결과만 보여주고 끝내지 않도록 진행 방식과 한계를 함께 설명합니다.": "We explain how each activity works and its limits, alongside the results.",
      "직접 만든 질문과 선택지": "Original questions and choices", "월드컵 활동과 각 테스트의 질문·결과 설명은 모아가 직접 작성했습니다.": "Moa writes the questions and result descriptions for its matchups and quizzes.",
      "광고와 콘텐츠를 구분합니다": "Ads are clearly distinguished from content", "모아에 의견을 보내주세요": "Send feedback to Moa", "문의하기": "Contact",
      "개인정보 처리 방식은 개인정보처리방침에서 확인할 수 있습니다.": "See our Privacy Policy for details on how data is handled.", "질문과 답변": "Questions and answers", "결과 공유": "Share your result"
    },
    ja: {
      "홈": "ホーム", "주요 메뉴": "メインメニュー", "현재 위치": "現在地", "정책 메뉴": "ポリシー", "© 2026 모아": "© 2026 MoA",
      "8가지 주말 활동을 한 쌍씩 비교해 오늘 가장 끌리는 선택을 찾아요.": "8つの週末の過ごし方を比べて、今日いちばん惹かれるものを見つけましょう。",
      "10가지 생활 속 질문으로 나의 동물 캐릭터를 찾아봐요.": "日常についての10の質問で、あなたの動物キャラクターを見つけます。",
      "총 20개 질문으로 나의 MBTI를 알아봅니다.(공식 MBTI 검사는 아닙니다.)": "20の質問でMBTIの傾向を見てみましょう。公式のMBTI検査ではありません。",
      "12가지 선택으로 알아보는 나의 대화와 표현 스타일.": "12の選択から、会話や気持ちの伝え方を見てみましょう。",
      "16문항으로 연애와 인간관계에서 마음을 나누는 방식을 살펴봐요.": "16の質問で、恋愛や人間関係での心の通わせ方を見てみましょう。",
      "30문항으로 전생의 캐릭터를 만나보세요.": "30の質問で前世のキャラクターに出会いましょう。",
      "문의 내용을 작성해 주세요.": "お問い合わせ内容をご記入ください。", "모아에 의견을 보내주세요": "MoAにご意見をお寄せください",
      "문항의 오류, 이해하기 어려운 안내, 접근성 문제, 새 콘텐츠 제안 등을 환영합니다.": "質問の誤り、分かりにくい案内、アクセシビリティの問題、新しいコンテンツの提案をお待ちしています。",
      "모아는 어떤 곳인가요?": "MoAとは？", "무엇을 제공하나요?": "どんなコンテンツがありますか？", "콘텐츠를 만드는 기준": "コンテンツ制作の方針",
      "결과를 어떻게 해석해야 하나요?": "結果の見方", "누가 운영하나요?": "運営者", "결과 안내": "結果について", "참고": "ご案内",
      "답변은 현재 페이지에서 계산하고 저장하지 않습니다.": "回答はこのページ内で処理され、保存されません。", "홈으로": "ホーム", "개선 의견": "ご意見", "개인정보": "プライバシー",
      "확인": "確認", "결과 복사": "結果をコピー", "내 결과 보기": "結果を見る", "테스트 진행 상황": "診断の進行状況", "이 항목을 체크하지 않았습니다.": "この質問に回答してください。",
      "전생 테스트: 나는 전생에 뭐였을까?": "前世診断：前世のあなたは何だった？", "30가지 선택으로 바위부터 왕실의 야식 감별사까지 20가지 캐릭터를 만나봐요.": "30の選択で、岩から王室の夜食係まで20種類のキャラクターに出会います。",
      "모아의 콘텐츠 원칙": "MoAのコンテンツ方針", "질문을 만든 기준, 결과를 해석하는 방법, 개인정보를 다루는 원칙을 확인하세요.": "質問の作り方、結果の見方、個人情報の取り扱い方をご案内します。",
      "읽어보기": "詳しく見る", "가볍게 즐기는 나만의 발견": "気軽に楽しむ、自分の新発見", "모아는 재미있는 콘텐츠를 모아 소개하는 공간입니다. 결과는 가벼운 참고용으로 즐겨주세요.": "MoAは楽しいコンテンツを集めたサイトです。結果は気軽な参考としてお楽しみください。",
      "모아 소개 보기": "MoAについて", "모아 콘텐츠는 이렇게 만들어져요": "MoAのコンテンツ制作について", "결과만 보여주고 끝내지 않도록 진행 방식과 한계를 함께 설명합니다.": "結果だけでなく、進め方や限界もあわせて説明します。",
      "직접 만든 질문과 선택지": "オリジナルの質問と選択肢", "결과 공유": "結果をシェア", "질문과 답변": "質問と回答"
    },
    zh: {
      "홈": "首页", "주요 메뉴": "主菜单", "현재 위치": "当前位置", "정책 메뉴": "政策链接", "© 2026 모아": "© 2026 MoA",
      "8가지 주말 활동을 한 쌍씩 비교해 오늘 가장 끌리는 선택을 찾아요.": "比较 8 种周末活动，找出今天最想做的一项。",
      "10가지 생활 속 질문으로 나의 동물 캐릭터를 찾아봐요.": "通过 10 个日常问题，找到你的动物角色。",
      "총 20개 질문으로 나의 MBTI를 알아봅니다.(공식 MBTI 검사는 아닙니다.)": "通过 20 个问题了解你的 MBTI 倾向。本测试并非官方 MBTI 测评。",
      "12가지 선택으로 알아보는 나의 대화와 표현 스타일.": "通过 12 个选择了解你的沟通和表达方式。",
      "16문항으로 연애와 인간관계에서 마음을 나누는 방식을 살펴봐요.": "通过 16 个问题了解你在恋爱和人际关系中的相处方式。",
      "30문항으로 전생의 캐릭터를 만나보세요.": "回答 30 个问题，遇见你的前世角色。",
      "문의 내용을 작성해 주세요.": "请填写留言内容。", "모아에 의견을 보내주세요": "欢迎向 MoA 反馈",
      "문항의 오류, 이해하기 어려운 안내, 접근성 문제, 새 콘텐츠 제안 등을 환영합니다.": "欢迎反馈题目错误、说明不清、无障碍问题，或提出新内容建议。",
      "모아는 어떤 곳인가요?": "MoA 是什么？", "무엇을 제공하나요?": "这里提供什么？", "콘텐츠를 만드는 기준": "内容制作原则",
      "결과를 어떻게 해석해야 하나요?": "如何理解结果？", "누가 운영하나요?": "谁在运营？", "결과 안내": "结果说明", "참고": "说明",
      "답변은 현재 페이지에서 계산하고 저장하지 않습니다.": "答案仅在当前页面处理，不会保存。", "홈으로": "返回首页", "개선 의견": "反馈建议", "개인정보": "隐私",
      "확인": "确认", "결과 복사": "复制结果", "내 결과 보기": "查看我的结果", "테스트 진행 상황": "测试进度", "이 항목을 체크하지 않았습니다.": "请回答此问题。",
      "전생 테스트: 나는 전생에 뭐였을까?": "前世测试：你的前世是什么？", "30가지 선택으로 바위부터 왕실의 야식 감별사까지 20가지 캐릭터를 만나봐요.": "通过 30 个选择，遇见从岩石到王室夜宵鉴定师在内的 20 种角色。",
      "모아의 콘텐츠 원칙": "MoA 内容原则", "질문을 만든 기준, 결과를 해석하는 방법, 개인정보를 다루는 원칙을 확인하세요.": "了解题目设计标准、结果解读方式和个人信息处理原则。",
      "읽어보기": "阅读详情", "가볍게 즐기는 나만의 발견": "轻松发现不一样的自己", "모아는 재미있는 콘텐츠를 모아 소개하는 공간입니다. 결과는 가벼운 참고용으로 즐겨주세요.": "MoA 汇集有趣的互动内容，请将结果作为轻松参考。",
      "모아 소개 보기": "关于 MoA", "모아 콘텐츠는 이렇게 만들어져요": "MoA 内容如何制作", "결과만 보여주고 끝내지 않도록 진행 방식과 한계를 함께 설명합니다.": "我们会同时说明玩法和内容局限，而不只展示结果。",
      "직접 만든 질문과 선택지": "原创问题与选项", "결과 공유": "分享结果", "질문과 답변": "问题与回答"
    }
  };
  const quizCopy = {
    en: {
      "동물상 테스트: 나의 동물 캐릭터 찾기": "Animal Quiz: Find Your Animal Character", "MBTI 유형: 나의 MBTI 알아보기": "MBTI Quiz: Explore Your Type", "테토/에겐 테스트: 나의 대화 스타일": "Teto/Egen Quiz: My Communication Style", "애착 유형 테스트: 연애와 관계에서의 내 모습": "Attachment Style Quiz: How I Connect", "전생 테스트: 나는 전생에 뭐였을까?": "Past Life Quiz: Who Were You?",
      "주말에 쉬는 방법은 사람마다 달라요. 두 가지 활동 중 지금 더 끌리는 쪽을 골라, 오늘 내가 원하는 주말과 작은 실천 아이디어를 찾아보세요.": "Everyone enjoys weekends differently. Pick the activity that appeals to you more to find your ideal weekend and a small idea to try.",
      "나의 성향과 어울리는 동물 캐릭터를 찾아보세요.": "Find the animal character that matches your everyday preferences.", "내가 마음을 표현하고 사람들과 어울리는 방식을 살펴봐요.": "Explore how you express your feelings and connect with others.", "가까운 사람에게 마음을 표현하고 관계를 이어가는 방식을 살펴봐요.": "Explore how you express feelings and maintain close relationships.", "상상 속 전생 캐릭터를 만나봐요. 바위였을지, 왕실의 야식 담당이었을지 함께 골라봐요.": "Meet your imaginary past-life character. Were you a rock or the royal late-night snack keeper? Let's find out.",
      "나에게 더 가까운 답을 골라 주세요": "Choose the answer that feels more like you", "최근 모습을 기준으로 선택해 보세요. 모든 질문에 답하면 결과를 볼 수 있습니다.": "Think about how you have felt recently. Answer every question to see your result.",
      "첫 번째 선택": "First choice", "오늘의 선택": "Today's pick", "선택": "Choose", "다시 하기": "Play again", "월드컵 결과": "Matchup result", "이상형 월드컵": "Choice matchup", "7 / 7 완료": "7 / 7 complete",
      "나의 결과 유형": "My result type", "이미지 출처:": "Image source:", "← 이전 선택": "← Previous choice", "이번 테스트 결과는 [": "My quiz result is [", "] !!": "] !!",
      "내가 주말에 하고 싶은 건 [": "My ideal weekend is [", "MOA PLAY · 주말 취향 월드컵": "MOA PLAY · Weekend Matchup", "내가 원하는 주말": "My ideal weekend"
    },
    ja: {
      "동물상 테스트: 나의 동물 캐릭터 찾기": "動物タイプ診断：あなたのキャラクター", "MBTI 유형: 나의 MBTI 알아보기": "MBTIクイズ：自分のタイプを知ろう", "테토/에겐 테스트: 나의 대화 스타일": "テト／エゲン診断：会話スタイル", "애착 유형 테스트: 연애와 관계에서의 내 모습": "愛着スタイル診断：人とのつながり方", "전생 테스트: 나는 전생에 뭐였을까?": "前世診断：前世のあなたは何だった？",
      "주말에 쉬는 방법은 사람마다 달라요. 두 가지 활동 중 지금 더 끌리는 쪽을 골라, 오늘 내가 원하는 주말과 작은 실천 아이디어를 찾아보세요.": "週末の過ごし方は人それぞれです。今より惹かれる活動を選んで、理想の週末と小さな実践アイデアを見つけましょう。",
      "나의 성향과 어울리는 동물 캐릭터를 찾아보세요.": "あなたの傾向に合う動物キャラクターを見つけましょう。", "내가 마음을 표현하고 사람들과 어울리는 방식을 살펴봐요.": "気持ちの伝え方や人との関わり方を見てみましょう。", "가까운 사람에게 마음을 표현하고 관계를 이어가는 방식을 살펴봐요.": "大切な人への気持ちの伝え方や関係の築き方を見てみましょう。", "상상 속 전생 캐릭터를 만나봐요. 바위였을지, 왕실의 야식 담당이었을지 함께 골라봐요.": "想像の前世キャラクターに出会いましょう。岩だったのか、王室の夜食係だったのか、一緒に見つけます。",
      "나에게 더 가까운 답을 골라 주세요": "自分に近い答えを選んでください", "최근 모습을 기준으로 선택해 보세요. 모든 질문에 답하면 결과를 볼 수 있습니다.": "最近の自分を思い浮かべて選びましょう。すべて回答すると結果が表示されます。", "첫 번째 선택": "1つ目の選択", "오늘의 선택": "今日の選択", "선택": "選択", "다시 하기": "もう一度", "월드컵 결과": "マッチ結果", "이상형 월드컵": "二択マッチ", "7 / 7 완료": "7 / 7 完了",
      "나의 결과 유형": "あなたの結果タイプ", "이미지 출처:": "画像出典：", "이번 테스트 결과는 [": "診断結果は［", "] !!": "］です！"
    },
    zh: {
      "동물상 테스트: 나의 동물 캐릭터 찾기": "动物测试：寻找你的动物角色", "MBTI 유형: 나의 MBTI 알아보기": "MBTI 测试：了解你的类型", "테토/에겐 테스트: 나의 대화 스타일": "Teto/Egen 测试：我的沟通风格", "애착 유형 테스트: 연애와 관계에서의 내 모습": "依恋类型测试：我的关系相处方式", "전생 테스트: 나는 전생에 뭐였을까?": "前世测试：你的前世是什么？",
      "주말에 쉬는 방법은 사람마다 달라요. 두 가지 활동 중 지금 더 끌리는 쪽을 골라, 오늘 내가 원하는 주말과 작은 실천 아이디어를 찾아보세요.": "每个人享受周末的方式都不同。从两项活动中选出当下更心动的一项，找到理想周末和一个可以尝试的小点子。",
      "나의 성향과 어울리는 동물 캐릭터를 찾아보세요.": "找到与你的日常倾向相符的动物角色。", "내가 마음을 표현하고 사람들과 어울리는 방식을 살펴봐요.": "了解你表达感受和与人相处的方式。", "가까운 사람에게 마음을 표현하고 관계를 이어가는 방식을 살펴봐요.": "了解你向亲近的人表达感受、维系关系的方式。", "상상 속 전생 캐릭터를 만나봐요. 바위였을지, 왕실의 야식 담당이었을지 함께 골라봐요.": "遇见想象中的前世角色。一起看看你曾是岩石，还是王室夜宵管理员。",
      "나에게 더 가까운 답을 골라 주세요": "请选择更符合你的答案", "최근 모습을 기준으로 선택해 보세요. 모든 질문에 답하면 결과를 볼 수 있습니다.": "请根据近期的状态作答。回答所有问题后即可查看结果。", "첫 번째 선택": "第一个选项", "오늘의 선택": "今天的选择", "선택": "选择", "다시 하기": "再玩一次", "월드컵 결과": "选择赛结果", "이상형 월드컵": "二选一选择赛", "7 / 7 완료": "7 / 7 已完成",
      "나의 결과 유형": "我的结果类型", "이미지 출처:": "图片来源：", "이번 테스트 결과는 [": "本次测试结果是【", "] !!": "】！"
    }
  };
  const worldcupCopy = {
    en: {
      "집에서 좋아하는 영화 보기": "Watch a favorite movie at home", "간식과 함께 익숙한 영화나 새 작품을 천천히 감상해요.": "Take your time enjoying a familiar film or a new release with snacks.",
      "동네의 새로운 맛집 가기": "Try a new local restaurant", "한 번도 먹어 보지 않은 메뉴를 골라 동네를 탐험해요.": "Explore your neighborhood by trying a dish you have never had.",
      "공원이나 숲길 산책하기": "Take a walk in a park or forest", "가까운 초록 길을 걸으며 머리를 환기해요.": "Clear your head with a walk along a nearby green path.",
      "취미 하나에 깊이 몰입하기": "Lose yourself in a favorite hobby", "책, 그림, 만들기처럼 좋아하는 일에 시간을 써요.": "Spend time doing something you love, like reading, drawing, or crafting.",
      "친구와 카페에서 이야기하기": "Catch up with a friend at a cafe", "근황을 나누고 서로의 이야기를 들어요.": "Share what's new and listen to each other's stories.",
      "가까운 곳으로 드라이브하기": "Take a short drive nearby", "목적지를 정하거나 풍경을 따라 잠깐 다녀와요.": "Choose a destination or take a little drive wherever the scenery leads.",
      "집에서 천천히 요리하기": "Cook something at home", "간단한 재료로 먹고 싶은 음식을 직접 만들어요.": "Make something you want to eat with a few simple ingredients.",
      "가벼운 운동이나 스트레칭하기": "Do a little exercise or stretch", "산책, 요가, 홈트 중 기분에 맞는 움직임을 해요.": "Pick a movement that suits your mood, like a walk, yoga, or a home workout.",
      "이번 주말에는 이 시간을 작게라도 일정에 넣어 보세요. 가까운 장소와 부담 없는 시간부터 정하면 바로 시작할 수 있어요.": "Make a little room for this in your weekend. Start with a nearby place and an easy time slot.", "내가 원하는 주말": "My ideal weekend", "← 이전 선택": "← Previous choice", "MOA PLAY · 주말 취향 월드컵": "MOA PLAY · Weekend Matchup",
      "집에서 좋아하는 영화 보기": "Watch a favorite movie at home", "동네의 새로운 맛집 가기": "Try a new local restaurant", "공원이나 숲길 산책하기": "Take a walk in a park or forest", "취미 하나에 깊이 몰입하기": "Lose yourself in a favorite hobby", "친구와 카페에서 이야기하기": "Catch up with a friend at a cafe", "가까운 곳으로 드라이브하기": "Take a short drive nearby", "집에서 천천히 요리하기": "Cook something at home", "가벼운 운동이나 스트레칭하기": "Do a little exercise or stretch", "나의 MBTI는 [": "My MBTI is ["
    },
    ja: {
      "집에서 좋아하는 영화 보기": "家で好きな映画を見る", "간식과 함께 익숙한 영화나 새 작품을 천천히 감상해요.": "お菓子を用意して、見慣れた映画や新作をゆっくり楽しみます。",
      "동네의 새로운 맛집 가기": "近所の新しいお店に行く", "한 번도 먹어 보지 않은 메뉴를 골라 동네를 탐험해요.": "食べたことのないメニューを選んで、近所を探検します。",
      "공원이나 숲길 산책하기": "公園や森を散歩する", "가까운 초록 길을 걸으며 머리를 환기해요.": "近くの緑道を歩いて、気分をリフレッシュします。",
      "취미 하나에 깊이 몰입하기": "好きな趣味に没頭する", "책, 그림, 만들기처럼 좋아하는 일에 시간을 써요.": "読書や絵、ものづくりなど、好きなことに時間を使います。",
      "친구와 카페에서 이야기하기": "友達とカフェでおしゃべりする", "근황을 나누고 서로의 이야기를 들어요.": "近況を話し、お互いの話に耳を傾けます。",
      "가까운 곳으로 드라이브하기": "近場へドライブする", "목적지를 정하거나 풍경을 따라 잠깐 다녀와요.": "目的地を決めたり、景色に誘われて少し出かけたりします。",
      "집에서 천천히 요리하기": "家でゆっくり料理する", "간단한 재료로 먹고 싶은 음식을 직접 만들어요.": "身近な材料で食べたいものを自分で作ります。",
      "가벼운 운동이나 스트레칭하기": "軽い運動やストレッチをする", "산책, 요가, 홈트 중 기분에 맞는 움직임을 해요.": "散歩やヨガ、自宅トレーニングなど気分に合う運動をします。",
      "이번 주말에는 이 시간을 작게라도 일정에 넣어 보세요. 가까운 장소와 부담 없는 시간부터 정하면 바로 시작할 수 있어요.": "今週末の予定に少しだけ取り入れてみましょう。近場で無理のない時間から始められます。", "내가 원하는 주말": "理想の週末", "← 이전 선택": "← 前の選択", "MOA PLAY · 주말 취향 월드컵": "MOA PLAY · 週末マッチ",
      "집에서 좋아하는 영화 보기": "家で好きな映画を見る", "동네의 새로운 맛집 가기": "近所の新しいお店に行く", "공원이나 숲길 산책하기": "公園や森を散歩する", "취미 하나에 깊이 몰입하기": "好きな趣味に没頭する", "친구와 카페에서 이야기하기": "友達とカフェでおしゃべりする", "가까운 곳으로 드라이브하기": "近場へドライブする", "집에서 천천히 요리하기": "家でゆっくり料理する", "가벼운 운동이나 스트레칭하기": "軽い運動やストレッチをする", "나의 MBTI는 [": "私のMBTIは［"
    },
    zh: {
      "집에서 좋아하는 영화 보기": "在家看喜欢的电影", "간식과 함께 익숙한 영화나 새 작품을 천천히 감상해요.": "准备些零食，慢慢欣赏熟悉的电影或新作品。",
      "동네의 새로운 맛집 가기": "去附近尝试一家新餐馆", "한 번도 먹어 보지 않은 메뉴를 골라 동네를 탐험해요.": "点一道从未尝过的菜，探索附近街区。",
      "공원이나 숲길 산책하기": "在公园或林间散步", "가까운 초록 길을 걸으며 머리를 환기해요.": "沿着附近的绿荫小路走走，让思绪放松。",
      "취미 하나에 깊이 몰입하기": "沉浸在喜欢的爱好中", "책, 그림, 만들기처럼 좋아하는 일에 시간을 써요.": "花时间做喜欢的事，比如阅读、绘画或手工。",
      "친구와 카페에서 이야기하기": "和朋友在咖啡馆聊天", "근황을 나누고 서로의 이야기를 들어요.": "聊聊近况，也听听彼此的故事。",
      "가까운 곳으로 드라이브하기": "去附近兜风", "목적지를 정하거나 풍경을 따라 잠깐 다녀와요.": "选个目的地，或跟着沿途风景短途出行。",
      "집에서 천천히 요리하기": "在家慢慢做饭", "간단한 재료로 먹고 싶은 음식을 직접 만들어요.": "用简单食材亲手做一道想吃的菜。",
      "가벼운 운동이나 스트레칭하기": "做些轻运动或拉伸", "산책, 요가, 홈트 중 기분에 맞는 움직임을 해요.": "根据心情散步、做瑜伽或居家锻炼。",
      "이번 주말에는 이 시간을 작게라도 일정에 넣어 보세요. 가까운 장소와 부담 없는 시간부터 정하면 바로 시작할 수 있어요.": "这个周末不妨为它留一点时间。从附近的地点和轻松的安排开始。", "내가 원하는 주말": "我理想的周末", "← 이전 선택": "← 上一个选择", "MOA PLAY · 주말 취향 월드컵": "MOA PLAY · 周末选择赛",
      "집에서 좋아하는 영화 보기": "在家看喜欢的电影", "동네의 새로운 맛집 가기": "去附近尝试一家新餐馆", "공원이나 숲길 산책하기": "在公园或林间散步", "취미 하나에 깊이 몰입하기": "沉浸在喜欢的爱好中", "친구와 카페에서 이야기하기": "和朋友在咖啡馆聊天", "가까운 곳으로 드라이브하기": "去附近兜风", "집에서 천천히 요리하기": "在家慢慢做饭", "가벼운 운동이나 스트레칭하기": "做些轻运动或拉伸", "나의 MBTI는 [": "我的 MBTI 是【"
    }
  };
  const worldcupStatic = {
    en: {
      "주말에 쉬는 방법은 사람마다 달라요.": "Everyone enjoys weekends differently.", "정답은 없어요. 평소의 내가 아니라 이번 주말에 하고 싶은 쪽을 골라도 됩니다.": "There is no right answer. Choose what you want to do this weekend, even if it is not your usual choice.",
      "어떻게 진행되나요?": "How to play", "두 가지 주말 활동 중 더 하고 싶은 것을 고르세요. 일곱 번 선택하면 결과를 확인할 수 있어요.": "Choose the weekend activity you would rather do. Make seven choices to see your result.",
      "결과는 이번에 고른 주말 취향을 보여 주는 재미용 콘텐츠입니다. 가볍게 즐겨 주세요.": "This playful result reflects the weekend activity you chose. Enjoy it for fun.",
      "선택은 현재 페이지에서 결과를 계산하는 데만 사용하고 저장하지 않습니다.": "Your choices are used only to calculate the result on this page and are not stored.", "콘텐츠 기준은": "For our content principles, see", "개인정보 처리 방식은": "For details about data handling, see",
      "첫 번째 선택": "First choice", "1라운드 · 8강": "Round 1 · Quarterfinals", "2라운드 · 4강": "Round 2 · Semifinals", "3라운드 · 결승": "Round 3 · Final", "선택": "Choose"
    },
    ja: {
      "주말에 쉬는 방법은 사람마다 달라요.": "週末の過ごし方は人それぞれです。", "정답은 없어요. 평소의 내가 아니라 이번 주말에 하고 싶은 쪽을 골라도 됩니다.": "正解はありません。普段の自分ではなく、今週末にしたいことを選んでください。",
      "어떻게 진행되나요?": "遊び方", "두 가지 주말 활동 중 더 하고 싶은 것을 고르세요. 일곱 번 선택하면 결과를 확인할 수 있어요.": "2つの週末の過ごし方から、よりしたい方を選びます。7回選ぶと結果が表示されます。",
      "결과는 이번에 고른 주말 취향을 보여 주는 재미용 콘텐츠입니다. 가볍게 즐겨 주세요.": "結果は今回選んだ週末の好みを表すコンテンツです。気軽にお楽しみください。",
      "선택은 현재 페이지에서 결과를 계산하는 데만 사용하고 저장하지 않습니다.": "選択内容はこのページでの結果計算にのみ使い、保存しません。", "콘텐츠 기준은": "制作方針は", "개인정보 처리 방식은": "個人情報の取り扱いは",
      "첫 번째 선택": "1つ目の選択", "1라운드 · 8강": "第1ラウンド · 準々決勝", "2라운드 · 4강": "第2ラウンド · 準決勝", "3라운드 · 결승": "第3ラウンド · 決勝", "선택": "選択"
    },
    zh: {
      "주말에 쉬는 방법은 사람마다 달라요.": "每个人享受周末的方式都不同。", "정답은 없어요. 평소의 내가 아니라 이번 주말에 하고 싶은 쪽을 골라도 됩니다.": "没有标准答案。选择这个周末想做的事即可，不必考虑平时的自己。",
      "어떻게 진행되나요?": "玩法", "두 가지 주말 활동 중 더 하고 싶은 것을 고르세요. 일곱 번 선택하면 결과를 확인할 수 있어요.": "在两种周末活动中选择更想做的一项。完成七次选择即可查看结果。",
      "결과는 이번에 고른 주말 취향을 보여 주는 재미용 콘텐츠입니다. 가볍게 즐겨 주세요.": "结果反映你这次选择的周末偏好，仅供轻松娱乐。",
      "선택은 현재 페이지에서 결과를 계산하는 데만 사용하고 저장하지 않습니다.": "你的选择仅用于在当前页面计算结果，不会保存。", "콘텐츠 기준은": "内容原则请见", "개인정보 처리 방식은": "个人信息处理方式请见",
      "첫 번째 선택": "第一个选择", "1라운드 · 8강": "第 1 轮 · 四分之一决赛", "2라운드 · 4강": "第 2 轮 · 半决赛", "3라운드 · 결승": "第 3 轮 · 决赛", "선택": "选择"
    }
  };
  Object.assign(worldcupCopy.en, worldcupStatic.en);
  Object.assign(worldcupCopy.ja, worldcupStatic.ja);
  Object.assign(worldcupCopy.zh, worldcupStatic.zh);
  Object.assign(quizCopy.en, worldcupCopy.en);
  Object.assign(quizCopy.ja, worldcupCopy.ja);
  Object.assign(quizCopy.zh, worldcupCopy.zh);
  Object.assign(translations.en, pageTranslations.en, quizCopy.en);
  Object.assign(translations.ja, pageTranslations.ja, quizCopy.ja);
  Object.assign(translations.zh, pageTranslations.zh, quizCopy.zh);
  const key = "moa-language";
  const saved = localStorage.getItem(key);
  const valid = Object.hasOwn(languages, saved) ? saved : "ko";
  const map = Object.assign({}, window.MOA_TRANSLATIONS?.[valid] || {}, translations[valid] || {});
  const translateText = (text) => {
    const source = text.trim();
    const normalized = source.replace(/\s+/g, " ");
    return map[normalized] ? text.replace(source, map[normalized]) : text;
  };
  const translateTree = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { node.nodeValue = translateText(node.nodeValue); });
    root.querySelectorAll?.("input[placeholder],textarea[placeholder],button[aria-label],a[aria-label],select[aria-label], [title]").forEach((el) => {
      for (const attr of ["placeholder", "aria-label", "title"]) if (el.hasAttribute(attr)) el.setAttribute(attr, translateText(el.getAttribute(attr)));
    });
  };
  const apply = () => {
    document.documentElement.lang = ({ en: "en-US", ja: "ja", zh: "zh-CN", ko: "ko" })[valid];
    translateTree(document.body);
    document.querySelectorAll('meta[name="description"]').forEach((meta) => {
      const descriptionMap = {
        en: { "무료 MBTI 테스트와 주말 취향 이상형 월드컵을 모아에서 즐겨보세요. 동물상, 테토·에겐, 애착 유형, 전생 테스트까지 다양한 선택형 콘텐츠를 회원가입 없이 바로 만나볼 수 있습니다.": "Try free MBTI quizzes, a weekend matchup, animal, Teto/Egen, attachment style, and past-life quizzes on Moa. No sign-up needed." },
        ja: { "무료 MBTI 테스트와 주말 취향 이상형 월드컵을 모아에서 즐겨보세요. 동물상, 테토·에겐, 애착 유형, 전생 테스트까지 다양한 선택형 콘텐츠를 회원가입 없이 바로 만나볼 수 있습니다.": "無料のMBTIクイズや週末マッチ、動物・テト／エゲン・愛着スタイル・前世診断をMoAで。登録不要です。" },
        zh: { "무료 MBTI 테스트와 주말 취향 이상형 월드컵을 모아에서 즐겨보세요. 동물상, 테토·에겐, 애착 유형, 전생 테스트까지 다양한 선택형 콘텐츠를 회원가입 없이 바로 만나볼 수 있습니다.": "在 MoA 免费体验 MBTI、周末选择赛、动物性格、Teto/Egen、依恋类型和前世测试，无需注册。" }
      };
      meta.content = map[meta.content] || descriptionMap[valid]?.[meta.content] || meta.content;
    });
    const pageTitles = {
      en: { "index.html": "Free MBTI Quizzes & Weekend Matchup | Moa", "worldcup.html": "Weekend Matchup: Your Ideal Weekend | Moa", "animal-test.html": "Animal Personality Quiz | Moa", "mbti.html": "MBTI Quiz | Moa", "teto-egen-test.html": "Teto/Egen Quiz | Moa", "attachment-test.html": "Attachment Style Quiz | Moa", "past-life-test.html": "Past Life Quiz | Moa", "about.html": "About Moa", "contact.html": "Contact Moa", "privacy.html": "Privacy Policy | Moa", "terms.html": "Terms of Use | Moa", "404.html": "Page Not Found | Moa" },
      ja: { "index.html": "無料MBTI診断・週末マッチ | MoA", "worldcup.html": "週末の理想マッチ | MoA", "animal-test.html": "動物タイプ診断 | MoA", "mbti.html": "MBTIクイズ | MoA", "teto-egen-test.html": "テト／エゲン診断 | MoA", "attachment-test.html": "愛着スタイル診断 | MoA", "past-life-test.html": "前世診断 | MoA", "about.html": "MoAについて", "contact.html": "お問い合わせ | MoA", "privacy.html": "プライバシーポリシー | MoA", "terms.html": "利用案内 | MoA", "404.html": "ページが見つかりません | MoA" },
      zh: { "index.html": "免费 MBTI 测试与周末选择赛 | MoA", "worldcup.html": "周末理想选择赛 | MoA", "animal-test.html": "动物性格测试 | MoA", "mbti.html": "MBTI 测试 | MoA", "teto-egen-test.html": "Teto/Egen 测试 | MoA", "attachment-test.html": "依恋类型测试 | MoA", "past-life-test.html": "前世测试 | MoA", "about.html": "关于 MoA", "contact.html": "联系 MoA", "privacy.html": "隐私政策 | MoA", "terms.html": "使用条款 | MoA", "404.html": "页面未找到 | MoA" }
    };
    const path = location.pathname.split("/").pop() || "index.html";
    if (pageTitles[valid]?.[path]) document.title = pageTitles[valid][path];
    else if (map[document.title]) document.title = map[document.title];
    const select = document.querySelector("[data-language-select]");
    if (select) {
      select.value = valid;
      select.setAttribute("aria-label", ({ en: "Select language", ja: "言語を選択", zh: "选择语言" })[valid] || "언어 선택");
    }
  };
  const units = { en: { "문항": "questions" }, ja: { "문항": "問" }, zh: { "문항": "题" } };
  window.MOA_I18N = { language: valid, t: (text) => map[text] || units[valid]?.[text] || text, translateTree };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply, { once: true }); else apply();
  new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) node.nodeValue = translateText(node.nodeValue);
    else if (node.nodeType === Node.ELEMENT_NODE) translateTree(node);
  }))).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("change", (event) => {
    if (!event.target.matches("[data-language-select]")) return;
    localStorage.setItem(key, event.target.value);
    location.reload();
  });
})();
