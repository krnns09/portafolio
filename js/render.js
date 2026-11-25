/* ============================================================
   KePro — Render
   Vuelca los datos de data.js en los puntos de montaje del HTML.
   ============================================================ */

const KPRender = (function () {
  "use strict";

  function mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
  }

  function map(list, fn) {
    return (list || []).map(fn).join("");
  }

  function all() {
    const d = KEPRO;

    /* Navegación.
       En contacto.html los anclajes de sección vuelven al
       índice; `data-page` en el <body> marca cuál es la página actual. */
    const base = document.getElementById("portada") ? "" : "index.html";
    const here = document.body.dataset.page || "";

    mount("nav-links",
      d.nav.map(function (it) { return KP.navLink(it, base); }).join("") +
      d.pages.map(function (it) { return KP.pageLink(it, here); }).join("")
    );

    mount("menu-links",
      d.nav.map(function (it, i) { return KP.menuLink(it, i, base); }).join("") +
      d.pages.map(function (it, i) {
        return KP.pageMenuLink(it, d.nav.length + i, here);
      }).join("")
    );

    /* El rail sólo existe en el índice: recorre sus secciones */
    mount("rail-items", map(d.nav, KP.railItem) +
      KP.railItem({ num: "07", label: "Cierre", id: "contacto" }));

    /* 01 — Portada: sus imágenes están en el HTML; aquí sólo la franja */
    mount("hero-strip", KP.marqueeTrack(d.hero.strip));

    /* 02 — Herramientas */
    mount("tools-stage", KP.toolsStage(d.tools));

    /* 03 — Edición y fotografía */
    mount("photo-grid", map(d.photography.series, KP.photoSeries));
    mount("video-grid", map(d.video.items, KP.videoTile));
    setCount("photo-count", d.photography.series.reduce(function (total, s) {
      return total + s.items.length;
    }, 0));
    setCount("video-count", d.video.items.length);

    /* 04 — Desarrollo */
    mount("dev-stats", map(d.development.stats, KP.devStat));
    mount("game-grid", map(d.development.games, KP.gameCard));
    mount("site-list", map(d.development.sites, KP.siteWindow));
    mount("ar-grid", map(d.development.ar, KP.gameCard));
    setCount("ar-count", d.development.ar.length);
    setCount("games-count", d.development.games.length);
    setCount("sites-count", d.development.sites.length);

    /* 05 — Modelado 3D */
    mount("model-lead", KP.modelLead(d.model));
    mount("model-viewer", KP.modelViewer(d.model));
    mount("model-stats", map(d.model.stats, KP.devStat));
    mount("model-steps", map(d.model.process, KP.modelStep));

    /* 06 — IA */
    mount("ai-videos", map(d.ai.videos, KP.videoTile));

    const promptText = document.getElementById("ai-prompt-text");
    if (promptText) promptText.textContent = d.ai.prompt;

    /* Contacto */
    mount("contact-links", KP.contactProfile(d.contact.profile) + map(d.contact.links, KP.contactRow));

    const lead = document.getElementById("contact-lead");
    if (lead) lead.textContent = d.contact.lead;

    const year = document.getElementById("year");
    if (year) year.textContent = d.brand.year;

    /* Escalona el reveal dentro de cada rejilla */
    stagger();
  }

  function setCount(id, n) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(n).padStart(2, "0") + " piezas";
  }

  function stagger() {
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      group.querySelectorAll(":scope > [data-reveal]").forEach(function (el, i) {
        el.style.setProperty("--i", i % 4);
      });
    });
  }

  return { all: all };
})();
