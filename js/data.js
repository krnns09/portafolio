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
    { num: "05", label: "Modelado 3D", id: "modelado"    },
    { num: "06", label: "IA",          id: "ia"          }
  ],

  /* Páginas propias del sitio (fuera del scroll del índice) */
  pages: [
    { id: "contacto-page", num: "07", label: "Contacto", href: "contacto.html", cta: true }
  ],

  /* ------------------------------------------- 01 — Portada */
  hero: {
    /* La portada son las 3 capas ke1, ke2 y ke3 (en index.html).
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
    background: "imagenes/web/fondo1-1920.webp",
    figure: {
      image: "imagenes/web/gafas-1920.webp",
      alt: "Persona con gafas de realidad virtual y un mando en la mano"
    },
    items: [
      { image: "imagenes/web/higgsfield-1920.webp",  alt: "Higgsfield"  },
      { image: "imagenes/web/claude-1920.webp",      alt: "Claude"      },
      { image: "imagenes/web/antigravity-1920.webp", alt: "Antigravity" },
      { image: "imagenes/web/obs-1920.webp",         alt: "OBS Studio"  },
      { image: "imagenes/web/blender-1920.webp",     alt: "Blender"     },
      { image: "imagenes/web/capcut-1920.webp",      alt: "CapCut"      },
      { image: "imagenes/web/illustrator-1920.webp", alt: "Illustrator" },
      { image: "imagenes/web/photoshop-1920.webp",   alt: "Photoshop"   }
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
          { image: "imagenes/web/quince1-800.webp", alt: "Quinceañera con vestido fucsia y dorado, de pie con un ramo" },
          { image: "imagenes/web/quince2-800.webp", alt: "Arreglo de flores con una rosa, claveles blancos y flores lilas" },
          { image: "imagenes/web/quince3-800.webp", alt: "Quinceañera sentada a la mesa, sonriendo con una copa" },
          { image: "imagenes/web/quince4-800.webp", alt: "Tiara sobre un cojín fucsia con lazo dorado" },
          { image: "imagenes/web/quince5-800.webp", alt: "Quinceañera de perfil soplando las velas" }
        ]
      },
      {
        title: "Podcast",
        ratio: "2 / 3",
        items: [
          { image: "imagenes/web/podcast1-800.webp", alt: "Consola de audio iluminada junto a un portátil" },
          { image: "imagenes/web/podcast2-800.webp", alt: "Cámara en trípode grabando a los dos invitados del podcast" },
          { image: "imagenes/web/podcast3-800.webp", alt: "Pantalla con el logo de La Verda' del Abogado, un vaso y un micrófono" },
          { image: "imagenes/web/podcast4-800.webp", alt: "Dos invitados conversando frente a sus micrófonos" },
          { image: "imagenes/web/podcast5-800.webp", alt: "Invitado con gorra blanca y gafas oscuras hablando al micrófono" }
        ]
      },
      {
        title: "BMX",
        ratio: "2 / 3",
        items: [
          { image: "imagenes/web/bmx1-800.webp", alt: "Rider de BMX con casco blanco saltando en una rampa, de noche" },
          { image: "imagenes/web/bmx2-800.webp", alt: "Rider de BMX en el aire sobre el barandal del skatepark" },
          { image: "imagenes/web/bmx3-800.webp", alt: "Rider de BMX con camiseta a rayas girando la bicicleta en el aire" },
          { image: "imagenes/web/bmx4-800.webp", alt: "Rider de BMX saltando sobre la rampa frente a los árboles" },
          { image: "imagenes/web/bmx5-800.webp", alt: "Rider de BMX con casco negro en el aire sobre el público" }
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
       bloquea sus scripts. Portadas en imagenes/web/. */
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
        image: "imagenes/web/ashwing-800.webp",
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
        image: "imagenes/web/neon-league-800.webp",
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
        image: "imagenes/web/nucleo-fundido-800.webp",
        alt: "Vista en primera persona de unas manos de magma frente a un bombero en una casa",
        href: "Juego3D/dist/index.html"
      },
      {
        id: "gm-04",
        title: "MUSIC PONG",
        description: "Pong musical con banda sonora generada en vivo: golpear al ritmo " +
          "encadena combos. Contra la IA o dos jugadores, con teclado, ratón o táctil.",
        plot: "La partida late a 128 pulsos por minuto y, cada pocos compases, la arena " +
          "salta a otra de sus ocho dimensiones: del arcade retro al bioma alien, el " +
          "pixel art o el glitch. Cada una cambia cómo se mueve y rebota la pelota.",
        tools: ["TypeScript", "Canvas 2D", "Web Audio"],
        image: "imagenes/web/music-pong-800.webp",
        alt: "Partida de Music Pong en la dimensión 3D futurista, con una rejilla de neón",
        href: "Music%20Pong/dist/index.html"
      }
    ],
    /* Cámara y WebXR exigen HTTPS al publicarse; los dos se juegan también sin ellas. */
    ar: [
      {
        id: "ar-01",
        title: "ÓRBITA",
        description: "Minijuego espacial en A-Frame con cursor virtual (Raycaster): se apunta " +
          "con la mirada, el móvil o el ratón y se dispara sosteniendo la mira. En AR, los " +
          "asteroides llegan a tu propia habitación.",
        plot: "Una estación queda a la deriva junto a un planeta anillado y sus escudos sólo " +
          "aguantan tres impactos. Resiste sesenta segundos: destruye los asteroides, atrapa " +
          "cristales antes de que se apaguen y recupera energía.",
        tools: ["A-Frame", "WebXR", "Raycaster"],
        image: "imagenes/web/orbita-800.webp",
        alt: "Retícula apuntando a asteroides y cristales frente a un planeta con anillo",
        href: "realidad-aumentada/index.html"
      },
      {
        id: "ar-02",
        title: "THUMB WARS",
        description: "Guerra de pulgares en realidad aumentada: la cámara reconoce las manos y " +
          "da rostro y armadura a cada pulgar. En móvil o con webcam y, sin cámara, con " +
          "teclado contra la CPU o entre dos.",
        plot: "El reino azul del hielo y el reino rojo del fuego resuelven sus disputas pulgar " +
          "contra pulgar. Domina al rival durante tres segundos para sumar un punto: gana " +
          "quien se lleve dos de tres rondas.",
        tools: ["JavaScript", "MediaPipe", "Canvas 2D"],
        image: "imagenes/web/thumb-wars-800.webp",
        alt: "Dos manos entrelazadas: el pulgar azul atrapa al rojo mientras corre la cuenta atrás",
        href: "Thum%20Wars/dist/index.html"
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

  /* ------------------------------------ 05 — Modelado 3D */
  model: {
    subtitle: "Ruinas flotantes de Raíz",
    description: "Escenario de ruinas suspendidas con tres personajes rigueados, cada uno " +
      "con su hero prop y su ciclo de animación de 60 frames. Modelado, texturizado y " +
      "optimizado para correr en el navegador.",
    poster: "trabajos/3d/poster.jpg",
    alt: "Noa y el robot Spidy de espaldas entre columnas, y el villano Zarmad bajo el arco de piedra",
    /* El visor se compila en visor3d/ y sólo se descarga al llegar a la sección.
       local es la copia en base64 para cuando se abre con doble clic. */
    viewer: {
      script: "visor3d/dist/visor.js",
      local: "visor3d/dist/copia-local.js",
      modelo: "trabajos/3d/microescena.glb",
      fondo: "trabajos/3d/fondo.webp",
      dracoJs: "visor3d/dist/draco/draco_wasm_wrapper.js",
      dracoWasm: "visor3d/dist/draco/draco_decoder.wasm",
      camara: { posicion: [2.32, 1.75, -2.94], objetivo: [-1.25, 0.95, -0.2], fov: 35 },
      clips: ["CICLO_Personaje1_caminar", "CICLO_Robot_caminar", "CICLO_Villano_alzarse"]
    },
    stats: [
      { k: "Triángulos",           v: "87.034" },
      { k: "Draw calls",           v: "18" },
      { k: "Peso del GLB",         v: "5,06 MB" },
      { k: "Personajes rigueados", v: "3" },
      { k: "Huesos",               v: "41 / 41 / 12" },
      { k: "Animación",            v: "60 frames a 24 fps" }
    ],
    process: [
      "Escenario modelado por geometría generativa y horneado a normal map de 2048×2048",
      "Personajes retopologizados y animados desde capturas de movimiento",
      "Rig con nomenclatura .L/.R y pesos automáticos",
      "Props emparentados al hueso de la mano para que no se deformen",
      "Roca inferior diezmada al 22%: 41.000 triángulos liberados para textura",
      "Exportado a glTF con compresión Draco y texturas WebP"
    ]
  },

  /* --------------------------------- 06 — Generación con IA */
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
      image: "imagenes/web/perfil-400.webp",
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
