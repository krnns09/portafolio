/* ============================================================
   KePro — Visor 3D
   Carga three.js y el modelo sólo cuando la sección entra en pantalla.
   Si algo falla, se queda la captura con un aviso.
   ============================================================ */

const KPViewer = (function () {
  "use strict";

  const FAIL_MSG = "El modelo 3D no está disponible aquí: esta es una captura.";

  function hasWebGL() {
    try {
      const gl = document.createElement("canvas").getContext("webgl2");
      if (!gl) return false;
      // Se libera: el navegador limita cuántos contextos hay a la vez
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
      return true;
    } catch (err) {
      return false;
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const el = document.createElement("script");
      el.src = src;
      el.onload = resolve;
      el.onerror = function () { reject(new Error("No se pudo cargar " + src)); };
      document.head.appendChild(el);
    });
  }

  function init() {
    const box = document.getElementById("model-viewer");
    if (!box) return;

    const cfg = KEPRO.model.viewer;
    const pct = box.querySelector("[data-viewer-pct]");
    const msg = box.querySelector("[data-viewer-msg]");
    const local = window.location.protocol === "file:";

    function progress(p) {
      box.style.setProperty("--p", p.toFixed(3));
      pct.textContent = Math.round(p * 100) + " %";
    }

    function fail(err) {
      if (err) console.warn("[KePro] Visor 3D:", err);
      box.classList.remove("is-loading", "is-ready");
      msg.textContent = FAIL_MSG;
    }

    async function load() {
      if (!hasWebGL()) { fail(); return; }
      box.classList.add("is-loading");

      try {
        await Promise.all([cfg.script].concat(local ? cfg.local : []).map(loadScript));
        const src = local ? window.KP_MODELO_LOCAL : cfg;

        await window.KPVisor3D.montar(box.querySelector("[data-viewer-canvas]"), {
          modelo: src.modelo,
          fondo: src.fondo,
          dracoJs: src.dracoJs,
          dracoWasm: src.dracoWasm,
          camara: cfg.camara,
          clips: cfg.clips,
          reducirMovimiento: KPScroll.reduceMotion,
          alProgresar: progress,
          alPerder: fail
        });

        window.KP_MODELO_LOCAL = null;
        box.classList.remove("is-loading");
        box.classList.add("is-ready");
      } catch (err) {
        fail(err);
      }
    }

    if (!("IntersectionObserver" in window)) { load(); return; }

    const io = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) return;
      io.disconnect();
      load();
    });
    io.observe(box);
  }

  return { init: init };
})();
