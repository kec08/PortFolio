(() => {
  const header = document.querySelector('.nav, body > header, html > header');
  if (header) {
    header.classList.add('page-shared-header');
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    header.querySelectorAll('nav a[href]').forEach((anchor) => {
      const destination = new URL(anchor.href, window.location.href);
      const destinationPath = destination.pathname.replace(/\/$/, '') || '/';
      const isHome = currentPath === '/' && destinationPath === '/index.html';
      const isCurrent = destination.origin === window.location.origin && (destinationPath === currentPath || isHome);
      anchor.classList.toggle('is-current', isCurrent);
      if (isCurrent) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
    const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 36);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }
  const isInternal = (anchor) => {
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || anchor.target === '_blank' || anchor.hasAttribute('download')) return false;
    const destination = new URL(anchor.href, window.location.href);
    return destination.origin === window.location.origin || destination.protocol === 'file:';
  };
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (!anchor || !isInternal(anchor) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const destination = new URL(anchor.href, window.location.href);
    if (destination.href === window.location.href) return;
    event.preventDefault();
    document.body.classList.add('is-page-leaving');
    window.setTimeout(() => { window.location.href = destination.href; }, 390);
  });
})();
