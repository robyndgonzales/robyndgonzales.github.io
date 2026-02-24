/* ═══════════════════════════════════════
   MOBILE HAMBURGER / DRAWER
═══════════════════════════════════════ */
(function () {
  const hamburger    = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const overlay      = document.getElementById('drawerOverlay');

  if (!hamburger || !mobileDrawer || !overlay) return;

  function openDrawer() {
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-active');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-active');
    document.body.classList.remove('drawer-open');
  }

  function toggleDrawer() {
    const isOpen = mobileDrawer.classList.contains('is-open');
    isOpen ? closeDrawer() : openDrawer();
  }

  hamburger.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Close drawer when a drawer link is clicked (SPA-style navigation)
  mobileDrawer.querySelectorAll('.drawer-link').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });
})();