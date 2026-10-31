/* ============================================================
   KePro — Interacciones de interfaz
   Menú móvil · Filtros de IA · Preview flotante de desarrollo
   ============================================================ */

const KPUI = (function () {
  "use strict";

  /* ------------------------------------------------ Menú móvil */
  function initMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.getElementById("menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("is-locked", open);
      // El foco se queda en el botón: el menú va justo después en el DOM,
      // así que al tabular se entra en él sin forzar un anillo de foco
      // sobre el primer enlace al abrirlo con el dedo o el ratón.
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Al pasar a escritorio el menú móvil deja de tener sentido
    window.matchMedia("(min-width: 961px)").addEventListener("change", function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ------------------------- Ventanas con una página web dentro */
  function initSiteWindows() {
    const list = document.getElementById("site-list");
    if (!list) return;

    list.addEventListener("click", function (e) {
      const shield = e.target.closest("[data-site-shield]");
      if (shield) shield.closest("[data-site-window]").classList.add("is-live");
    });

    // Con ratón la capa vuelve al salir; en táctil, al tocar fuera de la ventana
    list.querySelectorAll("[data-site-window]").forEach(function (win) {
      win.addEventListener("pointerleave", function (e) {
        if (e.pointerType === "mouse") win.classList.remove("is-live");
      });
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-site-window]")) return;
      list.querySelectorAll(".is-live").forEach(function (win) {
        win.classList.remove("is-live");
      });
    });
  }

  /* --------------------------------- Un solo video a la vez */
  function initVideos() {
    // "play" no burbujea: se escucha en la fase de captura
    document.addEventListener("play", function (e) {
      document.querySelectorAll("video").forEach(function (video) {
        if (video !== e.target) video.pause();
      });
    }, true);
  }

  function init() {
    initMenu();
    initSiteWindows();
    initVideos();
  }

  return { init: init };
})();
