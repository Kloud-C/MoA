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
- `functions/`, `migrations/`: Cloudflare Pages 월드컵 랭킹 API와 D1 스키마
- `_redirects`: 루트 및 기존 주소를 한국어 경로로 연결
- `robots.txt`, `sitemap.xml`, `ads.txt`: 검색·광고 크롤러 파일

## 로컬에서 보기

저장소 루트의 `index.html`을 열면 로컬 파일 환경에서는 `ko/index.html`로 이동합니다. 로컬에서는 언어 폴더 안의 페이지를 직접 열어도 됩니다.

## 배포

Cloudflare Pages가 저장소 루트를 정적 사이트로 제공합니다. `main` 브랜치에 푸시하면 연결된 Pages 프로젝트가 자동 배포됩니다.

기존 루트 주소(`/worldcup.html` 등)는 `_redirects`를 통해 `/ko/worldcup.html`로 이동합니다.

## 월드컵 인기 랭킹 설정

월드컵은 공통 엔진(`assets/js/worldcup.js`)과 데이터 목록(`assets/js/worldcup-data.js`)을 사용합니다. 주말 취향 월드컵은 32개 활동 중 16개 또는 32개, 야식 월드컵은 50개 메뉴 중 16개 또는 32개를 무작위로 뽑습니다. 새 월드컵을 추가하거나 항목을 바꿀 때는 데이터 목록과 익명 랭킹 API 허용 목록(`functions/_shared/worldcup-config.js`)의 게임 ID, 대진 규모, 항목 ID를 함께 맞춰야 합니다. 허용 목록과 화면 데이터가 다르면 랭킹 저장 API가 요청을 거절합니다.

전체 방문자의 우승 메뉴 랭킹은 Cloudflare D1 데이터베이스 `molgga-worldcup-rankings`를 사용합니다. Pages 프로젝트 `moa`의 **Production → Settings → Bindings**에 `MOLGGA_DB`라는 이름으로 연결했고, `migrations/0001_worldcup_votes.sql` 스키마를 적용했습니다. 이 바인딩은 Pages Functions가 데이터베이스에 접근하도록 하며 다음 배포부터 적용됩니다.

```powershell
npx wrangler d1 execute molgga-worldcup --remote --file=migrations/0001_worldcup_votes.sql
```

데이터베이스가 연결되기 전에는 랭킹이 현재 탭에서 완주한 결과만 보여줍니다. 연결 후에는 완주 시 최종 우승 항목·대진 규모·일회성 임의 ID만 저장하며 선택 과정은 전송하지 않습니다.

## 카카오톡 공유 설정

테스트 결과의 `카카오톡 공유` 버튼을 활성화하려면 Kakao Developers 앱의 JavaScript 키와 도메인을 설정합니다.

1. Kakao Developers에서 앱을 만든 뒤 **앱 설정 → 앱 키 → JavaScript 키**를 복사합니다.
2. **플랫폼 키 → JavaScript 키 → JavaScript SDK 도메인**에 `https://molgga.com`을 등록합니다.
3. **제품 링크 → 웹 도메인**에도 `https://molgga.com`을 등록합니다.
4. `assets/js/share-config.js`의 빈 문자열에 JavaScript 키를 입력합니다.

JavaScript 키는 브라우저에서 쓰는 공개 키입니다. 코드에서 숨기는 용도가 아니므로 Kakao Developers에서 허용 도메인을 제한하세요. Kakao Share는 별도 메시지 템플릿 없이 기본 피드 템플릿으로 결과 제목·설명·OG 이미지와 테스트 링크를 공유합니다.
