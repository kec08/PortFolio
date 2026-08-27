const DETAIL_LINKS = {
  snapy: [
    { label: "App Store", href: "https://apps.apple.com/kr/app/%EC%8A%A4%EB%82%B4%ED%94%BC-snapy/id6761876306", icon: "apple" },
    { label: "GitHub", href: "https://github.com/2026-snapy/SNAPY_iOS", icon: "github" },
    { label: "Figma", href: "https://www.figma.com/design/X3YFCzXVcM173oBQCoGf0c/3%ED%95%99%EB%85%84-%EC%BA%A1%EC%8A%A4%ED%86A4?node-id=36-3&t=tiKIu10uXv7cSs5G-1", icon: "figma" },
    { label: "시연 영상", href: "https://youtube.com/shorts/THLN_q6rfBg?si=QTnbH3gTbxNAy-b4", icon: "youtube" },
  ],
  qiri: [
    { label: "GitHub", href: "https://github.com/kec08/QiriUpdate", icon: "github" },
    { label: "Figma", href: "https://www.figma.com/design/dUoKwh8ulwY4H6TF49P7eZ/Qiri_2025-1%ED%95%99%EA%B8%B0-%EC%BA%A1%EC%8A%A4%ED%86%B4?node-id=0-1", icon: "figma" },
    { label: "시연 영상", href: "https://youtu.be/rTH4DSMs_nk?si=3sqZBFgG9DJUZnfB", icon: "youtube" },
  ],
  jipchak: [
    { label: "App Store", href: "https://apps.apple.com/kr/app/%EC%A7%91%EC%B0%A9/id6757211728", icon: "apple" },
    { label: "GitHub", href: "https://github.com/gbsw-liskov/Capstone-IOS", icon: "github" },
    { label: "Figma", href: "https://www.figma.com/design/sKOQ7FC8YnvBdUHCmCdr3X/Liskovs---%EC%9E%90%EC%B7%A8%EC%95%B1?node-id=794-3746&t=G3jLKXZGDED0oPGA-1", icon: "figma" },
    { label: "시연 영상", href: "https://youtu.be/vIUcH8E60pg?si=FS7nKiLLC_Ti2CTS", icon: "youtube" },
  ],
  pacing: [
    { label: "App Store", href: "https://apps.apple.com/kr/app/pacing/id6784299290", icon: "apple" },
    { label: "GitHub", href: "https://github.com/kec08/Pacing", icon: "github" },
    { label: "Blog", href: "https://blog.naver.com/ssilvv/224382783055", icon: "blog" },
  ],
};

const detailLinks = DETAIL_LINKS[document.body.dataset.project];
const detailLinksTarget = document.querySelector("[data-detail-links]");

if (detailLinksTarget && detailLinks) {
  const iconMarkup = (type) => {
    if (type === "apple") return '<span class="detail-link-icon detail-link-icon--apple" aria-hidden="true"></span>';
    if (type === "blog") return '<span class="detail-link-icon detail-link-icon--blog" aria-hidden="true">B</span>';
    const source = type === "figma" ? "https://cdn.simpleicons.org/figma" : type === "github" ? "https://cdn.simpleicons.org/github" : "https://cdn.simpleicons.org/youtube";
    return `<img class="detail-link-icon" src="${source}" alt="" aria-hidden="true" />`;
  };

  detailLinksTarget.innerHTML = detailLinks
    .map((link) => `<a class="detail-link" href="${link.href}" target="_blank" rel="noreferrer">${iconMarkup(link.icon)}<span>${link.label}</span></a>`)
    .join("");
}
