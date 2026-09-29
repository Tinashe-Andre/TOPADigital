// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('nav .links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Highlight the current page in the nav
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav .links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // Footer year
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form (no backend wired up yet — swap this for a real endpoint)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-status');
      if (note) {
        note.textContent = "Thanks — this form isn't connected to an inbox yet. Email us directly at hello@topa.digital for now.";
      }
    });
  }
});
