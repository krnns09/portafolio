/* ============================================================
   ÓRBITA — minijuego espacial en A-Frame
   Cursor virtual (raycaster + fuse): se apunta con la mirada, el giroscopio
   o el ratón; sostener la mira o hacer clic dispara.
   ============================================================ */
/* global AFRAME */

(function () {
  "use strict";

  const THREE = AFRAME.THREE;
  const $ = function (id) { return document.getElementById(id); };
  const esPC = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const DURACION = 60;
  const ESCUDOS = 3;
  const FUSE = 650;
  const TIPOS = {
    asteroide: { geo: "dodecahedron", radio: 0.55, color: "#8d8378", puntos: 10, vel: 0.9 },
    cristal:   { geo: "octahedron",   radio: 0.42, color: "#ffb020", puntos: 30, vel: 0, vida: 4500 },
    energia:   { geo: "icosahedron",  radio: 0.36, color: "#37e0ff", puntos: 5,  vel: 0, vida: 5500 }
  };

  /* ------------------------------------------------ Rótulo (texto)
     a-text descarga su tipografía de un CDN: se pinta en un canvas propio. */
  AFRAME.registerComponent("rotulo", {
    schema: {
      texto:  { default: "" },
      ancho:  { default: 1 },
      alto:   { default: 0.3 },
      tamano: { default: 60 },
      fondo:  { default: "" }
    },
    init: function () {
      const PPM = 512;
      this.canvas = document.createElement("canvas");
      this.canvas.width = this.data.ancho * PPM;
      this.canvas.height = this.data.alto * PPM;
      this.textura = new THREE.CanvasTexture(this.canvas);
      this.textura.colorSpace = THREE.SRGBColorSpace;
      const malla = new THREE.Mesh(
        new THREE.PlaneGeometry(this.data.ancho, this.data.alto),
        new THREE.MeshBasicMaterial({ map: this.textura, transparent: true, depthTest: false, toneMapped: false })
      );
      malla.renderOrder = 5;
      this.el.setObject3D("mesh", malla);
    },
    update: function () {
      const d = this.data, c = this.canvas, g = c.getContext("2d");
      g.clearRect(0, 0, c.width, c.height);
      g.shadowBlur = 0;
      if (d.fondo) {
        g.fillStyle = d.fondo;
        g.beginPath();
        g.roundRect(0, 0, c.width, c.height, c.height / 2);
        g.fill();
      }
      g.textAlign = "center";
      g.textBaseline = "middle";
      // Líneas separadas por "|"; las que empiezan por "#" son titulares
      const lineas = d.texto.split("|");
      const paso = c.height / lineas.length;
      lineas.forEach(function (linea, i) {
        const titular = linea.charAt(0) === "#";
        g.font = (titular ? "800 " + d.tamano * 2.6 : "600 " + d.tamano) + "px Syne, 'Space Grotesk', system-ui, sans-serif";
        g.fillStyle = "#f4f4f4";
        g.shadowColor = "rgba(0,0,0,.8)";
        g.shadowBlur = 12;
        g.fillText(titular ? linea.slice(1) : linea, c.width / 2, paso * (i + 0.5), c.width * 0.96);
      });
      this.textura.needsUpdate = true;
    }
  });

  AFRAME.registerComponent("estrellas", {
    init: function () {
      const n = 1400, pos = new Float32Array(n * 3), v = new THREE.Vector3();
      for (let i = 0; i < n; i++) v.randomDirection().multiplyScalar(40 + Math.random() * 15).toArray(pos, i * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      this.el.setObject3D("mesh", new THREE.Points(geo,
        new THREE.PointsMaterial({ color: "#ffffff", size: 0.16, transparent: true, opacity: 0.85 })));
    }
  });

  AFRAME.registerComponent("boton", {
    init: function () {
      const el = this.el;
      el.addEventListener("mouseenter", function () { el.object3D.scale.setScalar(1.08); });
      el.addEventListener("mouseleave", function () { el.object3D.scale.setScalar(1); });
    }
  });

  /* ------------------------------------------------------- Blanco */
  AFRAME.registerComponent("fragmento", {
    schema: { tipo: { default: "asteroide" }, vel: { default: 0 } },
    init: function () {
      this.edad = 0;
      this.giro = new THREE.Vector3().randomDirection().multiplyScalar(1.2);
      this.dir = new THREE.Vector3();
    },
    tick: function (t, dt) {
      const s = Math.min(dt, 100) / 1000, o = this.el.object3D, tipo = TIPOS[this.data.tipo];
      this.edad += s * 1000;
      o.rotation.x += this.giro.x * s;
      o.rotation.y += this.giro.y * s;

      let escala = Math.min(1, this.edad / 250);
      if (tipo.vida) escala *= Math.min(1, Math.max(0, (tipo.vida - this.edad) / 500));
      o.scale.setScalar(Math.max(escala, 0.01));
      if (tipo.vida && this.edad >= tipo.vida) { quitar(this.el); return; }

      if (this.data.vel) {
        $("ojo").object3D.getWorldPosition(this.dir).sub(o.position);
        const d = this.dir.length();
        if (d < 1.4) { this.el.sceneEl.components.juego.impacto(this.el); return; }
        o.position.addScaledVector(this.dir, (this.data.vel * s) / d);
      }
    }
  });

  // Deja de ser blanco en el acto y se quita fuera del tick en curso
  function quitar(el) {
    if (el.dataset.fuera) return;
    el.dataset.fuera = "1";
    el.classList.remove("blanco");
    el.pause();
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 0);
  }

  /* -------------------------------------------------------- Juego */
  AFRAME.registerComponent("juego", {
    init: function () {
      this.jugando = false;
      this.particulas = [];
      this.sonido = true;
      this.record = leerRecord();
      const self = this;
      this.el.addEventListener("loaded", function (e) {
        if (e.target !== self.el) return;
        self.escuchar();
        self.portada();
      });
    },

    escuchar: function () {
      const self = this, cursor = $("cursor");

      const disparar = function (el) {
        if (!el) return;
        if (el.closest("#menu-jugar")) { if (!self.jugando) self.empezar(); }
        else if (el.components && el.components.fragmento) self.acertar(el);
      };
      this.el.addEventListener("click", function (e) { disparar(e.target); });
      // Con fuse activo el cursor sólo emite click al completar la mira: el del ratón va aparte
      if (esPC) {
        cursor.addEventListener("mousedown", function (e) {
          if (e.target === cursor) disparar(e.detail.intersectedEl);
        });
      }

      // Anillo que se llena mientras se sostiene la mira
      cursor.addEventListener("fusing", function () { self.carga = { t: 0 }; });
      ["click", "mouseleave"].forEach(function (ev) {
        cursor.addEventListener(ev, function () {
          self.carga = null;
          $("carga").setAttribute("visible", false);
        });
      });

      $("ayuda").textContent = esPC
        ? "Haz clic para capturar el ratón y apuntar. Clic o mantener la mira dispara; Esc suelta el ratón."
        : "Mueve el teléfono (o arrastra) para apuntar. Mantén la mira sobre el blanco para disparar.";
      if (esPC) $("ojo").setAttribute("look-controls", "pointerLockEnabled", true);

      $("btn-ar").addEventListener("click", function () { entrarAR(self.el); });
      $("btn-sonido").addEventListener("click", function (e) {
        self.sonido = !self.sonido;
        e.currentTarget.setAttribute("aria-pressed", String(self.sonido));
      });

      this.el.addEventListener("enter-vr", function () {
        if (self.el.is("ar-mode")) $("espacio").setAttribute("visible", false);
      });
      this.el.addEventListener("exit-vr", function () {
        $("espacio").setAttribute("visible", $("camara").hidden);
      });
      document.addEventListener("visibilitychange", function () { self.oculto = document.hidden; });
    },

    portada: function (resultado) {
      const lineas = resultado || ["#ÓRBITA", "Defiende la estación 60 segundos", "Asteroide +10 · Cristal +30", "Energía +1 escudo"];
      if (this.record) lineas.push("Récord: " + this.record);
      $("menu-titulo").setAttribute("rotulo", "texto", lineas.join("|"));

      // Delante de donde se esté mirando
      const ojo = $("ojo").object3D, menu = $("menu").object3D, p = new THREE.Vector3(), q = new THREE.Vector3(0, 0, 1);
      ojo.getWorldPosition(p);
      q.applyQuaternion(ojo.getWorldQuaternion(new THREE.Quaternion())).setY(0); // hacia atrás de la cámara
      if (q.lengthSq() < 0.01) q.set(0, 0, 1);
      q.normalize();
      menu.position.set(p.x - q.x * 3, p.y + 0.1, p.z - q.z * 3);
      this.frente = Math.atan2(q.x, q.z);
      menu.rotation.y = this.frente;

      $("menu").setAttribute("visible", true);
      $("menu-jugar").classList.add("blanco");
      $("hud").setAttribute("visible", false);
    },

    empezar: function () {
      this.puntos = 0;
      this.racha = 0;
      this.escudos = ESCUDOS;
      this.resta = DURACION;
      this.proximo = 0.6;
      this.jugando = true;
      $("menu").setAttribute("visible", false);
      $("menu-jugar").classList.remove("blanco");
      $("hud").setAttribute("visible", true);
      this.pintarHud();
      this.pitar(440, 0.15, "triangle");
    },

    terminar: function (motivo) {
      this.jugando = false;
      Array.from($("blancos").children).forEach(quitar);
      const nuevo = this.puntos > this.record;
      if (nuevo) { this.record = this.puntos; guardarRecord(this.puntos); }
      this.pitar(nuevo ? 660 : 220, 0.5, "triangle");
      this.portada(["#" + this.puntos, motivo, nuevo ? "¡Nuevo récord!" : "Mantén la mira en JUGAR para repetir"]);
    },

    crear: function () {
      const azar = Math.random();
      const nombre = azar < 0.68 ? "asteroide" : azar < 0.9 || this.escudos >= ESCUDOS ? "cristal" : "energia";
      const tipo = TIPOS[nombre], avance = 1 - this.resta / DURACION;
      const az = this.frente + (Math.random() - 0.5) * 1.7; // ±49° del frente
      const alt = -0.12 + Math.random() * 0.5;
      const dist = tipo.vel ? 9 + Math.random() * 3 : 5 + Math.random() * 2.5;
      const p = $("ojo").object3D.getWorldPosition(new THREE.Vector3());

      const el = document.createElement("a-entity");
      el.classList.add("blanco");
      el.setAttribute("geometry", { primitive: tipo.geo, radius: tipo.radio });
      el.setAttribute("material", {
        color: tipo.color, flatShading: true, roughness: 0.75,
        emissive: tipo.vel ? "#000000" : tipo.color, emissiveIntensity: 0.45
      });
      el.setAttribute("position", {
        x: p.x - Math.sin(az) * Math.cos(alt) * dist,
        y: p.y + Math.sin(alt) * dist,
        z: p.z - Math.cos(az) * Math.cos(alt) * dist
      });
      el.setAttribute("fragmento", { tipo: nombre, vel: tipo.vel * (1 + avance * 1.3) });
      $("blancos").appendChild(el);
    },

    acertar: function (el) {
      if (!this.jugando || el.dataset.fuera) return;
      const nombre = el.components.fragmento.data.tipo, tipo = TIPOS[nombre];
      this.racha += 1;
      this.puntos += tipo.puntos * this.multi();
      if (nombre === "energia") this.escudos = Math.min(ESCUDOS, this.escudos + 1);
      this.explotar(el.object3D.position, tipo.color);
      this.pitar(380 + Math.min(this.racha, 14) * 45, 0.12, "square");
      quitar(el);
      this.pintarHud();
    },

    // Cada 5 aciertos seguidos sube el multiplicador
    multi: function () { return Math.min(4, 1 + Math.floor(this.racha / 5)); },

    impacto: function (el) {
      quitar(el);
      if (!this.jugando) return;
      this.racha = 0;
      this.escudos -= 1;
      const d = $("dano");
      d.classList.remove("activo");
      void d.offsetWidth;
      d.classList.add("activo");
      this.pitar(90, 0.35, "sawtooth");
      if (navigator.vibrate) navigator.vibrate(120);
      this.pintarHud();
      if (this.escudos <= 0) this.terminar("La estación se quedó sin escudos");
    },

    explotar: function (pos, color) {
      const n = 18, puntos = new Float32Array(n * 3), vel = [];
      for (let i = 0; i < n; i++) {
        pos.toArray(puntos, i * 3);
        vel.push(new THREE.Vector3().randomDirection().multiplyScalar(1 + Math.random() * 3));
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(puntos, 3));
      const p = new THREE.Points(geo, new THREE.PointsMaterial({ color: color, size: 0.16, transparent: true }));
      p.frustumCulled = false;
      this.el.object3D.add(p);
      this.particulas.push({ p: p, vel: vel, t: 0 });
    },

    pintarHud: function () {
      const m = this.multi(), e = Math.max(this.escudos, 0);
      const texto = this.puntos + " pts" + (m > 1 ? " ×" + m : "") + "   ·   " +
        "◆".repeat(e) + "◇".repeat(ESCUDOS - e) + "   ·   " + Math.ceil(this.resta) + " s";
      if (texto !== this.textoHud) $("hud").setAttribute("rotulo", "texto", texto);
      this.textoHud = texto;
    },

    tick: function (t, dt) {
      const s = Math.min(dt, 100) / 1000;

      if (this.carga) {
        this.carga.t += dt;
        $("carga").setAttribute("geometry", "thetaLength", Math.max(1, 360 * Math.min(1, this.carga.t / FUSE)));
        $("carga").setAttribute("visible", true);
      }

      for (let i = this.particulas.length - 1; i >= 0; i--) {
        const e = this.particulas[i], a = e.p.geometry.attributes.position;
        e.t += s;
        e.vel.forEach(function (v, k) {
          a.setXYZ(k, a.getX(k) + v.x * s, a.getY(k) + v.y * s, a.getZ(k) + v.z * s);
        });
        a.needsUpdate = true;
        e.p.material.opacity = Math.max(0, 1 - e.t / 0.7);
        if (e.t > 0.7) {
          this.el.object3D.remove(e.p);
          e.p.geometry.dispose();
          e.p.material.dispose();
          this.particulas.splice(i, 1);
        }
      }

      if (!this.jugando || this.oculto) return;
      this.resta -= s;
      if (this.resta <= 0) { this.terminar("La estación resistió"); return; }
      this.proximo -= s;
      if (this.proximo <= 0) {
        this.crear();
        this.proximo = 0.65 + 0.95 * (this.resta / DURACION);
      }
      this.pintarHud();
    },

    pitar: function (frec, dur, onda) {
      if (!this.sonido) return;
      try {
        this.audio = this.audio || new AudioContext();
        if (this.audio.state === "suspended") this.audio.resume();
        const a = this.audio, o = a.createOscillator(), g = a.createGain();
        o.type = onda;
        o.frequency.setValueAtTime(frec, a.currentTime);
        o.frequency.exponentialRampToValueAtTime(frec * 0.6, a.currentTime + dur);
        g.gain.setValueAtTime(0.12, a.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + dur);
        o.connect(g).connect(a.destination);
        o.start();
        o.stop(a.currentTime + dur);
      } catch (err) { /* sin audio se puede jugar igual */ }
    }
  });

  /* ----------------------------------------------------------- AR
     WebXR donde exista; si no (iPhone, PC), la cámara de fondo. */
  async function entrarAR(escena) {
    const video = $("camara"), boton = $("btn-ar");

    if (video.srcObject) {
      video.srcObject.getTracks().forEach(function (t) { t.stop(); });
      video.srcObject = null;
      video.hidden = true;
      $("espacio").setAttribute("visible", true);
      boton.textContent = "Ver en tu espacio (AR)";
      return;
    }

    try {
      if (navigator.xr && await navigator.xr.isSessionSupported("immersive-ar")) {
        await escena.enterAR();
        return;
      }
    } catch (err) { /* se intenta con la cámara */ }

    try {
      video.srcObject = await navigator.mediaDevices.getUserMedia({
        video: esPC ? true : { facingMode: { ideal: "environment" } }, audio: false
      });
      video.classList.toggle("espejo", esPC);
      video.hidden = false;
      await video.play();
      $("espacio").setAttribute("visible", false);
      boton.textContent = "Volver al espacio";
    } catch (err) {
      video.hidden = true;
      avisar("No se pudo abrir la cámara. El juego sigue en el espacio virtual.");
    }
  }

  let avisoTimer = 0;
  function avisar(texto) {
    $("aviso").textContent = texto;
    clearTimeout(avisoTimer);
    avisoTimer = setTimeout(function () { $("aviso").textContent = ""; }, 5000);
  }

  function leerRecord() {
    try { return Number(localStorage.getItem("orbita.record")) || 0; } catch (err) { return 0; }
  }
  function guardarRecord(n) {
    try { localStorage.setItem("orbita.record", String(n)); } catch (err) { /* sin almacenamiento */ }
  }
})();
