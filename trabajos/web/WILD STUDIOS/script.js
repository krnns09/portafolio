// Año dinámico en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Scroll suave para los enlaces de navegación
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    event.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Sonido retro al pasar el mouse por botones y enlaces marcados
const uiBeep = document.getElementById("ui-beep");

const attachHoverSound = () => {
  if (!uiBeep) return;

  const interactiveEls = document.querySelectorAll(".js-sound, .char-nav__btn, .char-card");
  interactiveEls.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      try {
        uiBeep.currentTime = 0;
        uiBeep.play();
      } catch {
        // Silenciosamente ignorar si el navegador bloquea la reproducción
      }
    });
  });
};

attachHoverSound();

// Lógica de Selección de Personajes (Equipo)
const teamData = {
    angelo: {
        name: "Angelo Hurtado Rincon",
        class: "Clase: Programador de Sistemas",
        role: "Rol: Arquitecto del código",
        desc: "Maestro del lenguaje de las máquinas y estratega digital. Angelo domina los motores de juego y construye la lógica que da vida a cada mecánica interactiva.",
        skills: ["Programación de mecánicas", "Resolución de bugs", "Integración de sistemas"],
        superpower: "Código Infinito – puede optimizar cualquier sistema hasta hacerlo funcionar con máxima eficiencia.",
        stats: { code: 95, design: 40, narrative: 50, anim: 30 },
        image: "equipo/angelop.png",
        neonColor: "rgba(255, 0, 60, 0.8)",
        neonColorLow: "rgba(255, 0, 60, 0.3)",
        imageScale: "1.25"
    },
    marlyn: {
        name: "Marlyn Rincon",
        class: "Clase: Diseñadora de Experiencias",
        role: "Rol: Arquitecta de la interacción",
        desc: "Exploradora de emociones y creadora de experiencias memorables. Diseña interfaces y mecánicas que conectan al jugador con el mundo del juego.",
        skills: ["UX para videojuegos", "Diseño de mecánicas", "Interfaces interactivas"],
        superpower: "Empatía Gamer – puede anticipar lo que el jugador necesita antes de que lo sepa.",
        stats: { code: 30, design: 90, narrative: 70, anim: 50 },
        image: "equipo/marlynp.png",
        neonColor: "rgba(255, 230, 0, 0.8)",
        neonColorLow: "rgba(255, 230, 0, 0.3)",
        imageScale: "1.15"
    },
    elkin: {
        name: "Elkin Gelvez",
        class: "Clase: Diseñador Visual",
        role: "Rol: Guardián del arte digital",
        desc: "Artista de mundos virtuales y creador de atmósferas visuales que transforman ideas en universos jugables.",
        skills: ["Concept art", "Pixel art", "Diseño de escenarios"],
        superpower: "Imaginación Ilimitada – convierte cualquier concepto en una obra visual épica.",
        stats: { code: 20, design: 95, narrative: 40, anim: 80 },
        image: "equipo/elkinp.png",
        neonColor: "rgba(255, 120, 0, 0.8)",
        neonColorLow: "rgba(255, 120, 0, 0.3)",
        imageScale: "0.3" // Escala mínima para Elkin
    },
    keren: {
        name: "Keren Guacas",
        class: "Clase: Diseñadora Narrativa",
        role: "Rol: Tejedora de historias",
        desc: "Narradora estratégica que conecta el juego con emociones y mensajes sociales. Construye puentes entre el gameplay y el significado.",
        skills: ["Diseño narrativo", "Creación de historias", "Construcción de mundos"],
        superpower: "Historia Viva – puede convertir cualquier idea en una narrativa envolvente.",
        stats: { code: 40, design: 60, narrative: 95, anim: 40 },
        image: "equipo/kerenp.png",
        neonColor: "rgba(0, 160, 255, 0.8)",
        neonColorLow: "rgba(0, 160, 255, 0.3)",
        imageScale: "1.15"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".char-nav__btn");
    const infoPanel = document.getElementById("char-info-panel");
    const charImage = document.getElementById("display-image");

    const nameEl = document.getElementById("display-name");
    const classEl = document.getElementById("display-class");
    const roleEl = document.getElementById("display-role");
    const descEl = document.getElementById("display-desc");
    const skillsEl = document.getElementById("display-skills");
    const superEl = document.getElementById("display-superpower");
    const statsEl = document.getElementById("display-stats");

    if (!navButtons.length) return;

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const charId = btn.getAttribute("data-char");
            const data = teamData[charId];

            if (!data) return;

            navButtons.forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            // Aplicar colores y escala neón dinámicos
            document.documentElement.style.setProperty('--char-neon', data.neonColor);
            document.documentElement.style.setProperty('--char-neon-low', data.neonColorLow);
            document.documentElement.style.setProperty('--char-scale', data.imageScale);

            // Animación
            infoPanel.style.animation = 'none';
            infoPanel.offsetHeight; 
            infoPanel.style.animation = 'slideInLeft 0.5s ease-out';
            
            charImage.style.animation = 'none';
            void charImage.offsetWidth; 
            charImage.style.animation = 'select-flash 0.8s ease-out, glitch-flicker 8s infinite, neon-aura 4s ease-in-out infinite alternate';

            nameEl.textContent = data.name;
            classEl.textContent = data.class;
            roleEl.textContent = data.role;
            descEl.textContent = data.desc;
            superEl.textContent = `"${data.superpower}"`;
            charImage.src = data.image;
            charImage.alt = data.name;

            skillsEl.innerHTML = "";
            data.skills.forEach(skill => {
                const li = document.createElement("li");
                li.textContent = skill;
                skillsEl.appendChild(li);
            });

            statsEl.innerHTML = `
                <div class="stat-row">
                    <span>CÓDIGO</span>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${data.stats.code}%"></div></div>
                </div>
                <div class="stat-row">
                    <span>DISEÑO</span>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${data.stats.design}%"></div></div>
                </div>
                <div class="stat-row">
                    <span>NARRATIVA</span>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${data.stats.narrative}%"></div></div>
                </div>
                <div class="stat-row">
                    <span>ANIMACIÓN</span>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${data.stats.anim}%"></div></div>
                </div>
            `;
        });
    });

    // Clic inicial para Angelo para aplicar color por defecto
    const initialBtn = document.querySelector('.char-nav__btn.is-active');
    if (initialBtn) initialBtn.click();
});
