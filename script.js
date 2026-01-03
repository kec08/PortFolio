/* global document, window, navigator */

const PROJECTS = {
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
      "손 제스처만으로 AI에게 질문하고, 원하는 정보를 빠르게 받는 Apple Watch용 AI 에이전트입니다.",
      "Siri의 맥락 불일치/링크 제공 중심 경험의 불편함에서 출발했습니다.",
      "iOS / watchOS 앱을 분리 구성해 상황에 맞는 디바이스에서 사용하도록 설계했습니다.",
    ],
    role: [
      "iOS·watchOS 공통 구조 설계 (SwiftUI 기반 화면 구성 및 상태 흐름 설계)",
      "Apple 로그인 구현 (AuthenticationServices 기반 인증 플로우 설계)",
      "iPhone ↔ Apple Watch 통신 구현 (WatchConnectivity, reachable/실패 케이스 고려)",
      "서버 연동 및 스트리밍 응답 UI 처리 (URLSession 스트리밍 수신 → 실시간 반영)",
    ],
    tech: [
      "Swift / SwiftUI: 선언적 UI 기반 화면 구성",
      "WatchOS: Apple Watch 전용 UX 및 제스처 기반 인터랙션",
      "WatchConnectivity: iPhone ↔ Watch 데이터/메시지 통신",
      "Combine: 선언적 상태 관리 및 데이터 흐름",
      "URLSession: 네트워크 통신 및 스트리밍 응답 처리",
      "Moya: 네트워크 계층 추상화 및 API 관리",
    ],
    trouble: [
      {
        title: "AssistiveTouch 제스처 충돌",
        problem:
          "기본 AssistiveTouch 제스처가 앱 내부 제스처 흐름과 충돌하여 화면 전환이 정상 동작하지 않는 문제가 발생했습니다.",
        solution:
          "AssistiveTouch 동작 방식을 분석한 뒤, 시스템 기본 설정을 그대로 쓰지 않고 앱 전용 커스텀 AssistiveTouch 구성을 적용했습니다.",
        result:
          "앱 내부 제스처 플로우를 안정적으로 유지하면서 접근성 기능을 “제한”이 아니라 “활용” 방향으로 문제를 해결했습니다.",
      },
      {
        title: "스트리밍 AI 응답 가독성 저하",
        problem:
          "토큰/문장 조각 단위로 순차 도착하는 텍스트가 중간 단계에서 끊겨 보이며, 리스트/소제목 구조가 깨져 읽기 어려웠습니다.",
        solution:
          "수신 텍스트를 누적한 뒤 줄바꿈/불릿/소제목 기준으로 표시 단위를 후처리하여, 의미 단위가 어느 정도 완성되었을 때만 UI에 반영했습니다.",
        result:
          "실시간성은 유지하면서도 목록형 콘텐츠를 안정적으로 표현했고, “읽기 쉬운 정보 전달” 중심의 UX 중요성을 체감했습니다.",
      },
    ],
    learn: [
      "인증 플로우는 보안과 UX의 균형 문제: 심사 기준/신뢰/데이터 보존 전략까지 함께 고려해야 했습니다.",
      "플랫폼 특화 UX: Apple Watch는 한 순간에 하나의 명확한 행동을 제공하는 UX가 핵심임을 체감했습니다.",
      "선언적 상태 관리: Combine 기반 상태 바인딩으로 가독성/유지보수/디버깅 효율이 개선되었습니다.",
      "실시간 처리 경험: 데이터 구조화와 UI 표현을 분리해야 한다는 관점을 얻었습니다.",
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
      "주거 선택부터 계약/입주 이후까지의 부담을 줄이는 통합 주거 지원 플랫폼입니다.",
      "매물 등록 → 문서 업로드 → AI 분석 → 결과 시각화까지 단일 흐름으로 완성했습니다.",
      "대출 가이드/매물 분석/체크리스트 기능을 하나의 앱으로 통합했습니다.",
    ],
    role: [
      "SwiftUI 탭 피처 단위 화면 구성",
      "MVVM 구조로 View–ViewModel–Model 역할 분리 설계",
      "Combine 기반 상태 관리(@Published)로 입력 검증/로딩/에러 흐름 연결",
      "Moya로 로그인/회원가입 API 연동 및 토큰(Access/Refresh) 재발급 처리",
      "네이버 지도 SDK(UIKit) → UIViewRepresentable로 SwiftUI 연동 및 상태 동기화",
      "PDF 업로드/멀티파트 요청(Moya)로 매물 분석 API 연동",
    ],
    tech: [
      "Swift / SwiftUI: 선언적 UI 기반 화면 구성",
      "MVVM: 역할 분리로 유지보수성 강화",
      "Combine: 상태 관리 및 데이터 흐름 처리",
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
          "환경에 따라 파일 접근 권한(보안 스코프), 손상 파일, 너무 작은 파일 등으로 업로드 실패/서버 오류가 발생했습니다.",
        solution:
          "업로드 전 PDF 헤더(%PDF-) 및 최소 크기 검증으로 잘못된 파일을 사전 차단하고, 임시 파일 생성 후 URL 기반 업로드로 접근 이슈를 줄였습니다.",
        result:
          "분석 플로우가 안정화되고, 로그 기반으로 원인을 빠르게 추적할 수 있게 되었습니다.",
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

  const activate = (key) => {
    tabs.forEach((t) => {
      const active = t.getAttribute("data-project") === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    pages.forEach((p) =>
      p.classList.toggle("is-active", p.getAttribute("data-project") === key)
    );
    setProjectAccent(key);
  };

  tabs.forEach((t) => {
    t.addEventListener("click", () => activate(t.getAttribute("data-project")));
  });

  activate("qiri");
}

function renderModalBody(projectKey, tabKey) {
  const p = PROJECTS[projectKey];
  if (!p) return "";

  const list = (items) =>
    `<ul>${items.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;

  if (tabKey === "overview") return list(p.overview);
  if (tabKey === "role") return list(p.role);
  if (tabKey === "tech") return list(p.tech);
  if (tabKey === "learn") return list(p.learn);

  if (tabKey === "trouble") {
    return p.trouble
      .map(
        (t) => `
          <h3>${escapeHtml(t.title)}</h3>
          <ul>
            <li><b>문제</b>: ${escapeHtml(t.problem)}</li>
            <li><b>해결</b>: ${escapeHtml(t.solution)}</li>
            <li><b>결과</b>: ${escapeHtml(t.result)}</li>
          </ul>
        `
      )
      .join("");
  }

  if (tabKey === "links") {
    const links = [];
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
    modal.querySelector(".modal-title").style.color = p.accent;
  };

  const sync = () => {
    const p = PROJECTS[currentProject];
    if (!p) return;
    if (modalKicker) modalKicker.textContent = p.kicker;
    if (modalTitle) modalTitle.textContent = p.title;
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

  const open = (projectKey) => {
    currentProject = projectKey;
    currentTab = "overview";
    sync();
    if (typeof modal.showModal === "function") modal.showModal();
  };

  const close = () => {
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
}

function initPosters() {
  const posters = document.querySelectorAll(".Design-box > div");
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
      overlay.style.opacity = overlay.style.opacity === "1" ? "0" : "1";
    });

    poster.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        overlay.style.opacity = overlay.style.opacity === "1" ? "0" : "1";
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
