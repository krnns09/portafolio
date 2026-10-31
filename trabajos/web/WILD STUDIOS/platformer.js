/**
 * ECOHÉROES DEL RÍO - WILD STUDIOS
 * Minijuego de Plataformas Ambiental
 */

const ecoCanvas = document.getElementById('platformerCanvas');
const ecoCtx = ecoCanvas.getContext('2d');
const ecoCounterEl = document.getElementById('eco-counter');
const ecoTimerEl = document.getElementById('eco-timer');
const ecoWinScreen = document.getElementById('eco-win');

// Configuración de canvas lógica
ecoCanvas.width = 800;
ecoCanvas.height = 450;

// Estado del Juego
const ecoGame = {
    score: 0,
    timeLeft: 60,
    isOver: false,
    keys: {},
    gravity: 0.8,
    lastTime: Date.now()
};

// Jugador (EcoHéroe)
const ecoPlayer = {
    x: 50,
    y: 350,
    width: 24,
    height: 36,
    velX: 0,
    velY: 0,
    speed: 5,
    jumpStrength: -15,
    grounded: false,
    color: '#00ff66' // Verde neón
};

// Niveles (Plataformas)
const platforms = [
    { x: 0, y: 420, w: 800, h: 30 },   // Suelo principal
    { x: 150, y: 320, w: 120, h: 10 },
    { x: 350, y: 250, w: 150, h: 10 },
    { x: 600, y: 300, w: 120, h: 10 },
    { x: 100, y: 180, w: 100, h: 10 },
    { x: 550, y: 150, w: 150, h: 10 },
    { x: 320, y: 120, w: 80, h: 10 }
];

// Basura (Objetos a recolectar)
let trashItems = [
    { x: 200, y: 290, collected: false, color: '#ff003c' },
    { x: 400, y: 220, collected: false, color: '#ff003c' },
    { x: 650, y: 270, collected: false, color: '#ff003c' },
    { x: 150, y: 150, collected: false, color: '#ff003c' },
    { x: 600, y: 120, collected: false, color: '#ff003c' },
    { x: 350, y: 90, collected: false, color: '#ff003c' },
    { x: 50, y: 390, collected: false, color: '#ff003c' },
    { x: 750, y: 390, collected: false, color: '#ff003c' }
];

// Input Listeners
window.addEventListener('keydown', e => ecoGame.keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', e => ecoGame.keys[e.key.toLowerCase()] = false);

// Temporizador
const timerInterval = setInterval(() => {
    if (!ecoGame.isOver) {
        ecoGame.timeLeft--;
        ecoTimerEl.innerText = ecoGame.timeLeft;
        if (ecoGame.timeLeft <= 0) endGame(false);
    }
}, 1000);

function ecoLoop() {
    updateEco();
    renderEco();
    if (!ecoGame.isOver) {
        requestAnimationFrame(ecoLoop);
    }
}

function updateEco() {
    // Movimiento Horizontal
    if (ecoGame.keys['a'] || ecoGame.keys['arrowleft']) {
        ecoPlayer.velX = -ecoPlayer.speed;
    } else if (ecoGame.keys['d'] || ecoGame.keys['arrowright']) {
        ecoPlayer.velX = ecoPlayer.speed;
    } else {
        ecoPlayer.velX *= 0.8; // Fricción
    }

    // Gravedad
    ecoPlayer.velY += ecoGame.gravity;
    
    // Aplicar Velocidad
    ecoPlayer.x += ecoPlayer.velX;
    ecoPlayer.y += ecoPlayer.velY;

    // Colisión con límites laterales
    ecoPlayer.x = Math.max(0, Math.min(ecoCanvas.width - ecoPlayer.width, ecoPlayer.x));

    // Colisión con Plataformas
    ecoPlayer.grounded = false;
    platforms.forEach(p => {
        if (ecoPlayer.x < p.x + p.w &&
            ecoPlayer.x + ecoPlayer.width > p.x &&
            ecoPlayer.y + ecoPlayer.height > p.y &&
            ecoPlayer.y + ecoPlayer.height < p.y + p.h + 10 &&
            ecoPlayer.velY >= 0) {
                ecoPlayer.y = p.y - ecoPlayer.height;
                ecoPlayer.velY = 0;
                ecoPlayer.grounded = true;
        }
    });

    // Salto
    if (ecoPlayer.grounded && (ecoGame.keys['w'] || ecoGame.keys['arrowup'] || ecoGame.keys[' '])) {
        ecoPlayer.velY = ecoPlayer.jumpStrength;
        ecoPlayer.grounded = false;
    }

    // Colisión con Basura
    trashItems.forEach(item => {
        if (!item.collected) {
            const dist = Math.sqrt((ecoPlayer.x + 12 - item.x)**2 + (ecoPlayer.y + 18 - item.y)**2);
            if (dist < 25) {
                item.collected = true;
                ecoGame.score++;
                ecoCounterEl.innerText = ecoGame.score;
                
                // Sonido
                const beep = document.getElementById('ui-beep');
                if (beep) { beep.currentTime = 0; beep.play(); }

                if (ecoGame.score === trashItems.length) endGame(true);
            }
        }
    });
}

function endGame(win) {
    ecoGame.isOver = true;
    clearInterval(timerInterval);
    if (win) {
        ecoWinScreen.classList.remove('hidden');
    } else {
        alert("¡Tiempo agotado! Inténtalo de nuevo.");
        location.reload();
    }
}

function renderEco() {
    ecoCtx.clearRect(0, 0, ecoCanvas.width, ecoCanvas.height);
    
    // Fondo: Río Oscuro
    const riverGrad = ecoCtx.createLinearGradient(0, 0, 0, ecoCanvas.height);
    riverGrad.addColorStop(0, '#020502');
    riverGrad.addColorStop(1, '#051a05');
    ecoCtx.fillStyle = riverGrad;
    ecoCtx.fillRect(0, 0, ecoCanvas.width, ecoCanvas.height);

    // Ondas de agua (decorativas)
    ecoCtx.strokeStyle = 'rgba(0, 255, 102, 0.05)';
    ecoCtx.lineWidth = 1;
    const time = Date.now() / 1000;
    for(let i=0; i<ecoCanvas.height; i+=20) {
        const offset = Math.sin(time + i/50) * 10;
        ecoCtx.beginPath();
        ecoCtx.moveTo(0, i);
        ecoCtx.lineTo(ecoCanvas.width, i + offset);
        ecoCtx.stroke();
    }

    // Plataformas
    ecoCtx.fillStyle = '#0a0a0a';
    ecoCtx.strokeStyle = '#00ff6633';
    platforms.forEach(p => {
        ecoCtx.fillRect(p.x, p.y, p.w, p.h);
        ecoCtx.strokeRect(p.x, p.y, p.w, p.h);
    });

    // Basura
    trashItems.forEach(item => {
        if (!item.collected) {
            ecoCtx.fillStyle = item.color;
            ecoCtx.shadowBlur = 10;
            ecoCtx.shadowColor = item.color;
            // Forma de "lata" o residuo
            ecoCtx.fillRect(item.x - 6, item.y - 6, 12, 12);
            ecoCtx.shadowBlur = 0;
        }
    });

    // Jugador
    ecoCtx.fillStyle = ecoPlayer.color;
    ecoCtx.shadowBlur = 15;
    ecoCtx.shadowColor = ecoPlayer.color;
    ecoCtx.fillRect(ecoPlayer.x, ecoPlayer.y, ecoPlayer.width, ecoPlayer.height);
    
    // Ojos/Detalle
    ecoCtx.fillStyle = '#000';
    ecoCtx.fillRect(ecoPlayer.x + 14, ecoPlayer.y + 8, 4, 4);
    
    ecoCtx.shadowBlur = 0;
}

// Iniciar
ecoLoop();
