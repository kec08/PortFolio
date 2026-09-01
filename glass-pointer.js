(() => {
  const cursor = document.createElement('span');
  cursor.className = 'universal-glass-cursor is-visible';
  cursor.setAttribute('aria-hidden', 'true');
  document.documentElement.append(cursor);
  document.documentElement.classList.add('has-glass-pointer');
  document.body.classList.add('has-glass-pointer');

  let activeTarget = null;
  let clearTimer = 0;

  const syncTopLayer = () => {
    const openDialog = document.querySelector('dialog[open]');
    (openDialog || document.documentElement).append(cursor);
    // 모달이 열릴 때 이전 프로젝트 카드의 큰 매핑 영역이 모달을 덮지 않게 합니다.
    if (openDialog) {
      activeTarget = null;
      cursor.classList.remove('is-targeting', 'is-header-target', 'is-theme-target');
      cursor.style.removeProperty('--target-width');
      cursor.style.removeProperty('--target-height');
      cursor.style.removeProperty('--target-radius');
    }
  };
  new MutationObserver(syncTopLayer).observe(document.documentElement, {
    subtree: true,
    attributes: true,
    attributeFilter: ['open']
  });
  syncTopLayer();

  const mappedTargets = '.project-gallery-card, .project-row, .sub-card, .activity-card, .about-detail-trigger, .modal-detail-link, .modal-quick-link, .modal-close, .detail-link, .links a, .contact-phone, .topbar a, .topbar-theme-toggle, .theme, .project-theme-toggle, header > a, header nav a, .back';

  const clearTarget = () => {
    activeTarget = null;
    cursor.classList.remove('is-targeting', 'is-header-target', 'is-theme-target');
    cursor.style.removeProperty('--target-width');
    cursor.style.removeProperty('--target-height');
    cursor.style.removeProperty('--target-radius');
  };

  // 커서는 열린 dialog의 top layer 안에서 렌더링되며, absolute 자식의
  // 기준점은 dialog 박스입니다. 화면 좌표를 dialog 좌표로 변환합니다.
  const setCursorPoint = (clientX, clientY) => {
    const dialog = cursor.closest('dialog[open]');
    if (dialog) {
      const dialogRect = dialog.getBoundingClientRect();
      cursor.style.left = `${clientX - dialogRect.left}px`;
      cursor.style.top = `${clientY - dialogRect.top}px`;
      return;
    }
    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;
  };

  const mapToTarget = (target) => {
    const rect = target.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    activeTarget = target;
    setCursorPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    const isHeaderControl = target.matches('.topbar a, .topbar-theme-toggle, .theme, .project-theme-toggle, header > a, header nav a, .back');
    const isActionButton = target.matches('.btn, .modal-detail-link, .modal-quick-link, .modal-close, .detail-link, .about-detail-trigger');
    cursor.style.setProperty('--target-width', `${rect.width + (isHeaderControl ? 14 : isActionButton ? 12 : 8)}px`);
    cursor.style.setProperty('--target-height', `${rect.height + (isHeaderControl ? 10 : isActionButton ? 10 : 8)}px`);
    const radius = target.matches('.project-gallery-card') ? '30px'
      : target.matches('.project-row, .sub-card, .activity-card') ? '20px' : '999px';
    cursor.style.setProperty('--target-radius', radius);
    cursor.classList.toggle('is-header-target', isHeaderControl);
    cursor.classList.toggle('is-theme-target', target.matches('.topbar-theme-toggle'));
    cursor.classList.add('is-targeting');
  };

  const move = (event) => {
    if (activeTarget && activeTarget.contains(event.target)) {
      mapToTarget(activeTarget);
      return;
    }
    setCursorPoint(event.clientX, event.clientY);
  };

  addEventListener('pointermove', move, { passive: true });
  addEventListener('scroll', () => { if (activeTarget) mapToTarget(activeTarget); }, { passive: true });
  addEventListener('resize', () => { if (activeTarget) mapToTarget(activeTarget); }, { passive: true });
  addEventListener('pointerleave', () => { clearTarget(); cursor.classList.remove('is-visible'); }, { passive: true });
  addEventListener('pointerenter', () => cursor.classList.add('is-visible'), { passive: true });

  document.addEventListener('pointerover', (event) => {
    const target = event.target.closest(mappedTargets);
    const themeToggle = event.target.closest('.topbar-theme-toggle');
    if (themeToggle && window.matchMedia('(max-width: 900px)').matches) {
      // 모바일 테마 버튼은 원형 글래스 커서가 아이콘을 가리지 않도록 제외합니다.
      window.clearTimeout(clearTimer);
      clearTarget();
      cursor.classList.add('is-theme-target');
    }
    else if (target) {
      window.clearTimeout(clearTimer);
      mapToTarget(target);
    }
    else if (event.target.closest('a, button, [role="button"]')) cursor.classList.add('is-hovering');

    const card = event.target.closest('.project-gallery-card, .project-row');
    if (card) card.classList.add('is-glass-selected');
  });

  document.addEventListener('pointerout', (event) => {
    if (activeTarget && !activeTarget.contains(event.relatedTarget)) {
      // 인접 프로젝트로 이동할 때 원형으로 되돌아가는 깜빡임을 막습니다.
      window.clearTimeout(clearTimer);
      clearTimer = window.setTimeout(clearTarget, 90);
    }
    const target = event.target.closest('a, button, [role="button"]');
    if (target?.matches('.topbar-theme-toggle') && !target.contains(event.relatedTarget)) {
      cursor.classList.remove('is-theme-target');
    }
    if (target && !target.contains(event.relatedTarget) && !activeTarget) cursor.classList.remove('is-hovering');
    const card = event.target.closest('.project-gallery-card, .project-row');
    if (card && !card.contains(event.relatedTarget)) card.classList.remove('is-glass-selected');
  });
})();
