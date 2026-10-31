/* ============================================================
   KePro — Formulario de contacto
   Validación propia (el form lleva novalidate) para poder dar
   mensajes en español y marcarlos con aria-invalid / aria-describedby.
   Al enviar no hay servidor: se muestra un resumen de lo recogido.
   ============================================================ */

const KPForm = (function () {
  "use strict";

  /* Reglas por campo. `test` devuelve true si el valor es válido. */
  const REGLAS = {
    correo: {
      etiqueta: "Correo",
      vacio: "Escribe tu correo para poder responderte.",
      invalido: "Ese correo no parece válido. Revisa que tenga @ y dominio.",
      test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
    },
    celular: {
      etiqueta: "Celular",
      vacio: "Escribe un número de celular.",
      invalido: "Usa entre 7 y 15 dígitos. Puedes incluir el indicativo, por ejemplo +57.",
      /* Se ignoran espacios, guiones y paréntesis al contar dígitos */
      test: function (v) {
        const digitos = v.replace(/[\s()\-.]/g, "");
        return /^\+?\d{7,15}$/.test(digitos);
      }
    },
    servicio: {
      etiqueta: "Tipo de servicio",
      vacio: "Elige el tipo de servicio que necesitas.",
      invalido: "Elige el tipo de servicio que necesitas.",
      test: function (v) { return v !== ""; }
    },
    descripcion: {
      etiqueta: "Descripción",
      vacio: "Cuéntame qué necesitas.",
      invalido: "Escribe al menos 20 caracteres para entender bien la petición.",
      test: function (v) { return v.trim().length >= 20; }
    }
  };

  let form, resumen, enviado = false;

  function fila(campo) { return campo.closest(".form__row"); }

  function marcarError(campo, mensaje) {
    const row = fila(campo);
    const error = row && row.querySelector(".form__error");
    campo.setAttribute("aria-invalid", "true");
    if (row) row.classList.add("has-error");
    if (error) error.textContent = mensaje;
  }

  function limpiarError(campo) {
    const row = fila(campo);
    campo.setAttribute("aria-invalid", "false");
    if (row) row.classList.remove("has-error");
  }

  /* Valida un campo y devuelve true si está bien */
  function validar(campo) {
    const regla = REGLAS[campo.name];
    if (!regla) return true;

    const valor = campo.value;

    if (valor.trim() === "") {
      marcarError(campo, regla.vacio);
      return false;
    }
    if (!regla.test(valor)) {
      marcarError(campo, regla.invalido);
      return false;
    }
    limpiarError(campo);
    return true;
  }

  function campos() {
    return Array.prototype.slice.call(
      form.querySelectorAll("[name]")
    ).filter(function (c) { return REGLAS[c.name]; });
  }

  /* -------------------------------------------- Resumen final */
  function mostrarResumen(datos) {
    const lista = resumen.querySelector("#summary-list");
    lista.innerHTML = datos.map(function (d) {
      return (
        '<div class="summary__item">' +
          '<dt class="summary__k">' + KP.esc(d.k) + "</dt>" +
          '<dd class="summary__v">' + KP.esc(d.v) + "</dd>" +
        "</div>"
      );
    }).join("");

    resumen.hidden = false;
    resumen.focus();
    resumen.scrollIntoView({ block: "center" });
  }

  /* ------------------------------------------------- Contador */
  function initContador() {
    const area = form.querySelector("#descripcion");
    const salida = form.querySelector("#descripcion-count");
    if (!area || !salida) return;

    const max = area.getAttribute("maxlength");

    function pintar() {
      salida.textContent = area.value.length + (max ? " / " + max : "");
    }

    area.addEventListener("input", pintar);
    pintar();
  }

  /* ----------------------------------------------------- Init */
  function init() {
    form = document.getElementById("form-contacto");
    if (!form) return;

    resumen = document.getElementById("summary");

    initContador();

    /* Tras el primer intento, cada campo se revalida al salir de él
       y el error desaparece en cuanto el valor pasa a ser correcto. */
    campos().forEach(function (campo) {
      campo.addEventListener("blur", function () {
        if (enviado) validar(campo);
      });
      campo.addEventListener("input", function () {
        if (enviado && campo.getAttribute("aria-invalid") === "true") validar(campo);
      });
      campo.addEventListener("change", function () {
        if (enviado) validar(campo);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      enviado = true;

      const lista = campos();
      let primerFallo = null;

      lista.forEach(function (campo) {
        if (!validar(campo) && !primerFallo) primerFallo = campo;
      });

      if (primerFallo) {
        if (resumen) resumen.hidden = true;
        primerFallo.focus();
        primerFallo.scrollIntoView({ block: "center" });
        return;
      }

      const servicio = form.querySelector("#servicio");
      mostrarResumen([
        { k: "Correo",           v: form.querySelector("#correo").value.trim() },
        { k: "Celular",          v: form.querySelector("#celular").value.trim() },
        { k: "Tipo de servicio", v: servicio.options[servicio.selectedIndex].text },
        { k: "Descripción",      v: form.querySelector("#descripcion").value.trim() }
      ]);
    });

    form.addEventListener("reset", function () {
      enviado = false;
      campos().forEach(limpiarError);
      if (resumen) resumen.hidden = true;
      window.setTimeout(initContador, 0);
    });
  }

  return { init: init };
})();
