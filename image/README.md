# 결과 이미지

퀴즈 결과 이미지는 결과 이름과 같은 파일을 사용합니다. 이미지를 교체할 때는 같은 파일명을 유지하면 사이트 코드 수정 없이 바로 적용할 수 있습니다.

## 동물상 이미지

`animal image/동물상 테스트：강아지.jpg`처럼 결과별 JPG가 들어 있습니다.

## MBTI 이미지

`MBTI image/MBTI：ISFJ.jpg`처럼 유형 이름과 확장자를 유지해 16개 이미지를 저장합니다. PNG 업로드는 PNG 확장자를 그대로 사용합니다.

파일명에는 Windows에서 사용할 수 없는 ASCII 콜론(`:`) 대신 전각 콜론(`：`)을 썼습니다. 화면에는 유형에 맞는 로컬 이미지가 표시됩니다.

동물 이미지는 Unsplash에서 내려받은 초안입니다. MBTI 이미지는 프로젝트 소유자가 추가한 파일입니다. 교체할 때는 결과 유형과 파일 이름이 일치하는지 확인해 주세요.

## 주말 취향 월드컵 이미지

`worldcup/weekend-activities` 폴더에는 주말 취향 월드컵의 8개 선택지 이미지가 있습니다. `assets/js/worldcup-data.js`에서 파일 경로를 관리하며, 새 이미지를 교체할 때는 선택지 ID와 같은 파일명을 유지해 주세요. 이미지는 활동에 맞춰 직접 생성한 실사풍 이미지입니다.

- `movie-night.jpg` — 집에서 영화를 보며 쉬는 장면
- `new-restaurant.jpg` — 동네 식당에서 식사하는 장면
- `forest-walk.jpg` — 숲길을 걷는 장면
- `favorite-hobby.jpg` — 집에서 스케치하는 장면
- `cafe-chat.jpg` — 카페에서 친구와 대화하는 장면
- `short-drive.jpg` — 근교 전망대에 차를 세우고 풍경을 보는 장면
- `cook-at-home.jpg` — 집 주방에서 채소를 손질하는 장면
- `light-exercise.jpg` — 집에서 가볍게 스트레칭하는 장면

## 테토/에겐 결과 이미지

`tests/teto-egen` 폴더의 결과 ID별 JPG를 사용합니다. `assets/js/teto-egen-data.js`의 각 프로필 `image` 경로와 파일 이름을 맞춰 주세요. 8개 장면은 결과마다 다른 인물과 장소로 구성한 생성 이미지입니다.

## 애착 유형 결과 이미지

`tests/attachment-style` 폴더에는 `secure.jpg`, `avoidant.jpg`, `anxious.jpg`, `fearful.jpg`가 있습니다. 각 파일은 `assets/js/attachment-data.js`의 결과 프로필에 연결되어 있습니다. 인물의 성격이나 관계 유형을 단정하는 연출은 피하고, 일상적인 장면을 담았습니다.
