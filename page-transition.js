(() => {
  const header = document.querySelector('.nav, body > header, html > header');
  if (header) {
    header.classList.add('page-shared-header');
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
