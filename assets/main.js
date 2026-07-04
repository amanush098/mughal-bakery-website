document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('navToggleBtn');
  var nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu after a link is tapped
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close the menu if the viewport is resized back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
