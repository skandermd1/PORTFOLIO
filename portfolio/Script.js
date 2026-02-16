(function () {
  "use strict";

  // ----- Year in footer -----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Nav scroll hide/show -----
  var nav = document.getElementById("nav");
  var lastScroll = 0;
  var navHeight = 72;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (y > navHeight) nav.classList.add("scrolled"); else nav.classList.remove("scrolled");
    if (y > lastScroll && y > 200) nav.classList.add("hidden");
    else nav.classList.remove("hidden");
    lastScroll = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // ----- Mobile nav toggle -----
  var navToggle = document.getElementById("navToggle");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
    });
    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ----- Cursor glow (desktop only) -----
  var cursorGlow = document.getElementById("cursorGlow");
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.body.addEventListener("mousemove", function (e) {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
      cursorGlow.style.opacity = "1";
    });
    document.body.addEventListener("mouseleave", function () {
      cursorGlow.style.opacity = "0";
    });
  }

  // ----- Scroll-triggered animations -----
  var animated = document.querySelectorAll("[data-animate]");
  var observerOptions = { root: null, rootMargin: "0px 0px -80px 0px", threshold: 0.1 };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animated.forEach(function (el) {
    observer.observe(el);
  });

  // ----- Stagger children (e.g. cert cards, lang cards) -----
  var staggerContainers = document.querySelectorAll(".certs-grid, .lang-cards, .projects-list");
  staggerContainers.forEach(function (container) {
    var children = container.querySelectorAll("[data-animate]");
    children.forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.08) + "s";
    });
  });

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute("href");
    if (id === "#") return;
    var target = document.querySelector(id);
    if (target) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
})();
