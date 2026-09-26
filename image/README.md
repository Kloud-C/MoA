# 결과 이미지

퀴즈 결과 이미지는 결과 이름과 같은 파일을 사용합니다. 이미지를 교체할 때는 같은 파일명을 유지하면 사이트 코드 수정 없이 바로 적용할 수 있습니다.

## 동물상 이미지

`animal image/동물상 테스트：강아지.jpg`처럼 결과별 JPG가 들어 있습니다.

## MBTI 이미지

`MBTI image/MBTI：ISFJ.jpg`처럼 유형 이름과 확장자를 유지해 16개 이미지를 저장합니다. PNG 업로드는 PNG 확장자를 그대로 사용합니다.

파일명에는 Windows에서 사용할 수 없는 ASCII 콜론(`:`) 대신 전각 콜론(`：`)을 썼습니다. 화면에는 유형에 맞는 로컬 이미지가 표시됩니다.

동물상과 성격 유형 이미지는 결과 유형에 맞춰 준비한 로컬 에셋입니다. 교체할 때는 결과 유형과 파일 이름이 일치하는지 확인해 주세요.

## 주말 취향 월드컵 이미지

`worldcup/weekend-activities` 폴더에는 주말 취향 월드컵의 32개 선택지 이미지가 있습니다. 이제 16강 또는 32강을 고를 수 있으며, 매 게임마다 중복 없이 무작위로 대진을 구성합니다. `assets/js/worldcup-data.js`에서 항목과 파일 경로를 관리하며, 이미지를 교체할 때는 선택지 ID와 같은 파일명을 유지해 주세요. 이미지는 활동에 맞춰 직접 생성한 실사풍 이미지입니다.

- `movie-night.jpg` — 집에서 영화를 보며 쉬는 장면
- `new-restaurant.jpg` — 동네 식당에서 식사하는 장면
- `forest-walk.jpg` — 숲길을 걷는 장면
- `favorite-hobby.jpg` — 집에서 스케치하는 장면
- `cafe-chat.jpg` — 카페에서 친구와 대화하는 장면
- `short-drive.jpg` — 근교 전망대에 차를 세우고 풍경을 보는 장면
- `cook-at-home.jpg` — 집 주방에서 채소를 손질하는 장면
- `light-exercise.jpg` — 집에서 가볍게 스트레칭하는 장면
- `bookstore.jpg` — 동네 서점에서 책을 고르는 장면
- `flea-market.jpg` — 야외 주말 플리마켓을 둘러보는 장면
- `balcony-gardening.jpg` — 베란다 식물을 돌보는 장면
- `home-baking.jpg` — 집에서 쿠키를 굽는 장면
- `riverside-sketch.jpg` — 강가에 앉아 그림을 그리는 장면
- `art-gallery.jpg` — 작은 갤러리 전시를 보는 장면
- `pottery-class.jpg` — 공방에서 도자기를 만드는 장면
- `board-games.jpg` — 친구들과 보드게임을 하는 장면
- `riverside-cycling.jpg` — 강변 자전거길을 달리는 장면
- `botanical-garden.jpg` — 식물원을 천천히 둘러보는 장면
- `beach-walk.jpg` — 바닷가를 걷는 장면
- `park-picnic.jpg` — 공원 나무 그늘에서 피크닉하는 장면
- `traditional-market.jpg` — 전통시장을 구경하는 장면
- `baseball-game.jpg` — 관중석에서 야구를 보는 장면
- `museum-visit.jpg` — 박물관 전시를 관람하는 장면
- `record-store.jpg` — 레코드 가게에서 앨범을 고르는 장면
- `photo-walk.jpg` — 동네 골목을 산책하며 사진 찍는 장면
- `weekend-brunch.jpg` — 햇살 좋은 테라스에서 브런치하는 장면
- `library-reading.jpg` — 도서관에서 책을 읽는 장면
- `dance-class.jpg` — 초보 댄스 수업에 참여하는 장면
- `craft-workshop.jpg` — 공방에서 작은 소품을 만드는 장면
- `park-jog.jpg` — 공원에서 가볍게 달리는 장면
- `spa-relax.jpg` — 따뜻하고 조용한 휴식 공간에서 쉬는 장면
- `nearby-train-trip.jpg` — 근교행 기차에 앉아 창밖을 보는 장면

## 테토/에겐 결과 이미지

`tests/teto-egen` 폴더의 결과 ID별 JPG를 사용합니다. `assets/js/teto-egen-data.js`의 각 프로필 `image` 경로와 파일 이름을 맞춰 주세요. 8개 장면은 결과마다 다른 인물과 장소로 구성한 생성 이미지입니다.

## 애착 유형 결과 이미지

`tests/attachment-style` 폴더에는 `secure.jpg`, `avoidant.jpg`, `anxious.jpg`, `fearful.jpg`가 있습니다. 각 파일은 `assets/js/attachment-data.js`의 결과 프로필에 연결되어 있습니다. 인물의 성격이나 관계 유형을 단정하는 연출은 피하고, 일상적인 장면을 담았습니다.

## 메인 카드 이미지

`home-categories`에는 홈의 여덟 콘텐츠 카드를 위한 이미지가 있습니다. 표시 순서는 주말 월드컵, 야식 월드컵, 동물상, MBTI, 테토/에겐, 애착 유형, 전생, 소비 습관이며, 모든 언어 홈 페이지가 같은 에셋을 사용합니다.

## 결과 설명 아이콘

`result-icons`는 MBTI, 동물상, 애착 유형, 소비 습관 결과의 상세 설명 제목에 쓰는 공통 아이콘입니다. 장식용 이미지에는 대체 텍스트를 비워 화면 읽기에서 중복되지 않게 합니다.

## 동물상 생성 이미지

`tests/animal-test`의 `dog.jpg`, `cat.jpg`, `fox.jpg`, `otter.jpg`, `deer.jpg`, `bear.jpg`가 동물상 테스트 결과 사진입니다. 각 결과 프로필은 해당 동물 사진을 직접 연결합니다.

## 전생 결과 이미지

전생 결과 이미지는 `past-life/generated/<캐릭터 ID>.jpg`로 보관합니다. 인물 역할(상인, 안내자, 약초꾼, 음식 감별사, 악사 등)은 사람 인물이 장면 안에 분명히 보이도록 합니다. 결과가 동물이나 판타지 생물인 경우 해당 캐릭터를 주 피사체로 표현합니다. 실사풍에 절제된 판타지 분위기를 적용하고 이미지의 인물·배경과 제목·설명이 서로 맞는지 함께 확인합니다.
