document.addEventListener('DOMContentLoaded', function () {

  // ===== Sticky header shadow on scroll =====
  var header = document.getElementById('header');
  function handleHeaderScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // ===== Hamburger mobile menu =====
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // ===== Scroll reveal animations =====
  var animatedItems = document.querySelectorAll('[data-aos]');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    animatedItems.forEach(function (item) {
      item.classList.add('aos-visible');
    });
  }

  // ===== Footer year =====
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
