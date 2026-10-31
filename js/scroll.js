/* ============================================================
   KePro — Experiencia de scroll
   Reveal · Barra de progreso · Sección activa · Parallax · Navbar
   Un solo bucle rAF para todo lo que depende del scroll.
   ============================================================ */

const KPScroll = (function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let bar = null;
  let nav = null;
  let parallaxItems = [];
  let ticking = false;

  /* ---------------------------------------------- Scroll reveal */
  function initReveal() {
    const targets = document.querySelectorAll("[data-reveal]");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------- Sección activa */
  function initActiveSection() {
    const sections = document.querySelectorAll("[data-section]");
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { io.observe(s); });
  }

  function setActive(id) {
    document.querySelectorAll("[data-nav]").forEach(function (el) {
      el.classList.toggle("is-active", el.dataset.nav === id);
    });
    document.querySelectorAll("[data-nav-mobile]").forEach(function (el) {
      el.classList.toggle("is-active", el.dataset.navMobile === id);
    });
    document.querySelectorAll("[data-rail]").forEach(function (el) {
      const on = el.dataset.rail === id;
      el.classList.toggle("is-active", on);
      if (on) el.setAttribute("aria-current", "true");
      else el.removeAttribute("aria-current");
    });
  }

  /* --------------------------------------------------- Bucle rAF */
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  function update() {
    const y = window.scrollY || window.pageYOffset;

    /* Progreso */
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(y / max, 1) : 0;
      bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
    }

    /* Navbar compacta */
    if (nav) nav.classList.toggle("is-stuck", y > 40);

    /* Parallax de capas decorativas */
    if (!reduceMotion) {
      const mid = window.innerHeight / 2;
      for (let i = 0; i < parallaxItems.length; i++) {
        const el = parallaxItems[i];
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > window.innerHeight + 300) continue;
        const offset = (mid - (rect.top + rect.height / 2)) * el._kpSpeed;
        el.style.transform = el._kpBase + " translate3d(0," + offset.toFixed(1) + "px,0)";
      }
    }

    ticking = false;
  }

  /* ------------------------------------------------------- Init */
  function init() {
    bar = document.querySelector("[data-progress-bar]");
    nav = document.querySelector("[data-nav-bar]");

    parallaxItems = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    parallaxItems.forEach(function (el) {
      el._kpSpeed = parseFloat(el.dataset.parallax) || 0.1;
      el._kpBase = el.dataset.parallaxBase || "";
      el.style.willChange = "transform";
    });

    initReveal();
    initActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  return { init: init, reduceMotion: reduceMotion };
})();
