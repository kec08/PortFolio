/* global document, window, navigator */

const PROJECTS = {
  snapy: {
    accent: "#F5C518",
    kicker: "친구들과 공유하는 진짜 일상",
    title: "SNAPY",
    period: "2026.03.01 ~ 2026.08.05",
    links: {
      github: "https://github.com/2026-snapy/SNAPY_iOS",
      figma: "https://www.figma.com/design/X3YFCzXVcM173oBQCoGf0c/3%ED%95%99%EB%85%84-%EC%BA%A1%EC%8A%A4%ED%86%A4?node-id=36-3&t=tiKIu10uXv7cSs5G-1",
      demo: "https://www.youtube.com/@김은찬-s7o",
      appstore: "https://apps.apple.com/kr/app/스내피-snapy/id6761876306",
    },
    overview: [
      "보정된 모습을 공유하는 기존 SNS의 방식에서 벗어나, 듀얼 카메라로 전면·후면을 동시에 촬영해 친구들과 진짜 일상을 나누는 사진 기반 SNS입니다.",
      "하루를 아침·점심·저녁으로 나누어 기록하고, 24시간 스토리·음성 댓글·사진 방명록으로 자연스럽게 소통할 수 있습니다.",
      "경북소프트웨어마이스터고 캡스톤 대상 수상 및 App Store 출시, 아진산업 SILI AX 기술전에서 사용자 시연을 진행했습니다.",
    ],
    preview: [
      "./img/snapy-preview-1.jpg",
      "./img/snapy-preview-2.jpg",
      "./img/snapy-preview-3.jpg",
      "./img/snapy-preview-4.jpg",
      "./img/snapy-preview-5.jpg",
      "./img/snapy-preview-6.jpg",
      "./img/snapy-preview-7.jpg",
      "./img/snapy-preview-8.jpg",
    ],
    role: [
      "AVCaptureMultiCamSession으로 전·후면 동시 촬영과 PIP 드래그 인터랙션 구현",
      "Google·Apple OAuth 로그인과 JWT exp 기반 자동 토큰 재발급 세션 설계",
      "DeepLinkRouter로 Universal Link·커스텀 스킴의 앨범·스토리·프로필 진입 통합",
      "Kingfisher 캐싱, 신고·차단 상태 분기, TestFlight 및 App Store 심사 대응",
    ],
    tech: [
      "Swift / SwiftUI: 선언적 UI 기반 화면 구성",
      "MVVM: View → ViewModel → Service → API 단방향 흐름",
      "AVFoundation: MultiCamSession 듀얼 카메라, AVAudioRecorder 음성 댓글",
      "Moya / Alamofire: 네트워크 계층 추상화 및 Multipart 업로드",
      "Kingfisher: 메모리+디스크 이중 캐싱 이미지 로딩",
      "async/await + Combine: 비동기 처리 및 상태 관리",
      "Google Sign-In / Apple Sign-In: OAuth 소셜 로그인",
      "Contacts Framework: 연락처 동기화 기반 친구 추천",
    ],
    trouble: [
      {
        title: "AsyncImage 캐싱 미지원으로 이미지 로딩 성능 저하",
        problem:
          "사진 중심 서비스에서 AsyncImage가 캐싱을 지원하지 않아 화면 전환마다 매번 네트워크 요청이 발생, 13개 파일에서 깜빡임과 로딩 지연이 반복되었습니다.",
        solution:
          "Kingfisher(KFImage)로 전환하여 메모리+디스크 이중 캐싱을 적용하고, DownsamplingImageProcessor로 메모리 사용량을 절감했습니다.",
        result:
          "이미지 표시 속도 약 90% 이상 개선 (네트워크 300~500ms → 캐시 히트 시 10ms 이내), 화면 전환 시 깜빡임 해소.",
      },
      {
        title: "프로필 피드 앨범 상세 조회 순차 호출로 로딩 지연",
        problem:
          "일괄 조회 API가 없어 앨범 상세를 GET /api/albums/{id}로 최대 31건 순차 호출해야 했고, 응답 시간이 건수만큼 누적되었습니다.",
        solution:
          "withTaskGroup을 활용한 병렬 호출로 전환하고, 피드와 방명록 조회도 async let으로 병렬 처리했습니다.",
        result:
          "최대 31건 순차 호출 대비 로딩 시간 약 96% 단축 (전체 대기 → 가장 느린 1건 대기 수준).",
      },
    ],
    learn: [
      "사진 기반 서비스에서 이미지 캐싱은 UX에 직결되며, 라이브러리 선택이 체감 성능을 크게 좌우함을 체감했습니다.",
      "앱스토어 심사 대응은 안내 문서보다 코드 레벨에서 확실하게 처리하는 것이 가장 효과적이었습니다.",
      "SNS 서비스에 필수적인 신고·차단·개인정보 고지 등 안전 기능의 중요성을 직접 체득했습니다.",
      "일괄 조회 API가 없는 환경에서 Swift Concurrency TaskGroup 병렬 처리가 UX 개선에 직접적인 효과가 있음을 확인했습니다.",
      "실사용자 시연을 통해 기능 완성도만큼 서비스 가치를 명확하게 전달하는 능력도 중요하다는 점을 배웠습니다.",
    ],
  },
  qiri: {
    accent: "#FD6F22",
    kicker: "Apple Watch 사용자를 위한 더 나은 AI 에이전트",
    title: "Qiri",
    period: "2025.03.12 ~ 2025.07.15",
    links: {
      github: "https://github.com/marieeeeeeeeeeeeeee",
      figma:
        "https://www.figma.com/design/dUoKwh8ulwY4H6TF49P7eZ/Qiri_2025-1%ED%95%99%EA%B8%B0-%EC%BA%A1%EC%8A%A4%ED%86%A4?node-id=0-1&t=hQSx3vak2ZWqcb71-1",
      demo: "https://www.youtube.com/watch?si=77nzsMGncG27vWzh&v=rTH4DSMs_nk&feature=youtu.be",
    },
    overview: [
      "Siri가 맥락과 맞지 않는 답변이나 검색 링크를 제공하는 불편함에서 출발한 Apple Watch용 AI 에이전트입니다.",
      "손 제스처와 음성으로 질문하고, 작은 화면에서도 필요한 답변을 빠르게 확인할 수 있도록 iOS·watchOS 경험을 분리해 설계했습니다.",
      "경북소프트웨어마이스터고 캡스톤 대상 수상 및 대구 ICT 융합 엑스포 전시를 통해 접근성과 서비스 전달 방식을 검증했습니다.",
    ],
    role: [
      "SwiftUI와 Combine 기반으로 iOS·watchOS 화면을 분리하고 공통 상태 흐름 설계",
      "AuthenticationServices와 Moya TargetType을 활용한 Apple 로그인 및 사용자 식별 구현",
      "WatchConnectivity의 isReachable 확인·재시도·updateApplicationContext 백업 동기화 구성",
      "URLSession dataTask로 AI 스트리밍 청크를 버퍼링하고 첫 응답부터 Watch 화면에 반영",
    ],
    tech: [
      "Swift / SwiftUI: 선언적 UI 기반 화면 구성",
      "WatchOS: Apple Watch 전용 UX 및 제스처 기반 인터랙션",
      "WatchConnectivity: iPhone ↔ Watch 데이터/메시지 통신",
      "Combine: 선언적 상태 관리 및 데이터 흐름",
      "URLSession: 네트워크 통신 및 스트리밍 응답 처리",
      "Moya: 네트워크 계층 추상화 및 API 관리",
      "RxSwift: 비동기 이벤트 스트림 처리",
    ],
    trouble: [
      {
        title: "AssistiveTouch 기반 질문 흐름 접근성 문제",
        problem:
          "AssistiveTouch의 \"다음 요소로 이동\" 제스처는 화면 내 UI 요소를 순서대로 탐색하는 방식으로 동작하기 때문에, 요소가 많을수록 원하는 액션까지 도달하는 제스처 횟수가 증가합니다. 최적화 전 질문 시작부터 답변 확인까지 6번의 제스처가 필요해, 손을 자유롭게 사용하기 어려운 상황에서 오히려 불편한 경험이 되는 문제가 있었습니다.",
        solution:
          "제스처 횟수를 줄이기 위해 Watch 화면의 UI 구조 자체를 재설계했습니다. 화면당 탐색 요소를 최소화해 제스처 1회로 STT가 활성화되도록 구성하고, 답변 확인도 1회 제스처로 완료되도록 화면 흐름을 단순화했습니다. 또한 앱 진입 단계에서는 단축어 기능을 활용해 AssistiveTouch 제스처와 단축어를 연결, 제스처만으로 앱을 실행할 수 있는 구조도 추가했습니다.",
        result:
          "질문 시작 ~ 답변 확인 전체 플로우 제스처 횟수가 6회 → 3회로 50% 감소했습니다. 접근성 기능을 제대로 지원하려면 기능 구현만으로는 부족하고, 제스처 동작 방식에 맞게 UI 구조 자체를 설계해야 함을 체득했습니다.",
      },
      {
        title: "스트리밍 AI 응답 가독성 저하",
        problem:
          "토큰 단위 스트리밍 응답이 중간에 끊긴 마크다운 상태로 전달되어 Apple Watch의 작은 화면에서 텍스트가 깨져 보이고, 문장이 완성되기 전에 출력되어 읽기 어려웠습니다.",
        solution:
          "수신 청크를 별도 버퍼에 누적하고 줄바꿈, 불릿, 소제목 패턴이 완성된 경우에만 UI를 갱신하도록 구성해 데이터 수신 로직과 UI 표현 로직을 분리했습니다.",
        result:
          "실시간 응답 속도는 유지하면서도 텍스트가 깨지는 현상을 제거했고, 작은 화면에서도 자연스럽게 읽을 수 있는 답변 경험을 제공했습니다.",
      },
    ],
    learn: [
      "인증 플로우는 보안과 UX의 균형 문제: 심사 기준/신뢰/데이터 보존 전략까지 함께 고려해야 했습니다.",
      "플랫폼 특화 UX: Apple Watch는 한 순간에 하나의 명확한 행동을 제공하는 UX가 핵심임을 체감했습니다.",
      "선언적 상태 관리: Combine 기반 상태 바인딩으로 가독성/유지보수/디버깅 효율이 개선되었습니다.",
      "실시간 처리 경험: 데이터 구조화와 UI 표현을 분리해야 한다는 관점을 얻었습니다.",
      "박람회 현장에서 기능 설명보다 사용자가 얻는 가치를 먼저 전달해야 서비스가 더 설득력 있게 받아들여진다는 점을 배웠습니다.",
    ],
  },
  pacing: {
    accent: "#FF2053",
    kicker: "같은 음악을 들으며 함께 달리는 러닝 서비스",
    title: "Pacing",
    logo: "./img/pacing-logo.png",
    period: "2026.06.20 ~",
    links: {
      github: "https://github.com/kec08/Pacing",
      appstore: "https://apps.apple.com/kr/app/pacing/id6784299290",
      blog: "https://blog.naver.com/ssilvv/224382783055",
    },
    overview: [
      "친구와 함께 러닝하며 같은 음악을 듣고, 서로의 플레이리스트를 공유하는 iOS 러닝 앱입니다.",
      "친구의 러닝·음악 활동을 확인하고, 공유 플레이리스트를 탐색해 Apple Music 보관함에 저장할 수 있습니다.",
      "실시간 위치·재생 곡 공유와 같이 듣기 세션으로 같은 곡과 재생 위치를 동기화하고, 러닝 경로·거리·평균 페이스를 기록합니다.",
      "AI를 활용한 기획·디자인·개발부터 Firebase 구성, 실기기 QA, App Store 배포까지 직접 진행했습니다.",
    ],
    preview: [
      "./img/pacing-preview-1.jpg",
      "./img/pacing-preview-2.jpg",
      "./img/pacing-preview-3.jpg",
      "./img/pacing-preview-4.jpg",
      "./img/pacing-preview-5.jpg",
      "./img/pacing-preview-6.jpg",
      "./img/pacing-preview-7.jpg",
      "./img/pacing-preview-8.jpg",
      "./img/pacing-preview-9.jpg",
    ],
    role: [
      "Feature-first MVVM으로 화면을 나누고 Firebase·위치·음악 로직을 Core 계층으로 분리",
      "Firebase Authentication·Firestore·Realtime Database로 로그인, 친구 관계, 러닝·음악 데이터 구성",
      "MusicKit·MediaPlayer로 Apple Music 권한, 보관함 플레이리스트, 재생 제어와 음악 탐색 구현",
      "같이 듣기 이벤트와 백그라운드 위치 업데이트를 분리 설계하고 실기기 QA·App Store 배포 진행",
    ],
    tech: [
      "Swift / SwiftUI: 선언적 UI 기반 화면 구성",
      "Swift Charts: 러닝 데이터를 시각화하는 화면 구성",
      "Feature-first MVVM + @Observable: 기능 단위 상태 관리",
      "Swift Concurrency: 비동기 작업 및 백그라운드 흐름 처리",
      "MapKit / Core Location: 러닝 경로와 위치 정보 처리",
      "MusicKit / MediaPlayer: Apple Music 기반 음악 재생 및 연동",
      "Firebase: Authentication, Cloud Firestore, Realtime Database, Cloud Functions",
      "Figma / Codex / App Store Connect: 디자인·AI 개발·배포 도구",
    ],
    trouble: [
      {
        title: "같이 듣기 중 곡 전환 시 재생 지연 및 중복 동기화",
        problem:
          "1초 주기로 세션 전체를 갱신하는 구조에서 단순 재생 위치 보정과 실제 곡 변경 이벤트가 구분되지 않았습니다. 이로 인해 게스트 기기의 곡 전환이 지연되거나 중복 재생 준비가 발생했습니다.",
        solution:
          "곡 전환 단위의 고유 값인 playbackEventID를 추가해 곡 변경 이벤트와 1초 주기 위치 보정 이벤트를 분리했습니다. 새 곡 이벤트가 오면 이전 비동기 재생 준비 작업의 결과를 무효화하도록 보완했습니다.",
        result:
          "불필요한 중복 재생 준비를 제거하고, 단순 위치 갱신에서는 재생 큐를 다시 구성하지 않도록 개선했습니다.",
      },
      {
        title: "백그라운드 전환 시 러닝 기록 중단",
        problem:
          "앱을 백그라운드로 전환하면 시간은 증가하지만 거리·페이스·칼로리·지도 경로가 갱신되지 않았습니다. 소스 코드 설정과 실제 앱 번들의 UIBackgroundModes가 일치하지 않는 문제도 확인했습니다.",
        solution:
          "UIBackgroundModes에 location과 audio를 명시하고, LocationManager에 allowsBackgroundLocationUpdates를 적용했습니다. 러닝 시작 전 위치 권한을 확인하고 권한이 부족하면 설정 화면으로 안내하도록 구성했습니다.",
        result:
          "백그라운드 위치 이벤트가 LocationManager → RunningViewModel → RunningView 흐름으로 전달되어 거리·경로·페이스·칼로리가 함께 갱신되도록 안정화했습니다.",
      },
    ],
    learn: [
      "AI 활용에서는 프로젝트 구조·작업 범위·완료 기준을 명확히 전달하는 것이 결과의 품질과 유지보수성에 중요하다는 점을 배웠습니다.",
      "실시간 같이 듣기 기능을 구현하며 이벤트 구분과 비동기 작업 취소 처리가 사용자 경험에 직접 영향을 준다는 점을 경험했습니다.",
      "위치·음악·실시간 데이터가 결합된 앱에서는 상태 흐름과 백그라운드 조건을 먼저 설계해야 안정적인 기능을 만들 수 있음을 체득했습니다.",
      "기획부터 디자인, iOS 개발, Firebase 데이터 설계, 실기기 QA, App Store 배포까지 서비스 개발 전 과정을 경험했습니다.",
    ],
  },
  jipchak: {
    accent: "#58CCFF",
    kicker: "사회 초년생을 위한 자취 생활 편의 플랫폼",
    title: "집착",
    period: "2025.08.27 ~ 2025.12.31",
    links: {
      github: "https://github.com/gbsw-liskov",
      figma:
        "https://www.figma.com/design/sKOQ7FC8YnvBdUHCmCdr3X/Liskovs---%EC%9E%90%EC%B7%A8%EC%95%B1?node-id=794-3746&t=bC4MlZcu4CU5n0U1-1",
      demo: "https://youtu.be/vIUcH8E60pg?si=FS7nKiLLC_Ti2CTS",
    },
    overview: [
      "전월세 계약 경험이 부족한 사회 초년생이 계약 전 위험 요소를 쉽게 확인하도록 돕는 AI 자취 플랫폼입니다.",
      "매물 정보와 서류를 업로드하면 AI가 위험 요소를 분석하고, 체크리스트·대출 가이드·지도 탐색을 한 흐름으로 제공합니다.",
      "경북소프트웨어마이스터고 캡스톤 동상 수상 및 App Store 출시까지 진행했습니다.",
    ],
    preview: [
      "./img/jipchak-preview-1.jpg",
      "./img/jipchak-preview-2.jpg",
      "./img/jipchak-preview-3.jpg",
      "./img/jipchak-preview-4.jpg",
    ],
    role: [
      "MVVM으로 View·ViewModel·Service 책임을 나누고 Combine 단방향 상태 흐름 구성",
      "JWT exp 확인과 Refresh Token 재발급으로 로그인 세션 유지",
      "UIViewRepresentable로 Naver Map SDK를 SwiftUI에 연결하고 지도 상태 동기화",
      "Moya Multipart로 JSON과 PDF를 함께 전송해 AI 매물 분석·체크리스트·대출 가이드 연동",
    ],
    tech: [
      "Swift / SwiftUI: 선언적 UI 기반 화면 구성",
      "MVVM: 역할 분리로 유지보수성 강화",
      "Combine: 상태 관리 및 데이터 흐름 처리",
      "RxSwift: 비동기 이벤트 스트림 처리",
      "Moya + CombineMoya: 네트워크 계층 추상화",
      "Naver Map SDK (NMapsMap): 지도 기반 매물 탐색",
      "UserDefaults: 토큰 저장 및 로그인 상태 복원",
    ],
    trouble: [
      {
        title: "SwiftUI에서 네이버 지도 연동/상태 동기화",
        problem:
          "UIKit 기반 NMFMapView를 SwiftUI에 붙이면서, SwiftUI 상태 변경이 지도에 즉시 반영되지 않거나 반대로 지도 이벤트가 상태로 깔끔하게 올라오지 않는 문제가 있었습니다.",
        solution:
          "UIViewRepresentable로 래핑하고, SwiftUI 상태를 기준으로 카메라/마커/선택/필터 흐름을 단방향으로 정리했습니다. 지도 인터랙션은 delegate에서 받아 ViewModel로 전달했습니다.",
        result:
          "SwiftUI 화면 상태와 지도 상태가 일관되게 동기화되어 지도 기반 기능이 안정화되었습니다.",
      },
      {
        title: "PDF 업로드 안정성",
        problem:
          "사용자가 선택한 PDF가 Security-Scoped Resource로 보호되어 직접 접근 시 권한 오류가 발생했고, 서버가 JSON 데이터와 PDF 파일을 함께 요구해 단순 파일 업로드만으로는 요청을 처리할 수 없었습니다.",
        solution:
          "PDF 형식과 최소 크기를 사전 검증하고, Security-Scoped Resource 접근 권한을 획득한 뒤 URL 기반으로 파일을 읽도록 변경했습니다. 이후 Moya Multipart로 JSON 요청과 PDF 파일을 하나의 요청으로 전송하는 구조를 구성했습니다.",
        result:
          "비정상 파일 업로드를 사전에 차단하고 파일 업로드 기능의 안정성과 서버 연동 신뢰성을 높였습니다.",
      },
    ],
    learn: [
      "MVVM으로 역할 분리: 기능 추가/수정 시 영향 범위가 줄고 구조가 명확해졌습니다.",
      "토큰 기반 인증은 세션 유지까지 포함: 만료 체크→재발급→실패 시 로그아웃까지 설계가 필요했습니다.",
      "UIKit SDK 연동의 핵심은 상태 동기화: 이벤트를 ViewModel로 올려 관리하니 기능이 안정화되었습니다.",
      "네트워크 레이어 분리: Service에 디코딩/에러 처리를 모아 화면 코드를 단순화했습니다.",
    ],
  },
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setProjectAccent(projectKey) {
  const page = document.querySelector(
    `.project-page[data-project="${projectKey}"]`
  );
  if (!page) return;
  const accent = page.getAttribute("data-accent") || "#111116";
  page.style.setProperty("--accent", accent);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-show");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(
    () => toast.classList.remove("is-show"),
    1400
  );
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (_) {
    // ignore
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (_) {
    return false;
  }
}

function initScrollLinks() {
  document.querySelectorAll(".scroll-link").forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetSelector =
        el.getAttribute("data-target") || el.getAttribute("href");
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initReveal() {
  const targets = Array.from(document.querySelectorAll(".reveal"));
  if (!targets.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((t) => io.observe(t));
}

function initCopyChips() {
  document.querySelectorAll(".js-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy");
      if (!value) return;
      const ok = await copyText(value);
      showToast(ok ? "복사했습니다" : "복사에 실패했습니다");
    });
  });
}

function initProjectTabs() {
  const tabs = Array.from(document.querySelectorAll(".project-tab"));
  const pages = Array.from(document.querySelectorAll(".project-page"));
  if (!tabs.length || !pages.length) return;
  const projectKeys = new Set(
    pages.map((page) => page.getAttribute("data-project"))
  );
  const scrollToProjects = () => {
    document
      .querySelector("#MainProjects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activate = (key, updateHash = false) => {
    if (!projectKeys.has(key)) key = "snapy";
    tabs.forEach((t) => {
      const active = t.getAttribute("data-project") === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    pages.forEach((p) =>
      p.classList.toggle("is-active", p.getAttribute("data-project") === key)
    );
    setProjectAccent(key);
    if (updateHash && window.location.hash !== `#${key}`) {
      window.history.replaceState(null, "", `#${key}`);
    }
  };

  tabs.forEach((t) => {
    t.addEventListener("click", () =>
      activate(t.getAttribute("data-project"), true)
    );
  });

  const hashProject = window.location.hash.slice(1).toLowerCase();
  const hasInitialProject = projectKeys.has(hashProject);
  activate(hasInitialProject ? hashProject : "snapy");
  if (hasInitialProject) window.requestAnimationFrame(scrollToProjects);
  window.addEventListener("hashchange", () => {
    const nextProject = window.location.hash.slice(1).toLowerCase();
    if (projectKeys.has(nextProject)) {
      activate(nextProject);
      scrollToProjects();
    }
  });
}

function renderModalBody(projectKey, tabKey) {
  const p = PROJECTS[projectKey];
  if (!p) return "";

  const bulletList = (items) =>
    `<ul class="modal-bullet-list">${items
      .map((x) => `<li>${escapeHtml(x)}</li>`)
      .join("")}</ul>`;

  if (tabKey === "overview") {
    const [lead, ...points] = p.overview;
    return `<section class="modal-summary">
      <p class="modal-summary-lead">${escapeHtml(lead)}</p>
      ${bulletList(points)}
    </section>`;
  }
  if (tabKey === "role") {
    return `<section class="modal-summary">
      <p class="modal-section-eyebrow">내가 맡은 일</p>
      ${bulletList(p.role)}
    </section>`;
  }
  if (tabKey === "tech") {
    return `<section class="modal-summary">
      <p class="modal-section-eyebrow">사용 기술과 도구</p>
      <div class="modal-tech-cloud">${p.tech
        .map((x) => `<span>${escapeHtml(x)}</span>`)
        .join("")}</div>
    </section>`;
  }
  if (tabKey === "learn") {
    return `<section class="modal-summary">
      <p class="modal-section-eyebrow">프로젝트에서 배운 점</p>
      ${bulletList(p.learn)}
    </section>`;
  }

  if (tabKey === "preview" && p.preview) {
    return `<section class="modal-preview-gallery">
      <p class="modal-section-eyebrow">${escapeHtml(p.title)} 서비스 미리보기</p>
      <div class="modal-preview-grid">
        ${p.preview
          .map(
            (src, index) => `
              <figure class="modal-preview-item">
                <img src="${escapeHtml(src)}" alt="${escapeHtml(p.title)} 미리보기 ${index + 1}" loading="lazy" />
              </figure>`
          )
          .join("")}
      </div>
    </section>`;
  }

  if (tabKey === "trouble") {
    return p.trouble
      .map(
        (t) => `
          <article class="modal-problem-card">
            <h3>${escapeHtml(t.title)}</h3>
            <div class="modal-problem-grid">
              <section class="modal-problem-block">
                <span class="modal-problem-label">문제</span>
                <p>${escapeHtml(t.problem)}</p>
              </section>
              <section class="modal-problem-block">
                <span class="modal-problem-label">해결</span>
                <p>${escapeHtml(t.solution)}</p>
              </section>
              <section class="modal-problem-block">
                <span class="modal-problem-label">결과</span>
                <p>${escapeHtml(t.result)}</p>
              </section>
            </div>
          </article>
        `
      )
      .join("");
  }

  if (tabKey === "links") {
    const links = [];
    if (p.links.appstore)
      links.push(
        `<a class="btn btn-ghost" href="${escapeHtml(
          p.links.appstore
        )}" target="_blank" rel="noreferrer">App Store</a>`
      );
    if (p.links.github)
      links.push(
        `<a class="btn btn-ghost" href="${escapeHtml(
          p.links.github
        )}" target="_blank" rel="noreferrer">Github</a>`
      );
    if (p.links.figma)
      links.push(
        `<a class="btn btn-ghost" href="${escapeHtml(
          p.links.figma
        )}" target="_blank" rel="noreferrer">Figma</a>`
      );
    if (p.links.demo)
      links.push(
        `<a class="btn btn-ghost" href="${escapeHtml(
          p.links.demo
        )}" target="_blank" rel="noreferrer">발표/시연</a>`
      );
    if (p.links.blog)
      links.push(
        `<a class="btn btn-ghost" href="${escapeHtml(
          p.links.blog
        )}" target="_blank" rel="noreferrer">Blog</a>`
      );
    return `<div class="modal-links">${links.join("")}</div>`;
  }

  return "";
}

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const modalKicker = document.getElementById("modalKicker");
  const modalTitle = document.getElementById("modalTitle");
  const modalPeriod = document.getElementById("modalPeriod");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = modal.querySelector(".js-close-project");
  const tabButtons = Array.from(modal.querySelectorAll(".modal-tab"));

  let currentProject = "qiri";
  let currentTab = "overview";

  const applyAccent = () => {
    const p = PROJECTS[currentProject];
    if (!p) return;
    modal.style.setProperty("--accent", p.accent);
    modal.dataset.project = currentProject;
    modal.querySelector(".modal-title").style.color = p.accent;
  };

  const sync = () => {
    const p = PROJECTS[currentProject];
    if (!p) return;
    const hasPreview = Array.isArray(p.preview) && p.preview.length > 0;
    const previewButton = modal.querySelector('[data-tab="preview"]');
    if (!hasPreview && currentTab === "preview") currentTab = "overview";
    if (previewButton) {
      previewButton.hidden = !hasPreview;
      previewButton.setAttribute("aria-hidden", String(!hasPreview));
    }
    if (modalKicker) modalKicker.textContent = p.kicker;
    if (modalTitle) {
      modalTitle.innerHTML = p.logo
        ? `<img class="modal-title-logo" src="${escapeHtml(
            p.logo
          )}" alt="${escapeHtml(p.title)}" />`
        : escapeHtml(p.title);
    }
    if (modalPeriod) modalPeriod.textContent = p.period;
    if (modalBody)
      modalBody.innerHTML = renderModalBody(currentProject, currentTab);
    applyAccent();

    tabButtons.forEach((b) => {
      const active = b.getAttribute("data-tab") === currentTab;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
  };

  const open = (projectKey, pushHistory = true) => {
    currentProject = projectKey;
    currentTab = "overview";
    sync();
    if (pushHistory && window.location.hash !== `#${projectKey}-detail`) {
      window.history.pushState(
        { projectDetail: projectKey },
        "",
        `#${projectKey}-detail`
      );
    }
    if (typeof modal.showModal === "function") modal.showModal();
  };

  const close = () => {
    if (
      window.location.hash === `#${currentProject}-detail` &&
      window.history.state?.projectDetail === currentProject
    ) {
      window.history.back();
      return;
    }
    if (window.location.hash === `#${currentProject}-detail`) {
      window.history.replaceState(null, "", `#${currentProject}`);
    }
    if (typeof modal.close === "function") modal.close();
  };

  document.querySelectorAll(".js-open-project").forEach((btn) => {
    btn.addEventListener("click", () => open(btn.getAttribute("data-project")));
  });

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTab = btn.getAttribute("data-tab") || "overview";
      sync();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const inDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!inDialog) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.open) close();
  });

  window.addEventListener("popstate", () => {
    if (modal.open) modal.close();
  });

  const initialDetail = window.location.hash
    .slice(1)
    .match(/^(snapy|pacing|qiri|jipchak)-detail$/i);
  if (initialDetail && PROJECTS[initialDetail[1].toLowerCase()]) {
    open(initialDetail[1].toLowerCase(), false);
  }
}

function initPosters() {
  const posters = document.querySelectorAll(".Design-box > div");
  const posterLinks = {
    poster1:
      "https://www.figma.com/design/sKOQ7FC8YnvBdUHCmCdr3X/Liskovs---%EC%9E%90%EC%B7%A8%EC%95%B1?node-id=0-1&t=BvyFlKdzSXx34k1V-1",
    poster2:
      "https://www.figma.com/design/6f4gjhqaMArlxQ8i0bssle/FRAME---%EB%B0%94%EC%9D%B4%EB%8B%90?node-id=344-469&t=a9bKOweibMZPWoFs-1",
    poster3:
      "https://www.figma.com/design/FYp5kLyspWLK00PFUZFEnx/%EB%82%98%EC%9D%B4%ED%82%A4?node-id=0-1&t=PXSlVR525xoJc6FV-1",
  };

  posters.forEach((poster) => {
    const overlay = poster.querySelector(".overlay");
    if (!overlay) return;

    poster.addEventListener("mousemove", (e) => {
      const rect = poster.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = (x / rect.width - 0.5) * 70;
      const rotateX = (y / rect.height - 0.5) * -70;
      poster.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      overlay.style.backgroundPosition = `${px}% ${py}%`;
    });

    poster.addEventListener("mouseleave", () => {
      poster.style.transition = "transform 0.5s ease";
      poster.style.transform = "rotate(10deg)";
    });

    poster.addEventListener("click", () => {
      const key = Array.from(poster.classList).find((name) =>
        Object.hasOwn(posterLinks, name)
      );
      const href = key ? posterLinks[key] : null;
      if (href) {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    });

    poster.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const key = Array.from(poster.classList).find((name) =>
          Object.hasOwn(posterLinks, name)
        );
        const href = key ? posterLinks[key] : null;
        if (href) {
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }
    });
  });
}

function initHeroGradientMotion() {
  // 전역(헤더 포함) 포인터 트래킹
  const overlay =
    document.querySelector("#hero .hero-overlay") ||
    document.querySelector(".hero-overlay");
  if (!overlay) return;

  // 요청: “마우스 따라오는 것” 제거
  // CSS 애니메이션(heroGlowFloat)만 사용하고, 포인터 이벤트는 붙이지 않습니다.
  overlay.style.setProperty("--hx", "22%");
  overlay.style.setProperty("--hy", "26%");
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollLinks();
  initReveal();
  initCopyChips();
  initProjectTabs();
  initProjectModal();
  initPosters();
  initHeroGradientMotion();
});
