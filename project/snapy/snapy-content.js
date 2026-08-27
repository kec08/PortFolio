document.addEventListener("DOMContentLoaded", () => {
  const roleList = document.querySelector("[data-role]");
  if (!roleList) return;

  roleList.insertAdjacentHTML(
    "beforeend",
    "<li>Universal Link와 커스텀 스킴을 DeepLinkRouter에서 처리해 앨범·스토리·프로필로 자연스럽게 진입하도록 구현했습니다.</li>"
  );

  const keywords = /AVCaptureMultiCamSession|DeepLinkRouter|TestFlight/gu;
  roleList.querySelectorAll("li").forEach((item) => {
    item.innerHTML = item.textContent.replace(keywords, "<strong>$&</strong>");
  });
});
