# molgga (몰까)

무료 MBTI 테스트, 주말 이상형 월드컵, 동물상·테토/에겐·애착 유형·전생 콘텐츠를 제공하는 정적 웹사이트입니다.

## 언어별 페이지

- `/ko/`: 한국어
- `/en/`: 영어
- `/ja/`: 일본어
- `/zh/`: 중국어 간체

각 언어 폴더에는 홈, 테스트, 소개, 문의, 정책 페이지가 분리되어 있습니다. 상단 언어 선택 메뉴는 현재 페이지와 같은 페이지의 선택한 언어 경로로 이동합니다.

## 프로젝트 구조

- `ko/`, `en/`, `ja/`, `zh/`: 언어별 HTML 페이지
- `assets/css/`: 공통 스타일시트
- `assets/js/`: 공통 동작, 번역 사전, 퀴즈 데이터
- `image/`: 로고, OG 이미지, 테스트 결과 이미지
- `_redirects`: 루트 및 기존 주소를 한국어 경로로 연결
- `robots.txt`, `sitemap.xml`, `ads.txt`: 검색·광고 크롤러 파일

## 로컬에서 보기

저장소 루트의 `index.html`을 열면 로컬 파일 환경에서는 `ko/index.html`로 이동합니다. 로컬에서는 언어 폴더 안의 페이지를 직접 열어도 됩니다.

## 배포

Cloudflare Pages가 저장소 루트를 정적 사이트로 제공합니다. `main` 브랜치에 푸시하면 연결된 Pages 프로젝트가 자동 배포됩니다.

기존 루트 주소(`/worldcup.html` 등)는 `_redirects`를 통해 `/ko/worldcup.html`로 이동합니다.

## 카카오톡 공유 설정

테스트 결과의 `카카오톡 공유` 버튼을 활성화하려면 Kakao Developers 앱의 JavaScript 키와 도메인을 설정합니다.

1. Kakao Developers에서 앱을 만든 뒤 **앱 설정 → 앱 키 → JavaScript 키**를 복사합니다.
2. **플랫폼 키 → JavaScript 키 → JavaScript SDK 도메인**에 `https://molgga.com`을 등록합니다.
3. **제품 링크 → 웹 도메인**에도 `https://molgga.com`을 등록합니다.
4. `assets/js/share-config.js`의 빈 문자열에 JavaScript 키를 입력합니다.

JavaScript 키는 브라우저에서 쓰는 공개 키입니다. 코드에서 숨기는 용도가 아니므로 Kakao Developers에서 허용 도메인을 제한하세요. Kakao Share는 별도 메시지 템플릿 없이 기본 피드 템플릿으로 결과 제목·설명·OG 이미지와 테스트 링크를 공유합니다.
