/* ══════════════════════════════════
   THEME TOGGLE — Shared Script
══════════════════════════════════ */
(function () {
  'use strict';

  /* Apply saved theme immediately to avoid flash */
  var saved = localStorage.getItem('rdg-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  function updateIcons(theme) {
    /* icon-sun / icon-moon */
    document.querySelectorAll('.icon-sun').forEach(function (el) {
      el.style.display = theme === 'dark' ? 'block' : 'none';
    });
    document.querySelectorAll('.icon-moon').forEach(function (el) {
      el.style.display = theme === 'dark' ? 'none' : 'block';
    });
    /* theme-icon-moon / theme-icon-sun (alternate naming) */
    document.querySelectorAll('.theme-icon-moon').forEach(function (el) {
      el.style.display = theme === 'dark' ? 'block' : 'none';
    });
    document.querySelectorAll('.theme-icon-sun').forEach(function (el) {
      el.style.display = theme === 'dark' ? 'none' : 'block';
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rdg-theme', theme);
    updateIcons(theme);
    var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    document.querySelectorAll('.theme-toggle, .drawer-theme-btn').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
    });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* Remove duplicate nav theme-toggle buttons — keep only the first */
    var navToggles = document.querySelectorAll('nav .theme-toggle');
    if (navToggles.length > 1) {
      for (var i = 1; i < navToggles.length; i++) {
        navToggles[i].parentNode.removeChild(navToggles[i]);
      }
    }

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
    document.querySelectorAll('.drawer-theme-btn').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });

    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current);
  });
})();
