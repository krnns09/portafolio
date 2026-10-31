/**
 * HISTORIAS DE BARRIO - WILD STUDIOS
 * Minijuego Narrativo RPG
 */

const narCanvas = document.getElementById('narrativeCanvas');
const narCtx = narCanvas.getContext('2d');
const narDialog = document.getElementById('narrative-dialog');
const narText = document.getElementById('npc-text');
const narName = document.getElementById('npc-name');
const narPortrait = document.getElementById('dialog-portrait');
const narOver = document.getElementById('narrative-over');

narCanvas.width = 800;
narCanvas.height = 450;

// Estado
const narGame = {
    keys: {},
    npcsSpokenTo: new Set(),
    activeNPC: null,
    isOver: false
};

const narPlayer = {
    x: 400,
    y: 225,
    width: 24,
    height: 32,
    speed: 4,
    color: '#ff003c'
};

const storyNPCs = [
    {
        id: 'abuelo',
        name: 'Abuelo Mateo',
        x: 150,
        y: 100,
        color: '#ffcc00',
        portrait: '👴',
        story: '“En mis tiempos, estas calles estaban llenas de árboles. Cuidar nuestra memoria es como regar una planta: si no lo haces, se seca. ¿Sabías que aquí se fundó el primer centro comunitario del barrio?”'
    },
    {
        id: 'joven',
        name: 'Lucía (Líder Juvenil)',
        x: 650,
        y: 150,
        color: '#00ffcc',
        portrait: '👩‍🎤',
        story: '“¡Ey! Estamos organizando un torneo de e-sports para recaudar fondos para la biblioteca. La tecnología no es solo ocio, es una herramienta para unirnos. ¿Te apuntas?”'
    },
    {
        id: 'artista',
        name: 'Marcos (Muralista)',
        x: 300,
        y: 350,
        color: '#ff00ff',
        portrait: '🎨',
        story: '“Cada color en esta pared cuenta un sueño. Una ciudad con color es una ciudad con esperanza. Ayúdanos a proteger el arte urbano, es el alma de nuestra Cúcuta.”'
    }
];

// Input
window.addEventListener('keydown', e => narGame.keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', e => narGame.keys[e.key.toLowerCase()] = false);

function narLoop() {
    updateNar();
    renderNar();
    if (!narGame.isOver) {
        requestAnimationFrame(narLoop);
    }
}

function updateNar() {
    if (narGame.activeNPC || narGame.isOver) return;

    if (narGame.keys['w'] || narGame.keys['arrowup']) narPlayer.y -= narPlayer.speed;
    if (narGame.keys['s'] || narGame.keys['arrowdown']) narPlayer.y += narPlayer.speed;
    if (narGame.keys['a'] || narGame.keys['arrowleft']) narPlayer.x -= narPlayer.speed;
    if (narGame.keys['d'] || narGame.keys['arrowright']) narPlayer.x += narPlayer.speed;

    narPlayer.x = Math.max(0, Math.min(narCanvas.width - narPlayer.width, narPlayer.x));
    narPlayer.y = Math.max(0, Math.min(narCanvas.height - narPlayer.height, narPlayer.y));

    // Detección de NPC
    storyNPCs.forEach(npc => {
        const dist = Math.sqrt((narPlayer.x - npc.x)**2 + (narPlayer.y - npc.y)**2);
        if (dist < 50) {
            // Mostrar indicador visual si hace falta, pero la interacción es con E
        }
    });
}

// Interacción
window.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'e') {
        if (narGame.activeNPC) {
            // Cerrar diálogo
            narDialog.classList.add('hidden');
            narGame.npcsSpokenTo.add(narGame.activeNPC.id);
            narGame.activeNPC = null;

            if (narGame.npcsSpokenTo.size === storyNPCs.length) {
                narGame.isOver = true;
                narOver.classList.remove('hidden');
            }
        } else {
            // Buscar NPC cercano para hablar
            storyNPCs.forEach(npc => {
                const dist = Math.sqrt((narPlayer.x - npc.x)**2 + (narPlayer.y - npc.y)**2);
                if (dist < 60) {
                    showStory(npc);
                }
            });
        }
    }
});

function showStory(npc) {
    narGame.activeNPC = npc;
    narName.innerText = npc.name;
    narText.innerText = npc.story;
    narPortrait.innerText = npc.portrait;
    narPortrait.style.fontSize = '2.5rem';
    narDialog.classList.remove('hidden');

    // Sonido
    const beep = document.getElementById('ui-beep');
    if (beep) { beep.currentTime = 0; beep.play(); }
}

function renderNar() {
    // Fondo Barrio Nocturno
    narCtx.fillStyle = '#050505';
    narCtx.fillRect(0, 0, narCanvas.width, narCanvas.height);

    // Calles neón
    narCtx.strokeStyle = 'rgba(255, 0, 60, 0.05)';
    narCtx.lineWidth = 1;
    for(let i=0; i<narCanvas.width; i+=50) {
        narCtx.beginPath();
        narCtx.moveTo(i, 0);
        narCtx.lineTo(i, narCanvas.height);
        narCtx.stroke();
    }

    // Dibujar NPCs
    storyNPCs.forEach(npc => {
        const isSpoken = narGame.npcsSpokenTo.has(npc.id);
        narCtx.save();
        narCtx.fillStyle = isSpoken ? '#222' : npc.color;
        narCtx.shadowBlur = isSpoken ? 0 : 15;
        narCtx.shadowColor = npc.color;
        
        // Forma de personaje
        narCtx.fillRect(npc.x - 12, npc.y - 12, 24, 24);
        
        // Aura interactiva
        const dist = Math.sqrt((narPlayer.x - npc.x)**2 + (narPlayer.y - npc.y)**2);
        if (dist < 60 && !narGame.activeNPC) {
            narCtx.strokeStyle = '#fff';
            narCtx.setLineDash([5, 5]);
            narCtx.strokeRect(npc.x - 20, npc.y - 20, 40, 40);
            
            narCtx.fillStyle = '#fff';
            narCtx.font = '10px monospace';
            narCtx.fillText('[E] ESCUCHAR', npc.x - 30, npc.y - 30);
        }
        narCtx.restore();
    });

    // Jugador
    narCtx.save();
    narCtx.fillStyle = narPlayer.color;
    narCtx.shadowBlur = 20;
    narCtx.shadowColor = narPlayer.color;
    narCtx.fillRect(narPlayer.x, narPlayer.y, narPlayer.width, narPlayer.height);
    narCtx.restore();
}

narLoop();
