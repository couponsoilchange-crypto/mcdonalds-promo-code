document.addEventListener('DOMContentLoaded', function () {

  /* 1. Mobile nav toggle */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* 2. Filter chips — filter .deal-card by data-tags */
  var chips = document.querySelectorAll('.filter-chip');
  var cards = document.querySelectorAll('.deal-card');
  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        var filter = chip.getAttribute('data-filter');
        cards.forEach(function (card) {
          var tags = (card.getAttribute('data-tags') || '').split(' ');
          var show = filter === 'all' || tags.indexOf(filter) !== -1;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* 3. FAQ accordion */
  var faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (answer) {
        if (expanded) {
          answer.setAttribute('hidden', '');
        } else {
          answer.removeAttribute('hidden');
        }
      }
    });
  });

});
