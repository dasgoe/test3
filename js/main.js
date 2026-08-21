document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.querySelector('.mobile-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var isOpen = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ---- cookie consent (nodig zolang Clarity-analytics gebruikt wordt) ----
  var CONSENT_KEY = 'dasgoe-cookie-consent'; // waarde: "accepted" | "refused"
  var banner = document.querySelector('.cookie-banner');
  var acceptBtn = document.querySelector('.cookie-accept');
  var refuseBtn = document.querySelector('.cookie-refuse');

  function loadClarity() {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'y5v7pg6raf');
  }

  var consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'accepted') {
    loadClarity();
  } else if (consent !== 'refused' && banner) {
    banner.classList.add('visible');
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      banner.classList.remove('visible');
      loadClarity();
    });
  }
  if (refuseBtn) {
    refuseBtn.addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'refused');
      banner.classList.remove('visible');
    });
  }
});
