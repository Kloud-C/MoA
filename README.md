# 모아

취향 월드컵과 성격 테스트를 모아 제공하는 정적 웹사이트입니다.

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

이 사이트는 빌드 단계가 없는 정적 사이트이므로 설정은 다음과 같습니다.
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: 비워 둠
   - Build output directory: `.` (저장소 루트)

저장하면 Cloudflare가 첫 배포를 진행합니다. 이후 `main`에 푸시할 때마다 운영 사이트를 자동으로 갱신하고, 다른 브랜치와 Pull Request에는 미리보기 배포를 만들 수 있습니다.

## 콘텐츠 확장

`index.html`의 `data-category-list` 안에 있는 카드 구조를 복사해 `data-category`에 고유한 키를 지정하고, `href`를 해당 콘텐츠 경로로 연결하면 새 카테고리를 추가할 수 있습니다. 실제 기능은 콘텐츠별 페이지나 스크립트를 추가하면서 구현하면 됩니다.

## 광고 영역

페이지에는 상단, 콘텐츠 아래, 하단에 광고 자리표시자가 있습니다. 광고를 게시하기 전에 사이트 정보 및 개인정보처리방침 페이지 등 운영에 필요한 내용을 준비한 뒤, 승인된 광고 코드로 각 `data-ad-slot` 영역을 교체하세요.
