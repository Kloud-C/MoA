# 모아

취향 콘텐츠를 모아 제공하는 한국어 정적 웹사이트입니다. 현재 주말 취향 월드컵, 10문항·6종 동물상 성향 놀이, 20문항 MBTI 선호 돌아보기, 12문항 테토/에겐 테스트, 16문항 애착 유형 테스트, 운영·개인정보·이용 안내를 제공합니다.

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
- `worldcup.html`: “이상형 월드컵: 내가 원하는 주말” — 8개 활동, 7라운드
- `animal-test.html`: 10문항·6종 결과 동물상 성향 놀이
- `mbti.html`: 네 가지 선호 축 소개와 20문항 비공식 자기 성찰 문항
- `teto-egen-test.html`: 12문항·8유형 테토/에겐 테스트
- `attachment-test.html`: 연구 자료를 참고해 자체 작성한 16문항·4유형 애착 성향 콘텐츠
- `teto-egen-data.js`, `attachment-data.js`, `archetype-test.js`: 확장형 테스트 데이터와 공통 진행·채점 엔진
- `about.html`, `privacy.html`, `terms.html`, `contact.html`: 운영·정책·문의 안내
- `404.html`: 잘못된 주소 안내
- `styles.css`, `app.js`: 공통 화면 스타일과 브라우저 내 콘텐츠 동작

새 확장형 테스트는 `teto-egen-data.js`의 데이터 구조를 참고해 질문과 결과를 추가하고, 공통 엔진을 사용합니다. 새 페이지를 홈 카드와 `sitemap.xml`에 연결합니다.

## 광고 영역

페이지에는 Google AdSense 코드와 분석 도구가 연결되어 있습니다. 실제 광고 노출 여부는 애드센스 사이트 검토와 광고 설정에 따라 달라집니다. 관련 안내는 `privacy.html`에 기록합니다.
