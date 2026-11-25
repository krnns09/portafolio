/* ============================================================
   KePro — Arranque
   Orden: render del contenido → scroll → interacciones.
   ============================================================ */

(function () {
  "use strict";

  function boot() {
    try {
      KPRender.all();
    } catch (err) {
      console.error("[KePro] Error al renderizar el contenido:", err);
    }

    /* Cada página carga sólo los módulos que necesita.
       Se usa typeof porque un `const` de nivel superior no queda
       colgado de window y `window.KPForm` sería siempre undefined. */
    try {
      if (typeof KPForm !== "undefined") KPForm.init();
    } catch (err) {
      console.error("[KePro] Error al iniciar la página:", err);
    }

    /* El scroll se inicia al final: el observador del reveal tiene que
       ver el contenido ya pintado. */
    try {
      KPScroll.init();
      KPUI.init();
      if (typeof KPViewer !== "undefined") KPViewer.init();
    } catch (err) {
      console.error("[KePro] Error al iniciar las interacciones:", err);
    }

    document.documentElement.classList.add("is-ready");

    // Si se entra con un ancla en la URL, coloca la sección activa al cargar
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        window.requestAnimationFrame(function () {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        });
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
