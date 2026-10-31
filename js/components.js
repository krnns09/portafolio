/* ============================================================
   KePro — Componentes
   Funciones puras: reciben datos, devuelven HTML.
   No tocan el DOM (de eso se encarga render.js).
   ============================================================ */

const KP = (function () {
  "use strict";

  /* Escapa texto para que el contenido nunca rompa el marcado */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* Icono de flecha diagonal */
  const arrowSVG =
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" ' +
    'stroke-width="1.3" stroke-linecap="square"/></svg>';

  /* Las copias de imagenes/web/ tienen otra a la mitad de ancho */
  function srcsetAttr(src, sizes) {
    const m = /^(.*)-(\d+)\.webp$/.exec(src);
    if (!m) return "";
    return ' srcset="' + esc(m[1] + "-" + m[2] / 2 + ".webp " + m[2] / 2 + "w, " + src + " " + m[2] + "w") + '" ' +
      'sizes="' + esc(sizes || "100vw") + '"';
  }

  /* ---------------------------------------------------- Media
     Imagen real si existe; si no, placeholder editorial. */
  function media(opt) {
    const ratio = esc(opt.ratio || "3 / 2");
    const label = esc(opt.label || "[IMAGEN]");
    const inner = opt.image
      ? '<img src="' + esc(opt.image) + '"' + srcsetAttr(opt.image, opt.sizes) + ' alt="' + esc(opt.alt || "") + '" ' +
        'loading="' + (opt.eager ? "eager" : "lazy") + '" decoding="async">'
      : '<div class="media__ph"><span class="media__ph-label">' + label + "</span></div>";

    return '<div class="media" style="--ratio: ' + ratio + '">' + inner + "</div>";
  }

  /* ----------------------------------------------------- Tags */
  function tags(list) {
    if (!list || !list.length) return "";
    return '<ul class="tags">' +
      list.map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") +
      "</ul>";
  }

  /* -------------------------------------- Serie de fotografías */
  function photoSeries(series) {
    const tiles = series.items.map(function (item) {
      return (
        '<figure class="photo-tile" data-reveal>' +
          media({ image: item.image, alt: item.alt, ratio: series.ratio, sizes: "(max-width: 900px) 50vw, 20vw" }) +
        "</figure>"
      );
    }).join("");

    return (
      '<div class="photo-series">' +
        '<h4 class="photo-series__title" data-reveal>' + esc(series.title) + "</h4>" +
        '<div class="photo-series__grid" data-stagger>' + tiles + "</div>" +
      "</div>"
    );
  }

  /* ------------------------------------------------------ Video
     preload="none": no se descarga nada hasta que le dan a reproducir. */
  function videoTile(item) {
    return (
      '<figure class="video-tile" data-reveal>' +
        '<div class="media" style="--ratio: ' + esc(item.ratio) + '">' +
          '<video src="' + esc(item.video) + '" poster="' + esc(item.poster) + '" ' +
            'aria-label="' + esc(item.title) + '" controls playsinline preload="none"></video>' +
        "</div>" +
        '<figcaption class="video-tile__title">' + esc(item.title) + "</figcaption>" +
      "</figure>"
    );
  }

  /* ------------------------------------ Barra de ventana (decorativa) */
  const windowDots =
    '<span class="window__dots" aria-hidden="true"><i></i><i></i><i></i></span>';

  /* ---------------------------------------------- Pantalla de juego */
  function gameCard(item) {
    return (
      '<article class="game-card" data-reveal>' +
        '<div class="window">' +
          '<div class="window__bar">' + windowDots +
            '<h4 class="window__title">' + esc(item.title) + "</h4>" +
          "</div>" +
          '<a class="game-card__screen" href="' + esc(item.href) + '" ' +
            'aria-label="Jugar ' + esc(item.title) + '">' +
            media({ image: item.image, alt: item.alt, ratio: "16 / 9", sizes: "(max-width: 900px) 100vw, 33vw" }) +
            '<span class="game-card__play" aria-hidden="true">Jugar ' + arrowSVG + "</span>" +
          "</a>" +
        "</div>" +
        '<div class="game-card__body">' +
          '<p class="game-card__desc">' + esc(item.description) + "</p>" +
          '<p class="game-card__label">Trama</p>' +
          '<p class="game-card__plot">' + esc(item.plot) + "</p>" +
          tags(item.tools) +
        "</div>" +
      "</article>"
    );
  }

  /* --------------------------------- Página web dentro de una ventana
     La capa de encima evita que la rueda del ratón se quede atrapada en el
     iframe al bajar por el portafolio: se quita con un clic (ver ui.js). */
  function siteWindow(item) {
    return (
      '<article class="site" data-reveal>' +
        '<div class="window" data-site-window>' +
          '<div class="window__bar">' + windowDots +
            '<span class="window__address">' + esc(item.address) + "</span>" +
            '<a class="window__open" href="' + esc(item.href) + '" target="_blank" ' +
              'rel="noopener noreferrer" aria-label="Abrir ' + esc(item.title) + ' en una pestaña nueva">' +
              arrowSVG + "</a>" +
          "</div>" +
          '<div class="window__view">' +
            '<iframe src="' + esc(item.href) + '" title="' + esc(item.title) + '" ' +
              'loading="lazy" allow="fullscreen"></iframe>' +
            '<button class="window__shield" type="button" data-site-shield>' +
              "<span>Clic para interactuar</span></button>" +
          "</div>" +
        "</div>" +
        '<h4 class="site__title">' + esc(item.title) + "</h4>" +
        '<p class="site__desc">' + esc(item.description) + "</p>" +
      "</article>"
    );
  }

  /* ------------------------------------------- Dato de desarrollo */
  function devStat(stat) {
    return (
      '<div class="dev-stat" data-reveal>' +
        '<span class="dev-stat__k">' + esc(stat.k) + "</span>" +
        '<span class="dev-stat__v">' + esc(stat.v) + "</span>" +
      "</div>"
    );
  }

  /* -------------------------------------- Perfil de contacto */
  function contactProfile(profile) {
    const buttons = profile.links.map(function (link) {
      return (
        '<a class="btn btn--ghost" href="' + esc(link.href) + '" target="_blank" ' +
          'rel="noopener noreferrer">' + esc(link.label) +
          ' <span class="btn__arrow" aria-hidden="true">&rarr;</span></a>'
      );
    }).join("");

    return (
      '<div class="contact__profile">' +
        '<span class="contact__photo">' +
          '<img src="' + esc(profile.image) + '" alt="' + esc(profile.alt) + '" ' +
            'loading="lazy" decoding="async">' +
        "</span>" +
        '<div class="contact__who">' +
          '<span class="contact__handle">' + esc(profile.handle) + "</span>" +
          '<div class="contact__actions">' + buttons + "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* --------------------------------------- Fila de contacto */
  function contactRow(link) {
    const value =
      '<span class="contact__v' + (link.placeholder ? " contact__v--ph" : "") + '">' +
        esc(link.v) + "</span>";
    const body = '<span class="contact__k">' + esc(link.k) + "</span>" + value;

    return link.href
      ? '<a class="contact__item" href="' + esc(link.href) + '"' +
        (/^https?:/i.test(link.href) ? ' target="_blank" rel="noopener noreferrer"' : "") +
        ">" + body + "</a>"
      : '<div class="contact__item">' + body + "</div>";
  }

  /* -------------------------------- Enlace del menú / navegación */

  /* En las páginas internas los anclajes de sección tienen que volver
     al índice, por eso todos estos helpers reciben un prefijo `base`. */
  function navLink(item, base) {
    return (
      '<a class="nav__link" href="' + esc(base || "") + "#" + esc(item.id) + '" ' +
        'data-nav="' + esc(item.id) + '">' +
        '<span class="nav__link-num">' + esc(item.num) + "</span>" +
        "<span>" + esc(item.label) + "</span>" +
      "</a>"
    );
  }

  function menuLink(item, i, base) {
    return (
      '<a class="menu__link" href="' + esc(base || "") + "#" + esc(item.id) + '" ' +
        'data-nav-mobile="' + esc(item.id) + '" style="--i:' + i + '">' +
        "<span>" + esc(item.num) + "</span>" + esc(item.label) +
      "</a>"
    );
  }

  /* Enlace a otra página del sitio */
  function pageLink(item, current) {
    const isHere = item.id === current;
    return (
      '<a class="nav__link' + (item.cta ? " nav__link--cta" : "") +
        (isHere ? " is-active" : "") + '" href="' + esc(item.href) + '"' +
        (isHere ? ' aria-current="page"' : "") + ">" +
        "<span>" + esc(item.label) + "</span>" +
      "</a>"
    );
  }

  function pageMenuLink(item, i, current) {
    const isHere = item.id === current;
    return (
      '<a class="menu__link' + (isHere ? " is-active" : "") + '" ' +
        'href="' + esc(item.href) + '" style="--i:' + i + '"' +
        (isHere ? ' aria-current="page"' : "") + ">" +
        "<span>" + esc(item.num) + "</span>" + esc(item.label) +
      "</a>"
    );
  }

  function railItem(item) {
    return (
      '<a class="rail__item" href="#' + esc(item.id) + '" data-rail="' + esc(item.id) + '" ' +
        'aria-label="Ir a ' + esc(item.label) + '">' +
        '<span class="rail__dot" aria-hidden="true"></span>' +
        '<span class="rail__label" aria-hidden="true">' + esc(item.num) + "</span>" +
      "</a>"
    );
  }

  /* ----------------------------------------------- Herramientas
     Capas apiladas. El halo va entre el fondo y la figura; cada logo
     lleva su --i para flotar desfasado de los demás. */
  function toolLayer(image, alt, attrs) {
    return (
      '<img ' + (attrs || 'class="tools__layer"') + ' src="' + esc(image) + '"' + srcsetAttr(image) + ' ' +
      'alt="' + esc(alt) + '" width="1920" height="1080" loading="lazy" decoding="async">'
    );
  }

  function toolsStage(tools) {
    return (
      toolLayer(tools.background, "") +
      '<span class="tools__glow" aria-hidden="true"></span>' +
      toolLayer(tools.figure.image, tools.figure.alt) +
      tools.items.map(function (item, i) {
        return toolLayer(item.image, item.alt, 'class="tools__layer tools__logo" style="--i: ' + i + '"');
      }).join("")
    );
  }

  /* ------------------------------------------------- Marquesina */
  function marqueeTrack(items) {
    const row = items.map(function (t) {
      return '<span class="marquee__item">' + esc(t) + "</span>";
    }).join("");
    // Dos pistas idénticas para que el bucle no tenga costura visible
    return (
      '<div class="marquee__track" aria-hidden="true">' + row + "</div>" +
      '<div class="marquee__track" aria-hidden="true">' + row + "</div>"
    );
  }

  return {
    esc: esc,
    arrowSVG: arrowSVG,
    media: media,
    tags: tags,
    photoSeries: photoSeries,
    videoTile: videoTile,
    gameCard: gameCard,
    siteWindow: siteWindow,
    devStat: devStat,
    contactProfile: contactProfile,
    contactRow: contactRow,
    navLink: navLink,
    menuLink: menuLink,
    pageLink: pageLink,
    pageMenuLink: pageMenuLink,
    railItem: railItem,
    toolsStage: toolsStage,
    marqueeTrack: marqueeTrack
  };
})();
