(function () {
  "use strict";

  // Year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav scroll
  var nav = document.getElementById("nav");
  var lastScroll = 0;
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    nav.classList.toggle("hidden", y > lastScroll && y > 200);
    lastScroll = y;
  }, { passive: true });

  // Mobile nav
  var navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Cursor glow
  var glow = document.getElementById("cursorGlow");
  if (glow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", function (e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
      glow.style.opacity = "1";
    });
    document.addEventListener("mouseleave", function () { glow.style.opacity = "0"; });
  }

  // Scroll animations
  document.body.classList.add("js-ready");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -60px 0px", threshold: 0.1 });

  document.querySelectorAll("[data-animate]").forEach(function (el, i) {
    el.style.transitionDelay = (i % 6 * 0.07) + "s";
    observer.observe(el);
  });

  // Project tabs filter
  var tabBtns = document.querySelectorAll(".tab-btn");
  var projectCards = document.querySelectorAll(".project-card");

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var tab = btn.getAttribute("data-tab");
      projectCards.forEach(function (card) {
        var cat = card.getAttribute("data-category");
        card.classList.toggle("hidden", tab !== "all" && cat !== tab);
      });
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var target = document.querySelector(a.getAttribute("href"));
    if (target) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });

})();
