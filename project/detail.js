const data = {
  snapy: {
    title: 'SNAPY', tag: '친구들과 공유하는 진짜 일상', period: '2026.03.01 — 2026.08.05',
    image: '../../img/snapy-thumbnail.png',
    summary: '보정된 모습을 공유하는 기존 SNS에서 벗어나, 전·후면을 동시에 촬영해 친구들과 진짜 일상을 나누는 사진 기반 SNS입니다.',
    role: ['AVCaptureMultiCamSession 기반 전·후면 동시 촬영과 PIP 드래그 인터랙션 구현', 'Google·Apple OAuth 로그인과 JWT 세션 흐름 설계', '앱스토어 출시와 사용자 시연까지 전 과정 진행'],
    tech: ['SwiftUI', 'MVVM', 'AVFoundation', 'Moya', 'Kingfisher', 'Firebase']
  },
  pacing: {
    title: 'Pacing', tag: '같은 음악을 들으며 함께 달리는 러닝 서비스', period: '2026.06.20 — 진행 중',
    image: '../../img/Pacing-preview.jpg',
    summary: '친구와 함께 같은 음악을 들으며 러닝 기록과 플레이리스트를 공유하는 iOS 앱입니다. 실시간 위치·음악을 동기화해 함께 달리는 경험을 만들고, 경로와 페이스를 기록합니다. 기획·디자인부터 개발·QA·배포까지 전 과정을 담당했습니다.',
    summaryHtml: '친구와 함께 같은 음악을 들으며 러닝 기록과 플레이리스트를<br>공유하는 iOS 앱입니다. 실시간 위치·음악을 동기화해<br>함께 달리는 경험을 만들고, 경로와 페이스를 기록합니다.<br>기획·디자인부터 개발·QA·배포까지 전 과정을 담당했습니다.',
    role: ['Feature-first MVVM으로 화면을 나누고 Firebase·위치·음악 로직을 Core 계층으로 분리했습니다.', 'Firebase Authentication·Firestore·Realtime Database로 로그인, 친구 관계, 러닝·음악 데이터를 구성했습니다.', 'MusicKit·MediaPlayer로 Apple Music 권한, 보관함 플레이리스트, 재생 제어와 음악 탐색을 구현했습니다.', '같이 듣기 이벤트와 백그라운드 위치 업데이트를 분리 설계하고 실기기 QA와 App Store 배포를 진행했습니다.'],
    tech: ['Swift / SwiftUI', 'MusicKit', 'MapKit', 'Core Location', 'Firebase', 'Swift Charts', 'Swift Concurrency']
  },
  qiri: {
    title: 'Qiri', tag: 'Apple Watch 사용자를 위한 AI 에이전트', period: '2025.03.12 — 2025.07.15',
    image: '../../img/Qiri.png',
    summary: 'Siri의 맥락 없는 답변 문제에서 출발해, 손 제스처와 음성으로 빠르게 질문하는 Apple Watch용 AI 에이전트입니다.',
    role: ['iOS·watchOS 경험 분리 및 공통 상태 흐름 설계', 'Apple 로그인과 WatchConnectivity 동기화 구현', 'AI 스트리밍 응답을 작은 화면에 맞게 표현'],
    tech: ['SwiftUI', 'watchOS', 'Combine', 'Moya', 'WatchConnectivity']
  },
  jipchak: {
    title: '집착', tag: '내가 찾는 집, 바로 여기 착', period: '2025.08.27 — 2025.12.31',
    image: '../../img/jipchak-thumbnail.png',
    summary: '전월세 계약이 익숙하지 않은 사회 초년생이 매물 정보와 서류를 AI로 분석하고, 계약 전 위험 요소를 확인할 수 있도록 돕는 AI 전월세 안심 플랫폼입니다. UI/UX 설계부터 iOS 개발과 출시까지 담당했습니다.',
    summaryHtml: '전월세 계약이 익숙하지 않은 사회 초년생이<br>매물 정보와 서류를 AI로 분석하고,<br>계약 전 위험 요소를 확인할 수 있도록 돕는<br>AI 전월세 안심 플랫폼입니다.<br>UI/UX 설계부터 iOS 개발과 출시까지 담당했습니다.',
    role: ['SwiftUI와 MVVM을 기반으로 화면 상태와 입력·로딩·에러 흐름을 단방향으로 관리', 'Naver Map SDK를 UIViewRepresentable로 연결해 매물 위치와 상세 정보를 지도에 표시', 'Moya Multipart로 매물 정보와 이미지·PDF를 전송하고 AI 위험도 분석 결과를 처리', '체크리스트 생성부터 상태 변경, 결과 확인까지 계약 전 점검 흐름 구현'],
    tech: ['SwiftUI', 'MVVM', 'Combine', 'RxSwift', 'Moya', 'Naver Map SDK']
  }
};

const key = document.body.dataset.project;
const p = data[key] || data.snapy;
document.title = `${p.title} | 김은찬`;
document.querySelector('[data-image]').src = p.image;
document.querySelector('[data-image]').alt = p.title;
document.querySelector('[data-tag]').textContent = p.tag;
document.querySelector('[data-title]').textContent = p.title;
document.querySelector('[data-period]').textContent = p.period;
document.querySelector('[data-summary]').innerHTML = p.summaryHtml || p.summary;
document.querySelector('[data-role]').innerHTML = p.role.map(x => `<li>${x}</li>`).join('');
document.querySelector('[data-tech]').innerHTML = p.tech.map(x => `<span>${x}</span>`).join('');
