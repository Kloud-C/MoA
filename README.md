# 모아

취향 콘텐츠를 모아 제공하는 한국어 정적 웹사이트입니다. 현재 주말 취향 월드컵, 동물상 성향 놀이, MBTI 선호 돌아보기, 운영·개인정보·이용 안내를 제공합니다.

## 로컬에서 보기

`index.html`을 브라우저에서 열면 됩니다. 현재 빌드 도구나 서버 코드는 필요하지 않습니다.

## GitHub 저장소

이 프로젝트는 `https://github.com/Kloud-C/MoA` 저장소의 `main` 브랜치에 연결되어 있습니다. 변경 사항을 기록하고 GitHub에 올리려면 프로젝트 폴더에서 다음 명령을 실행하세요.

```sh
git add .
git commit -m "Describe your change"
git push
```

## Cloudflare Pages 자동 배포

Cloudflare Pages의 Git 연동을 한 번 설정하면 `main`에 변경 사항을 푸시할 때 운영 사이트를 자동으로 배포할 수 있습니다. Cloudflare 대시보드에서 **Workers & Pages → Create application → Pages → Connect to Git**을 선택하고 GitHub를 연결한 뒤 `Kloud-C/MoA` 저장소를 고르세요. GitHub 인증과 저장소 접근 권한 허용은 계정 소유자가 직접 진행해야 합니다.

이 사이트는 빌드 도구가 없는 정적 HTML/CSS/JavaScript 사이트이며 Cloudflare Pages가 저장소 루트에서 제공합니다. 현재 연결된 프로젝트는 `main` 푸시에 따라 자동 배포합니다.

저장하면 Cloudflare가 첫 배포를 진행합니다. 이후 `main`에 푸시할 때마다 운영 사이트를 자동으로 갱신하고, 다른 브랜치와 Pull Request에는 미리보기 배포를 만들 수 있습니다.

## 페이지 구성

- `index.html`: 홈과 콘텐츠 원칙
- `worldcup.html`: 8개 주말 활동을 비교하는 7라운드 월드컵
- `animal-test.html`: 사진을 사용하지 않는 6문항 성향 놀이
- `mbti.html`: 네 가지 선호 축 소개와 비공식 자기 성찰 문항
- `about.html`, `privacy.html`, `terms.html`, `contact.html`: 운영·정책·문의 안내
- `404.html`: 잘못된 주소 안내
- `styles.css`, `app.js`: 공통 화면 스타일과 브라우저 내 콘텐츠 동작

새 콘텐츠는 이 구조를 참고해 전용 HTML 페이지와 기능을 만들고, 홈 카드·푸터·`sitemap.xml`에 연결해 추가합니다.

## 광고 영역

현재 사이트에는 광고 태그나 광고 영역을 노출하지 않습니다. 광고를 검토할 때는 콘텐츠와 광고를 명확히 구분하고, 광고 제공자·쿠키·동의 절차를 확인한 뒤 개인정보처리방침을 실제 구성에 맞춰 갱신합니다. 광고 승인은 Google의 별도 사이트 검토에 달려 있습니다.
