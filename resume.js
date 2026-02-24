/* ════════════════════════════════
   RESUME PAGE — resume.js
════════════════════════════════ */

/* ── PDF Download ── */
function triggerDownload() {
  const btn      = document.getElementById('downloadBtn');
  const fab      = document.getElementById('fabBtn');
  const label    = btn.querySelector('.download-btn-label');
  const original = label.textContent;

  // Loading state
  label.textContent = 'Downloading…';
  btn.disabled = true;
  fab.disabled = true;
  btn.classList.add('is-loading');
  fab.classList.add('is-loading');

  try {
    const link = document.createElement('a');
    link.href     = 'RDG_RESUME.pdf';
    link.download = 'RDG_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    label.textContent = '✓ Downloaded!';
    btn.classList.remove('is-loading');
    fab.classList.remove('is-loading');
    setTimeout(() => {
      label.textContent = original;
      btn.disabled = false;
      fab.disabled = false;
    }, 2500);
  } catch (err) {
    label.textContent = 'Error — retry';
    btn.disabled = false;
    fab.disabled = false;
    btn.classList.remove('is-loading');
    fab.classList.remove('is-loading');
    setTimeout(() => { label.textContent = original; }, 2000);
  }
}

document.getElementById('downloadBtn').addEventListener('click', triggerDownload);
document.getElementById('fabBtn').addEventListener('click', triggerDownload);

/* ── Scroll-reveal entries ── */
const entries = document.querySelectorAll('.rm-entry, .rm-cert-item, .rm-section');
const revealObserver = new IntersectionObserver((list) => {
  list.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.setProperty('--reveal-i', i);
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
entries.forEach(el => revealObserver.observe(el));

/* ── FAB show after scroll ── */
const fab = document.getElementById('fabBtn');
window.addEventListener('scroll', () => {
  fab.classList.toggle('fab-visible', window.scrollY > 300);
}, { passive: true });