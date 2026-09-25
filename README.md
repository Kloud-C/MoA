# 모아

취향 월드컵과 성격 테스트를 모아 제공하는 정적 웹사이트입니다.

## 로컬에서 보기

`index.html`을 브라우저에서 열면 됩니다. 현재 빌드 도구나 서버 코드는 필요하지 않습니다.

## GitHub와 Cloudflare Pages 자동 배포

Cloudflare Pages의 Git 연동을 사용하면 GitHub 저장소에 변경 사항을 푸시할 때 사이트 배포를 자동으로 실행할 수 있습니다.

1. Git을 설치하고 이 폴더에서 저장소를 초기화합니다.
   ```sh
   git init
   git add index.html README.md .gitignore
   git commit -m "Create initial site scaffold"
   git branch -M main
   ```
2. GitHub에서 새 저장소를 만들고, 안내되는 원격 저장소 주소를 연결한 뒤 첫 커밋을 올립니다.
   ```sh
   git remote add origin https://github.com/OWNER/REPOSITORY.git
   git push -u origin main
   ```
3. Cloudflare 대시보드에서 **Workers & Pages → Create application → Pages → Connect to Git**을 선택하고 GitHub 계정을 연결합니다.
4. 방금 만든 저장소를 선택합니다. 이 사이트는 빌드 단계가 없는 정적 사이트이므로 설정은 다음과 같습니다.
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: 비워 둠
   - Build output directory: `.` (저장소 루트)
5. 저장하면 Cloudflare가 첫 배포를 진행합니다. 이후 `main`에 푸시할 때마다 운영 사이트를 자동으로 갱신하고, 다른 브랜치와 Pull Request에는 미리보기 배포를 만들 수 있습니다.

## 콘텐츠 확장

`index.html`의 `data-category-list` 안에 있는 카드 구조를 복사해 `data-category`에 고유한 키를 지정하고, `href`를 해당 콘텐츠 경로로 연결하면 새 카테고리를 추가할 수 있습니다. 실제 기능은 콘텐츠별 페이지나 스크립트를 추가하면서 구현하면 됩니다.

## 광고 영역

페이지에는 상단, 콘텐츠 아래, 하단에 광고 자리표시자가 있습니다. 광고를 게시하기 전에 사이트 정보 및 개인정보처리방침 페이지 등 운영에 필요한 내용을 준비한 뒤, 승인된 광고 코드로 각 `data-ad-slot` 영역을 교체하세요.
