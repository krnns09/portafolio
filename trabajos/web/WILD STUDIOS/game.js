/**
 * GUARDIANES DE LA FRONTERA - WILD STUDIOS
 * Minijuego 2D de Impacto Social
 */

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const missionCounter = document.getElementById('mission-counter');
const dialogBox = document.getElementById('game-dialog');
const dialogText = document.getElementById('dialog-text');
const gameOverScreen = document.getElementById('game-over');

// Configuración de canvas base (resolución lógica)
canvas.width = 800;
canvas.height = 450;

// Estado del Juego
const game = {
    missionsCompleted: 0,
    activeDialog: null,
    isGameOver: false,
    keys: {}
};

// Jugador
const player = {
    x: 100,
    y: 200,
    width: 32,
    height: 32,
    speed: 4,
    color: '#ff003c'
};

// NPCs y Misiones
const npcs = [
    {
        id: 1,
        name: 'Abuela Rosa',
        x: 600,
        y: 100,
        color: '#ffcc00',
        completed: false,
        mission: '“¡Hola, guardián! El parque comunitario está desordenado. ¿Podrías ayudarme a organizar los bancos para que los niños jueguen?”',
        success: '“¡Gracias! Ahora el parque se ve maravilloso. Has ayudado a tu comunidad.”'
    },
    {
        id: 2,
        name: 'Don José',
        x: 400,
        y: 350,
        color: '#00ffcc',
        completed: false,
        mission: '“Gusto en verte. Se me han perdido unas herramientas de construcción cerca de la frontera. Sin ellas no podemos arreglar el refugio.”',
        success: '“¡Excelente trabajo! Esa valla ya no será un peligro para nadie. ¡Eres un ejemplo!”'
    },
    {
        id: 3,
        name: 'Niño Juan',
        x: 150,
        y: 380,
        color: '#ff00ff',
        completed: false,
        mission: '“¡Señor Guardián! Queremos pintar un mural de paz en esta pared gris, pero nos falta el color rojo esperanza.”',
        success: '“¡Qué mural tan bonito! Ahora todos los que pasen por aquí sonreirán. ¡Gracias!”'
    }
];

// Input Listeners
window.addEventListener('keydown', e => game.keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', e => game.keys[e.key.toLowerCase()] = false);

// Bucle Principal
function gameLoop() {
    update();
    render();
    if (!game.isGameOver) {
        requestAnimationFrame(gameLoop);
    }
}

function update() {
    if (game.activeDialog || game.isGameOver) return;

    // Movimiento
    if (game.keys['w'] || game.keys['arrowup']) player.y -= player.speed;
    if (game.keys['s'] || game.keys['arrowdown']) player.y += player.speed;
    if (game.keys['a'] || game.keys['arrowleft']) player.x -= player.speed;
    if (game.keys['d'] || game.keys['arrowright']) player.x += player.speed;

    // Límites
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

    // Colisión con NPCs
    npcs.forEach(npc => {
        const dist = Math.sqrt((player.x - npc.x)**2 + (player.y - npc.y)**2);
        if (dist < 50 && !npc.completed) {
            triggerDialog(npc);
        }
    });

    // Win condition logic (cuando se cierran diálogos se verifica)
}

function triggerDialog(npc) {
    game.activeDialog = npc;
    dialogText.innerText = npc.mission;
    dialogBox.classList.remove('hidden');
}

// Interacción para cerrar diálogo o avanzar misión
window.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'e' && game.activeDialog) {
        const npc = game.activeDialog;
        
        // Sonido de interacción
        const beep = document.getElementById('ui-beep');
        if (beep) { beep.currentTime = 0; beep.play(); }

        if (!npc.completed) {
            npc.completed = true;
            game.missionsCompleted++;
            missionCounter.innerText = `${game.missionsCompleted} / 3`;
            dialogText.innerText = npc.success;
        } else {
            // Cerrar diálogo definitivamente
            dialogBox.classList.add('hidden');
            game.activeDialog = null;
            
            if (game.missionsCompleted === 3) {
                game.isGameOver = true;
                gameOverScreen.classList.remove('hidden');
            }
        }
    }
});

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo oscuro con gradiente
    const grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, 500);
    grad.addColorStop(0, '#0a0510');
    grad.addColorStop(1, '#000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar Ciudad (decorativo)
    drawCity();

    // Dibujar NPCs
    ctx.font = 'px ari-w9500-display, monospace';
    npcs.forEach(npc => {
        const isNear = Math.sqrt((player.x - npc.x)**2 + (player.y - npc.y)**2) < 60;
        
        ctx.save();
        ctx.fillStyle = npc.completed ? '#222' : npc.color;
        
        // Sombra / Brillo
        if (!npc.completed) {
            ctx.shadowBlur = isNear ? 20 : 5;
            ctx.shadowColor = npc.color;
        }

        // Cuerpo NPC (estilo pixel)
        ctx.fillRect(npc.x - 12, npc.y - 12, 24, 24);
        
        // Indicador de interacción
        if (isNear && !npc.completed) {
            ctx.fillStyle = '#fff';
            ctx.font = '12px ari-w9500-display';
            ctx.fillText('[E] HABLAR', npc.x - 30, npc.y - 30);
        }
        ctx.restore();
    });

    // Dibujar Player
    const bob = Math.sin(Date.now() / 150) * 3; // Efecto de caminar
    ctx.save();
    ctx.fillStyle = player.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = player.color;
    
    // Dibujamos al jugador con un ligero movimiento si se está moviendo
    const isMoving = game.keys['w'] || game.keys['s'] || game.keys['a'] || game.keys['d'] || 
                     game.keys['arrowup'] || game.keys['arrowdown'] || game.keys['arrowleft'] || game.keys['arrowright'];
    
    const renderY = isMoving ? player.y + bob : player.y;
    
    ctx.fillRect(player.x, renderY, player.width, player.height);
    
    // Bordes brillantes
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.strokeRect(player.x, renderY, player.width, player.height);
    ctx.restore();
}

function drawCity() {
    const time = Date.now() / 1000;
    
    // Edificios con ventanas neón parpadeantes
    ctx.fillStyle = '#0a0a0a';
    const buildings = [
        {x: 30, w: 90, h: 300}, {x: 180, w: 110, h: 250}, 
        {x: 350, w: 70, h: 280}, {x: 550, w: 100, h: 320},
        {x: 700, w: 80, h: 260}
    ];

    buildings.forEach((b, i) => {
        ctx.fillRect(b.x, canvas.height - b.h, b.w, b.h);
        
        // Ventanas
        ctx.fillStyle = (Math.sin(time + i) > 0.5) ? 'rgba(255, 0, 60, 0.3)' : 'rgba(255, 0, 60, 0.05)';
        for(let row=0; row < b.h/30; row++) {
            for(let col=0; col < b.w/25; col++) {
                ctx.fillRect(b.x + 10 + col*20, (canvas.height - b.h) + 10 + row*30, 10, 10);
            }
        }
    });

    // Calles neón suelo
    ctx.strokeStyle = 'rgba(255, 0, 60, 0.1)';
    ctx.lineWidth = 1;
    for(let i=0; i < canvas.height; i+=30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
}

// Iniciar
gameLoop();
