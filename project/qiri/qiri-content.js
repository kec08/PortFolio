document.addEventListener("DOMContentLoaded", () => {
  const summary = document.querySelector("[data-summary]");
  if (summary) {
    summary.innerHTML = "Siri의 맥락 없는 답변 문제에서 출발해, 손 제스처와<br>음성으로 빠르게 질문하는 Apple Watch용<br>AI 에이전트입니다.";
  }

  const roleList = document.querySelector("[data-role]");
  if (!roleList) return;

  roleList.innerHTML = [
    "iOS·watchOS 화면을 분리하고 Combine 기반 단방향 상태 관리로 공통 비즈니스 로직을 유지",
    "Moya TargetType으로 Apple 로그인 API를 분리하고 apple_user_id 기반 인증 구현",
    "WatchConnectivity의 isReachable 확인·재시도·updateApplicationContext 백업 동기화 구성",
    "URLSession dataTask로 AI 응답을 청크 단위 수신·버퍼링하고 완성된 문장부터 Watch에 반영",
  ].map((item) => `<li>${item}</li>`).join("");
});
