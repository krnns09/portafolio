/* ============================================================
   KePro — Fuente única de contenido
   ------------------------------------------------------------
   TODO el contenido del portafolio vive en este archivo.
   Para publicar un proyecto real sólo hay que:
     1. Poner la imagen en  imagenes/
     2. Rellenar  image: "imagenes/mi-foto.jpg"
     3. Sustituir los textos entre corchetes  [ASÍ ]
   Si  image  es null se dibuja un placeholder editorial.

   Campos por proyecto
     id          identificador único (se usa en el DOM)
     title       nombre del proyecto
     category    etiqueta que aparece al hacer hover
     description descripción breve (1–2 líneas)
     tools       array de herramientas / tecnologías
     year        año
     image       ruta a la imagen  (null => placeholder)
     alt         texto alternativo de la imagen
     href        enlace externo    (null => sin enlace)
     ratio       proporción del medio, ej. "4 / 5"
   ============================================================ */

const KEPRO = {

  /* ---------------------------------------------------- Marca */
  brand: {
    name: "KePro",
    logo: "imagenes/logo.png",
    year: new Date().getFullYear()
  },

  /* ------------------------------------------------ Navegación */
  nav: [
    { num: "01", label: "Portada",     id: "portada"     },
    { num: "02", label: "Herramientas", id: "herramientas" },
    { num: "03", label: "Edición",     id: "edicion"     },
    { num: "04", label: "Desarrollo",  id: "desarrollo"  },
    { num: "05", label: "IA",          id: "ia"          }
  ],

  /* Páginas propias del sitio (fuera del scroll del índice) */
  pages: [
    { id: "contacto-page", num: "06", label: "Contacto", href: "contacto.html", cta: true }
  ],

  /* ------------------------------------------- 01 — Portada */
  hero: {
    /* La portada son las 3 imágenes de Recursos/ (ke1, ke2, ke3, en index.html).
       Lo único que se genera desde aquí es la franja de disciplinas. */
    strip: [
      "Dirección visual",
      "Fotografía",
      "Edición",
      "Motion",
      "Desarrollo web",
      "Experiencias interactivas",
      "Generación con IA",
      "Videojuegos",
      "Storytelling"
    ]
  },

  /* ---------------------------------------- 02 — Herramientas */
  tools: {
    /* Capas 1920×1080 ya alineadas: se apilan en este orden, sin redimensionar. */
    background: "Recursos/fondo1.jpg",
    figure: {
      image: "Recursos/gafas.png",
      alt: "Persona con gafas de realidad virtual y un mando en la mano"
    },
    items: [
      { image: "Recursos/higgsfield.png",  alt: "Higgsfield"  },
      { image: "Recursos/claude.png",      alt: "Claude"      },
      { image: "Recursos/antigravity.png", alt: "Antigravity" },
      { image: "Recursos/obs.png",         alt: "OBS Studio"  },
      { image: "Recursos/blender.png",     alt: "Blender"     },
      { image: "Recursos/capcut.png",      alt: "CapCut"      },
      { image: "Recursos/illustrator.png", alt: "Illustrator" },
      { image: "Recursos/photoshop.png",   alt: "Photoshop"   }
    ]
  },

  /* --------------------------- 03 — Edición y fotografía */
  photography: {
    title: "Fotografía",
    /* Cada serie es una fila; las fotos se muestran en este orden y con la
       proporción original de cada serie, para que no se recorten. */
    series: [
      {
        title: "Quince años",
        ratio: "1087 / 1447",
        items: [
          { image: "trabajos/fotografía/quince1.png", alt: "Quinceañera con vestido fucsia y dorado, de pie con un ramo" },
          { image: "trabajos/fotografía/quince2.png", alt: "Arreglo de flores con una rosa, claveles blancos y flores lilas" },
          { image: "trabajos/fotografía/quince3.png", alt: "Quinceañera sentada a la mesa, sonriendo con una copa" },
          { image: "trabajos/fotografía/quince4.png", alt: "Tiara sobre un cojín fucsia con lazo dorado" },
          { image: "trabajos/fotografía/quince5.png", alt: "Quinceañera de perfil soplando las velas" }
        ]
      },
      {
        title: "Podcast",
        ratio: "2 / 3",
        items: [
          { image: "trabajos/fotografía/podcast1.png", alt: "Consola de audio iluminada junto a un portátil" },
          { image: "trabajos/fotografía/podcast2.png", alt: "Cámara en trípode grabando a los dos invitados del podcast" },
          { image: "trabajos/fotografía/podcast3.png", alt: "Pantalla con el logo de La Verda' del Abogado, un vaso y un micrófono" },
          { image: "trabajos/fotografía/podcast4.png", alt: "Dos invitados conversando frente a sus micrófonos" },
          { image: "trabajos/fotografía/podcast5.png", alt: "Invitado con gorra blanca y gafas oscuras hablando al micrófono" }
        ]
      },
      {
        title: "BMX",
        ratio: "2 / 3",
        items: [
          { image: "trabajos/fotografía/bmx1.png", alt: "Rider de BMX con casco blanco saltando en una rampa, de noche" },
          { image: "trabajos/fotografía/bmx2.jpg", alt: "Rider de BMX en el aire sobre el barandal del skatepark" },
          { image: "trabajos/fotografía/bmx3.png", alt: "Rider de BMX con camiseta a rayas girando la bicicleta en el aire" },
          { image: "trabajos/fotografía/bmx4.jpg", alt: "Rider de BMX saltando sobre la rampa frente a los árboles" },
          { image: "trabajos/fotografía/bmx5.jpg", alt: "Rider de BMX con casco negro en el aire sobre el público" }
        ]
      }
    ]
  },

  video: {
    title: "Edición y video",
    /* web/ guarda las portadas y las copias para navegador: EDUNEXUS viene en
       HEVC, que no todos reproducen, y Rugby se reordenó para que empiece a
       verse sin descargarse entero. */
    items: [
      {
        id: "vd-01",
        title: "EDUNEXUS",
        video: "trabajos/edición/web/edunexus.mp4",
        poster: "trabajos/edición/web/edunexus.jpg",
        ratio: "9 / 16"
      },
      {
        id: "vd-02",
        title: "Escuela de Liderazgo",
        video: "trabajos/edición/Escuela de Liderazgo.mp4",
        poster: "trabajos/edición/web/liderazgo.jpg",
        ratio: "9 / 16"
      },
      {
        id: "vd-03",
        title: "Rugby",
        video: "trabajos/edición/web/rugby.mp4",
        poster: "trabajos/edición/web/rugby.jpg",
        ratio: "9 / 16"
      },
      {
        id: "vd-04",
        title: "Ajedrez",
        video: "trabajos/edición/Ajedréz Unisimón.mp4",
        poster: "trabajos/edición/web/ajedrez.jpg",
        ratio: "9 / 16"
      }
    ]
  },

  /* ------------------------------------- 04 — Desarrollo */
  development: {
    stats: [
      { k: "Enfoque",      v: "Diseño + tecnología + experiencia" },
      { k: "Construyo",    v: "Webs, interfaces y piezas interactivas" },
      { k: "Disponible",   v: "Proyectos y colaboraciones" }
    ],
    /* Los juegos necesitan servidor: abiertos con doble clic el navegador
       bloquea sus scripts. Portadas en imagenes/juegos/. */
    games: [
      {
        id: "gm-01",
        title: "ASHWING",
        description: "Combate aéreo 3D en primera persona desde la cabina, con modelo " +
          "de vuelo propio, instrumentos funcionales y muerte permanente.",
        plot: "Undécimo otoño de una Segunda Guerra Mundial alternativa. Halden lleva " +
          "diecinueve días cercada y, desde el aeródromo de Vetra, debes escoltar tres " +
          "transportes con suministros al otro lado del río antes de que los cazas de " +
          "Ostrel los intercepten.",
        tools: ["TypeScript", "Three.js", "Vite"],
        image: "imagenes/juegos/ashwing.jpg",
        alt: "Avión en la pista de un aeródromo al atardecer, con el logo de Ashwing",
        href: "ashwing/dist/index.html"
      },
      {
        id: "gm-02",
        title: "NEON LEAGUE",
        description: "Fútbol arcade en pixel art con física propia, seis equipos y " +
          "multijugador local. NEON REPLAY reconstruye en 3D las mejores jugadas.",
        plot: "En una liga clandestina cyberpunk, un equipo de novatos entra al NEON " +
          "CIRCUIT: siete partidos en directo bajo el mando de THE COMMISSIONER, " +
          "presidente, árbitro y dueño de todo. Ellos solo venían a jugar al fútbol.",
        tools: ["TypeScript", "Canvas 2D", "Three.js"],
        image: "imagenes/juegos/neon-league.jpg",
        alt: "Pantalla de título de Neon League con una cuadrícula neón y un sol retro",
        href: "futbolito/dist/index.html"
      },
      {
        id: "gm-03",
        title: "NÚCLEO FUNDIDO",
        description: "Shooter 3D en primera persona por oleadas donde el calor es vida " +
          "y munición: disparar magma lo gasta y fundir muebles lo recupera.",
        plot: "Eres un golem de magma en una casa invadida por bomberos. Tu temperatura " +
          "baja sin parar y, si llega a cero, te solidificas en roca volcánica: la única " +
          "salida es derretir la casa mueble a mueble mientras llegan más oleadas.",
        tools: ["Three.js", "Vite"],
        image: "imagenes/juegos/nucleo-fundido.jpg",
        alt: "Vista en primera persona de unas manos de magma frente a un bombero en una casa",
        href: "Juego3D/dist/index.html"
      }
    ],
    sites: [
      {
        id: "wb-01",
        title: "Wild Studios",
        description: "Sitio de un estudio de videojuegos con enfoque social en Cúcuta, " +
          "con minijuegos jugables dentro de la página.",
        address: "Wild Studios",
        href: "trabajos/web/WILD STUDIOS/index.html"
      },
      {
        id: "wb-02",
        title: "Sony α7R V",
        description: "Recorrido interactivo en 3D por las partes de la cámara.",
        address: "camerapresentation.netlify.app",
        href: "https://camerapresentation.netlify.app"
      }
    ]
  },

  /* --------------------------------- 05 — Generación con IA */
  ai: {
    /* web/ guarda las portadas y las copias en H.264: los originales vienen en HEVC. */
    videos: [
      {
        id: "ia-01",
        title: "EDUNEXUS",
        video: "trabajos/ia/web/edunexus.mp4",
        poster: "trabajos/ia/web/edunexus.jpg",
        ratio: "16 / 9"
      },
      {
        id: "ia-02",
        title: "Parallell",
        video: "trabajos/ia/web/trailer.mp4",
        poster: "trabajos/ia/web/trailer.jpg",
        ratio: "16 / 9"
      }
    ],
    prompt: "[ESCRIBE AQUÍ LA IDEA QUE QUIERES MOSTRAR COMO DIRECCIÓN VISUAL]"
  },

  /* ------------------------------------------------ Contacto */
  contact: {
    lead:
      "Si tienes un proyecto que mezcle imagen, tecnología y una buena historia, " +
      "escríbeme. Trabajo tanto la producción visual como la construcción digital.",
    profile: {
      image: "Recursos/perfil.png",
      alt: "Foto de perfil",
      handle: "@krnn_s9",
      links: [
        { label: "Ver mi Instagram", href: "https://www.instagram.com/krnn_s9?cplk=MXd5ejA4NWJvNGQ5cg==" },
        { label: "Ver mi LinkedIn",  href: "https://www.linkedin.com/in/keren-guacas-a039ba375?utm_source=share_via&utm_content=profile&utm_medium=member_android" }
      ]
    },
    links: [
      {
        k: "Correo",
        v: "ag.kg090@gmail.com",
        href: "mailto:ag.kg090@gmail.com"
      }
    ]
  }
};
