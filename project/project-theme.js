const THEME_STORAGE_KEY = 'portfolio-theme';

try {
  if (window.localStorage.getItem(THEME_STORAGE_KEY) === 'light') {
    document.body.classList.add('is-light-theme');
  }
} catch (_) {
  // localStorage를 사용할 수 없는 환경에서도 페이지 테마 전환은 유지합니다.
}

const themeToggle = document.querySelector('[data-project-theme-toggle]');

if (themeToggle) {
  const syncThemeButton = () => {
    const isLight = document.body.classList.contains('is-light-theme');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? '다크 모드로 변경' : '화이트 모드로 변경');

    // 모바일에서는 기존 텍스트 태양/달 스타일이 중복될 수 있어 실제 심볼만 유지합니다.
    if (window.matchMedia('(max-width: 900px)').matches) {
      themeToggle.style.setProperty(
        'background',
        `transparent url("../img/${isLight ? 'sun-black.svg' : 'moon.png'}") center / 20px 20px no-repeat`,
        'important'
      );
      themeToggle.style.setProperty('color', 'transparent', 'important');
      themeToggle.style.setProperty('font-size', '0', 'important');
    }
  };

  themeToggle.addEventListener('click', (event) => {
    event.preventDefault();
    const isLight = document.body.classList.toggle('is-light-theme');
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, isLight ? 'light' : 'dark');
    } catch (_) {
      // 저장이 불가능한 환경에서는 현재 페이지에서만 상태를 변경합니다.
    }
    syncThemeButton();
  });

  syncThemeButton();
}
