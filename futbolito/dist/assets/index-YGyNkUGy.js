(function(){var e=document.createElement(`style`);e.textContent=`html,body{overscroll-behavior:none;touch-action:none;-webkit-user-select:none;user-select:none;background:#05030b;height:100%;margin:0;overflow:hidden}body{justify-content:center;align-items:center;display:flex}#stage{background:#0b0618;width:480px;height:270px;position:relative;box-shadow:0 0 40px #00f0ff26,0 0 80px #ff2bd614}#stage canvas{width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges;outline:none;position:absolute;inset:0}#view3d{display:none}#stage.mode3d #view3d{display:block}#scanlines{pointer-events:none;background:repeating-linear-gradient(to bottom, #0000 0, #0000 calc(var(--px,3px) * .5), #00000038 calc(var(--px,3px) * .5), #00000038 var(--px,3px));display:none;position:absolute;inset:0}#stage.scanlines #scanlines{display:block}
/*$vite$:1*/`,document.head.appendChild(e);var t=Object.defineProperty,n=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},r=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},i={A:[14,17,17,31,17,17,17],B:[30,17,17,30,17,17,30],C:[14,17,16,16,16,17,14],D:[30,17,17,17,17,17,30],E:[31,16,16,30,16,16,31],F:[31,16,16,30,16,16,16],G:[14,17,16,23,17,17,15],H:[17,17,17,31,17,17,17],I:[14,4,4,4,4,4,14],J:[7,2,2,2,2,18,12],K:[17,18,20,24,20,18,17],L:[16,16,16,16,16,16,31],M:[17,27,21,21,17,17,17],N:[17,17,25,21,19,17,17],O:[14,17,17,17,17,17,14],P:[30,17,17,30,16,16,16],Q:[14,17,17,17,21,18,13],R:[30,17,17,30,20,18,17],S:[15,16,16,14,1,1,30],T:[31,4,4,4,4,4,4],U:[17,17,17,17,17,17,14],V:[17,17,17,17,17,10,4],W:[17,17,17,21,21,21,10],X:[17,17,10,4,10,17,17],Y:[17,17,10,4,4,4,4],Z:[31,1,2,4,8,16,31],0:[14,17,19,21,25,17,14],1:[4,12,4,4,4,4,14],2:[14,17,1,2,4,8,31],3:[31,2,4,2,1,17,14],4:[2,6,10,18,31,2,2],5:[31,16,30,1,1,17,14],6:[6,8,16,30,17,17,14],7:[31,1,2,4,8,8,8],8:[14,17,17,14,17,17,14],9:[14,17,17,15,1,2,12]," ":[0,0,0,0,0,0,0],".":[0,0,0,0,0,12,12],",":[0,0,0,0,12,4,8],":":[0,12,12,0,12,12,0],";":[0,12,12,0,12,4,8],"!":[4,4,4,4,4,0,4],"?":[14,17,1,2,4,0,4],"-":[0,0,0,31,0,0,0],"+":[0,4,4,31,4,4,0],"/":[1,2,2,4,8,8,16],"(":[2,4,8,8,8,4,2],")":[8,4,2,2,2,4,8],"'":[4,4,8,0,0,0,0],'"':[10,10,0,0,0,0,0],"<":[2,4,8,16,8,4,2],">":[8,4,2,1,2,4,8],"%":[24,25,2,4,8,19,3],"#":[10,10,31,10,31,10,10],"=":[0,0,31,0,31,0,0],_:[0,0,0,0,0,0,31],"*":[0,21,14,31,14,21,0],"[":[14,8,8,8,8,8,14],"]":[14,2,2,2,2,2,14],"·":[0,0,0,4,0,0,0],"↑":[4,14,21,4,4,4,4],"↓":[4,4,4,4,21,14,4],"←":[0,4,8,31,8,4,0],"→":[0,4,2,31,2,4,0],"▶":[8,12,14,15,14,12,8],"◀":[2,6,14,30,14,6,2],"♥":[0,10,31,31,14,4,0],"★":[4,4,31,14,14,27,17],"•":[0,0,14,14,14,0,0],"⚠":[4,10,10,21,17,21,31],"⚡":[3,6,12,31,6,12,24],"¡":[4,0,4,4,4,4,4],"¿":[4,0,4,8,16,17,14]},a={Á:[`A`,`acute`],É:[`E`,`acute`],Í:[`I`,`acute`],Ó:[`O`,`acute`],Ú:[`U`,`acute`],Ñ:[`N`,`tilde`],Ü:[`U`,`diaeresis`]},o=class{atlas;index=new Map;tinted=new Map;marks;constructor(){let e=Object.keys(i);e.forEach((e,t)=>this.index.set(e,t)),this.atlas=document.createElement(`canvas`),this.atlas.width=e.length*5,this.atlas.height=7;let t=this.atlas.getContext(`2d`);t.fillStyle=`#fff`,e.forEach((e,n)=>{i[e].forEach((e,r)=>{for(let i=0;i<5;i++)e&1<<4-i&&t.fillRect(n*5+i,r,1,1)})}),this.marks=document.createElement(`canvas`),this.marks.width=15,this.marks.height=2;let n=this.marks.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(3,0,1,1),n.fillRect(2,1,1,1),n.fillRect(6,1,1,1),n.fillRect(7,0,2,1),n.fillRect(9,1,1,1),n.fillRect(11,0,1,1),n.fillRect(13,0,1,1)}measure(e,t=1){return Math.max(0,[...e].length*6-1)*t}tint(e,t,n){let r=n+t,i=this.tinted.get(r);if(!i){i=document.createElement(`canvas`),i.width=e.width,i.height=e.height;let n=i.getContext(`2d`);n.drawImage(e,0,0),n.globalCompositeOperation=`source-in`,n.fillStyle=t,n.fillRect(0,0,i.width,i.height),this.tinted.set(r,i)}return i}draw(e,t,n,r,i,a={}){let o=a.scale??1,s=a.align??`left`,c=this.measure(t,o),l=Math.round(s===`center`?n-c/2:s===`right`?n-c:n),u=Math.round(r);if(a.outline)for(let[n,r]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]])this.raw(e,t,l+n,u+r,a.outline,o);else a.shadow&&this.raw(e,t,l+o,u+o,a.shadow,o);this.raw(e,t,l,u,i,o)}raw(e,t,n,r,i,o){let s=this.tint(this.atlas,i,`a`),c=this.tint(this.marks,i,`m`),l=n;for(let n of t.toUpperCase()){let t=n,i=a[t];i&&(t=i[0]);let u=this.index.get(t)??this.index.get(`?`);if(e.drawImage(s,u*5,0,5,7,l,r,5*o,7*o),i){let t=i[1]===`acute`?0:i[1]===`tilde`?1:2;e.drawImage(c,t*5,0,5,2,l,r-3*o,5*o,2*o)}l+=6*o}}wrap(e,t,n=1){let r=e.split(` `),i=[],a=``;for(let e of r){let r=a?`${a} ${e}`:e;this.measure(r,n)>t&&a?(i.push(a),a=e):a=r}return a&&i.push(a),i}},s,c,l,u,d,f,p,m,h,g,_=n((()=>{s={L:440,W:200,goalTop:70,goalBottom:130,goalDepth:14,crossbar:26,boxDepth:64,boxTop:40,boxBottom:160,smallBoxDepth:22,smallBoxTop:56,smallBoxBottom:144,centerRadius:30,penaltySpot:48},c=2.5,l=1.5,u=e=>e===0?1:-1,d=e=>e===0?0:s.L,f=e=>e===0?s.L:0,p=(s.goalTop+s.goalBottom)/2,m=e=>+(e===0),h=(e,t)=>e===0?t:s.L-t,g=(e,t)=>e===0?t:s.L-t}));_();var v={cx:240,top:96,yScale:.78,far:.8},y=e=>v.far+(1-v.far)*(e/s.W);function b(e,t){return v.cx+(e-s.L/2)*y(t)}function x(e,t=0){return v.top+e*v.yScale-t}function S(e,t){let n=(t-v.top)/v.yScale;return{x:(e-v.cx)/y(n)+s.L/2,y:n}}function C(e,t,n,r,i,a){t=Math.round(t),n=Math.round(n),r=Math.round(r),i=Math.round(i);let o=Math.abs(r-t),s=-Math.abs(i-n),c=t<r?1:-1,l=n<i?1:-1,u=o+s;e.fillStyle=a;for(let a=0;a<2e3&&(e.fillRect(t,n,1,1),t!==r||n!==i);a++){let e=2*u;e>=s&&(u+=s,t+=c),e<=o&&(u+=o,n+=l)}}function w(e,t,n,r,i,a){e.fillStyle=a;let o=Math.round(t),s=Math.round(n);for(let t=-i;t<=i;t++){let n=Math.round(r*Math.sqrt(Math.max(0,1-t*t/(i*i+1e-4))));n>0&&e.fillRect(o-n,s+t,n*2,1)}}function T(e,t,n){let r=n.bob;E(e,5,13+r,n.fb,n.lb,t.jerseyDark===t.socks?t.socks:D(t.socks),ee),n.armsUp?e(3,3+r,1,4,t.jerseyDark):n.handsOnHead?e(4,4+r,1,3,t.jerseyDark):(e(4,7+r,1,3+n.hb,t.jerseyDark),e(4,10+r+n.hb,1,1,t.skin)),e(5,7+r,5,5,t.jersey),e(7,7+r,1,5,t.stripe),e(5,7+r,5,1,t.jerseyDark),e(5,12+r,5,2,t.shorts),E(e,8,13+r,n.fa,n.la,t.socks,ee);let i=1+r+ +!!n.headDown;e(5,i+1,5,5,t.skin),e(5,i,5,2,t.hair),e(4,i+1,2,3,t.hair),e(7,i+3,4,1,t.visor),e(10,i+3,1,1,`#ffffff`),n.armsUp?(e(10,3+r,1,4,t.jersey),e(10,2+r,1,1,t.skin),e(3,2+r,1,1,t.skin)):n.handsOnHead?(e(10,4+r,1,3,t.jersey),e(9,i,2,1,t.skin),e(4,i,2,1,t.skin)):(e(10,7+r,1,3+n.ha,t.jersey),e(10,10+r+n.ha,1,1,t.skin))}function E(e,t,n,r,i,a,o){let s=17-i;e(t+Math.round(r/2),n+1,2,Math.max(1,s-n-1),a),e(t+r,s-1,2,1,a),e(t+r,s,3,1,o)}function D(e,t=.65){let n=parseInt(e.slice(1),16),r=Math.round((n>>16&255)*t),i=Math.round((n>>8&255)*t),a=Math.round((n&255)*t);return`#${(1<<24|r<<16|i<<8|a).toString(16).slice(1)}`}function O(e,t,n){switch(n){case`idle0`:return T(e,t,{fa:0,la:0,fb:0,lb:0,ha:0,hb:0,bob:0});case`idle1`:return T(e,t,{fa:0,la:0,fb:0,lb:0,ha:0,hb:0,bob:1});case`run0`:return T(e,t,{fa:2,la:0,fb:-2,lb:1,ha:-1,hb:1,bob:0});case`run1`:return T(e,t,{fa:0,la:2,fb:0,lb:0,ha:0,hb:0,bob:1});case`run2`:return T(e,t,{fa:-2,la:1,fb:2,lb:0,ha:1,hb:-1,bob:0});case`run3`:return T(e,t,{fa:0,la:0,fb:0,lb:2,ha:0,hb:0,bob:1});case`kick0`:return T(e,t,{fa:-3,la:2,fb:0,lb:0,ha:-2,hb:1,bob:0});case`kick1`:return T(e,t,{fa:3,la:4,fb:-1,lb:0,ha:1,hb:-2,bob:0});case`cel0`:return T(e,t,{fa:1,la:0,fb:-1,lb:0,ha:0,hb:0,bob:0,armsUp:!0});case`cel1`:return T(e,t,{fa:2,la:1,fb:-2,lb:1,ha:0,hb:0,bob:-1,armsUp:!0});case`sad`:return T(e,t,{fa:0,la:0,fb:0,lb:0,ha:0,hb:0,bob:1,headDown:!0,handsOnHead:!0});case`hold`:T(e,t,{fa:0,la:0,fb:0,lb:0,ha:-2,hb:-2,bob:0}),e(10,8,2,1,t.skin);return;case`slide`:e(2,9,5,5,t.skin),e(2,8,5,2,t.hair),e(4,11,4,1,t.visor),e(5,12,5,4,t.jersey),e(6,12,1,4,t.stripe),e(9,14,3,2,t.shorts),e(11,15,3,2,t.socks),e(13,16,1,2,ee),e(3,15,3,1,t.jerseyDark),e(2,16,1,1,t.skin);return;case`dive`:e(9,8,4,4,t.skin),e(9,7,4,2,t.hair),e(11,10,3,1,t.visor),e(3,9,6,4,t.jersey),e(5,9,1,4,t.stripe),e(1,10,2,3,t.shorts),e(0,11,1,2,t.socks),e(13,6,1,3,t.jersey),e(13,5,1,1,t.skin),e(13,12,1,2,t.jerseyDark),e(13,14,1,1,t.skin);return;case`fall`:e(1,13,4,4,t.skin),e(0,13,2,4,t.hair),e(3,13,1,3,t.visor),e(5,13,5,4,t.jersey),e(5,15,5,1,t.stripe),e(10,14,2,3,t.shorts),e(12,13,2,2,t.socks),e(13,11,1,2,ee),e(12,16,2,1,t.socks),e(6,11,1,2,t.jerseyDark);return}}function k(e,t,n,r){let i=e.getImageData(t,0,n,r).data,a=(e,t)=>e>=0&&t>=0&&e<n&&t<r&&i[(t*n+e)*4+3]>0,o=[];for(let e=0;e<r;e++)for(let t=0;t<n;t++)a(t,e)||(a(t-1,e)||a(t+1,e)||a(t,e-1)||a(t,e+1))&&o.push(t,e);e.fillStyle=N;for(let n=0;n<o.length;n+=2)e.fillRect(t+o[n],o[n+1],1,1)}function A(e,t){switch(e){case`idle`:return Math.floor(t*2)%2==0?`idle0`:`idle1`;case`run`:return[`run0`,`run1`,`run2`,`run3`][Math.floor(t*10)%4];case`kick`:return t<.07?`kick0`:`kick1`;case`slide`:return`slide`;case`dive`:return`dive`;case`fall`:return`fall`;case`celebrate`:return Math.floor(t*6)%2==0?`cel0`:`cel1`;case`hold`:return`hold`;case`sad`:return`sad`}}function j(e,t){let n=t===0,r=e.colors,i=e.id.length*7+t*3,a=n?r.keeper:r.primary;return{jersey:a,jerseyDark:D(a,.7),stripe:n?D(r.keeper,.5):r.secondary,shorts:n?`#1b1230`:r.secondary,socks:n?r.keeper:r.dark,skin:ne[(i+t)%ne.length],hair:te[(i*3+t)%te.length],visor:r.accent}}function M(e,t,n,r,i=1){let a={"#":t.colors.primary,"+":t.colors.secondary,"*":t.colors.accent};e.fillStyle=N,t.emblem.forEach((t,a)=>{[...t].forEach((t,o)=>{t!==`.`&&e.fillRect(Math.round(n+(o-1)*i),Math.round(r+(a-1)*i),i*3,i*3)})}),t.emblem.forEach((t,o)=>{[...t].forEach((t,s)=>{let c=a[t];c&&(e.fillStyle=c,e.fillRect(Math.round(n+s*i),Math.round(r+o*i),i,i))})})}var N,ee,te,ne,re,ie,ae,oe=n((()=>{N=`#0a0612`,ee=`#1b1230`,te=[`#ff4fd8`,`#3df2ff`,`#f5f5f5`,`#2a1b3d`,`#ffb000`,`#7cff4f`,`#ff5a36`,`#9b6bff`],ne=[`#f2c7a5`,`#d79b6e`,`#a8694a`,`#6e4630`,`#ffd9c0`,`#c98b5e`],re=[`idle0`,`idle1`,`run0`,`run1`,`run2`,`run3`,`kick0`,`kick1`,`slide`,`dive`,`fall`,`cel0`,`cel1`,`hold`,`sad`],ie=class{sheet;constructor(e){let t=re.length;this.sheet=document.createElement(`canvas`),this.sheet.width=16*t,this.sheet.height=40;let n=this.sheet.getContext(`2d`);re.forEach((t,r)=>{let i=r*16+1;O((e,t,r,a,o)=>{n.fillStyle=o,n.fillRect(i+e,1+t,r,a)},e,t),k(n,r*16,16,20)});for(let e=0;e<t;e++)n.save(),n.translate(e*16+16,20),n.scale(-1,1),n.drawImage(this.sheet,e*16,0,16,20,0,0,16,20),n.restore()}draw(e,t,n,r,i){let a=re.indexOf(t);e.drawImage(this.sheet,a*16,i?20:0,16,20,Math.round(n-8),Math.round(r-18),16,20)}},ae=class{cache=new Map;get(e,t){let n=`${e.id}:${t}`,r=this.cache.get(n);return r||(r=new ie(j(e,t)),this.cache.set(n,r)),r}}}));oe();var se=[{id:`jackals`,name:`CYBER JACKALS`,short:`CJK`,style:`EQUILIBRADO`,strength:`Versatilidad`,weakness:`No destaca en nada`,description:`Chacales del distrito 9. Hacen de todo un poco y nada mal.`,trait:`balanced`,special:`pack`,stats:{speed:3,power:3,passing:3,defense:3,keeper:3},colors:{primary:`#00e5ff`,secondary:`#141826`,accent:`#b8fbff`,keeper:`#ffd23f`,dark:`#007c8c`},emblem:[`#.......#`,`##.....##`,`#+#...#+#`,`#+######.`,`.##*#*##.`,`.#######.`,`..#+++#..`,`...###...`,`....#....`],players:[`K. VEX`,`D. NOX`,`R. JINX`,`Z. KANE`,`M. DUSK`]},{id:`glitch`,name:`GLITCH PUNKS`,short:`GLP`,style:`OFENSIVO`,strength:`Potencia de ataque`,weakness:`Defensa fragil`,description:`Disparan primero y depuran despues. Su defensa tiene bugs.`,trait:`offense`,special:`glitch`,stats:{speed:3,power:5,passing:3,defense:2,keeper:2},colors:{primary:`#ff2bd6`,secondary:`#6a1bbf`,accent:`#ffc2f4`,keeper:`#3dff7a`,dark:`#8c0f74`},emblem:[`..#####..`,`.#######.`,`##*###*##`,`##*###*##`,`#########`,`.##+#+##.`,`..#####..`,`..#.#.#..`,`..+.+.+..`],players:[`SID ERR`,`PIX 404`,`NULL`,`BYTE-O`,`RAGE.EXE`]},{id:`vipers`,name:`VOLT VIPERS`,short:`VVP`,style:`VELOCIDAD`,strength:`Desplazamiento rapido`,weakness:`Disparo debil`,description:`Corren a 220 voltios. Llegan antes, pero patean flojito.`,trait:`speed`,special:`dash`,stats:{speed:5,power:2,passing:4,defense:3,keeper:3},colors:{primary:`#a6ff00`,secondary:`#0c120a`,accent:`#efffbf`,keeper:`#ff7b00`,dark:`#4f7a00`},emblem:[`...####..`,`..#*##*#.`,`..######.`,`...##+...`,`..##.....`,`.##......`,`.##...##.`,`..######.`,`....##...`],players:[`ZAP`,`OHM`,`SPARK`,`AMPERIO`,`VOLTA`]},{id:`titans`,name:`CHROME TITANS`,short:`CHT`,style:`DEFENSIVO`,strength:`Defensa y portero`,weakness:`Lentos`,description:`Muralla de cromo pulido. Lentos como un update de Windows.`,trait:`defense`,special:`wall`,stats:{speed:2,power:3,passing:3,defense:5,keeper:5},colors:{primary:`#c9d4e8`,secondary:`#1f5bff`,accent:`#ffffff`,keeper:`#ff2b4a`,dark:`#5f6b80`},emblem:[`#########`,`#+++++++#`,`#+#####+#`,`#+#*#*#+#`,`#+#####+#`,`.#+###+#.`,`.#+++++#.`,`..#+++#..`,`...###...`],players:[`ACERO`,`BULWARK`,`T-800`,`CROMO`,`BLINDEX`]},{id:`bandits`,name:`BYTE BANDITS`,short:`BYB`,style:`IMPREDECIBLE`,strength:`Rebotes y caos`,weakness:`Inconsistentes`,description:`Nadie sabe que van a hacer. Ellos tampoco.`,trait:`chaos`,special:`quantum`,stats:{speed:4,power:3,passing:2,defense:3,keeper:3},colors:{primary:`#ff8a1f`,secondary:`#00d9ff`,accent:`#ffe0bd`,keeper:`#b14dff`,dark:`#8c4300`},emblem:[`.........`,`#########`,`#*#####*#`,`#########`,`.+++++++.`,`..#####..`,`..#.#.#..`,`..#####..`,`.........`],players:[`LOOT`,`GLITCHY`,`RANDO`,`CACHE`,`PILLO`]},{id:`zerog`,name:`ZERO GRAVITY FC`,short:`ZGF`,style:`CONTROL AEREO`,strength:`Balones elevados`,weakness:`Defensa vulnerable`,description:`Entrenan en orbita. En el suelo se sienten raros.`,trait:`aerial`,special:`zerog`,stats:{speed:3,power:4,passing:4,defense:2,keeper:3},colors:{primary:`#f4f1ff`,secondary:`#8a3dff`,accent:`#d9c2ff`,keeper:`#00ffa3`,dark:`#7d72a8`},emblem:[`...###...`,`.#*###*#.`,`+++++++++`,`#########`,`+++++++++`,`.#######.`,`...###...`,`.........`,`.........`],players:[`ORBIT`,`NOVA`,`COSMO`,`LUNA-9`,`APOGEO`]}],ce=[{id:`thewall`,name:`THE WALL`,short:`WAL`,style:`MURALLA`,strength:`Portero mecanico gigante`,weakness:`Se recalienta`,description:`Una defensa de hormigon y un portero que pesa dos toneladas.`,trait:`defense`,special:`wall`,stats:{speed:2,power:3,passing:3,defense:5,keeper:5},colors:{primary:`#8a8f99`,secondary:`#c2182b`,accent:`#ff5a1f`,keeper:`#ffb000`,dark:`#3e424a`},emblem:[`#########`,`#+##+##+#`,`#########`,`##+##+###`,`#########`,`#+##+##+#`,`#########`,`.*.....*.`,`.........`],players:[`UNIT-K`,`BLOQUE`,`MURO-2`,`PILAR`,`COLUMNA`]},{id:`drones`,name:`CORPORATE DRONES`,short:`CDR`,style:`BUROCRATICO`,strength:`Juegan con las reglas del jefe`,weakness:`Sin alma`,description:`Los empleados del mes del Commissioner. Firman en triplicado.`,trait:`balanced`,special:`pack`,stats:{speed:4,power:4,passing:4,defense:3,keeper:3},colors:{primary:`#ffd23f`,secondary:`#1a1408`,accent:`#fff4c2`,keeper:`#00e5ff`,dark:`#8c6f00`},emblem:[`...###...`,`..#####..`,`.##*#*##.`,`.#######.`,`..#+++#..`,`.#######.`,`#########`,`##.###.##`,`##.###.##`],players:[`DRON-01`,`DRON-02`,`DRON-03`,`DRON-04`,`BECARIO`]},{id:`idols`,name:`NEON IDOLS`,short:`IDL`,style:`CAMPEONES`,strength:`Pases y cambios de ritmo`,weakness:`Su ego`,description:`Campeones patrocinados. Mas seguidores que goles... y tienen muchos goles.`,trait:`offense`,special:`glitch`,stats:{speed:4,power:4,passing:5,defense:4,keeper:4},colors:{primary:`#ff4fd8`,secondary:`#ffd23f`,accent:`#ffffff`,keeper:`#00e5ff`,dark:`#8c1f74`},emblem:[`....#....`,`...###...`,`#########`,`.#######.`,`..##*##..`,`.###.###.`,`.##...##.`,`.#.....#.`,`.........`],players:[`STAR`,`IDOLO`,`FLASH`,`HYPE`,`NEO`]}],P=[...se,...ce],le=[`jackals`,`glitch`,`vipers`,`titans`],ue=e=>P.find(t=>t.id===e)??se[0],de=[`up`,`down`,`left`,`right`,`shoot`,`pass`,`switch`,`special`],fe=`neonleague.save`,pe={p1:{up:`KeyW`,down:`KeyS`,left:`KeyA`,right:`KeyD`,shoot:`Space`,pass:`KeyF`,switch:`KeyE`,special:`ShiftLeft`},p2:{up:`ArrowUp`,down:`ArrowDown`,left:`ArrowLeft`,right:`ArrowRight`,shoot:`Enter`,pass:`Slash`,switch:`Period`,special:`ShiftRight`}};function me(){return{version:1,options:{musicVolume:.6,sfxVolume:.8,difficulty:`normal`,scanlines:!0,screenShake:!0,pixelPerfect:!0,swapPads:!1},bindings:{p1:{...pe.p1},p2:{...pe.p2}},stats:{played:0,wins:0,losses:0,goalsFor:0,goalsAgainst:0},campaign:{round:0,team:null,wins:[],losses:[],finished:!1,unlockedTeams:[...le]}}}var he=e=>typeof e==`object`&&!!e&&!Array.isArray(e),ge=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.min(r,Math.max(n,e)):t,_e=(e,t)=>typeof e==`boolean`?e:t;function ve(e,t){let n={...t};if(!he(e))return n;for(let t of de)typeof e[t]==`string`&&e[t].length>0&&e[t].length<40&&(n[t]=e[t]);return n}function ye(e){let t=me();if(!he(e))return t;let n=he(e.options)?e.options:{},r=n.difficulty;t.options={musicVolume:ge(n.musicVolume,t.options.musicVolume,0,1),sfxVolume:ge(n.sfxVolume,t.options.sfxVolume,0,1),difficulty:r===`easy`||r===`normal`||r===`hard`?r:t.options.difficulty,scanlines:_e(n.scanlines,t.options.scanlines),screenShake:_e(n.screenShake,t.options.screenShake),pixelPerfect:_e(n.pixelPerfect,t.options.pixelPerfect),swapPads:_e(n.swapPads,t.options.swapPads)};let i=he(e.bindings)?e.bindings:{};t.bindings={p1:ve(i.p1,pe.p1),p2:ve(i.p2,pe.p2)};let a=he(e.stats)?e.stats:{};t.stats={played:ge(a.played,0,0,1e9),wins:ge(a.wins,0,0,1e9),losses:ge(a.losses,0,0,1e9),goalsFor:ge(a.goalsFor,0,0,1e9),goalsAgainst:ge(a.goalsAgainst,0,0,1e9)};let o=he(e.campaign)?e.campaign:{},s=e=>Array.isArray(e)?e.slice(0,32).map(e=>ge(e,0,0,1e6)):[];return t.campaign={round:ge(o.round,0,0,99),team:typeof o.team==`string`&&o.team.length<40?o.team:null,wins:s(o.wins),losses:s(o.losses),finished:_e(o.finished,!1),unlockedTeams:Array.isArray(o.unlockedTeams)&&o.unlockedTeams.every(e=>typeof e==`string`)?o.unlockedTeams:t.campaign.unlockedTeams},t}var be=class{store;data;lastError=null;constructor(e){this.store=e,this.data=this.load()}load(){if(!this.store)return me();try{let e=this.store.getItem(fe);return e?ye(JSON.parse(e)):me()}catch(e){return this.lastError=e instanceof Error?e.message:String(e),me()}}save(){if(!this.store)return!1;try{return this.store.setItem(fe,JSON.stringify(this.data)),this.lastError=null,!0}catch(e){return this.lastError=e instanceof Error?e.message:String(e),!1}}};function xe(){try{let e=window.localStorage,t=`__nl_probe__`;return e.setItem(t,`1`),e.removeItem(t),e}catch{return null}}var Se=e=>440*2**((e-69)/12),F={menu:{bpm:104,chords:[{root:45,minor:!0},{root:41,minor:!1},{root:48,minor:!1},{root:43,minor:!1}],bass:[0,null,12,null,0,null,12,0,0,null,12,null,0,12,null,7],arp:[0,1,2,3,2,1,0,1,2,3,2,1,0,2,3,2],kick:[0,8],snare:[4,12],hat:[2,6,10,14],lead:[24,null,null,22,null,null,19,null,22,null,24,null,null,26,null,null],arpWave:`square`,bassWave:`triangle`},match:{bpm:142,chords:[{root:40,minor:!0},{root:36,minor:!1},{root:38,minor:!1},{root:35,minor:!1}],bass:[0,0,12,0,0,12,0,12,0,0,12,0,7,12,10,12],arp:[0,1,2,3,0,1,2,3,3,2,1,0,3,2,1,0],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14,15],arpWave:`sawtooth`,bassWave:`square`},replay:{bpm:84,chords:[{root:45,minor:!0},{root:48,minor:!1},{root:43,minor:!1},{root:41,minor:!1}],bass:[0,null,null,null,null,null,null,null,7,null,null,null,null,null,null,null],arp:[0,null,2,null,1,null,3,null,2,null,1,null,3,null,2,null],kick:[0,10],snare:[8],hat:[4,12],arpWave:`triangle`,bassWave:`sawtooth`,pad:!0}},Ce=class{ctx=null;master=null;musicGain=null;sfxGain=null;musicFilter=null;noise=null;track=null;wanted=null;timer=null;nextTime=0;step=0;musicVolume=.6;sfxVolume=.8;lastPlay=new Map;available=!0;get unlocked(){return this.ctx!==null&&this.ctx.state===`running`}unlock(){try{if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e){this.available=!1;return}this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),this.musicFilter=this.ctx.createBiquadFilter(),this.musicFilter.type=`lowpass`,this.musicFilter.frequency.value=18e3,this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.musicFilter),this.musicFilter.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.applyVolumes();let t=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1}this.ctx.state===`suspended`&&this.ctx.resume(),this.wanted&&this.track!==this.wanted&&this.setMusic(this.wanted)}catch{this.available=!1}}suspend(){this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}setVolumes(e,t){this.musicVolume=e,this.sfxVolume=t,this.applyVolumes()}applyVolumes(){this.musicGain&&(this.musicGain.gain.value=this.musicVolume*.32),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume*.6)}setMuffled(e){this.ctx&&this.musicFilter&&this.musicFilter.frequency.setTargetAtTime(e?700:18e3,this.ctx.currentTime,.08)}setMusic(e){this.wanted=e,this.ctx&&this.track!==e&&(this.track=e,this.timer!==null&&(window.clearInterval(this.timer),this.timer=null),e&&(this.step=0,this.nextTime=this.ctx.currentTime+.08,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){let e=this.ctx;if(!e||!this.track||e.state!==`running`)return;let t=F[this.track],n=60/t.bpm/4;for(;this.nextTime<e.currentTime+.12;)this.playStep(t,this.step,this.nextTime,n),this.nextTime+=n,this.step=(this.step+1)%(16*t.chords.length)}playStep(e,t,n,r){let i=t%16,a=e.chords[Math.floor(t/16)%e.chords.length],o=[0,a.minor?3:4,7,12],s=this.musicGain,c=e.bass[i];c!=null&&this.note(s,Se(a.root+c),n,r*.9,e.bassWave,.5,600);let l=e.arp[i];if(l!=null&&this.note(s,Se(a.root+24+o[l]),n,r*.7,e.arpWave,e.pad?.16:.12,2600),e.lead){let o=e.lead[i];o!=null&&Math.floor(t/16)%2==1&&this.note(s,Se(a.root+12+o),n,r*2.5,`square`,.09,3e3)}if(e.pad&&i===0)for(let e of o.slice(0,3))this.note(s,Se(a.root+12+e),n,r*15,`triangle`,.09,1200,.4);e.kick.includes(i)&&this.kick(s,n),e.snare.includes(i)&&this.noiseHit(s,n,.12,.35,1800,`bandpass`),e.hat.includes(i)&&this.noiseHit(s,n,.03,.12,7e3,`highpass`)}note(e,t,n,r,i,a,o,s=.005){let c=this.ctx,l=c.createOscillator(),u=c.createGain(),d=c.createBiquadFilter();l.type=i,l.frequency.value=t,d.type=`lowpass`,d.frequency.value=o,u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(a,n+s),u.gain.exponentialRampToValueAtTime(1e-4,n+r),l.connect(d).connect(u).connect(e),l.start(n),l.stop(n+r+.05)}kick(e,t){let n=this.ctx,r=n.createOscillator(),i=n.createGain();r.frequency.setValueAtTime(140,t),r.frequency.exponentialRampToValueAtTime(40,t+.12),i.gain.setValueAtTime(.8,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.16),r.connect(i).connect(e),r.start(t),r.stop(t+.2)}noiseHit(e,t,n,r,i,a,o=1){let s=this.ctx;if(!this.noise)return;let c=s.createBufferSource();c.buffer=this.noise,c.playbackRate.value=o;let l=s.createBiquadFilter();l.type=a,l.frequency.value=i;let u=s.createGain();u.gain.setValueAtTime(r,t),u.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l).connect(u).connect(e),c.start(t,Math.random()*.5),c.stop(t+n+.02)}sweep(e,t,n,r,i,a,o){let s=this.ctx,c=s.createOscillator(),l=s.createGain();c.type=a,c.frequency.setValueAtTime(n,t),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),t+i),l.gain.setValueAtTime(o,t),l.gain.exponentialRampToValueAtTime(1e-4,t+i),c.connect(l).connect(e),c.start(t),c.stop(t+i+.02)}play(e,t=1){let n=this.ctx;if(!n||n.state!==`running`||!this.sfxGain)return;let r=n.currentTime;if(r-(this.lastPlay.get(e)??-1)<.04)return;this.lastPlay.set(e,r);let i=this.sfxGain,a=Math.max(.2,Math.min(1.5,t));switch(e){case`pass`:this.sweep(i,r,520,880,.07,`square`,.18);break;case`shot`:this.kick(i,r),this.noiseHit(i,r,.18,.45*a,1200,`lowpass`),this.sweep(i,r,900,200,.15,`square`,.12*a);break;case`bounce`:this.sweep(i,r,320,180,.05,`triangle`,.15*a);break;case`wall`:this.noiseHit(i,r,.06,.25*a,2500,`bandpass`),this.sweep(i,r,220,120,.08,`square`,.1);break;case`post`:this.note(i,920,r,.4,`square`,.16,6e3),this.note(i,1380,r,.35,`square`,.1,6e3);break;case`goal`:[60,64,67,72,76,79].forEach((e,t)=>this.note(i,Se(e+12),r+t*.07,.25,`square`,.18,5e3)),this.noiseHit(i,r,1.6,.25,1500,`bandpass`,.6);break;case`save`:this.sweep(i,r,700,180,.22,`sawtooth`,.16),this.noiseHit(i,r,.1,.25,900,`lowpass`);break;case`whistle`:this.whistle(r,.32);break;case`whistleEnd`:this.whistle(r,.25),this.whistle(r+.32,.25),this.whistle(r+.64,.6);break;case`uiMove`:this.note(i,660,r,.04,`square`,.1,4e3);break;case`uiOk`:this.sweep(i,r,660,1320,.09,`square`,.14);break;case`uiBack`:this.sweep(i,r,520,260,.09,`square`,.12);break;case`tackle`:this.noiseHit(i,r,.09,.35,600,`lowpass`);break;case`ouch`:this.sweep(i,r,500,120,.25,`triangle`,.2);break;case`win`:[72,76,79,84,79,84].forEach((e,t)=>this.note(i,Se(e),r+t*.12,.22,`square`,.16,5e3));break;case`lose`:[67,63,60,55].forEach((e,t)=>this.note(i,Se(e),r+t*.18,.3,`triangle`,.18,3e3));break;case`glitch`:for(let e=0;e<6;e++)this.sweep(i,r+e*.05,200+Math.random()*1800,80+Math.random()*400,.05,`square`,.08);this.noiseHit(i,r,.4,.2,3e3,`bandpass`,.5);break;case`whoosh`:this.noiseHit(i,r,.6,.25,900,`bandpass`,.4),this.sweep(i,r,180,900,.5,`sine`,.08);break;case`slowmo`:this.sweep(i,r,400,60,.7,`sawtooth`,.12);break;case`zap`:this.note(i,60,r,.35*a,`sawtooth`,.22,2400),this.note(i,91,r,.3*a,`square`,.12,3e3),this.noiseHit(i,r,.25*a,.25,5e3,`highpass`);break;case`special`:[64,71,76,83].forEach((e,t)=>this.note(i,Se(e),r+t*.04,.18,`sawtooth`,.14,4e3)),this.sweep(i,r,200,1600,.3,`square`,.08);break;case`hazard`:this.note(i,880,r,.15,`square`,.15,4e3),this.note(i,660,r+.18,.15,`square`,.15,4e3)}}whistle(e,t){let n=this.ctx,r=n.createOscillator(),i=n.createOscillator(),a=n.createGain(),o=n.createGain();r.frequency.value=2300,i.frequency.value=28,a.gain.value=120,i.connect(a).connect(r.frequency),o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.12,e+.02),o.gain.setValueAtTime(.12,e+t-.04),o.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(this.sfxGain),r.start(e),i.start(e),r.stop(e+t+.02),i.stop(e+t+.02)}},we=class{stage;scale=1;pixelPerfect=!0;onResize=null;constructor(e){this.stage=e,window.addEventListener(`resize`,()=>this.apply()),document.addEventListener(`fullscreenchange`,()=>this.apply())}apply(){let e=Math.min(window.innerWidth/480,window.innerHeight/270);this.scale=this.pixelPerfect&&e>=1?Math.floor(e):Math.max(.25,e);let t=Math.floor(480*this.scale),n=Math.floor(270*this.scale);this.stage.style.width=`${t}px`,this.stage.style.height=`${n}px`,this.stage.style.setProperty(`--px`,`${Math.max(2,Math.round(this.scale))}px`),this.onResize?.()}get cssSize(){return{w:Math.floor(480*this.scale),h:Math.floor(270*this.scale)}}get fullscreenAvailable(){return!!document.documentElement.requestFullscreen&&document.fullscreenEnabled!==!1}get isFullscreen(){return!!document.fullscreenElement}async toggleFullscreen(){if(!this.fullscreenAvailable)return!1;try{return document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),!0}catch{return!1}}setScanlines(e){this.stage.classList.toggle(`scanlines`,e)}},I={A:0,B:1,X:2,Y:3,LB:4,RB:5,START:9,UP:12,DOWN:13,LEFT:14,RIGHT:15},L=.28,Te=.36,R=.09,z=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`,`Slash`,`Quote`,`Tab`,`Backspace`,`Enter`,`Period`]),Ee=class{bindings;swapPads=!1;capture=null;mouse={x:-1,y:-1,moved:!1,clicked:!1};held=new Set;justPressed=new Set;pressed=new Set;pads=[];navHold=new Map;navPulse=new Set;attached=!1;anyPressed=!1;constructor(e){this.bindings=e}attach(e,t,n){if(this.attached)return;this.attached=!0,window.addEventListener(`keydown`,e=>{if(this.capture){e.preventDefault();let t=this.capture;this.capture=null,t(e.code)}else z.has(e.code)&&e.preventDefault(),e.repeat||(this.justPressed.add(e.code),this.anyPressed=!0),this.held.add(e.code)}),window.addEventListener(`keyup`,e=>{this.held.delete(e.code)}),window.addEventListener(`blur`,()=>this.clear()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.clear()});let r=r=>{let i=e.getBoundingClientRect();this.mouse.x=(r.clientX-i.left)/i.width*t,this.mouse.y=(r.clientY-i.top)/i.height*n};e.addEventListener(`mousemove`,e=>{r(e),this.mouse.moved=!0}),e.addEventListener(`mousedown`,e=>{r(e),this.mouse.clicked=!0,this.anyPressed=!0}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`wheel`,e=>e.preventDefault(),{passive:!1})}clear(){this.held.clear(),this.justPressed.clear(),this.pressed.clear(),this.navHold.clear()}update(e){this.pressed=this.justPressed,this.justPressed=new Set,this.pollPads(),this.updateNav(e)}endFrame(){this.mouse.moved=!1,this.mouse.clicked=!1,this.anyPressed=!1}get anyKey(){return this.anyPressed||this.pads.some(e=>e.buttons.some((t,n)=>t&&!e.prev[n]))}isHeld(e){return this.held.has(e)}wasPressed(e){return this.pressed.has(e)}pollPads(){let e=[];try{e=navigator.getGamepads?Array.from(navigator.getGamepads()):[]}catch{e=[]}let t=new Map(this.pads.map(e=>[e.index,e.buttons]));this.pads=[];for(let n of e){if(!n||!n.connected)continue;let e=n.buttons.map(e=>e.pressed||e.value>.5);this.pads.push({index:n.index,buttons:e,prev:t.get(n.index)??e.map(()=>!1),ax:Math.abs(n.axes[0]??0)>L?n.axes[0]:0,ay:Math.abs(n.axes[1]??0)>L?n.axes[1]:0,id:n.id})}this.pads.sort((e,t)=>e.index-t.index)}padFor(e){let t=this.swapPads?[1,0]:[0,1];return this.pads[t[e-1]]??null}get padCount(){return this.pads.length}bindingsFor(e){return e===1?this.bindings.p1:this.bindings.p2}padBtn(e,t){return!!e&&!!e.buttons[t]}padEdge(e,t){return!!e&&!!e.buttons[t]&&!e.prev[t]}control(e,t){let n=t?[this.bindings.p1,this.bindings.p2]:[this.bindingsFor(e)],r=t?this.pads:[this.padFor(e)].filter(Boolean),i=0,a=0,o=!1,s=!1,c=!1,l=!1,u=!1,d=(e,t)=>this.held.has(e[t]),f=(e,t)=>this.pressed.has(e[t]);for(let e of n)i+=+!!d(e,`right`)-!!d(e,`left`),a+=+!!d(e,`down`)-!!d(e,`up`),o||=d(e,`shoot`),s||=f(e,`shoot`),c||=f(e,`pass`),l||=f(e,`switch`),u||=f(e,`special`);for(let e of r)i+=e.ax+ +!!this.padBtn(e,I.RIGHT)-+!!this.padBtn(e,I.LEFT),a+=e.ay+ +!!this.padBtn(e,I.DOWN)-+!!this.padBtn(e,I.UP),o||=this.padBtn(e,I.A),s||=this.padEdge(e,I.A),c||=this.padEdge(e,I.X),l||=this.padEdge(e,I.LB)||this.padEdge(e,I.Y),u||=this.padEdge(e,I.RB);return{mx:Math.max(-1,Math.min(1,i)),my:Math.max(-1,Math.min(1,a)),shoot:o,shootPressed:s,passPressed:c,switchPressed:l,specialPressed:u}}get pausePressed(){return this.pressed.has(`Escape`)||this.pressed.has(`KeyP`)||this.pads.some(e=>this.padEdge(e,I.START))}dirHeld(e,t){let n=[],r=e=>n.push(e[t]);if((e===`any`||e===1)&&r(this.bindings.p1),(e===`any`||e===2)&&r(this.bindings.p2),e===`any`&&n.push({up:`ArrowUp`,down:`ArrowDown`,left:`ArrowLeft`,right:`ArrowRight`}[t]),n.some(e=>this.held.has(e)))return!0;let i=e===`any`?this.pads:[this.padFor(e)].filter(Boolean);for(let e of i)if(t===`up`&&(e.buttons[I.UP]||e.ay<-.5)||t===`down`&&(e.buttons[I.DOWN]||e.ay>.5)||t===`left`&&(e.buttons[I.LEFT]||e.ax<-.5)||t===`right`&&(e.buttons[I.RIGHT]||e.ax>.5))return!0;return!1}updateNav(e){this.navPulse.clear();for(let t of[1,2,`any`])for(let n of[`up`,`down`,`left`,`right`]){let r=`${t}:${n}`;if(this.dirHeld(t,n)){let t=this.navHold.get(r);if(t===void 0)this.navPulse.add(r),this.navHold.set(r,0);else{let n=t+e;this.navHold.set(r,n),n>Te&&Math.floor((n-Te)/R)!==Math.floor((t-Te)/R)&&this.navPulse.add(r)}}else this.navHold.delete(r)}}nav(e=`any`){let t=this.bindings.p1,n=this.bindings.p2,r=e===`any`?this.pads:[this.padFor(e)].filter(Boolean),i=e===`any`?[`Space`,`Enter`,`NumpadEnter`,t.shoot,n.shoot]:e===1?[t.shoot]:[n.shoot],a=e===`any`?[`Escape`,`Backspace`]:e===1?[t.pass]:[n.pass];return{up:this.navPulse.has(`${e}:up`),down:this.navPulse.has(`${e}:down`),left:this.navPulse.has(`${e}:left`),right:this.navPulse.has(`${e}:right`),confirm:i.some(e=>this.pressed.has(e))||r.some(t=>this.padEdge(t,I.A)||e===`any`&&this.padEdge(t,I.START)),back:a.some(e=>this.pressed.has(e))||r.some(e=>this.padEdge(e,I.B))}}};function De(e){let t={Space:`ESPACIO`,Enter:`ENTER`,NumpadEnter:`ENTER`,ShiftLeft:`SHIFT IZQ`,ShiftRight:`SHIFT DER`,ControlLeft:`CTRL IZQ`,ControlRight:`CTRL DER`,AltLeft:`ALT`,AltRight:`ALT GR`,ArrowUp:`↑`,ArrowDown:`↓`,ArrowLeft:`←`,ArrowRight:`→`,Slash:`/ (-)`,Period:`.`,Comma:`,`,Semicolon:`Ñ`,Quote:`'`,Backspace:`BORRAR`,Escape:`ESC`,Tab:`TAB`};return t[e]?t[e]:e.startsWith(`Key`)?e.slice(3):e.startsWith(`Digit`)?e.slice(5):e.startsWith(`Numpad`)?`NUM `+e.slice(6):e.toUpperCase().slice(0,10)}var Oe=class{current=null;pending=null;goTo(e){this.pending=e}flush(){if(!this.pending)return!1;let e=this.pending;this.pending=null;try{this.current?.exit?.()}catch(e){console.error(`Error al salir de la pantalla`,e)}return this.current=e,e.enter?.(),!0}},ke=class{stage;canvas2d;canvas3d;ctx;input;audio=new Ce;save;display;font;sprites=new ae;scenes=new Oe;t=0;rafId=0;last=0;running=!1;toastText=``;toastT=0;padCount=0;errorCooldown=0;constructor(){this.stage=document.getElementById(`stage`),this.canvas2d=document.getElementById(`view2d`),this.canvas3d=document.getElementById(`view3d`);let e=this.canvas2d.getContext(`2d`);if(!e)throw Error(`Canvas 2D no disponible en este navegador.`);this.ctx=e,this.ctx.imageSmoothingEnabled=!1,this.save=new be(xe()),this.input=new Ee(this.save.data.bindings),this.input.attach(this.canvas2d,480,270),this.display=new we(this.stage),this.font=new o,this.applyOptions();let t=()=>this.audio.unlock();window.addEventListener(`keydown`,t),window.addEventListener(`mousedown`,t),window.addEventListener(`touchstart`,t),document.addEventListener(`visibilitychange`,()=>{document.hidden?(this.audio.suspend(),this.scenes.current?.onFocusLost?.()):this.audio.resume()}),window.addEventListener(`blur`,()=>this.scenes.current?.onFocusLost?.()),window.addEventListener(`gamepadconnected`,()=>this.toast(`MANDO CONECTADO`)),window.addEventListener(`gamepaddisconnected`,()=>this.toast(`MANDO DESCONECTADO`))}applyOptions(){let e=this.save.data.options;this.audio.setVolumes(e.musicVolume,e.sfxVolume),this.display.pixelPerfect=e.pixelPerfect,this.display.setScanlines(e.scanlines),this.display.apply(),this.input.swapPads=e.swapPads,this.input.bindings=this.save.data.bindings}persist(){!this.save.save()&&this.save.lastError&&this.toast(`NO SE PUDO GUARDAR`)}toast(e){this.toastText=e,this.toastT=2.2}set3DMode(e){this.stage.classList.toggle(`mode3d`,e)}fresh3DCanvas(){let e=this.canvas3d,t=document.createElement(`canvas`);return t.id=`view3d`,e.replaceWith(t),this.canvas3d=t,t}goTo(e){this.scenes.goTo(e)}start(e){this.running||(this.running=!0,this.scenes.goTo(e),this.last=performance.now(),this.rafId=requestAnimationFrame(this.frame))}frame=e=>{this.rafId=requestAnimationFrame(this.frame);let t=Math.min(.1,Math.max(0,(e-this.last)/1e3));this.last=e,this.t+=t,this.scenes.flush(),this.input.update(t),this.input.padCount!==this.padCount&&(this.padCount=this.input.padCount);let n=this.scenes.current,r=this.ctx;if(n)try{n.update(t),n.overlay3D?r.clearRect(0,0,480,270):(r.fillStyle=`#0b0618`,r.fillRect(0,0,480,270)),n.render(r,this.t)}catch(e){this.errorCooldown-=t,this.errorCooldown<=0&&(console.error(e),this.errorCooldown=1)}if(this.toastT>0){this.toastT-=t;let e=this.font.measure(this.toastText)+10,n=Math.round(240-e/2);r.fillStyle=`#07040e`,r.fillRect(n,250,e,13),r.fillStyle=`#00f0ff`,r.fillRect(n,250,e,1),this.font.draw(r,this.toastText,240,253,`#f4f1ff`,{align:`center`})}this.input.endFrame()};stop(){cancelAnimationFrame(this.rafId),this.running=!1}},Ae={easy:{id:`easy`,label:`FACIL`,reaction:.42,passError:.28,shotError:.16,shootRange:175,smartAim:!1,shootGamble:.35,passWhenPressured:.25,creativePass:.03,cover:!1,intercept:!1,positioning:.55,slideRate:.12,findSpace:!1,keeperDelay:.22,specialUse:.25,avoidWarnings:!1},normal:{id:`normal`,label:`NORMAL`,reaction:.24,passError:.12,shotError:.09,shootRange:160,smartAim:!1,shootGamble:.18,passWhenPressured:.55,creativePass:.08,cover:!0,intercept:!0,positioning:.8,slideRate:.25,findSpace:!0,keeperDelay:.12,specialUse:.8,avoidWarnings:!0},hard:{id:`hard`,label:`DIFICIL`,reaction:.14,passError:.05,shotError:.05,shootRange:150,smartAim:!0,shootGamble:.06,passWhenPressured:.8,creativePass:.16,cover:!0,intercept:!0,positioning:1,slideRate:.3,findSpace:!0,keeperDelay:.06,specialUse:3,avoidWarnings:!0}},je=[`easy`,`normal`,`hard`],B=[{id:`r1`,title:`NOCHE DE PRUEBA`,rival:`bandits`,stadiumId:`neon-alley`,hazards:!1,difficulty:`easy`,mods:{},rule:null,unlock:`bandits`,intro:[{speaker:`commissioner`,text:`¡Bienvenidos al NEON CIRCUIT! Soy THE COMMISSIONER, presidente, árbitro y dueño de todo lo que veis. Incluidas vuestras almas.`},{speaker:`commissioner`,text:`Siete partidos. Siete oportunidades de humillaros en directo. Patrocina KAIJU COLA.`},{speaker:`rival`,text:`Nosotros no seguimos reglas. Bueno, la del fuera de juego tampoco existe, así que da igual.`},{speaker:`player`,text:`Solo venimos a jugar al fútbol.`},{speaker:`commissioner`,text:`¡Qué adorable! Que empiece el espectáculo.`}],win:[{speaker:`rival`,text:`Nos has robado el partido. Eso era NUESTRO trabajo.`},{speaker:`commissioner`,text:`Vaya, vaya. Los novatos ganan. Las apuestas acaban de ponerse interesantes.`}],lose:[{speaker:`commissioner`,text:`Derrota en la primera ronda. Mis accionistas aplauden. Inténtalo otra vez, es gratis... por ahora.`}]},{id:`r2`,title:`ALTO VOLTAJE`,rival:`vipers`,stadiumId:`volt-factory`,hazards:!0,difficulty:`normal`,mods:{},rule:`PLACAS ELECTRICAS ACTIVADAS`,unlock:null,intro:[{speaker:`commissioner`,text:`Bienvenidos a VOLT FACTORY. El suelo da calambre. Lo llamamos "motivación".`},{speaker:`commissioner`,text:`Las placas avisan antes de encenderse. Es la ley. La única que respeto.`},{speaker:`rival`,text:`Corremos tan rápido que la electricidad nos persigue a nosotros.`}],win:[{speaker:`rival`,text:`Nos has dejado sin batería. Literalmente.`},{speaker:`commissioner`,text:`Sobrevivir a la fábrica. Admito que no estaba en mi presentación de PowerPoint.`}],lose:[{speaker:`commissioner`,text:`Electrocutados y derrotados. Dos por uno. Vuelve cuando tengas toma de tierra.`}]},{id:`r3`,title:`REGLA DEL ESPECTÁCULO`,rival:`glitch`,stadiumId:`glitch-dome`,hazards:!0,difficulty:`hard`,mods:{longGoalDouble:!0,chargeRate:1.5},rule:`BARRERAS GLITCH · GOLES DE FUERA DEL AREA VALEN 2`,unlock:null,intro:[{speaker:`commissioner`,text:`Bienvenidos al GLITCH DOME, la cúpula de los Glitch Punks. El código de este estadio lo escribió un becario a las 4 de la mañana.`},{speaker:`commissioner`,text:`A veces aparecen barreras holográficas que se mueven solas. Avisan antes y siempre siguen el mismo raíl. Es un bug. Lo vendemos como característica.`},{speaker:`commissioner`,text:`Y como la audiencia quiere GOLAZOS: los goles desde fuera del área valen DOBLE.`},{speaker:`rival`,text:`Error 404: defensa no encontrada. Pero conocemos cada rebote de esas barreras.`}],win:[{speaker:`rival`,text:`Fatal exception en nuestro ataque. Reiniciando ego...`},{speaker:`commissioner`,text:`Bien, bien. Pero la próxima ronda tiene algo... sólido.`}],lose:[{speaker:`commissioner`,text:`Ellos dispararon de lejos y tú miraste de cerca. Prueba otra vez.`}]},{id:`r4`,title:`JEFE: THE WALL`,rival:`thewall`,stadiumId:`neon-alley`,hazards:!1,difficulty:`hard`,mods:{boss:`wall`},rule:`PORTERO GIGANTE: DISPARA CUANDO SE RECALIENTE`,unlock:`thewall`,intro:[{speaker:`commissioner`,text:`Os presento a THE WALL. Su portero mide dos metros y medio y está hecho de excavadora.`},{speaker:`rival`,text:`NADIE. PASA.`},{speaker:`commissioner`,text:`Pista gratuita: su núcleo se recalienta cada pocos segundos. Mis ingenieros dicen que "es una característica".`},{speaker:`player`,text:`Entonces disparamos cuando eche humo.`}],win:[{speaker:`rival`,text:`ERROR... MURO... AGRIETADO...`},{speaker:`commissioner`,text:`¿Habéis derribado a THE WALL? Voy a tener que hablar con su seguro.`}],lose:[{speaker:`rival`,text:`NADIE. PASA. (Pista: dispara cuando el portero se ponga rojo.)`}]},{id:`r5`,title:`EN ÓRBITA`,rival:`zerog`,stadiumId:`volt-factory`,hazards:!0,difficulty:`hard`,mods:{gravity:.65},rule:`GRAVEDAD REDUCIDA TODO EL PARTIDO`,unlock:`zerog`,intro:[{speaker:`commissioner`,text:`Para honrar a ZERO GRAVITY FC he desactivado un tercio de la gravedad del estadio. Estaba en oferta.`},{speaker:`rival`,text:`Aquí abajo todo pesa tanto... Menos mal que el jefe nos hace el favor.`},{speaker:`commissioner`,text:`Y sí, las placas eléctricas siguen funcionando. Flotar no te salva.`}],win:[{speaker:`rival`,text:`Nos has bajado de la nube. Literalmente.`},{speaker:`commissioner`,text:`Suficiente. Si quieres algo bien hecho... tienes que arbitrarlo tú mismo.`}],lose:[{speaker:`commissioner`,text:`Los balones flotan. Tus esperanzas, no. Repite cuando quieras.`}]},{id:`r6`,title:`JEFE: THE COMMISSIONER`,rival:`drones`,stadiumId:`volt-factory`,hazards:!0,difficulty:`hard`,mods:{boss:`commissioner`},rule:`REGLAS NUEVAS CADA CICLO, ANUNCIADAS 3 S ANTES`,unlock:`drones`,intro:[{speaker:`commissioner`,text:`Basta de intermediarios. Hoy juegas contra MIS CORPORATE DRONES.`},{speaker:`commissioner`,text:`Y yo pongo las reglas. En directo. Cada pocos segundos. Goles dobles, gravedad lunar, turbo, vallas de goma...`},{speaker:`player`,text:`¿Eso es legal?`},{speaker:`commissioner`,text:`Yo ESCRIBO lo que es legal. Pero lo anuncio antes. Tengo un departamento de cumplimiento normativo.`}],win:[{speaker:`commissioner`,text:`Imposible. Mis gráficos decían que ganaba. ¡Los gráficos NUNCA mienten!`},{speaker:`commissioner`,text:`Muy bien. Que vengan los campeones. Que vengan... THE NEON IDOLS.`}],lose:[{speaker:`commissioner`,text:`La casa siempre gana. Pero como soy generoso, puedes volver a perder gratis.`}]},{id:`r7`,title:`LA GRAN FINAL`,rival:`idols`,stadiumId:`volt-factory`,hazards:!0,difficulty:`hard`,mods:{boss:`idol`,finalDoubleAfter:20,chargeRate:1.3},rule:`LOS ULTIMOS 20 S LOS GOLES VALEN 2`,unlock:`idols`,intro:[{speaker:`commissioner`,text:`¡LA GRAN FINAL DEL NEON CIRCUIT! Patrocinada por todo el mundo. Literalmente todo.`},{speaker:`rival`,text:`Somos THE NEON IDOLS. Tenemos 40 millones de seguidores y una canción con tu derrota ya grabada.`},{speaker:`rival`,text:`Cuidado con nuestro ritmo: a veces tocamos y esperamos... y a veces presionamos con todo.`},{speaker:`commissioner`,text:`Regla de la final: en los últimos 20 segundos cada gol vale DOBLE. Por el drama.`}],win:[{speaker:`rival`,text:`¿Hemos... perdido? Esto no estaba en el guion. ¿Quién escribió el guion?`},{speaker:`commissioner`,text:`Damas, caballeros y drones: tenemos un NUEVO CAMPEÓN del NEON CIRCUIT.`},{speaker:`commissioner`,text:`Disfruta tu trofeo. Es de oro. Bueno, de aluminio pintado. Bueno, es un cono de tráfico.`}],lose:[{speaker:`rival`,text:`Gracias por participar. Firmamos autógrafos a la salida. Revancha cuando quieras.`}]}];function Me(e,t){return{teams:[ue(e.teams[0]),ue(e.teams[1])],humans:e.mode===`solo`?[1,null]:[1,2],difficulty:e.mode===`solo`?[`normal`,e.difficulty]:[e.difficulty,e.difficulty],duration:90,overtime:30,seed:t,stadiumId:e.stadiumId,hazards:e.hazards,mods:e.campaignRound===void 0?void 0:{...B[e.campaignRound]?.mods}}}function Ne(e,t){return t>=0&&t<B.length&&t<=e.round}function Pe(e,t){return(e.wins[t]??0)>0}function Fe(e,t,n){let r={advanced:!1,unlocked:null,finished:!1},i=B[t];if(!i)return r;for(;e.wins.length<B.length;)e.wins.push(0);for(;e.losses.length<B.length;)e.losses.push(0);return n?(e.wins[t]++,t===e.round&&e.round<B.length&&(e.round=Math.min(B.length,t+1),r.advanced=t+1<B.length),i.unlock&&!e.unlockedTeams.includes(i.unlock)&&(e.unlockedTeams.push(i.unlock),r.unlocked=i.unlock),t===B.length-1&&!e.finished&&(e.finished=!0,r.finished=!0),r):(e.losses[t]++,r)}function Ie(e){e.round=0,e.team=null,e.wins=B.map(()=>0),e.losses=B.map(()=>0),e.finished=!1}function Le(e,t){let n=B[t];return{mode:`solo`,teams:[e.team??`jackals`,n.rival],difficulty:n.difficulty,stadiumId:n.stadiumId,hazards:n.hazards,campaignRound:t}}var Re,ze,Be,Ve,He,Ue=n((()=>{_(),Re=s.L,ze={kind:`volt`,name:`PLACAS ELECTRICAS`,sectors:[{label:`BANDAS LEJANAS`,rects:[{x0:92,y0:12,x1:172,y1:72},{x0:Re-172,y0:12,x1:Re-92,y1:72}]},{label:`CIRCULO CENTRAL`,rects:[{x0:Re/2-34,y0:66,x1:Re/2+34,y1:134}]},{label:`BANDAS CERCANAS`,rects:[{x0:92,y0:128,x1:172,y1:188},{x0:Re-172,y0:128,x1:Re-92,y1:188}]}],order:[0,2,1],firstDelay:10,calm:8,warning:2.2,active:3.2},Be={kind:`barriers`,name:`BARRERAS GLITCH`,sectors:[{label:`MURO CENTRAL`,rects:[],barriers:[{rect:{x0:Re/2-4,y0:75,x1:Re/2+4,y1:125},axis:`y`,amplitude:55,period:6,phase:0}]},{label:`PILARES DE BANDA`,rects:[],barriers:[{rect:{x0:136,y0:80,x1:144,y1:120},axis:`y`,amplitude:60,period:5,phase:0},{rect:{x0:Re-144,y0:80,x1:Re-136,y1:120},axis:`y`,amplitude:60,period:5,phase:Math.PI}]},{label:`BARRAS GEMELAS`,rects:[],barriers:[{rect:{x0:Re/2-35,y0:52,x1:Re/2+35,y1:60},axis:`x`,amplitude:55,period:7,phase:0},{rect:{x0:Re/2-35,y0:140,x1:Re/2+35,y1:148},axis:`x`,amplitude:55,period:7,phase:Math.PI}]}],order:[0,1,2],firstDelay:9,calm:6,warning:2.5,active:7},Ve=[{id:`neon-alley`,name:`NEON ALLEY`,description:`Callejon del distrito bajo. Vallas luminosas y rebotes limpios. Sin hazards.`,theme:`alley`,hazard:null,palette:{grassA:`#0f3b3a`,grassB:`#0c3232`,line:`#d8fff9`,glow:`#22d6c4`,farRail:`#00e5ff`,nearRail:`#ff2bd6`,sky:[`#07040f`,`#1a0a2e`,`#3a0f4a`],buildingFar:`#1c1033`,buildingNear:`#110a20`},signs:[`NEON`,`KAIJU COLA`,`RAMEN 24H`,`SYNTH`,`BAR`]},{id:`volt-factory`,name:`VOLT FACTORY`,description:`Fabrica de baterias. Placas electricas: aviso 2 s, activas 3 s.`,theme:`factory`,hazard:ze,palette:{grassA:`#2b3038`,grassB:`#262a31`,line:`#ffe27a`,glow:`#ff9d1f`,farRail:`#ffb000`,nearRail:`#ff5a1f`,sky:[`#0a0608`,`#2a0f12`,`#5a2210`],buildingFar:`#241418`,buildingNear:`#160c10`},signs:[`VOLT`,`ALTO VOLTAJE`,`PELIGRO`,`AMP`,`ZONA 9`]},{id:`glitch-dome`,name:`GLITCH DOME`,description:`Cupula de datos corruptos. Barreras moviles: aviso 2,5 s, activas 7 s.`,theme:`dome`,hazard:Be,palette:{grassA:`#16163e`,grassB:`#121236`,line:`#c2f5ff`,glow:`#8a3dff`,farRail:`#b14dff`,nearRail:`#00f0ff`,sky:[`#05030c`,`#120a2e`,`#2a0f5a`],buildingFar:`#1a1238`,buildingNear:`#0e0a22`},signs:[`GLITCH`,`ERROR 404`,`NULL`,`SYS`,`DOME`]}],He=e=>Ve.find(t=>t.id===e)??Ve[0]}));Ue(),oe();var We=`#0a0612`;function Ge(e,t,n,r,i){let a=(r,i,a,o,s)=>{e.fillStyle=s,e.fillRect(t+r,n+i,a,o)};a(0,0,48,48,`#1a0f33`),a(15,1,18,2,We),a(17,0,14,8,`#14101c`),a(17,6,14,1,`#ff2bd6`),a(12,8,24,2,`#14101c`),a(36,4,1,6,`#8d84b0`),Math.floor(i*2)%2&&a(35,2,3,3,`#ff2b4a`),a(9,10,30,24,We),a(10,11,28,22,`#5f6b80`),a(12,13,24,18,`#06121a`),a(15,17,5,3,`#00f0ff`),a(28,17,5,3,`#00f0ff`),e.fillStyle=`#ffd23f`;for(let r=0;r<16;r++){let i=r/16*Math.PI*2;e.fillRect(Math.round(t+30.5+Math.cos(i)*4.5),Math.round(n+18.5+Math.sin(i)*4.5),1,1)}a(34,22,1,10,`#ffd23f`),a(17,25,14,r&&Math.floor(i*10)%2==0?3:1,`#00f0ff`),a(6,36,36,12,We),a(7,37,34,11,`#ffd23f`),a(20,37,8,11,`#f4f1ff`),a(22,38,4,10,`#ff2bd6`),a(18,34,12,3,`#3a3f4a`)}function Ke(e,t,n,r,i,a){e.fillStyle=t.colors.dark,e.fillRect(n,r,48,48),e.fillStyle=t.colors.secondary,e.fillRect(n,r+40,48,8);let o=i&&Math.floor(a*8)%2?-1:0;M(e,t,n+6,r+4+o,4)}var V={bg:`#0b0618`,panel:`#120a24`,panel2:`#1a0f33`,cyan:`#00f0ff`,magenta:`#ff2bd6`,violet:`#9b6bff`,acid:`#a6ff00`,orange:`#ff8a1f`,yellow:`#ffd23f`,red:`#ff2b4a`,white:`#f4f1ff`,dim:`#6d5f8f`,dark:`#07040e`};function qe(e,t,n,r,i,a=V.cyan,o=V.panel){t=Math.round(t),n=Math.round(n),e.fillStyle=o,e.fillRect(t+1,n+1,r-2,i-2),e.globalAlpha=.25,e.fillStyle=a,e.fillRect(t-1,n+2,1,i-4),e.fillRect(t+r,n+2,1,i-4),e.fillRect(t+2,n-1,r-4,1),e.fillRect(t+2,n+i,r-4,1),e.globalAlpha=1,e.fillStyle=a,e.fillRect(t+2,n,r-4,1),e.fillRect(t+2,n+i-1,r-4,1),e.fillRect(t,n+2,1,i-4),e.fillRect(t+r-1,n+2,1,i-4),e.fillRect(t+1,n+1,1,1),e.fillRect(t+r-2,n+1,1,1),e.fillRect(t+1,n+i-2,1,1),e.fillRect(t+r-2,n+i-2,1,1)}var Je=class{stars=[];constructor(){for(let e=0;e<70;e++)this.stars.push({x:Math.random()*480,y:Math.random()*120,c:Math.random()<.3?V.magenta:`#c9d4ff`})}draw(e,t){for(let t=0;t<150;t+=2){let n=t/150;e.fillStyle=`rgb(${Math.round(11+40*n)},${Math.round(6+6*n)},${Math.round(24+50*n)})`,e.fillRect(0,t,480,2)}for(let n of this.stars)Math.floor(t*3+n.x)&7&&(e.fillStyle=n.c,e.fillRect(Math.round(n.x),Math.round(n.y),1,1));for(let n=-44;n<=0;n++){if(n>-24&&(n+100+Math.floor(t*8))%5<2)continue;let r=Math.round(Math.sqrt(1936-n*n)),i=(n+44)/44;e.fillStyle=i<.35?V.yellow:i<.7?`#ff7a59`:V.magenta,e.fillRect(240-r,150+n,r*2,1)}e.fillStyle=`#0a0414`,e.fillRect(0,150,480,120);let n=t*22%16;for(let t=0;t<12;t++){let r=t*16+n,i=150+Math.round(r*r/330);if(i>=270)break;e.fillStyle=t<2?`#5a1f6e`:V.magenta,e.globalAlpha=Math.min(1,.25+t*.08),e.fillRect(0,i,480,1)}e.globalAlpha=.55;for(let t=-14;t<=14;t++)C(e,240+t*6,150,240+t*60,270,V.magenta);e.globalAlpha=1,e.fillStyle=V.cyan,e.fillRect(0,150,480,1)}};function Ye(e,t,n,r,i,a=4){let o=Math.sin(i*13)>.94?Math.round(Math.sin(i*91)*3):0;t.draw(e,`NEON`,n+2+o,r+2,V.magenta,{scale:a,align:`center`}),t.draw(e,`NEON`,n-o,r,V.cyan,{scale:a,align:`center`}),t.draw(e,`NEON`,n,r,V.white,{scale:a,align:`center`}),t.draw(e,`LEAGUE`,n+2,r+8*a+2,V.cyan,{scale:a,align:`center`}),t.draw(e,`LEAGUE`,n+o,r+8*a,V.magenta,{scale:a,align:`center`})}var Xe=e=>!!e&&(typeof e.disabled==`function`?e.disabled():!!e.disabled),Ze=class{items;x;y;w;rowH;index=0;constructor(e,t,n,r,i=16){this.items=e,this.x=t,this.y=n,this.w=r,this.rowH=i,this.index=Math.max(0,e.findIndex(e=>!Xe(e)))}move(e,t){let n=this.items.length;for(let r=1;r<=n;r++){let i=(this.index+t*r+n*4)%n;if(!Xe(this.items[i])){i!==this.index&&e.audio.play(`uiMove`),this.index=i;return}}}update(e){let t=e.input.nav(`any`),n=e.input.mouse;t.up&&this.move(e,-1),t.down&&this.move(e,1);let r=this.items[this.index];if(n.moved||n.clicked){let t=Math.floor((n.y-this.y)/this.rowH);if(n.x>=this.x&&n.x<=this.x+this.w&&t>=0&&t<this.items.length&&!Xe(this.items[t])&&(t!==this.index&&e.audio.play(`uiMove`),this.index=t,n.clicked)){let r=this.items[t];return r.onConfirm?(e.audio.play(`uiOk`),r.onConfirm()):r.onRight&&(e.audio.play(`uiMove`),n.x<this.x+this.w/2&&r.onLeft?r.onLeft():r.onRight()),!1}}return!r||Xe(r)||(t.left&&r.onLeft&&(e.audio.play(`uiMove`),r.onLeft()),t.right&&r.onRight&&(e.audio.play(`uiMove`),r.onRight()),t.confirm&&(r.onConfirm?(e.audio.play(`uiOk`),r.onConfirm()):r.onRight&&(e.audio.play(`uiMove`),r.onRight()))),t.back}render(e,t,n){this.items.forEach((r,i)=>{let a=this.y+i*this.rowH,o=i===this.index,s=typeof r.label==`function`?r.label():r.label;o&&(qe(e,this.x,a,this.w,this.rowH-3,V.cyan,V.panel2),Math.floor(n*4)%2==0&&t.draw(e,`▶`,this.x+4,a+(this.rowH-3-7)/2,V.magenta));let c=Xe(r)?V.dim:o?V.white:`#b9acd9`,l=a+Math.floor((this.rowH-3-7)/2);if(r.value){t.draw(e,s,this.x+14,l,c);let n=r.value(),i=this.x+this.w-8;t.draw(e,o&&r.onLeft?`◀ ${n} ▶`:n,i,l,o?V.yellow:V.acid,{align:`right`})}else t.draw(e,s,this.x+this.w/2,l,c,{align:`center`});r.note&&t.draw(e,r.note,this.x+this.w+6,l,V.dim)})}};function Qe(e,t,n){e.fillStyle=`rgba(7,4,14,0.85)`,e.fillRect(0,258,480,12),e.fillStyle=V.magenta,e.fillRect(0,258,480,1),t.draw(e,n,240,261,V.dim,{align:`center`})}function $e(e,t,n,r=12){t.draw(e,n,241,r+1,V.magenta,{scale:2,align:`center`}),t.draw(e,n,240,r,V.cyan,{scale:2,align:`center`})}oe();var et=45,tt=class{app;lines;ctx;next;backdrop=new Je;idx=0;shown=0;t=0;constructor(e,t,n,r){this.app=e,this.lines=t,this.ctx=n,this.next=r}enter(){this.app.audio.setMusic(`menu`),this.lines.length===0&&this.app.goTo(this.next())}get line(){return this.lines[this.idx]}update(e){this.t+=e;let t=this.line;if(!t)return;let n=Math.floor(this.shown);this.shown=Math.min(t.text.length,this.shown+e*et),Math.floor(this.shown)!==n&&Math.floor(this.shown)%3==0&&t.text[Math.floor(this.shown)]!==` `&&this.app.audio.play(`uiMove`);let r=this.app.input.nav(`any`);r.back?(this.app.audio.play(`uiBack`),this.app.goTo(this.next())):(r.confirm||this.app.input.mouse.clicked)&&(this.shown<t.text.length?this.shown=t.text.length:(this.idx++,this.shown=0,this.app.audio.play(`uiOk`),this.idx>=this.lines.length&&this.app.goTo(this.next())))}speakerName(e){if(e.speaker===`commissioner`)return{name:`THE COMMISSIONER`,color:V.yellow};let t=e.speaker===`rival`?this.ctx.rival:this.ctx.player;return{name:`CAPITAN · ${t.name}`,color:t.colors.primary}}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.55)`,e.fillRect(0,0,480,270);let r=this.ctx;n.draw(e,r.title,240,14,r.boss?V.red:V.cyan,{scale:2,align:`center`,outline:V.dark}),r.subtitle&&n.wrap(r.subtitle,440).forEach((t,r)=>n.draw(e,t,240,36+r*10,V.yellow,{align:`center`,outline:V.dark})),M(e,r.player,120,70,6),n.draw(e,r.player.name,147,132,r.player.colors.primary,{align:`center`,outline:V.dark}),n.draw(e,`VS`,240,92,V.yellow,{scale:3,align:`center`,shadow:V.magenta}),M(e,r.rival,306,70,6),n.draw(e,r.rival.name,333,132,r.rival.colors.primary,{align:`center`,outline:V.dark}),r.boss&&Math.floor(t*3)%2&&n.draw(e,`¡JEFE!`,333,60,V.red,{align:`center`,outline:V.dark});let i=this.line;if(!i)return;let a={x:10,y:156,w:460,h:92},o=this.speakerName(i);qe(e,a.x,a.y,a.w,a.h,o.color);let s=this.shown<i.text.length;i.speaker===`commissioner`?Ge(e,a.x+8,a.y+10,s,t):Ke(e,i.speaker===`rival`?r.rival:r.player,a.x+8,a.y+10,s,t),n.draw(e,o.name,a.x+66,a.y+8,o.color);let c=Math.floor(this.shown);n.wrap(i.text,a.w-80).forEach((t,r)=>{c<=0||(n.draw(e,t.slice(0,c),a.x+66,a.y+22+r*11,V.white),c-=t.length+1)}),!s&&Math.floor(t*3)%2&&n.draw(e,`▶`,a.x+a.w-14,a.y+a.h-12,V.magenta),n.draw(e,`${this.idx+1}/${this.lines.length}`,a.x+8,a.y+a.h-12,V.dim),Qe(e,n,`ESPACIO / ENTER: SIGUIENTE · ESC: SALTAR DIALOGO`)}};function nt(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s;if(c===0)return it(e,t,n,r);let l=H(((e-n)*o+(t-r)*s)/c,0,1);return it(e,t,n+o*l,r+s*l)}var H,rt,it,at,ot=n((()=>{H=(e,t,n)=>e<t?t:e>n?n:e,rt=(e,t,n)=>e+(t-e)*n,it=(e,t,n,r)=>Math.hypot(n-e,r-t),at=class{s;constructor(e){this.s=e>>>0||2654435769}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}pick(e){return e[Math.floor(this.next()*e.length)]}}}));ot(),_();function st(e,t,n,r,i,a,o=!1){let s=999;for(let c of e.teamPlayers[m(t)]){if(c.isKeeper&&!o)continue;let e=nt(c.x,c.y,n,r,i,a);e<s&&(s=e)}return s}function ct(e,t){let n=null,r=1/0;for(let i of e.teamPlayers[m(t.team)]){let e=it(i.x,i.y,t.x,t.y);e<r&&(r=e,n=i)}return{player:n,d:r}}function lt(e,t,n){let r=null,i=e.ball;for(let a of e.teamPlayers[t.team]){if(a===t||a.isKeeper||a.stun>0)continue;let o=it(i.x,i.y,a.x,a.y);if(o<28||o>260)continue;let s=Math.min(40,st(e,t.team,i.x,i.y,a.x,a.y));if(s<9)continue;let c=g(t.team,a.x)-g(t.team,t.x);if(n&&c<-50)continue;let l=ct(e,a).d,u=s/40+c/180+Math.min(l,50)/80-(o>200?.4:0);(!r||u>r.score)&&(r={player:a,score:u,open:s,gain:c})}return r}function ut(e,t,n,r){let i=Math.hypot(n,r)||1;n/=i,r/=i;let a=null,o=-1/0;for(let i of e.teamPlayers[t.team]){if(i===t||i.isKeeper)continue;let s=i.x-t.x,c=i.y-t.y,l=Math.hypot(s,c);if(l<14)continue;let u=(s*n+c*r)/l;if(u<.35)continue;let d=Math.min(30,st(e,t.team,t.x,t.y,i.x,i.y)),f=u*1.4-l/350+d/60;f>o&&(o=f,a=i)}return a}function dt(e,t,n){let r=e.ball;if(r.owner){if(!n)return{x:r.x,y:r.y};let e=Math.min(.5,it(t.x,t.y,r.x,r.y)/t.attr.maxSpeed);return{x:r.x+r.owner.vx*e*.7,y:r.y+r.owner.vy*e*.7}}if(!n||r.speed<10)return{x:r.x,y:r.y};for(let e=.05;e<=1.6;e+=.05){let n=Math.max(0,e-.35*e*e),i=H(r.x+r.vx*n,4,s.L-4),a=H(r.y+r.vy*n,4,s.W-4);if(it(t.x,t.y,i,a)<=t.attr.maxSpeed*e+4)return{x:i,y:a}}let i=1.6-.35*1.6*1.6;return{x:H(r.x+r.vx*i,4,s.L-4),y:H(r.y+r.vy*i,4,s.W-4)}}function ft(e,t,n){let r=e.keeper(m(t.team)),i=s.goalTop+7,a=s.goalBottom-7;return n.smartAim?r.y<p?a:i:n.id===`easy`?p+(e.rng.next()-.5)*30:e.rng.pick([i,a,p+(e.rng.next()-.5)*20])}function pt(e,t,n,r){let i=e.hazard;if(!i.enabled||i.phase===`calm`)return{x:n,y:r};let a=e.diff[t.team].avoidWarnings;return i.isDanger(t.x,t.y,a,3)?i.exitPoint(t.x,t.y,10):i.isDanger(n,r,a,6)?i.exitPoint(n,r,10):{x:n,y:r}}function mt(e,t,n,r){t.aiIntent=`carry`,t.aiThink-=r;let i=u(t.team);if(t.aiThink<=0&&t.canAct){t.aiThink=n.reaction*(.8+e.rng.next()*.4);let r=f(t.team),a=it(t.x,t.y,r,p),o=st(e,t.team,t.x,t.y,r,p),c=ct(e,t).d;if(g(t.team,t.x)<s.boxDepth&&c<16&&t.role===`DEF`){e.kickBall(t,t.x+i*180,H(t.y+(e.rng.next()-.5)*100,20,s.W-20),300,110,n.passError,`clear`);return}if(a<n.shootRange&&(o>12||a<75||e.rng.chance(n.shootGamble))){let r=a>140?.62:a>95?.4:.12+e.rng.next()*.2;e.shoot(t,ft(e,t,n),r,n.shotError+t.attr.passError*.3);return}if(c<22&&t.protect<=0&&e.rng.chance(n.passWhenPressured)){let r=lt(e,t,!0);if(r&&r.score>.35){e.pass(t,r.player,n.passError+t.attr.passError);return}}if(e.rng.chance(n.creativePass)){let r=lt(e,t,!0);if(r&&r.gain>40&&r.open>18){e.pass(t,r.player,n.passError+t.attr.passError);return}}let l=p+(e.rng.next()-.5)*50,u=ct(e,t);if(u.player&&u.d<38&&(u.player.x-t.x)*i>0){let e=n.findSpace?42:18;l=t.y+(u.player.y<t.y?e:-e)}t.aiTx=r-i*30,t.aiTy=H(l,16,s.W-16)}let a=pt(e,t,t.aiTx,t.aiTy),o=a.x-t.x,c=a.y-t.y,l=Math.hypot(o,c)||1,d=t.attr.maxSpeed*.9;t.wantVx=o/l*d,t.wantVy=c/l*d}_();var ht=class{x=s.L/2;y=s.W/2;z=0;vx=0;vy=0;vz=0;owner=null;lastTouch=null;shot=null;passTarget=-1;deflections=0;wallBounces=0;postHits=0;maxZ=0;idleT=0;inNet=-1;glitchT=0;get speed(){return Math.hypot(this.vx,this.vy)}resetAt(e,t){this.x=e,this.y=t,this.z=this.vx=this.vy=this.vz=0,this.owner=null,this.lastTouch=null,this.shot=null,this.passTarget=-1,this.clearFlightCounters(),this.idleT=0,this.inNet=-1,this.glitchT=0}clearFlightCounters(){this.deflections=0,this.wallBounces=0,this.postHits=0,this.maxZ=0}},gt={doubleGoals:`HAPPY HOUR: GOLES DOBLES`,lowGravity:`GRAVEDAD LUNAR`,turbo:`TURBO PARA TODOS`,bouncy:`VALLAS DE GOMA`},_t=[`doubleGoals`,`lowGravity`,`turbo`,`bouncy`],vt={wall:{first:12,idle:11,warning:2,active:4.5},commissioner:{first:8,idle:5,warning:3,active:14},idol:{first:10,idle:8,warning:2,active:11}};function yt(e,t){return{id:e,team:t,phase:`idle`,remaining:vt[e].first,step:0,mutator:null}}function bt(e){switch(e.id){case`wall`:return e.phase===`warning`?`NUCLEO DEL PORTERO RECALENTANDOSE`:e.phase===`active`?`¡PORTERO SOBRECALENTADO! ¡DISPARA!`:`PORTERO MECANICO A PLENO RENDIMIENTO`;case`commissioner`:{let t=gt[e.mutator??_t[e.step%_t.length]];return e.phase===`warning`?`NUEVA REGLA: ${t}`:e.phase===`active`?t:`REGLAS NORMALES (POR AHORA)`}case`idol`:return e.phase===`warning`?`CAMBIO DE RITMO...`:e.phase===`active`?`NEON IDOLS: ¡PRESION TOTAL!`:`NEON IDOLS: TOQUE Y PAUSA`}}function xt(e,t){let n=vt[e.id];if(e.remaining-=t,e.remaining>0)return null;switch(e.phase){case`idle`:e.phase=`warning`,e.remaining=n.warning,e.mutator=e.id===`commissioner`?_t[e.step%_t.length]:null;break;case`warning`:e.phase=`active`,e.remaining=n.active;break;case`active`:e.phase=`idle`,e.remaining=n.idle,e.step++,e.mutator=null}return{phase:e.phase,label:bt(e)}}var St=(e,t)=>!!e&&e.id===`commissioner`&&e.phase===`active`&&e.mutator===t;function Ct(e,t){return!e||e.id!==`wall`||e.team!==t?1:e.phase===`active`?.4:2}function wt(e,t){return!!e&&e.id===`wall`&&e.team===t}function Tt(e){return St(e,`lowGravity`)?.4:1}function Et(e){return St(e,`bouncy`)?1.3:1}function Dt(e){return St(e,`turbo`)?1.2:1}function Ot(e){return St(e,`doubleGoals`)}function kt(e,t){return!!e&&e.id===`idol`&&e.team===t&&e.phase===`active`}function At(e,t){return!!e&&e.id===`idol`&&e.team===t&&e.phase!==`active`}function jt(e,t){return!!e&&e.id===`wall`&&e.team===t}ot(),_();var Mt={pack:{id:`pack`,name:`SPRINT DE MANADA`,description:`Todo el equipo corre un 25% mas durante 4 s.`,duration:4},glitch:{id:`glitch`,name:`DISPARO GLITCH`,description:`El siguiente tiro sale a tope y zigzaguea. Cuesta blocarlo.`,duration:6},dash:{id:`dash`,name:`DESCARGA`,description:`Acelerón electrico del jugador activo. Derriba al que toque.`,duration:.7},wall:{id:`wall`,name:`MURO DE CROMO`,description:`El portero crece: +60% de alcance y velocidad durante 6 s.`,duration:6},quantum:{id:`quantum`,name:`REBOTE CUANTICO`,description:`Vallas supermuelle y rebotes locos en el rival durante 5 s.`,duration:5},zerog:{id:`zerog`,name:`GRAVEDAD CERO`,description:`El balon flota y tu equipo controla balones altos 5 s.`,duration:5}},Nt=()=>({energy:0,active:0,armed:!1,uses:0});function Pt(e,t){return Mt[e.config.teams[t].special]}function Ft(e,t,n){return e.config.teams[t].special===n&&e.specials[t].active>0}function It(e,t){for(let n of[0,1]){let r=e.specials[n];r.active>0?(r.active-=t,r.active<=0&&(r.active=0,r.armed=!1)):r.energy=Math.min(1,r.energy+t/20*(e.config.mods?.chargeRate??1))}}function Lt(e,t,n){let r=e.specials[t];if(e.phase!==`play`||r.energy<1||r.active>0)return!1;let i=Pt(e,t);if(i.id===`dash`){if(!n||!n.canAct||n.isKeeper)return!1;n.dashT=i.duration,n.protect=Math.max(n.protect,i.duration)}return r.energy=0,r.active=i.duration,r.armed=i.id===`glitch`,r.uses++,e.emit({type:`special`,t:e.simTime,team:t,special:i.id,player:n?n.id:-1}),!0}function Rt(e,t){return(Ft(e,t.team,`pack`)?1.25:1)*Dt(e.boss)}function zt(e,t){return(Ft(e,t,`wall`)?1.6:1)*Ct(e.boss,t)}function Bt(e){return(Ft(e,0,`zerog`)||Ft(e,1,`zerog`)?.3:1)*(e.config.mods?.gravity??1)*Tt(e.boss)}function Vt(e){return(Ft(e,0,`quantum`)||Ft(e,1,`quantum`)?1.28:1)*Et(e.boss)}function Ht(e,t){let n=e.ball,r=n.owner,i=r!==null&&r.team===t,a=g(t,n.x);switch(e.config.teams[t].special){case`pack`:return i&&a>200||!i&&r!==null&&a<120?null:!1;case`glitch`:return i&&it(n.x,n.y,f(t),p)<210?null:!1;case`dash`:return i&&!r.isKeeper&&a<300?r:!1;case`wall`:return r!==null&&r.team===m(t)&&it(n.x,n.y,d(t),p)<200&&null;case`quantum`:return a>240&&null;case`zerog`:return i&&a>150?null:!1}}ot(),_();var Ut=new WeakMap;function Wt(e,t,n){let r=e.ball,i=t.team,a=e.isHuman(i)?Ae.normal:e.diff[i];if(r.owner===t){t.wantVx=t.wantVy=0,t.holdT-=n,t.holdT<=0&&Kt(e,t);return}if(!t.canAct)return;let o=g(i,r.x),c=p+(r.y-p)*.55,l=-u(i)*r.vx,d=!1;if(!r.owner&&l>60&&o<s.L*.6){let u=o/l,f=r.y+r.vy*u;if(f>s.goalTop-10&&f<s.goalBottom+10){d=!0;let o=(Ut.get(t)??0)+n;if(Ut.set(t,o),o>=a.keeperDelay){c=f;let n=t.attr.keeperReach*zt(e,i)+1,a=r.z+r.vz*u-240*u*u;if(u<.42&&Math.abs(f-t.y)>n&&a<24&&t.diveT<=0&&zt(e,i)>.5){t.diveT=.36,t.diveVy=Math.sign(f-t.y)*(95+e.config.teams[i].stats.keeper*12)*Math.sqrt(zt(e,i)),t.setAnim(`dive`,.85);return}}}}d||Ut.set(t,0),c=H(c,s.goalTop+2,s.goalBottom-2);let f=H(4+(o<120?(120-o)*.12:0),3,16),m=o<s.boxDepth-4&&r.y>s.boxTop&&r.y<s.boxBottom;if(m&&!r.owner&&r.speed<140){let n=it(t.x,t.y,r.x,r.y),i=!0;for(let a of e.players)if(!(a===t||a.stun>0)&&it(a.x,a.y,r.x,r.y)<n*.8){i=!1;break}i&&(f=o,c=r.y)}else m&&r.owner&&r.owner.team!==i&&o<s.boxDepth-10&&(f=H(o-10,3,s.boxDepth-10),c=H(r.y,s.goalTop-6,s.goalBottom+6));let _=h(i,f)-t.x,v=c-t.y,y=Math.hypot(_,v),b=t.attr.keeperSpeed*zt(e,i)*Math.min(1,y/6);t.wantVx=y>.5?_/y*b:0,t.wantVy=y>.5?v/y*b:0}function Gt(e,t){if(t.stun>0&&t.diveT<=0)return!1;let n=e.ball;if(n.lastTouch===t&&t.kickCd>0)return!1;let r=t.diveT>0,i=zt(e,t.team),a=(t.attr.keeperReach+(r?4:0))*i,o=(18+(r?4:0)+e.config.teams[t.team].stats.keeper*.4)*(i>1?1.25:1);if(n.z>o||it(n.x,n.y,t.x,t.y)>a+2.5)return!1;let s=Math.hypot(n.vx,n.vy,n.vz*.5),l=n.shot&&n.shot.team!==t.team?n.shot:null,d=t.attr.catchSpeed*(r?.85:1)*i*(n.glitchT>0?.55:1);if(s<d||!l&&s<d*1.3)return l&&(e.stats[t.team].saves++,e.stats[l.team].onTarget++,e.emit({type:`save`,t:e.simTime,team:t.team,keeper:t.id,shooter:l.shooter,speed:s,dive:r,caught:!0})),e.gainPossession(t),t.holdT=.9,t.setAnim(`hold`,.4),!0;let f=u(t.team);return n.vx=f*(Math.abs(n.vx)*.35+50),n.vy=n.vy*.3+(e.rng.next()-.5)*170,n.vz=70+e.rng.next()*70,n.x=t.x+f*(5+c+1.5),n.lastTouch=t,n.passTarget=-1,n.deflections++,t.kickCd=.25,l&&(e.stats[t.team].saves++,e.stats[l.team].onTarget++,e.emit({type:`save`,t:e.simTime,team:t.team,keeper:t.id,shooter:l.shooter,speed:s,dive:r,caught:!1})),n.shot=null,n.glitchT=0,!0}function Kt(e,t){let n=e.isHuman(t.team)?Ae.normal:e.diff[t.team],r=lt(e,t,!1);if(r&&r.open>16)e.pass(t,r.player,n.passError*.7);else{let n=u(t.team),r=H(p+(e.rng.next()-.5)*120,20,s.W-20);e.kickBall(t,t.x+n*200,r,300,140,.1,`clear`)}}_();var qt={groundBounce:.5,wallRestitution:.78,postRestitution:.7,rollDecel:55,rollDrag:.85,airDrag:.2},Jt={gravity:1,wall:1};function Yt(e,t,n,r=Jt){let i=Math.min(1.3,qt.wallRestitution*r.wall);(e.z>0||e.vz>0)&&(e.vz-=480*r.gravity*t,e.z+=e.vz*t,e.z<=0&&(e.z=0,e.vz<-45?(n.push({kind:`ground`,speed:-e.vz}),e.vz=-e.vz*qt.groundBounce):e.vz=0)),e.z>e.maxZ&&(e.maxZ=e.z);let a=Math.hypot(e.vx,e.vy);if(a>0){let n=e.z<=.01?qt.rollDecel+qt.rollDrag*a:qt.airDrag*a,r=Math.max(0,a-n*t),i=r/a;e.vx*=i,e.vy*=i,a=r}if(a>430){let t=430/a;e.vx*=t,e.vy*=t}let o=e.x;if(e.x+=e.vx*t,e.y+=e.vy*t,e.inNet!==-1)Xt(e,e.inNet);else{if(e.y<2.5?(e.y=c+(c-e.y),Math.abs(e.vy)>25&&n.push({kind:`wall`,speed:Math.abs(e.vy),endLine:!1,side:e.x<s.L/2?0:1,nearMiss:null}),e.vy=Math.abs(e.vy)*i):e.y>s.W-2.5&&(e.y=s.W-c-(e.y-(s.W-c)),Math.abs(e.vy)>25&&n.push({kind:`wall`,speed:Math.abs(e.vy),endLine:!1,side:e.x<s.L/2?0:1,nearMiss:null}),e.vy=-Math.abs(e.vy)*i),e.z<s.crossbar)for(let t of[0,1]){let r=t===0?0:s.L;for(let i of[s.goalTop,s.goalBottom]){let a=e.x-r,o=e.y-i,s=Math.hypot(a,o),u=c+l;if(s<u&&s>1e-6){let c=a/s,l=o/s,d=e.vx*c+e.vy*l;d<0&&(e.vx-=(1+qt.postRestitution)*d*c,e.vy-=(1+qt.postRestitution)*d*l,n.push({kind:`post`,side:t,speed:Math.abs(d)})),e.x=r+c*u,e.y=i+l*u}}}if(e.x<2.5||e.x>s.L-2.5){let t=e.x<s.L/2?0:1,r=e.y>s.goalTop&&e.y<s.goalBottom,a=t===0?o>=c:o<=s.L-c,l=e.z<s.crossbar-c*.5,u=e.z<s.crossbar+c;if(r&&l){let r=t===0?e.x<-c:e.x>s.L+c;(e.x<0||e.x>s.L)&&(e.y<s.goalTop+2.5?(e.y=s.goalTop+c,e.vy=Math.abs(e.vy)*.3):e.y>s.goalBottom-2.5&&(e.y=s.goalBottom-c,e.vy=-Math.abs(e.vy)*.3)),r&&(e.inNet=t,n.push({kind:`goal`,side:t}))}else if(r&&u&&a)n.push({kind:`crossbar`,side:t,speed:Math.abs(e.vx)}),e.x=t===0?c:s.L-c,e.vx=-e.vx*.55,e.vz=e.z>s.crossbar?Math.abs(e.vz)*.4+50:-Math.abs(e.vz)*.4-30;else{let a=null;a=r?Math.max(0,e.z-s.crossbar):Math.min(Math.abs(e.y-s.goalTop),Math.abs(e.y-s.goalBottom)),n.push({kind:`wall`,speed:Math.abs(e.vx),endLine:!0,side:t,nearMiss:a}),e.x=t===0?c:s.L-c,e.vx=(t===0?1:-1)*Math.abs(e.vx)*i}}}}function Xt(e,t){let n=t===0?-s.goalDepth+c:s.L+s.goalDepth-c,r=t===0?-c:s.L+c;t===0?e.x<n?(e.x=n,e.vx=Math.abs(e.vx)*.15):e.x>r&&(e.x=r,e.vx=-Math.abs(e.vx)*.15):e.x>n?(e.x=n,e.vx=-Math.abs(e.vx)*.15):e.x<r&&(e.x=r,e.vx=Math.abs(e.vx)*.15),e.y<s.goalTop+2.5?(e.y=s.goalTop+c,e.vy=Math.abs(e.vy)*.2):e.y>s.goalBottom-2.5&&(e.y=s.goalBottom-c,e.vy=-Math.abs(e.vy)*.2),e.z>s.crossbar-2.5&&(e.z=s.crossbar-c,e.vz=-Math.abs(e.vz)*.2)}_(),ot();function Zt(e,t){for(let n=0;n<e.length;n++){let r=e[n];for(let i=n+1;i<e.length;i++){let n=e[i],a=n.x-r.x,o=n.y-r.y,s=a*a+o*o;if(s>=100)continue;let c=Math.sqrt(s)||.01,l=s>0?a/c:1,u=s>0?o/c:0,d=(10-c)/2;r.x-=l*d,r.y-=u*d,n.x+=l*d,n.y+=u*d;let f=Math.hypot(r.vx-n.vx,r.vy-n.vy);f>120&&(r.slideT>0||n.slideT>0||f>185)&&t.push([r,n,f])}}}function Qt(e){e.x=H(e.x,5,s.L-5),e.y=H(e.y,5,s.W-5)}function $t(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function en(e,t,n,r,i){let a=e.x-t.x,o=e.y-t.y,s=Math.hypot(a,o)||1;a/=s,o/=s;let l=e.vx-t.vx,u=e.vy-t.vy,d=l*a+u*o;if(d<0&&(e.vx-=(1+n)*d*a,e.vy-=(1+n)*d*o),r>0){let t=(i()-.5)*r,n=Math.cos(t),a=Math.sin(t),o=e.vx*n-e.vy*a;e.vy=e.vx*a+e.vy*n,e.vx=o}e.vx+=t.vx*.4,e.vy+=t.vy*.4,e.vz=Math.max(e.vz,20+i()*50);let f=5+c+.5;e.x=t.x+a*f,e.y=t.y+o*f}function tn(e,t,n,r){let i=Math.max(r.x0,Math.min(e,r.x1)),a=Math.max(r.y0,Math.min(t,r.y1)),o=e-i,s=t-a,c=o*o+s*s;if(c>=n*n)return null;if(c>1e-9){let e=Math.sqrt(c),t=o/e,r=s/e;return{x:i+t*n,y:a+r*n,nx:t,ny:r}}let l=e-r.x0,u=r.x1-e,d=t-r.y0,f=r.y1-t,p=Math.min(l,u,d,f);return p===l?{x:r.x0-n,y:t,nx:-1,ny:0}:p===u?{x:r.x1+n,y:t,nx:1,ny:0}:p===d?{x:e,y:r.y0-n,nx:0,ny:-1}:{x:e,y:r.y1+n,nx:0,ny:1}}function nn(e,t,n,r){let i=e.vx-n.vx,a=e.vy-n.vy,o=i*t.nx+a*t.ny;if(o>=0){let r=n.vx*t.nx+n.vy*t.ny,i=e.vx*t.nx+e.vy*t.ny;return r>i&&(e.vx+=(r-i)*t.nx,e.vy+=(r-i)*t.ny),0}return e.vx-=(1+r)*o*t.nx,e.vy-=(1+r)*o*t.ny,-o}function rn(e,t){let n=sn(e,t),r=e.rect;return e.axis===`x`?{x0:r.x0+n,x1:r.x1+n,y0:r.y0,y1:r.y1}:{x0:r.x0,x1:r.x1,y0:r.y0+n,y1:r.y1+n}}function an(e,t){let n=2*Math.PI/e.period,r=e.amplitude*n*Math.cos(n*t+e.phase);return e.axis===`x`?{vx:r,vy:0}:{vx:0,vy:r}}function on(e){let t=e.rect,n=Math.abs(e.amplitude);return e.axis===`x`?{x0:t.x0-n,x1:t.x1+n,y0:t.y0,y1:t.y1}:{x0:t.x0,x1:t.x1,y0:t.y0-n,y1:t.y1+n}}var sn,cn,ln=n((()=>{ot(),sn=(e,t)=>e.amplitude*Math.sin(2*Math.PI*t/e.period+e.phase),cn=class{def;phase=`calm`;remaining;sector=-1;activeT=0;step=0;constructor(e){this.def=e,this.remaining=e?e.firstDelay:1/0}get enabled(){return this.def!==null}get kind(){return this.def?this.def.kind:null}update(e){let t=this.def;if(!t||(this.phase===`active`&&(this.activeT+=e),this.remaining-=e,this.remaining>0))return null;switch(this.phase){case`calm`:this.sector=t.order[this.step%t.order.length],this.step++,this.phase=`warning`,this.remaining=t.warning;break;case`warning`:this.phase=`active`,this.remaining=t.active,this.activeT=0;break;case`active`:this.phase=`calm`,this.remaining=t.calm,this.sector=-1}return{phase:this.phase,sector:this.sector}}resetForKickoff(){this.def&&(this.phase!==`calm`&&(this.phase=`calm`,this.sector=-1),this.remaining=Math.max(this.remaining,4))}sectorDef(){return this.def&&this.sector>=0?this.def.sectors[this.sector]:null}rects(){let e=this.sectorDef();return e?this.def.kind===`barriers`?(e.barriers??[]).map(e=>rn(e,this.phase===`active`?this.activeT:0)):e.rects:[]}barriers(){let e=this.sectorDef();return!e||this.phase!==`active`||this.def.kind!==`barriers`?[]:(e.barriers??[]).map(e=>({rect:rn(e,this.activeT),...an(e,this.activeT)}))}inside(e,t,n){for(let r of this.rects())if(e>r.x0-n&&e<r.x1+n&&t>r.y0-n&&t<r.y1+n)return r;return null}isActiveAt(e,t){return this.kind===`volt`&&this.phase===`active`&&this.inside(e,t,0)!==null}isDanger(e,t,n,r=6){return this.phase===`calm`||this.phase===`warning`&&(!n||this.kind===`barriers`)?!1:this.inside(e,t,r)!==null}exitPoint(e,t,n=8){let r=this.inside(e,t,n);if(!r)return{x:e,y:t};let i=[{x:r.x0-n,y:t,d:e-(r.x0-n)},{x:r.x1+n,y:t,d:r.x1+n-e},{x:e,y:r.y0-n,d:t-(r.y0-n)},{x:e,y:r.y1+n,d:r.y1+n-t}].filter(e=>e.y>4&&e.y<196&&e.x>4&&e.x<436);i.sort((e,t)=>e.d-t.d);let a=i[0]??{x:e,y:t};return{x:H(a.x,4,436),y:H(a.y,4,196)}}}}));ln(),ot(),_();function un(e,t){let n=e.diff[t];return kt(e.boss,t)?{...n,slideRate:.5,reaction:n.reaction*.85,doubleChase:!0}:At(e.boss,t)?{...n,creativePass:.35,passWhenPressured:.95,shootGamble:0,shootRange:n.shootRange-25}:n}var dn=[p,s.W*.32,s.W*.68,s.W*.28,s.W*.72];function fn(e,t,n){let r=un(e,t),i=e.ball,a=i.owner,o=e.isHuman(t)?e.selected[t]:-1,s=!a&&i.passTarget>=0&&e.players[i.passTarget]?.team===t,c=a!==null&&a.team===t||s,l=e.specials[t];if(!e.isHuman(t)&&l.energy>=1&&l.active<=0){let i=Ht(e,t);i!==!1&&e.rng.chance(Math.min(1,r.specialUse*n))&&Lt(e,t,i)&&e.stats[t].specials++}let u=e.teamPlayers[t].filter(e=>!e.isKeeper),f=-1,m=-1,h=-1;if(!c){let t=u.filter(e=>e.id!==o&&e.stun<=0).map(t=>{let n=dt(e,t,r.intercept);return{p:t,eta:it(t.x,t.y,n.x,n.y)/t.attr.maxSpeed}}).sort((e,t)=>e.eta-t.eta);if(o>=0){let n=e.players[o],i=dt(e,n,!0),s=it(n.x,n.y,i.x,i.y)/n.attr.maxSpeed;!a&&t[0]&&t[0].eta<s*.6&&(f=t[0].p.id),r.cover&&a&&(m=t.find(e=>e.p.role===`DEF`)?.p.id??-1)}else t[0]&&(f=t[0].p.id),r.doubleChase&&t[1]?h=t[1].p.id:r.cover&&t[1]&&a&&(m=t[1].p.id)}for(let s of u){if(s.id===o)continue;if(a===s){mt(e,s,r,n);continue}if(!s.canAct)continue;s.aiThink-=n;let l=s.id===f||s.id===h;if(s.aiThink<=0){if(s.aiThink=r.reaction*(.8+e.rng.next()*.4),i.passTarget===s.id&&!a){s.aiIntent=`receive`;let t=dt(e,s,!0);s.aiTx=t.x,s.aiTy=t.y}else if(l){s.aiIntent=`chase`;let n=dt(e,s,r.intercept);if(s.aiTx=n.x,s.aiTy=n.y,a&&a.team!==t&&s.tackleCd<=0&&it(s.x,s.y,i.x,i.y)<18&&e.rng.chance(r.slideRate)){e.slide(s,i.x-s.x,i.y-s.y);continue}}else if(s.id===m){s.aiIntent=`cover`;let e=d(t)-i.x,n=p-i.y,r=Math.hypot(e,n)||1,a=Math.min(45,r*.5);s.aiTx=i.x+e/r*a,s.aiTy=i.y+n/r*a}else{s.aiIntent=c?`support`:`formation`;let t=mn(e,s,c);s.aiTx=t.x,s.aiTy=t.y}}pn(e,s,s.aiTx,s.aiTy,s.aiIntent===`chase`||s.aiIntent===`receive`?1:.85)}}function pn(e,t,n,r,i){let{x:a,y:o}=pt(e,t,n,r),s=a-t.x,c=o-t.y,l=Math.hypot(s,c);if(l<2){t.wantVx=t.wantVy=0;return}let u=t.attr.maxSpeed*i*Math.min(1,l/18);t.wantVx=s/l*u,t.wantVy=c/l*u}function mn(e,t,n){let r=e.diff[t.team],i=e.ball,a=r.positioning,o=g(t.team,i.x),c=dn[t.slot],l,u;if(t.role===`DEF`)n?(l=H(rt(110,o*.55,a),70,220),u=rt(c,i.y,.2*a)):(l=H(rt(80,o*.45,a),38,165),u=rt(c,i.y,.35*a));else if(n){if(l=H(rt(260,o+70,a),220,s.L-55),u=c,r.findSpace){let n=-1/0;for(let r of[-28,0,28])for(let i of[-20,0,20]){let a=H(l+i,200,s.L-45),o=H(c+r,18,s.W-18),d=h(t.team,a),f=999;for(let n of e.teamPlayers[m(t.team)])f=Math.min(f,it(n.x,n.y,d,o));let p=Math.min(f,60)-Math.abs(r)*.1;p>n&&(n=p,l=a,u=o)}}}else l=H(rt(200,o*.75+40,a),140,300),u=rt(c,i.y,.2*a);return jt(e.boss,t.team)&&t.role===`DEF`&&(l=Math.min(l,92)),{x:h(t.team,l),y:H(u,12,s.W-12)}}function hn(e,t){let n=e.stats,r=n.power+(t===`ATT`?.5:t===`DEF`?-.5:0),i=n.defense+(t===`DEF`?.5:t===`ATT`?-.5:0),a=(n.speed+n.passing)/2;return{maxSpeed:62+n.speed*7,accel:9+n.speed*.4,shotSpeed:250+r*22,passError:(6-n.passing)*.018,tackle:i,captureSpeed:150+a*24,reachZ:e.trait===`aerial`?17:12,keeperSpeed:52+n.keeper*8,keeperReach:5.5+n.keeper*.7,catchSpeed:170+n.keeper*28}}var gn,_n,vn=n((()=>{gn=[`idle`,`run`,`kick`,`slide`,`dive`,`fall`,`celebrate`,`hold`,`sad`],_n=class{id;team;slot;role;name;attr;x=0;y=0;vx=0;vy=0;z=0;vz=0;fx=1;fy=0;wantVx=0;wantVy=0;anim=`idle`;animT=0;lockAnim=null;lockT=0;kickCd=0;tackleCd=0;stun=0;protect=0;slideT=0;slideDx=0;slideDy=0;diveT=0;diveVy=0;holdT=0;dashT=0;zapImmune=0;charging=!1;charge=0;human=0;aiIntent=`formation`;aiThink=0;aiTx=0;aiTy=0;aiDribbleY=0;constructor(e,t,n,r,i,a){this.id=e,this.team=t,this.slot=n,this.role=r,this.name=i,this.attr=a}get isKeeper(){return this.role===`GK`}get speed(){return Math.hypot(this.vx,this.vy)}get canAct(){return this.stun<=0&&this.slideT<=0&&this.diveT<=0}setAnim(e,t=0){t>0&&(this.lockAnim=e,this.lockT=t),this.anim!==e&&(this.anim=e,this.animT=0)}face(e,t){let n=Math.hypot(e,t);n>1e-4&&(this.fx=e/n,this.fy=t/n)}resetMotion(){this.vx=this.vy=this.wantVx=this.wantVy=0,this.z=this.vz=0,this.kickCd=this.tackleCd=this.stun=this.protect=0,this.slideT=this.diveT=this.holdT=this.dashT=this.zapImmune=0,this.charging=!1,this.charge=0,this.lockAnim=null,this.lockT=0,this.anim=`idle`,this.animT=0,this.aiThink=0,this.aiIntent=this.isKeeper?`keeper`:`formation`}}}));vn(),_();var yn=[`GK`,`DEF`,`DEF`,`ATT`,`ATT`],bn=[{u:6,y:s.W/2},{u:72,y:64},{u:72,y:136},{u:168,y:58},{u:168,y:142}];function xn(e,t){return yn.map((n,r)=>new _n(t*5+r,t,r,n,e.players[r],hn(e,n)))}var Sn={kickoffDelay:1.3,goalPause:2.9,overtimeIntro:2.4,penaltyRounds:3,fixedDt:1/120};function Cn(e,t){return e[0]===e[1]?t?`penalties`:`overtime`:`end`}function wn(e,t=Sn.penaltyRounds){let n=e.map(e=>e.filter(e=>e===`goal`).length),r=e.map(e=>e.length);if(r[0]<=t&&r[1]<=t){let e=t-r[0],i=t-r[1];return n[0]>n[1]+i?0:n[1]>n[0]+e?1:null}return r[0]===r[1]&&n[0]!==n[1]?n[0]>n[1]?0:1:null}function Tn(e){let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}var En=()=>({mx:0,my:0,shoot:!1,shootPressed:!1,passPressed:!1,switchPressed:!1,specialPressed:!1}),Dn=()=>({shots:0,onTarget:0,passes:0,possession:0,saves:0,tackles:0,specials:0,zapped:0});ot(),_();var On=s.L-s.penaltySpot,kn=class{config;players;teamPlayers;ball=new ht;rng;diff;phase=`kickoff`;phaseT=0;simTime=0;clock;overtime=!1;score=[0,0];stats=[Dn(),Dn()];goals=[];kickoffTeam=0;possessionTeam=null;selected=[-1,-1];lastGoal=null;penalties=null;result=null;hazard;boss;specials=[Nt(),Nt()];ballZapped=!1;events=[];input=[En(),En()];hits=[];bumps=[];autoSwitchT=0;constructor(e){this.config=e,this.rng=new at(e.seed);let t=xn(e.teams[0],0),n=xn(e.teams[1],1);this.teamPlayers=[t,n],this.players=[...t,...n],this.diff=[Ae[e.difficulty[0]],Ae[e.difficulty[1]]],this.clock=e.duration,this.hazard=new cn(e.hazards?He(e.stadiumId).hazard:null),this.boss=e.mods?.boss?yt(e.mods.boss,1):null,this.resetKickoff(+!this.rng.chance(.5),!1)}keeper(e){return this.teamPlayers[e][0]}isHuman(e){return this.config.humans[e]!==null}setInput(e,t){let n=this.input[e];n.mx=t.mx,n.my=t.my,n.shoot=t.shoot,n.shootPressed||=t.shootPressed,n.passPressed||=t.passPressed,n.switchPressed||=t.switchPressed,n.specialPressed||=t.specialPressed}drainEvents(){let e=this.events;return this.events=[],e}get isOver(){return this.phase===`ended`}step(e=Sn.fixedDt){if(this.phase!==`ended`){switch(this.simTime+=e,this.phaseT+=e,this.phase){case`kickoff`:this.updateTimers(e),this.integratePlayers(e),this.phaseT>=Sn.kickoffDelay&&this.startPlay();break;case`play`:this.updatePlay(e);break;case`goal`:this.updateGoalPhase(e);break;case`otIntro`:this.updateTimers(e),this.integratePlayers(e),this.phaseT>=Sn.overtimeIntro&&(this.clock=this.config.overtime,this.resetKickoff(+!this.rng.chance(.5),!0));break;case`penalties`:this.updatePenalties(e)}this.clearEdges()}}kickBall(e,t,n,r,i,a,o){let s=this.ball,c=Math.atan2(n-s.y,t-s.x)+(this.rng.next()-.5)*2*a,l=Math.min(430,r);s.owner=null,s.vx=Math.cos(c)*l,s.vy=Math.sin(c)*l,s.vz=i,s.z=Math.max(s.z,.5),s.lastTouch=e,s.passTarget=-1,s.clearFlightCounters(),s.shot=null,s.glitchT=0,e.kickCd=.25,e.charging=!1,e.charge=0,e.holdT=0,e.setAnim(`kick`,.22),e.face(Math.cos(c),Math.sin(c)),this.emit({type:`kick`,t:this.simTime,team:e.team,player:e.id,kind:o,speed:l,x:s.x,y:s.y})}shoot(e,t,n,r,i=!1){let a=H(n,0,1),o=this.config.teams[e.team].trait===`aerial`,s=this.specials[e.team],c=s.armed&&Ft(this,e.team,`glitch`);c&&(a=Math.min(a,.35));let l=c?430:(e.attr.shotSpeed+a*80)*(i?.85:1),u=a<.4?10+a*50:30+(a-.4)*230;o&&a>=.4&&(u*=.86),this.kickBall(e,f(e.team),t,l,u,c?r*.5:r+a*.03,i?`volley`:`shot`),this.ball.shot={team:e.team,shooter:e.id,fromX:this.ball.x,fromY:this.ball.y,time:this.simTime,speed:l,special:c},c&&(s.armed=!1,s.active=0,this.ball.glitchT=.9),this.stats[e.team].shots++}pass(e,t,n,r=e.fx,i=e.fy){let a=this.ball,o,c;if(t){let e=it(a.x,a.y,t.x,t.y)/200*.9;o=H(t.x+t.vx*e,10,s.L-10),c=H(t.y+t.vy*e,10,s.W-10)}else o=H(a.x+r*90,10,s.L-10),c=H(a.y+i*90,10,s.W-10);let l=it(a.x,a.y,o,c),u=H(90+l*1.25,130,290),d=l>150?70+(l-150)*.35:0;this.kickBall(e,o,c,u,d,n,`pass`),this.stats[e.team].passes++,t&&(a.passTarget=t.id,t.aiIntent=`receive`,t.aiThink=0,this.isHuman(e.team)&&!t.isKeeper&&this.setSelected(e.team,t.id))}slide(e,t,n){if(e.tackleCd>0||!e.canAct||e.isKeeper)return;let r=Math.hypot(t,n);r<.001?(t=e.fx,n=e.fy):(t/=r,n/=r),e.slideT=.3,e.slideDx=t,e.slideDy=n,e.tackleCd=1,e.face(t,n),e.setAnim(`slide`,.3)}setSelected(e,t){let n=this.config.humans[e];if(!n)return;for(let t of this.teamPlayers[e])t.human=0;let r=this.players[t];r&&!r.isKeeper&&r.team===e&&(r.human=n,r.charging=!1,this.selected[e]=t)}switchSelection(e){let t=this.selected[e],n=null,r=1/0;for(let i of this.teamPlayers[e]){if(i.isKeeper||i.id===t)continue;let e=it(i.x,i.y,this.ball.x,this.ball.y)+(i.stun>0?60:0);e<r&&(r=e,n=i)}n&&this.setSelected(e,n.id)}closestFieldPlayer(e,t,n){let r=this.teamPlayers[e][1],i=1/0;for(let a of this.teamPlayers[e]){if(a.isKeeper)continue;let e=it(a.x,a.y,t,n)+(a.stun>0?40:0);e<i&&(i=e,r=a)}return r}emit(e){this.events.push(e),this.events.length>4e3&&this.events.splice(0,2e3)}resetKickoff(e,t){this.overtime=this.overtime||t,this.ball.resetAt(s.L/2,s.W/2);for(let e of this.players){e.resetMotion();let t=bn[e.slot];e.x=h(e.team,t.u),e.y=t.y,e.face(u(e.team),0)}let n=this.teamPlayers[e][3];n.x=s.L/2-u(e)*(5+c+1.5),n.y=s.W/2,this.kickoffTeam=e,this.possessionTeam=e,this.hazard.resetForKickoff(),this.phase=`kickoff`,this.phaseT=0;for(let e of[0,1])this.isHuman(e)&&this.setSelected(e,this.teamPlayers[e][3].id)}startPlay(){let e=this.teamPlayers[this.kickoffTeam][3];this.phase=`play`,this.phaseT=0,this.ball.owner=e,this.ball.lastTouch=e,e.protect=.6,this.emit({type:`whistle`,t:this.simTime,kind:`kickoff`})}updatePlay(e){if(this.updateTimers(e),It(this,e),this.updateHazard(e),this.boss){let t=xt(this.boss,e);t&&this.emit({type:`boss`,t:this.simTime,boss:this.boss.id,phase:t.phase,label:t.label})}for(let t of[0,1])this.isHuman(t)&&this.applyHuman(t,e);fn(this,0,e),fn(this,1,e),Wt(this,this.keeper(0),e),Wt(this,this.keeper(1),e),this.integratePlayers(e),this.resolveBodies(),this.resolveSlides(),this.collideBarriersWithPlayers(),this.updateBall(e),this.phase===`play`&&(this.passiveSteals(),this.autoSwitch(e),this.ball.owner&&(this.stats[this.ball.owner.team].possession+=e),this.clock-=e,this.clock<=0&&(this.clock=0,this.timeUp()))}touchingBarrier(e,t,n){for(let r of this.hazard.barriers())if(tn(e,t,n,r.rect))return!0;return!1}collideBallWithBarriers(){let e=this.ball;if(!(e.owner||e.z>=20))for(let t of this.hazard.barriers()){let n=tn(e.x,e.y,c,t.rect);if(!n)continue;e.x=n.x,e.y=n.y;let r=nn(e,n,t,.95);e.wallBounces++,e.passTarget=-1,r>40&&this.emit({type:`wall`,t:this.simTime,speed:r})}}collideBarriersWithPlayers(){let e=this.hazard.barriers();if(e.length!==0)for(let t of e)for(let e of this.players){let n=tn(e.x,e.y,5,t.rect);n&&(e.x=n.x,e.y=n.y,nn(e,n,t,0),Qt(e))}}updateHazard(e){let t=this.hazard;if(!t.enabled)return;let n=t.update(e);if(n&&(this.emit({type:`hazard`,t:this.simTime,phase:n.phase,sector:n.sector}),n.phase===`active`&&(this.ballZapped=!1)),t.phase!==`active`||t.kind!==`volt`)return;for(let e of this.players){if(e.isKeeper||e.zapImmune>0||e.stun>0||!t.isActiveAt(e.x,e.y))continue;let n=this.ball.owner===e;if(e.stun=.9,e.zapImmune=2.2,e.slideT=e.dashT=0,e.charging=!1,e.setAnim(`fall`,.9),n){let e=this.ball;e.owner=null,e.vx=(this.rng.next()-.5)*160,e.vy=(this.rng.next()-.5)*160,e.vz=90}this.stats[e.team].zapped++,this.emit({type:`zap`,t:this.simTime,player:e.id,dropped:n})}let r=this.ball;if(!this.ballZapped&&!r.owner&&r.z<4&&t.isActiveAt(r.x,r.y)){this.ballZapped=!0;let e=(this.rng.next()-.5)*1.2,t=Math.cos(e),n=Math.sin(e),i=r.vx*t-r.vy*n;r.vy=(r.vx*n+r.vy*t)*1.2,r.vx=i*1.2,r.vz=130,r.deflections++,this.emit({type:`zap`,t:this.simTime,player:-1,dropped:!1})}}timeUp(){let e=Cn(this.score,this.overtime);e===`end`?this.endMatch(null):e===`overtime`?(this.overtime=!0,this.phase=`otIntro`,this.phaseT=0,this.ball.owner=null,this.emit({type:`whistle`,t:this.simTime,kind:`overtime`})):this.startPenalties()}endMatch(e){let t=null;this.score[0]===this.score[1]?e&&e[0]!==e[1]&&(t=e[0]>e[1]?0:1):t=this.score[0]>this.score[1]?0:1,this.result={score:[this.score[0],this.score[1]],penalties:e,winner:t,overtime:this.overtime,goals:this.goals.slice(),stats:[{...this.stats[0]},{...this.stats[1]}]},this.phase=`ended`,this.phaseT=0,this.emit({type:`whistle`,t:this.simTime,kind:`end`})}onGoal(e){if(this.phase!==`play`)return;let t=this.ball,n=+(e===0),r=t.shot&&t.shot.team===n?t.shot:null,i=r&&t.lastTouch&&t.lastTouch.team!==n?this.players[r.shooter]:t.lastTouch,a=i?i.team!==n:!1,o=this.goalValue(r);this.score[n]+=o,r&&this.stats[n].onTarget++;let s=this.overtime,c=s?this.config.overtime-this.clock:this.config.duration-this.clock,l=i?i.id:-1;this.goals.push({team:n,scorer:l,scorerName:i?i.name:`???`,ownGoal:a,clock:c,golden:s,value:o}),this.emit({type:`goal`,t:this.simTime,team:n,scorer:l,ownGoal:a,distance:r?Math.abs(f(n)-r.fromX):0,golden:s,deflections:t.deflections,wallBounces:t.wallBounces,postIn:t.postHits>0,lofted:t.maxZ>14,special:r?.special??!1,value:o,clock:c,score:[this.score[0],this.score[1]]});let u=!a&&i?i:this.closestFieldPlayer(n,t.x,t.y),d=this.rng.pick([`jump`,`pile`,`slip`,`keeperFlop`]);this.lastGoal={team:n,scorer:l,celebrator:u.id,ownGoal:a,style:d,golden:s};for(let e of this.players)e.charging=!1,e.slideT=0;if(d===`keeperFlop`){let e=this.keeper(m(n));e.stun=2.2,e.setAnim(`fall`,2.2)}let p=this.specials[m(n)];p.active<=0&&(p.energy=Math.min(1,p.energy+.25)),this.kickoffTeam=m(n),this.phase=`goal`,this.phaseT=0}goalValue(e){let t=this.config.mods;return Ot(this.boss)||t?.finalDoubleAfter!==void 0&&!this.overtime&&this.clock<=t.finalDoubleAfter||t?.longGoalDouble&&e&&g(m(e.team),e.fromX)>s.boxDepth?2:1}updateGoalPhase(e){this.updateTimers(e);let t=this.lastGoal;if(t){let e=this.players[t.celebrator],n=h(t.team,s.L-70),r=s.W-28;for(let i of this.players)if(!(i.stun>0)){if(i.team===t.team){let a=e.x,o=e.y;i===e&&(a=n,o=r);let s=a-i.x,c=o-i.y,l=Math.hypot(s,c);if((i===e?l<6:l<16)||this.phaseT>2.1)i.wantVx=i.wantVy=0,i.z<=0&&i.vz<=0&&(i.vz=90+this.rng.next()*50),i.setAnim(`celebrate`,.3);else{let n=i.attr.maxSpeed*(t.style===`pile`||i===e?1.1:.6);i.wantVx=s/l*n,i.wantVy=c/l*n}t.style===`slip`&&i===e&&this.phaseT>.75&&this.phaseT<.8&&(i.stun=1.4,i.vx*=1.6,i.vy*=1.6,i.setAnim(`fall`,1.4),this.emit({type:`collision`,t:this.simTime,a:i.id,b:i.id,speed:0}))}else i.wantVx*=.8,i.wantVy*=.8,(!i.isKeeper||t.style!==`keeperFlop`)&&i.setAnim(`sad`,.3)}}this.integratePlayers(e),this.resolveBodies(),this.collideBarriersWithPlayers(),this.hits.length=0,Yt(this.ball,e,this.hits),this.phaseT>=Sn.goalPause&&(t?.golden?this.endMatch(null):this.resetKickoff(this.kickoffTeam,!1))}applyHuman(e,t){let n=this.input[e];n.switchPressed&&this.switchSelection(e);let r=this.players[this.selected[e]];if((!r||r.team!==e)&&(this.switchSelection(e),r=this.players[this.selected[e]],!r))return;n.specialPressed&&Lt(this,e,r)&&this.stats[e].specials++;let i=n.mx,a=n.my,o=Math.hypot(i,a);o>1&&(i/=o,a/=o);let s=this.ball,c=s.owner===r;if(r.canAct){let e=r.attr.maxSpeed*(c?.9:1);r.wantVx=i*e,r.wantVy=a*e}if(c){if(n.shootPressed&&!r.charging&&(r.charging=!0,r.charge=0),r.charging)r.charge=Math.min(1,r.charge+t/.5),(!n.shoot||r.charge>=1)&&this.shoot(r,this.humanAim(r,a),r.charge,.025+(5-this.config.teams[e].stats.power)*.008);else if(n.passPressed){let e=ut(this,r,o>.2?i:r.fx,o>.2?a:r.fy);this.pass(r,e,r.attr.passError*.6,o>.2?i/Math.max(o,.001):r.fx,o>.2?a/Math.max(o,.001):r.fy)}return}r.charging=!1;let l=!s.owner&&s.z<10&&$t(s,r)<14&&r.canAct;if(n.shootPressed)l?this.shoot(r,this.humanAim(r,a),.25,.06,!0):this.slide(r,o>.2?i:s.x-r.x,o>.2?a:s.y-r.y);else if(n.passPressed){if(l){let e=ut(this,r,o>.2?i:r.fx,o>.2?a:r.fy);this.pass(r,e,r.attr.passError,r.fx,r.fy)}else s.owner&&s.owner.team===e&&!s.owner.isKeeper&&s.owner!==r&&s.owner.canAct&&this.pass(s.owner,r,s.owner.attr.passError)}}humanAim(e,t){let n=(s.goalBottom-s.goalTop)/2-5;return Math.abs(t)>.3?p+Math.sign(t)*n*Math.min(1,Math.abs(t)+.2):p+(e.y<p?1:-1)*n*.55+(this.rng.next()-.5)*10}autoSwitch(e){if(this.autoSwitchT-=e,this.autoSwitchT>0)return;this.autoSwitchT=.35;let t=this.ball;for(let e of[0,1]){if(!this.isHuman(e))continue;let n=this.players[this.selected[e]];if(!n||t.owner&&t.owner.team===e||t.passTarget>=0&&this.players[t.passTarget]?.team===e)continue;let r=this.closestFieldPlayer(e,t.x,t.y),i=it(n.x,n.y,t.x,t.y),a=it(r.x,r.y,t.x,t.y);r!==n&&i>55&&a<i*.55&&this.setSelected(e,r.id)}}updateTimers(e){for(let t of this.players)t.kickCd>0&&(t.kickCd-=e),t.tackleCd>0&&(t.tackleCd-=e),t.protect>0&&(t.protect-=e),t.zapImmune>0&&(t.zapImmune-=e),t.lockT>0&&(t.lockT-=e,t.lockT<=0&&(t.lockAnim=null))}integratePlayers(e){let t=this.phase===`kickoff`||this.phase===`otIntro`;for(let n of this.players){if(t)n.vx=n.vy=0;else if(n.stun>0)n.stun-=e,n.vx*=.9,n.vy*=.9;else if(n.slideT>0){n.slideT-=e;let t=n.attr.maxSpeed*1.75;n.vx=n.slideDx*t,n.vy=n.slideDy*t,n.slideT<=0&&(n.stun=.22,n.vx*=.3,n.vy*=.3)}else if(n.diveT>0)n.diveT-=e,n.vx*=.9,n.vy=n.diveVy,n.diveT<=0&&(n.stun=.45,n.vy*=.2);else if(n.dashT>0){n.dashT-=e,Math.hypot(n.wantVx,n.wantVy)>5&&n.face(n.wantVx,n.wantVy);let t=n.attr.maxSpeed*2.4;n.vx=n.fx*t,n.vy=n.fy*t}else{let t=Math.min(1,n.attr.accel*e),r=Rt(this,n);n.vx+=(n.wantVx*r-n.vx)*t,n.vy+=(n.wantVy*r-n.vy)*t}if(n.x+=n.vx*e,n.y+=n.vy*e,n.isKeeper&&this.phase!==`penalties`){let e=H(g(n.team,n.x),1,s.boxDepth-8);n.x=h(n.team,e),n.y=H(n.y,s.boxTop+4,s.boxBottom-4)}else Qt(n);n.canAct&&n.speed>8&&!t&&n.face(n.vx,n.vy),(n.z>0||n.vz>0)&&(n.vz-=600*e,n.z+=n.vz*e,n.z<=0&&(n.z=0,n.vz=0));let r=n.anim;r=n.lockAnim?n.lockAnim:n.stun>0?`fall`:n.slideT>0?`slide`:n.diveT>0?`dive`:this.ball.owner===n&&n.isKeeper?`hold`:n.speed>10?`run`:`idle`,r===n.anim?n.animT+=e:(n.anim=r,n.animT=0)}}resolveBodies(){this.bumps.length=0,Zt(this.players,this.bumps);for(let[e,t,n]of this.bumps){if(this.phase!==`play`)continue;let r=e.slideT>0||e.dashT>0,i=t.slideT>0||t.dashT>0,a=r&&!i?t:i&&!r||e.speed<t.speed?e:t;a.stun>0||a.isKeeper||a.dashT>0||(e.team!==t.team||r||i)&&(e.team===t.team&&(e.dashT>0||t.dashT>0)||(a.stun=.55,a.setAnim(`fall`,.55),this.emit({type:`collision`,t:this.simTime,a:e.id,b:t.id,speed:n})))}for(let e of this.players)if(e.isKeeper){let t=H(g(e.team,e.x),1,s.boxDepth-8);e.x=h(e.team,t)}else Qt(e)}resolveSlides(){let e=this.ball;for(let t of this.players)if(!(t.slideT<=0)){!e.owner&&e.z<8&&$t(e,t)<10&&!(e.lastTouch===t&&t.kickCd>0)&&(this.kickBall(t,e.x+t.slideDx*50,e.y+t.slideDy*50,150,25,.2,`clear`),t.setAnim(`slide`,t.slideT));for(let n of this.teamPlayers[m(t.team)])n.stun>0||n.isKeeper||it(t.x,t.y,n.x,n.y)>11.5||(e.owner===n&&(e.owner=null,e.vx=t.slideDx*120+n.vx*.3,e.vy=t.slideDy*120+n.vy*.3,e.vz=30,e.lastTouch=t,e.passTarget=-1,t.kickCd=.15,this.stats[t.team].tackles++,this.emit({type:`tackle`,t:this.simTime,team:t.team,tackler:t.id,victim:n.id})),n.stun=.6,n.setAnim(`fall`,.6),this.emit({type:`collision`,t:this.simTime,a:t.id,b:n.id,speed:t.speed}))}}updateBall(e){let t=this.ball,n=t.owner;if(n){if(n.stun>0||n.diveT>0)t.owner=null,t.vx=n.vx*.6+n.fx*40,t.vy=n.vy*.6+n.fy*40;else if(n.isKeeper){t.x=n.x+n.fx*3,t.y=n.y+n.fy*2,t.z=9,t.vx=t.vy=t.vz=0;return}else{let e=n.speed>10,r=5+c+1+(e?Math.sin(n.animT*18)*.9:0);if(t.x=n.x+n.fx*r,t.y=n.y+n.fy*r,t.z=0,t.vx=n.vx,t.vy=n.vy,t.vz=0,t.idleT=0,t.y>s.goalTop+2.5&&t.y<s.goalBottom-2.5&&(t.x<2.5||t.x>s.L-2.5))t.owner=null,t.vx=n.fx*90,t.vy=n.fy*40;else{if(t.x=H(t.x,c,s.L-c),t.y=H(t.y,c,s.W-c),!this.touchingBarrier(t.x,t.y,2.5))return;t.owner=null}}}if(t.glitchT>0){t.glitchT-=e;let n=Math.hypot(t.vx,t.vy)||1,r=Math.sin(t.glitchT*28)*900*e;t.vx+=-t.vy/n*r,t.vy+=t.vx/n*r}this.hits.length=0,Yt(t,e,this.hits,{gravity:Bt(this),wall:Vt(this)});for(let e of this.hits)switch(e.kind){case`ground`:e.speed>60&&this.emit({type:`bounce`,t:this.simTime,speed:e.speed});break;case`wall`:t.wallBounces++,e.speed>50&&this.emit({type:`wall`,t:this.simTime,speed:e.speed}),e.endLine&&t.shot&&e.nearMiss!==null&&(+(t.shot.team===0)===e.side&&e.nearMiss<14&&this.emit({type:`nearMiss`,t:this.simTime,team:t.shot.team,shooter:t.shot.shooter,margin:e.nearMiss}),t.shot=null);break;case`post`:case`crossbar`:t.postHits++,this.emit({type:`post`,t:this.simTime,team:t.shot?t.shot.team:t.lastTouch?t.lastTouch.team:null,shooter:t.shot?t.shot.shooter:t.lastTouch?t.lastTouch.id:-1,crossbar:e.kind===`crossbar`});break;case`goal`:this.onGoal(e.side);return}this.collideBallWithBarriers();for(let e of[0,1])if(Gt(this,this.keeper(e)))return;let r=null,i=5+c+1.5;for(let e of this.players){if(e.isKeeper||e.stun>0||e.diveT>0||t.z>=this.reachZ(e)||e===t.lastTouch&&e.kickCd>0)continue;let n=$t(t,e);n<i&&(i=n,r=e)}if(r&&this.touchBall(r),!t.owner&&t.speed<4&&t.z<=0){if(t.idleT+=e,t.idleT>3.5){t.idleT=0;let e=s.L/2-t.x,n=s.W/2-t.y,r=Math.hypot(e,n)||1;t.vx=e/r*70,t.vy=n/r*70,t.vz=60}}else t.idleT=0}reachZ(e){return Ft(this,e.team,`zerog`)?28:e.attr.reachZ}touchBall(e){let t=this.ball,n=Math.hypot(t.vx-e.vx,t.vy-e.vy),r=t.passTarget===e.id,i=e.attr.captureSpeed*(r?1.5:1)*(e.human?1.15:1),a=Ft(this,e.team,`zerog`),o=t.z<(a?26:this.config.teams[e.team].trait===`aerial`?13:8);if(n<i&&o&&t.glitchT<=0){this.gainPossession(e);return}let s=this.config.teams[e.team].trait===`chaos`||Ft(this,m(e.team),`quantum`);en(t,e,s?.75:.45,s?1.3:.3,()=>this.rng.next()),t.deflections++,t.lastTouch=e,t.passTarget=-1,e.kickCd=.12,this.emit({type:`deflect`,t:this.simTime,player:e.id,speed:n}),n>320&&this.rng.chance(.35)&&(e.stun=.7,e.setAnim(`fall`,.7),this.emit({type:`collision`,t:this.simTime,a:e.id,b:e.id,speed:n}))}gainPossession(e){let t=this.ball,n=this.possessionTeam;t.owner=e,t.lastTouch=e,t.passTarget=-1,t.shot=null,t.clearFlightCounters(),t.glitchT=0,t.vz=0,t.z=0,e.protect=Math.max(e.protect,.35),e.charging=!1,this.possessionTeam=e.team,n!==e.team&&this.emit({type:`possession`,t:this.simTime,team:e.team,player:e.id}),this.isHuman(e.team)&&!e.isKeeper&&this.setSelected(e.team,e.id);let r=m(e.team);if(n!==e.team&&this.isHuman(r)){let e=this.players[this.selected[r]];(!e||it(e.x,e.y,t.x,t.y)>30)&&this.setSelected(r,this.closestFieldPlayer(r,t.x,t.y).id)}}passiveSteals(){let e=this.ball,t=e.owner;if(!(!t||t.isKeeper||t.protect>0))for(let n of this.teamPlayers[m(t.team)]){if(n.isKeeper||!n.canAct||n.tackleCd>0||$t(e,n)>9.5)continue;n.tackleCd=.45;let r=.32+.09*(n.attr.tackle-3);if(this.rng.chance(r)){this.stats[n.team].tackles++,this.emit({type:`tackle`,t:this.simTime,team:n.team,tackler:n.id,victim:t.id}),t.protect=0,t.stun=.15,this.gainPossession(n),n.protect=.45;return}}}clearEdges(){for(let e of this.input)e.shootPressed=!1,e.passPressed=!1,e.switchPressed=!1,e.specialPressed=!1}startPenalties(){this.phase=`penalties`,this.phaseT=0,this.ball.owner=null,this.penalties={kicks:[[],[]],shooterTeam:0,sub:`setup`,t:0,shooter:-1,keeper:-1,aim:0,guess:0,outcome:null,aiKickAt:1,from:{x:On,y:p},to:{x:s.L,y:p,z:0},winner:null},this.emit({type:`whistle`,t:this.simTime,kind:`penalties`}),this.setupPenaltyKick()}setupPenaltyKick(){let e=this.penalties;if(!e)return;let t=e.shooterTeam,n=e.kicks[t].length,r=[3,4,1,2],i=this.teamPlayers[t][r[n%r.length]],a=this.keeper(m(t));for(let e of this.players)e.resetMotion(),e.x=s.L/2+(e.team===0?-14:14)+(e.slot-2)*3,e.y=40+e.slot*26,e.face(1,0);i.x=On-14,i.y=p,i.face(1,0),a.x=s.L-4,a.y=p,a.face(-1,0),this.ball.resetAt(On,p),e.shooter=i.id,e.keeper=a.id,e.sub=`setup`,e.t=0,e.aim=0,e.guess=0,e.outcome=null;let o=this.diff[t];e.aiKickAt=.6+this.rng.next()*.8,this.isHuman(t)||(e.aim=o.smartAim?this.rng.pick([-1,1,-1,1,0]):this.rng.pick([-1,0,1]));for(let e of[0,1])if(this.isHuman(e)){for(let t of this.teamPlayers[e])t.human=0;e===t?i.human=this.config.humans[e]??0:a.human=this.config.humans[e]??0}}updatePenalties(e){let t=this.penalties;if(!t)return;t.t+=e,this.updateTimers(e);let n=this.players[t.shooter],r=this.players[t.keeper],i=t.shooterTeam,a=m(i);switch(t.sub){case`setup`:t.t>1&&(t.sub=`aim`,t.t=0);break;case`aim`:{let e=!1;if(this.isHuman(i)){let n=this.input[i];t.aim=n.my<-.3?-1:+(n.my>.3),e=n.shootPressed||t.t>2.6}else e=t.t>t.aiKickAt;if(e){if(this.isHuman(a)){let e=this.input[a];t.guess=e.my<-.3?-1:+(e.my>.3)}else{let e=this.rng.next();t.guess=e<.4?-1:+(e<.8)}let e=this.config.teams[a].stats.keeper,o=this.config.teams[i].stats.power,c;c=t.aim===t.guess?this.rng.chance((t.aim===0?.82:.66)+(e-3)*.04)?`saved`:`goal`:this.rng.chance(.08-(o-3)*.015)?`miss`:`goal`,t.outcome=c;let l=p+t.aim*22;t.to=c===`miss`?t.aim===0?{x:s.L+4,y:l,z:s.crossbar+10}:{x:s.L+2,y:p+t.aim*38,z:6}:c===`saved`?{x:s.L-5,y:l,z:8}:{x:s.L+s.goalDepth-4,y:l,z:t.aim===0?14:6},t.from={x:this.ball.x,y:this.ball.y},n.setAnim(`kick`,.3),t.guess!==0&&r.setAnim(`dive`,1.4),this.emit({type:`kick`,t:this.simTime,team:i,player:n.id,kind:`shot`,speed:380,x:this.ball.x,y:this.ball.y}),t.sub=`flight`,t.t=0}break}case`flight`:{let a=Math.min(1,t.t/.42),o=this.ball;if(o.x=t.from.x+(t.to.x-t.from.x)*a,o.y=t.from.y+(t.to.y-t.from.y)*a,o.z=t.to.z*a+Math.sin(a*Math.PI)*6,r.y+=(p+t.guess*20-r.y)*Math.min(1,e*9),a>=1){let e=t.outcome??`goal`;t.kicks[i].push(e),e===`saved`?(r.setAnim(`hold`,1.2),o.x=r.x-3,o.z=8):e===`goal`?(o.inNet=1,n.setAnim(`celebrate`,1.2),r.setAnim(`sad`,1.2)):n.setAnim(`sad`,1.2),this.emit({type:`penalty`,t:this.simTime,team:i,shooter:n.id,result:e}),t.winner=wn(t.kicks),t.sub=`result`,t.t=0}break}case`result`:if(t.t>1.4){if(t.winner!==null){let e=[t.kicks[0].filter(e=>e===`goal`).length,t.kicks[1].filter(e=>e===`goal`).length];this.endMatch(e);return}t.shooterTeam=+(t.kicks[0].length>t.kicks[1].length),this.setupPenaltyKick()}}for(let t of this.players)t.lockAnim?t.anim=t.lockAnim:t.anim!==`idle`&&(t.anim=`idle`),t.animT+=e}};_(),oe(),ln();var An={1:`#00f0ff`,2:`#ff3df0`},jn=[`¡AY!`,`¡PUM!`,`¡CRASH!`,`¡OUCH!`,`¡PLAF!`],Mn=class{font;sprites;stadium;match;opts;particles=[];popups=[];trail=[];shakeT=0;shakeMag=0;ballSprite;excitement=0;constructor(e,t,n,r,i){this.font=e,this.sprites=t,this.stadium=n,this.match=r,this.opts=i,this.ballSprite=document.createElement(`canvas`),this.ballSprite.width=7,this.ballSprite.height=7;let a=this.ballSprite.getContext(`2d`);a.fillStyle=`#0a0612`,a.fillRect(2,0,3,7),a.fillRect(0,2,7,3),a.fillRect(1,1,5,5),a.fillStyle=`#ffffff`,a.fillRect(2,1,3,5),a.fillRect(1,2,5,3),a.fillStyle=`#3a2d5c`,a.fillRect(3,3,1,1),a.fillRect(2,4,1,1),a.fillRect(4,2,1,1),a.fillStyle=`#b8fbff`,a.fillRect(2,1,1,1)}shake(e,t){this.opts.shake&&(this.shakeMag=Math.max(this.shakeMag,e),this.shakeT=Math.max(this.shakeT,t))}onEvent(e){let t=this.match,n=t.ball,r=b(n.x,n.y),i=x(n.y,n.z);switch(e.type){case`kick`:(e.kind===`shot`||e.kind===`volley`)&&(this.burst(r,i,t.config.teams[e.team].colors.primary,10,60),e.speed>360&&this.shake(2,.15));break;case`goal`:{let n=b(e.team===0?s.L:0,p),r=x(p,12),i=t.config.teams[e.team].colors;for(let e of[i.primary,i.secondary,i.accent,`#ffffff`])this.burst(n,r,e,22,120,140);this.shake(5,.5),this.excitement=3;break}case`save`:{let n=t.players[e.keeper];this.popup(e.dive?`¡PARADÓN!`:`ATAJADA`,n.x,n.y,`#ffd23f`),this.burst(r,i,`#ffffff`,8,70),this.excitement=1.5;break}case`post`:this.popup(e.crossbar?`¡LARGUERO!`:`¡POSTE!`,n.x,n.y,`#ffffff`),this.burst(r,i,`#ffffff`,12,90),this.shake(3,.25),this.excitement=1.5;break;case`collision`:{let n=t.players[e.b];this.popup(jn[(e.a+e.b+Math.floor(e.t*10))%jn.length],n.x,n.y,`#ff7a59`),this.burst(b(n.x,n.y),x(n.y,12),`#ffd23f`,6,40);break}case`tackle`:{let n=t.players[e.tackler];this.popup(`¡ROBO!`,n.x,n.y,t.config.teams[e.team].colors.primary);break}case`nearMiss`:this.popup(`¡UUUY!`,n.x,n.y,`#ff2bd6`),this.excitement=1;break;case`wall`:e.speed>180&&this.burst(r,i,this.stadium.data.palette.farRail,5,50);break;case`zap`:if(e.player>=0){let n=t.players[e.player];this.popup(`¡BZZZT!`,n.x,n.y,`#ffe27a`),this.burst(b(n.x,n.y),x(n.y,8),`#ffe27a`,14,90),this.burst(b(n.x,n.y),x(n.y,8),`#7fe9ff`,8,70),this.shake(2,.2)}else this.burst(r,i,`#ffe27a`,10,80);break;case`special`:{let n=t.config.teams[e.team];if(e.special===`wall`){let n=t.keeper(e.team);this.burst(b(n.x,n.y),x(n.y,10),`#ffffff`,20,90)}else if(e.player>=0){let r=t.players[e.player];this.burst(b(r.x,r.y),x(r.y,8),n.colors.primary,18,90)}else for(let r of t.teamPlayers[e.team])this.burst(b(r.x,r.y),x(r.y,8),n.colors.accent,5,50);this.excitement=Math.max(this.excitement,1);break}case`penalty`:{let n=e.result===`goal`?`¡GOL!`:e.result===`saved`?`¡ATAJADO!`:`¡FUERA!`;this.popup(n,s.L-20,p,e.result===`goal`?`#a6ff00`:`#ff2b4a`),e.result===`goal`&&this.burst(b(s.L,p),x(p,10),t.config.teams[e.team].colors.primary,30,100,120);break}}}burst(e,t,n,r,i,a=60){for(let o=0;o<r;o++){let r=Math.random()*Math.PI*2,o=i*(.3+Math.random()*.7);this.particles.push({x:e,y:t,vx:Math.cos(r)*o,vy:Math.sin(r)*o-i*.3,life:0,max:.5+Math.random()*.6,color:n,size:Math.random()<.3?2:1,gravity:a})}this.particles.length>400&&this.particles.splice(0,this.particles.length-400)}popup(e,t,n,r){this.popups.push({text:e,x:t,y:n,t:0,color:r}),this.popups.length>6&&this.popups.shift()}update(e){for(let t of this.particles)t.life+=e,t.vy+=t.gravity*e,t.x+=t.vx*e,t.y+=t.vy*e;this.particles=this.particles.filter(e=>e.life<e.max);for(let t of this.popups)t.t+=e;this.popups=this.popups.filter(e=>e.t<1.1),this.shakeT>0&&(this.shakeT-=e),this.excitement=Math.max(0,this.excitement-e);let t=this.match.ball;!t.owner&&t.speed>180?(this.trail.push({x:b(t.x,t.y),y:x(t.y,t.z)}),this.trail.length>7&&this.trail.shift()):this.trail.length&&this.trail.shift()}render(e,t){let n=this.match,r=0,i=0;this.shakeT>0?(r=Math.round((Math.random()-.5)*2*this.shakeMag),i=Math.round((Math.random()-.5)*2*this.shakeMag)):this.shakeMag=0,e.save(),e.translate(r,i),this.stadium.drawBackground(e,t,this.excitement+ +(n.phase===`goal`)),this.drawHazard(e,t),this.drawSpecialField(e,t);for(let t of n.players)w(e,b(t.x,t.y),x(t.y)+.5,t.anim===`fall`||t.anim===`dive`||t.anim===`slide`?6:4,1,`rgba(0,0,0,0.45)`);let a=n.ball,o=Math.max(1,3-a.z/12);w(e,b(a.x,a.y),x(a.y)+.5,o,1,`rgba(0,0,0,${Math.max(.15,.5-a.z/60)})`);let s=[];for(let r of n.players)s.push({y:r.y,draw:()=>this.drawPlayer(e,r,t)});s.push({y:a.y+.1,draw:()=>this.drawBall(e)});for(let t of this.stadium.goalDrawables)s.push({y:t.y,draw:()=>t.draw(e)});for(let r of n.hazard.barriers())s.push({y:(r.rect.y0+r.rect.y1)/2,draw:()=>this.drawBarrier(e,r.rect,t)});s.sort((e,t)=>e.y-t.y);for(let e of s)e.draw();for(let t of this.particles){let n=1-t.life/t.max;e.globalAlpha=Math.max(0,n),e.fillStyle=t.color,e.fillRect(Math.round(t.x),Math.round(t.y),t.size,t.size)}e.globalAlpha=1;for(let t of this.popups){let n=b(t.x,t.y),r=x(t.y,24)-t.t*18;t.t>.8&&Math.floor(t.t*20)%2||this.font.draw(e,t.text,n,r,t.color,{align:`center`,outline:`#0a0612`})}n.phase===`penalties`&&this.drawPenaltyAim(e,t),e.restore()}fillWorldRect(e,t,n,r=0,i=0){e.fillStyle=n;let a=Math.round(x(t.y0)),o=Math.round(x(t.y1));for(let n=a;n<=o;n++){let a=(n-v.top)/v.yScale,o=Math.round(b(t.x0,a)),s=Math.round(b(t.x1,a));e.fillRect(o+i,n-r,Math.max(1,s-o),1)}}outlineWorldRect(e,t,n,r=0){C(e,b(t.x0,t.y0),x(t.y0,r),b(t.x1,t.y0),x(t.y0,r),n),C(e,b(t.x0,t.y1),x(t.y1,r),b(t.x1,t.y1),x(t.y1,r),n),C(e,b(t.x0,t.y0),x(t.y0,r),b(t.x0,t.y1),x(t.y1,r),n),C(e,b(t.x1,t.y0),x(t.y0,r),b(t.x1,t.y1),x(t.y1,r),n)}drawBarrier(e,t,n){let r=Math.floor(n*20);for(let n=0;n<=20;n+=2){let i=(r+n*7)%23==0?(r+n)%2?3:-3:0;this.fillWorldRect(e,t,n%4==0?`rgba(255,43,214,0.16)`:`rgba(0,240,255,0.10)`,n,i)}this.fillWorldRect(e,t,`rgba(255,200,255,0.35)`,20),this.outlineWorldRect(e,t,`#ff2bd6`,0),this.outlineWorldRect(e,t,r%6==0?`#ffffff`:`#00f0ff`,20);for(let[n,r]of[[t.x0,t.y0],[t.x1,t.y0],[t.x0,t.y1],[t.x1,t.y1]])C(e,b(n,r),x(r,0),b(n,r),x(r,20),`#c2f5ff`)}drawHazard(e,t){let n=this.match.hazard;if(n.enabled&&n.phase!==`calm`){if(n.kind===`barriers`){if(n.phase!==`warning`||!n.def)return;let r=n.def.sectors[n.sector],i=Math.floor(t*(n.remaining<.8?12:5))%2==0;for(let t of r.barriers??[]){let n=on(t);this.fillWorldRect(e,n,i?`rgba(255,43,214,0.16)`:`rgba(255,43,214,0.06)`),this.outlineWorldRect(e,n,i?`#ff2bd6`:`#7a1a6a`)}for(let t of n.rects()){i&&this.outlineWorldRect(e,t,`#c2f5ff`,0);let r=b((t.x0+t.x1)/2,(t.y0+t.y1)/2),a=x((t.y0+t.y1)/2)-18;this.font.draw(e,String(Math.ceil(n.remaining)),r,a,`#ff9de9`,{align:`center`,scale:2,outline:`#1a0628`})}}else for(let r of n.rects())if(n.phase===`warning`){let i=n.remaining<.8,a=Math.floor(t*(i?12:5))%2==0;this.fillWorldRect(e,r,a?`rgba(255,176,0,0.32)`:`rgba(255,176,0,0.12)`);let o=b((r.x0+r.x1)/2,(r.y0+r.y1)/2),s=x((r.y0+r.y1)/2)-7;this.font.draw(e,String(Math.ceil(n.remaining)),o,s,`#ffe27a`,{align:`center`,scale:2,outline:`#2a1404`})}else{this.fillWorldRect(e,r,Math.floor(t*20)%2?`rgba(127,233,255,0.34)`:`rgba(255,240,150,0.28)`);for(let t=0;t<4;t++){let n=r.x0+Math.random()*(r.x1-r.x0),i=r.y0+Math.random()*(r.y1-r.y0);for(let a=0;a<4;a++){let a=Math.min(r.x1,Math.max(r.x0,n+(Math.random()-.5)*30)),o=Math.min(r.y1,Math.max(r.y0,i+(Math.random()-.5)*30));C(e,b(n,i),x(i,2),b(a,o),x(o,2),t%2?`#ffffff`:`#7fe9ff`),n=a,i=o}}}}}drawSpecialField(e,t){let n=this.match,r=Et(n.boss)>1;for(let i of[0,1]){if(!Ft(n,i,`quantum`)&&!(r&&i===1))continue;let a=Math.floor(t*10)%2?r?`#ffd23f`:n.config.teams[i].colors.primary:`#ffffff`,o=s.L,c=s.W;C(e,b(0,0),x(0),b(o,0),x(0),a),C(e,b(0,c),x(c),b(o,c),x(c),a),C(e,b(0,0),x(0),b(0,c),x(c),a),C(e,b(o,0),x(0),b(o,c),x(c),a)}}drawPlayer(e,t,n){let r=b(t.x,t.y),i=x(t.y),a=this.match.config.teams[t.team],o=this.match;if(t.dashT>0){let o=this.sprites.get(a,t.slot);for(let n=3;n>=1;n--)e.globalAlpha=.18*(4-n),o.draw(e,`run1`,r-t.fx*n*5,i-t.z-t.fy*n*3,t.fx<0);e.globalAlpha=1,Math.floor(n*30)%2&&C(e,r-4,i-14,r+3,i-4,`#a6ff00`)}else if((Ft(o,t.team,`pack`)||Dt(o.boss)>1)&&t.speed>40){e.fillStyle=a.colors.accent;for(let n=0;n<3;n++)e.fillRect(Math.round(r-t.fx*(8+n*3)),Math.round(i-4-n*4),t.fx<0?4:-4,1)}let s=t.isKeeper&&wt(o.boss,t.team);if(t.isKeeper&&(Ft(o,t.team,`wall`)||s)){if(s&&o.boss&&o.boss.phase!==`idle`){let t=o.boss.phase===`active`;for(let a=0;a<(t?6:3);a++){let o=n*5+a*1.7;e.fillStyle=t?a%2?`#ff2b4a`:`#5a4a50`:`#ffd23f`;let s=t?2:1;e.fillRect(Math.round(r+Math.sin(o)*7),Math.round(i-30-(n*20+a*7)%14),s,s)}t&&Math.floor(n*8)%2&&(e.fillStyle=`rgba(255,43,74,0.35)`,e.fillRect(Math.round(r)-9,Math.round(i)-29,18,29))}if(!s||Ft(o,t.team,`wall`))for(let t=0;t<20;t++){let a=t/20*Math.PI*2+n*2;e.fillStyle=t%2?`#ffffff`:`#9fb4ff`,e.fillRect(Math.round(r+Math.cos(a)*12),Math.round(i-12+Math.sin(a)*14),1,1)}e.save(),e.translate(Math.round(r),Math.round(i-t.z)),e.scale(1.6,1.6),this.sprites.get(a,t.slot).draw(e,A(t.anim,t.animT),0,0,t.fx<0),e.restore();return}if(t.human){e.fillStyle=An[t.human];for(let t=0;t<16;t++){if((t+Math.floor(n*12))%4==0)continue;let a=t/16*Math.PI*2;e.fillRect(Math.round(r+Math.cos(a)*6),Math.round(i+Math.sin(a)*2),1,1)}}let c=A(t.anim,t.animT);if(this.sprites.get(a,t.slot).draw(e,c,r,i-t.z,t.fx<0),t.human){let a=An[t.human],o=Math.round(i-t.z-24+Math.sin(n*8)*1.2);if(e.fillStyle=`#0a0612`,e.fillRect(Math.round(r)-3,o-1,7,5),e.fillStyle=a,e.fillRect(Math.round(r)-2,o,5,1),e.fillRect(Math.round(r)-1,o+1,3,1),e.fillRect(Math.round(r),o+2,1,1),t.charging){let n=Math.round(r-7),i=o-5;e.fillStyle=`#0a0612`,e.fillRect(n-1,i-1,16,4);let a=Math.round(14*t.charge);e.fillStyle=t.charge>.75?`#ff2b4a`:t.charge>.4?`#ffd23f`:`#a6ff00`,e.fillRect(n,i,a,2)}}if(t.anim===`fall`&&t.stun>.25)for(let t=0;t<3;t++){let a=n*6+t*Math.PI*2/3;e.fillStyle=t%2?`#ffd23f`:`#ffffff`,e.fillRect(Math.round(r+Math.cos(a)*5),Math.round(i-10+Math.sin(a)*2),1,1)}}drawBall(e){let t=this.match,n=t.ball;for(let r=0;r<this.trail.length;r++){let i=this.trail[r];e.globalAlpha=(r+1)/this.trail.length*.5,e.fillStyle=n.shot?t.config.teams[n.shot.team].colors.primary:`#b8fbff`,e.fillRect(Math.round(i.x)-1,Math.round(i.y)-1,2,2)}e.globalAlpha=1;let r=Math.round(b(n.x,n.y)),i=Math.round(x(n.y,n.z));if(n.glitchT>0&&(e.globalAlpha=.7,e.fillStyle=`#ff2bd6`,e.fillRect(r-5,i-5,4,4),e.fillStyle=`#00f0ff`,e.fillRect(r+2,i-3,4,4),e.globalAlpha=1),Ft(t,0,`zerog`)||Ft(t,1,`zerog`)||Tt(t.boss)<1){e.fillStyle=`#d9c2ff`;for(let t=0;t<8;t++)e.fillRect(Math.round(r+Math.cos(t*.785)*6),Math.round(i-3+Math.sin(t*.785)*6),1,1)}e.drawImage(this.ballSprite,r-3,i-6)}drawPenaltyAim(e,t){let n=this.match.penalties;if(!n||n.sub!==`aim`)return;let r=this.match.players[n.shooter];if(!r.human)return;let i=p+n.aim*22,a=b(s.L,i)-4,o=x(i,10);Math.floor(t*6)%2||(e.fillStyle=An[r.human],e.fillRect(Math.round(a)-3,Math.round(o),7,1),e.fillRect(Math.round(a),Math.round(o)-3,1,7))}};ot(),_(),ln();var Nn=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Pn=253,Fn=262,In=64,Ln=24;function Rn(e){let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function zn(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}var Bn=class{font;data;bg;crowd=[];signs=[];goalDrawables=[];constructor(e,t,n){this.font=e,this.data=t,this.bg=document.createElement(`canvas`),this.bg.width=480,this.bg.height=270;let r=this.bg.getContext(`2d`),i=new at(1337);this.paintSky(r,i),this.paintCity(r,i),this.paintField(r),this.paintFarFence(r),this.paintGoalBacks(r),this.buildCrowd(i,n),this.buildGoalFronts()}drawBackground(e,t,n=0){e.drawImage(this.bg,0,0);let r=Math.floor(t*(n>0?8:2.5))%2;if(e.drawImage(this.crowd[r],0,In),this.data.theme===`factory`)for(let[n,r]of[[27,6],[201,10],[409,4]])for(let i=0;i<4;i++){let a=(t*.25+i/4)%1,o=2+Math.round(a*6);e.fillStyle=`rgba(90,70,80,${.5*(1-a)})`,e.fillRect(Math.round(n+a*18-o),Math.round(r-4-a*20-o),o*2,o*2)}for(let n of this.signs)Math.sin(t*1.7+n.phase*13.1)+Math.sin(t*7.3+n.phase*3.7)*.4>1.25&&(e.fillStyle=`rgba(8,4,16,0.75)`,e.fillRect(n.x,n.y,n.w,n.h))}paintSky(e,t){let[n,r,i]=this.data.palette.sky.map(Rn),a=e.createImageData(480,96);for(let e=0;e<96;e++){let t=e/95;for(let o=0;o<480;o++){let s=Nn[(e&3)*4+(o&3)]/16,c=t*6,l=Math.floor(c)/6,u=Math.min(1,l+1/6),d=c-Math.floor(c)>s?u:l,f=d<.5?zn(n,r,d*2):zn(r,i,(d-.5)*2),p=(e*480+o)*4;a.data[p]=f[0],a.data[p+1]=f[1],a.data[p+2]=f[2],a.data[p+3]=255}}if(e.putImageData(a,0,0),this.data.theme===`factory`)for(let t=34;t>0;t-=2){e.fillStyle=t>24?`#3a1408`:t>14?`#7a2a08`:`#d2560f`,e.beginPath();for(let n=-t;n<=0;n++){let r=Math.round(Math.sqrt(t*t-n*n));e.fillRect(330-r,62+n,r*2,1)}}else if(this.data.theme===`dome`){for(let t=-6;t<=6;t++){let n=240,r=4;for(let i=1;i<=16;i++){let a=i/16,o=240+t*44*Math.sin(a*Math.PI*.5)*1.1,s=4+a*62;C(e,n,r,o,s,t%2?`#2a1a5a`:`#3d2280`),n=o,r=s}}for(let t of[16,30,46,62])C(e,0,t,480,t,`#241650`);for(let n=0;n<40;n++)e.fillStyle=t.chance(.5)?`#00f0ff`:`#ff2bd6`,e.fillRect(t.int(0,479),t.int(4,60),1,1)}else{for(let n=0;n<60;n++)e.fillStyle=t.chance(.2)?`#ff9de9`:`#cfd8ff`,e.fillRect(t.int(0,479),t.int(22,50),1,1);for(let t=-24;t<=0;t++){if(t>-10&&(t+40)%4==0)continue;let n=Math.round(Math.sqrt(576-t*t)),r=(t+24)/24;e.fillStyle=r<.35?`#ffd23f`:r<.7?`#ff7a59`:`#ff2bd6`,e.fillRect(352-n,54+t,n*2,1)}}}paintCity(e,t){if(this.data.theme===`factory`){this.paintFactory(e,t);return}if(this.data.theme===`dome`){this.paintDome(e,t);return}let n=this.data.palette,r=[`#00e5ff`,`#ffd23f`,`#ff2bd6`,`#a6ff00`,`#ffffff`],i=-4;for(;i<480;){let a=t.int(14,30),o=t.int(30,54);e.fillStyle=n.buildingFar,e.fillRect(i,o,a,70-o);for(let n=o+3;n<64;n+=4)for(let o=i+2;o<i+a-2;o+=3)t.chance(.28)&&(e.fillStyle=t.pick(r),e.globalAlpha=.55,e.fillRect(o,n,1,2),e.globalAlpha=1);t.chance(.3)&&(e.fillStyle=`#ff2b4a`,e.fillRect(i+(a>>1),o-3,1,3)),i+=a+t.int(0,3)}for(let i of[{x:0,w:46,top:24},{x:46,w:30,top:38},{x:150,w:40,top:44},{x:300,w:36,top:40},{x:410,w:34,top:30},{x:444,w:36,top:20}]){e.fillStyle=n.buildingNear,e.fillRect(i.x,i.top,i.w,70-i.top),e.fillStyle=`#1e1338`,e.fillRect(i.x,i.top,i.w,1);for(let n=i.top+4;n<62;n+=5)for(let a=i.x+3;a<i.x+i.w-3;a+=4)t.chance(.35)&&(e.fillStyle=t.pick(r),e.globalAlpha=.8,e.fillRect(a,n,2,2),e.globalAlpha=1)}let a=this.data.signs;this.neonSign(e,a[0]??`NEON`,6,28,`#ff2bd6`,!0),this.neonSign(e,a[1]??`COLA`,152,47,`#00e5ff`,!1),this.neonSign(e,a[2]??`RAMEN`,302,44,`#ffd23f`,!1),this.neonSign(e,a[3]??`SYNTH`,448,24,`#a6ff00`,!0),this.neonSign(e,a[4]??`BAR`,50,42,`#ff7a59`,!1)}paintDome(e,t){let n=this.data.palette;for(let t of[0,96,190,284,378,468])e.fillStyle=n.buildingNear,e.fillRect(t,20,12,50),e.fillStyle=`#3d2280`,e.fillRect(t,20,1,50),e.fillRect(t+11,20,1,50);for(let[n,r]of[[16,74],[112,72],[300,72],[394,70]]){e.fillStyle=`#05030c`,e.fillRect(n,30,r,30);for(let i=32;i<58;i+=2)for(let a=n+2;a<n+r-2;a+=3)t.chance(.25)&&(e.fillStyle=t.pick([`#00f0ff`,`#ff2bd6`,`#8a3dff`,`#c2f5ff`]),e.globalAlpha=.5,e.fillRect(a,i,t.int(1,3),1),e.globalAlpha=1)}let r=this.data.signs;this.neonSign(e,r[0]??`GLITCH`,20,36,`#ff2bd6`,!1),this.neonSign(e,r[1]??`404`,116,40,`#00f0ff`,!1),this.neonSign(e,r[2]??`NULL`,314,36,`#c2f5ff`,!1),this.neonSign(e,r[3]??`SYS`,410,42,`#b14dff`,!1),this.neonSign(e,r[4]??`DOME`,214,26,`#00f0ff`,!1)}paintFactory(e,t){let n=this.data.palette;for(let r=-10;r<480;r+=34){let i=t.int(40,52);e.fillStyle=n.buildingFar,e.fillRect(r,i,32,70-i);for(let t=0;t<4;t++)for(let n=0;n<6;n++)e.fillRect(r+t*8+n,i-6+n,8-n,1);for(let n=r+3;n<r+30;n+=5)t.chance(.5)&&(e.fillStyle=t.chance(.7)?`#ffb000`:`#ff5a1f`,e.globalAlpha=.6,e.fillRect(n,i+4,3,2),e.globalAlpha=1)}for(let[t,r,i]of[[22,6,10],[74,16,8],[196,10,9],[276,20,7],[404,4,11],[452,14,8]]){e.fillStyle=n.buildingNear,e.fillRect(t,r,i,70-r),e.fillStyle=`#5a2210`;for(let n=r+6;n<60;n+=14)e.fillRect(t,n,i,3);e.fillStyle=`#ff2b4a`,e.fillRect(t+(i>>1),r-2,2,2)}for(let t of[120,350]){e.fillStyle=n.buildingNear;for(let n=-18;n<=0;n++){let r=Math.round(Math.sqrt(324-n*n));e.fillRect(t-r,66+n,r*2,1)}e.fillRect(t-18,66,36,4),e.fillStyle=`#ffb000`,e.fillRect(t-18+2,60,32,1)}e.fillStyle=`#3a2418`,e.fillRect(0,56,480,3),e.fillStyle=`#6a3a1c`,e.fillRect(0,56,480,1);let r=this.data.signs;this.neonSign(e,r[0]??`VOLT`,6,24,`#ffb000`,!0),this.neonSign(e,r[1]??`PELIGRO`,146,36,`#ff5a1f`,!1),this.neonSign(e,r[2]??`AMP`,296,38,`#ffe27a`,!1),this.neonSign(e,r[3]??`AMP`,462,26,`#a6ff00`,!0),this.neonSign(e,r[4]??`9`,230,30,`#00e5ff`,!1)}neonSign(e,t,n,r,i,a){let o=a?[...t]:[t],s=a?9:this.font.measure(t)+6,c=a?o.length*8+3:12,l=a?s:Math.min(s,70);e.fillStyle=`#07040e`,e.fillRect(n,r,l,c),e.strokeStyle=i,e.globalAlpha=.35,e.fillStyle=i,e.fillRect(n-1,r-1,l+2,1),e.fillRect(n-1,r+c,l+2,1),e.globalAlpha=1,o.forEach((t,o)=>{let s=a?n+2:n+3,c=a?r+2+o*8:r+3;this.font.draw(e,t,s,c,i,{outline:null,shadow:null})}),this.signs.push({x:n-1,y:r-1,w:l+2,h:c+2,phase:n*.37+r})}paintField(e){let t=this.data.palette,n=Rn(t.grassA),r=Rn(t.grassB),i=Rn(t.line),a=Rn(t.glow),o=[16,11,26],c=[22,11,37],l=Rn(t.nearRail),u=this.data.theme===`factory`,d=this.data.theme===`dome`,f=this.barrierTracks,p=e.createImageData(480,180),m=s.L,h=s.W;for(let e=90;e<270;e++)for(let t=0;t<480;t++){let{x:s,y:g}=S(t+.5,e+.5),_=null,b=((t*73856093^e*19349663)>>>0)%7;if(g<0)_=null;else if(e>=Pn)e<Fn?(_=e===Pn?l:e===254?zn(c,l,.45):c,e>255&&t%24==0&&(_=zn(c,l,.25)),u&&e>254&&(t+e>>2)%3==0&&(_=[60,38,8])):_=[8,5,14];else if(g>h)_=zn(o,l,.06);else if(s<0||s>m)_=[o[0]+b,o[1]+b,o[2]+b];else{let o=y(g),c=Math.floor(s/40)%2==0?n:r,l=.82+g/h*.18,p=[c[0]*l+b-3,c[1]*l+b-3,c[2]*l+b-3];if(u){Math.min(s%40*o,(40-s%40)*o,g%40*v.yScale,(40-g%40)*v.yScale)<.6&&(p=[p[0]*.7,p[1]*.7,p[2]*.7]);let n=this.sectorEdge(s,g,o);n<1.1?p=(t+e>>2)%2?[255,176,0]:[40,26,10]:n<2.2&&(p=zn(p,[255,120,20],.25))}d&&(Math.min(s%20*o,(20-s%20)*o,g%20*v.yScale,(20-g%20)*v.yScale)<.5&&(p=zn(p,[90,60,200],.35)),this.rectEdge(s,g,o,f)<1&&(p=(t+e>>1)%3==0?[255,43,214]:zn(p,[255,43,214],.3)));let m=this.lineDistance(s,g,o);m<.6?p=i:m<1.7&&(p=zn(p,a,.42*(1-(m-.6)/1.1))),_=p}if(!_)continue;let x=((e-90)*480+t)*4;p.data[x]=_[0],p.data[x+1]=_[1],p.data[x+2]=_[2],p.data[x+3]=255}let g=document.createElement(`canvas`);g.width=480,g.height=180,g.getContext(`2d`).putImageData(p,0,0),e.drawImage(g,0,90),this.font.draw(e,`NEON LEAGUE`,60,255,`#ff2bd6`),this.font.draw(e,`NEON LEAGUE`,360,255,`#00e5ff`),this.font.draw(e,`* ${this.data.name} *`,240,255,`#ffd23f`,{align:`center`})}get barrierTracks(){let e=this.data.hazard;return!e||e.kind!==`barriers`?[]:e.sectors.flatMap(e=>(e.barriers??[]).map(on))}rectEdge(e,t,n,r){let i=1/0;for(let a of r)t>=a.y0&&t<=a.y1&&(i=Math.min(i,Math.abs(e-a.x0)*n,Math.abs(e-a.x1)*n)),e>=a.x0&&e<=a.x1&&(i=Math.min(i,Math.abs(t-a.y0)*v.yScale,Math.abs(t-a.y1)*v.yScale));return i}sectorEdge(e,t,n){let r=this.data.hazard;if(!r)return 1/0;let i=1/0;for(let a of r.sectors)for(let r of a.rects)t>=r.y0&&t<=r.y1&&(i=Math.min(i,Math.abs(e-r.x0)*n,Math.abs(e-r.x1)*n)),e>=r.x0&&e<=r.x1&&(i=Math.min(i,Math.abs(t-r.y0)*v.yScale,Math.abs(t-r.y1)*v.yScale));return i}lineDistance(e,t,n){let r=s.L,i=s.W,a=v.yScale,o=1/0,c=(r,i,a)=>{t>=i-.5&&t<=a+.5&&(o=Math.min(o,Math.abs(e-r)*n))},l=(n,r,i)=>{e>=r-.5&&e<=i+.5&&(o=Math.min(o,Math.abs(t-n)*a))};c(.6,0,i),c(r-.6,0,i),l(.6,0,r),l(i-.6,0,r),c(r/2,0,i);for(let u of[0,1]){let d=u===0?s.boxDepth:r-s.boxDepth,f=u===0?s.smallBoxDepth:r-s.smallBoxDepth,p=u===0?0:d,m=u===0?d:r,h=u===0?0:f,g=u===0?f:r;c(d,s.boxTop,s.boxBottom),l(s.boxTop,p,m),l(s.boxBottom,p,m),c(f,s.smallBoxTop,s.smallBoxBottom),l(s.smallBoxTop,h,g),l(s.smallBoxBottom,h,g);let _=u===0?s.penaltySpot:r-s.penaltySpot;o=Math.min(o,Math.hypot((e-_)*n,(t-i/2)*a)-.6)}return o=Math.min(o,Math.abs(Math.hypot(e-r/2,t-i/2)-s.centerRadius)*.82),o=Math.min(o,Math.hypot((e-r/2)*n,(t-i/2)*a)-.8),Math.max(0,o)}paintFarFence(e){let t=this.data.palette.farRail;e.fillStyle=`#0b0716`,e.fillRect(0,88,480,8),e.fillStyle=t,e.fillRect(0,89,480,1),e.globalAlpha=.35,e.fillRect(0,88,480,1),e.fillRect(0,90,480,1),e.globalAlpha=1;for(let t=4;t<480;t+=20)e.fillStyle=`#2a1d48`,e.fillRect(t,90,2,6);e.fillStyle=`#100820`,e.fillRect(0,62,480,2),e.fillStyle=`#ff2bd6`,e.globalAlpha=.5,e.fillRect(0,62,480,1),e.globalAlpha=1}buildCrowd(e,t){let n=[...t,`#00e5ff`,`#ff2bd6`,`#ffd23f`,`#a6ff00`,`#f5f5f5`,`#9b6bff`],r=[];for(let t=0;t<4;t++)for(let i=t%2*3;i<480;i+=6)e.chance(.12)||r.push({x:i+e.int(0,1),y:3+t*5,c:e.pick(n),skin:e.pick([`#f2c7a5`,`#a8694a`,`#6e4630`,`#d79b6e`]),arm:e.chance(.3)});for(let e=0;e<2;e++){let t=document.createElement(`canvas`);t.width=480,t.height=Ln;let n=t.getContext(`2d`);n.fillStyle=`#150b26`,n.fillRect(0,0,480,Ln);for(let e=0;e<4;e++)n.fillStyle=e%2?`#1b0f30`:`#170c2a`,n.fillRect(0,7+e*5,480,1);for(let t of r){let r=e===1&&(t.x*7+t.y)%3==0?-1:0;n.fillStyle=t.c,n.fillRect(t.x,t.y+2+r,3,3),n.fillStyle=t.skin,n.fillRect(t.x+1,t.y+r,2,2),t.arm&&e===1&&(n.fillStyle=t.skin,n.fillRect(t.x+3,t.y-2+r,1,3))}this.crowd.push(t)}}paintGoalBacks(e){let t=`rgba(190,170,255,0.38)`;for(let n of[0,1]){let r=n===0?0:s.L,i=n===0?-s.goalDepth:s.L+s.goalDepth,a=s.goalTop,o=s.goalBottom,c=s.crossbar;for(let n=a;n<=o;n+=6)C(e,b(i,n),x(n,0),b(i,n),x(n,18),t);for(let n=0;n<=18;n+=4)C(e,b(i,a),x(a,n),b(i,o),x(o,n),t);for(let n=0;n<=3;n++){let o=r+(i-r)*(n/3),s=c+(18-c)*(n/3);C(e,b(o,a),x(a,0),b(o,a),x(a,s),t)}for(let n=4;n<=c;n+=5)C(e,b(r,a),x(a,n),b(i,a),x(a,Math.min(n,18)),t);for(let n=a;n<=o;n+=10)C(e,b(r,n),x(n,c),b(i,n),x(n,18),t);C(e,b(i,a),x(a,0),b(i,a),x(a,18),`#8d84b0`),C(e,b(i,o),x(o,0),b(i,o),x(o,18),`#8d84b0`),C(e,b(i,a),x(a,18),b(i,o),x(o,18),`#8d84b0`)}}buildGoalFronts(){for(let e of[0,1]){let t=e===0?0:s.L,n=e===0?-s.goalDepth:s.L+s.goalDepth,r=s.goalTop,i=s.goalBottom,a=s.crossbar,o=e===0?`#00e5ff`:`#ff2bd6`,c=(e,n)=>{let r=b(t,n);C(e,r-1,x(n,0),r-1,x(n,a),o),C(e,r,x(n,0),r,x(n,a),`#ffffff`)};this.goalDrawables.push({y:r,draw:e=>c(e,r)}),this.goalDrawables.push({y:i+.5,draw:e=>{let s=`rgba(210,195,255,0.45)`;for(let r=1;r<=3;r++){let o=t+(n-t)*(r/3),c=a+(18-a)*(r/3);C(e,b(o,i),x(i,0),b(o,i),x(i,c),s)}for(let r=4;r<=a;r+=5)C(e,b(t,i),x(i,r),b(n,i),x(i,Math.min(r,18)),s);c(e,i),C(e,b(t,r),x(r,a)-1,b(t,i),x(i,a)-1,o),C(e,b(t,r),x(r,a),b(t,i),x(i,a),`#ffffff`)}})}}},Vn=class{capacity;items;start=0;count=0;constructor(e){if(this.capacity=e,e<=0)throw Error(`RingBuffer capacity must be > 0`);this.items=Array(e)}get size(){return this.count}push(e){let t=(this.start+this.count)%this.capacity;this.items[t]=e,this.count<this.capacity?this.count++:this.start=(this.start+1)%this.capacity}get(e){if(!(e<0||e>=this.count))return this.items[(this.start+e)%this.capacity]}last(){return this.get(this.count-1)}toArray(){let e=[];for(let t=0;t<this.count;t++)e.push(this.items[(this.start+t)%this.capacity]);return e}filter(e){let t=[];for(let n=0;n<this.count;n++){let r=this.items[(this.start+n)%this.capacity];e(r)&&t.push(r)}return t}clear(){this.items=Array(this.capacity),this.start=0,this.count=0}},Hn=n((()=>{}));Hn();function Un(e,t,n=0){switch(t.type){case`goal`:{let e=100;return t.ownGoal&&(e+=60),t.distance>300?e+=50:t.distance>200&&(e+=30),e+=t.deflections*18+t.wallBounces*12,t.postIn&&(e+=35),t.lofted&&(e+=12),t.golden&&(e+=40),t.special&&(e+=25),e}case`save`:return 55+Math.max(0,(t.speed-220)/4)+(t.dive?25:0)+(t.caught?0:10);case`post`:return 50+(t.crossbar?10:0);case`nearMiss`:return 30+Math.max(0,14-t.margin)*2;case`collision`:return 22+Math.min(20,t.speed/20);case`tackle`:return 18;case`zap`:return t.player>=0?32+(t.dropped?10:0):0;case`wall`:case`deflect`:return e===`chaos`?30+n*8:0;default:return 0}}function Wn(e,t){return Math.max(0,Math.min(e.end,t.end)-Math.max(e.start,t.start))/Math.max(1e-6,Math.min(e.end-e.start,t.end-t.start))}function Gn(e,t=2,n=.35){let r=[...e].sort((e,t)=>t.score-e.score||e.eventTime-t.eventTime),i=[];for(let e of r)if(!(e.frames.length<2)&&!i.some(t=>Wn(t,e)>n||t.kind===e.kind&&t.actor===e.actor&&Math.abs(t.eventTime-e.eventTime)<1.5)&&(i.push(e),i.length>=t))break;return i.sort((e,t)=>e.eventTime-t.eventTime)}vn();var Kn=10,qn={goal:[3.4,2.2],save:[3,1.5],post:[3,1.3],nearMiss:[3,1.2],chaos:[3.2,1],collision:[2.4,1.4],tackle:[2.4,1.2],zap:[2.6,1.6],tail:[5,0]},Jn=class{buffer=new Vn(270);recent=new Vn(300);pending=[];accum=1;nextId=1;moments=[];sample(e,t){if(this.accum+=t,this.accum>=1/30-1e-6&&(this.accum=0,this.buffer.push(this.capture(e))),this.pending.length){for(let t of this.pending.filter(t=>e.simTime>=t.due))this.finalize(t);this.pending=this.pending.filter(t=>e.simTime<t.due)}}capture(e){let t=Array(e.players.length*6);for(let n of e.players){let e=n.id*6;t[e]=n.x,t[e+1]=n.y,t[e+2]=n.z,t[e+3]=n.fx,t[e+4]=n.fy,t[e+5]=gn.indexOf(n.anim)}let n=e.ball;return{t:e.simTime,bx:n.x,by:n.y,bz:n.z,bvx:n.vx,bvy:n.vy,owner:n.owner?n.owner.id:-1,hz:e.hazard.phase===`calm`?-1:e.hazard.sector*2+ +(e.hazard.phase===`active`),ht:e.hazard.activeT,p:t}}onEvent(e,t){this.recent.push(e);let n=null,r=0;switch(e.type){case`goal`:n=`goal`;break;case`save`:n=`save`;break;case`post`:n=`post`;break;case`nearMiss`:n=`nearMiss`;break;case`collision`:t.phase===`play`&&(n=`collision`);break;case`tackle`:n=`tackle`;break;case`zap`:e.player>=0&&(n=`zap`);break;case`wall`:case`deflect`:{let t=this.recent.filter(t=>t.t>e.t-2.5),i=t.reduce((e,t)=>t.type===`kick`||t.type===`possession`?t.t:e,-1/0);r=t.filter(e=>(e.type===`wall`||e.type===`deflect`)&&e.t>i).length,r===3&&(n=`chaos`);break}}if(!n||t.phase===`penalties`||this.pending.some(t=>t.kind===n&&Math.abs(t.event.t-e.t)<.8))return;let[i,a]=qn[n],o=t.overtime?t.config.overtime-t.clock:t.config.duration-t.clock;this.pending.push({kind:n,event:e,start:e.t-i,due:e.t+a,score:Un(n,e,r),chain:r,clock:o})}flush(){for(let e of this.pending)this.finalize(e);this.pending=[]}finalize(e){let t=this.buffer.filter(t=>t.t>=e.start&&t.t<=e.due+1e-6);if(t.length<6)return;let n=this.recent.filter(t=>t.t>=e.start&&t.t<=e.due),r=Yn(e.kind,e.event,e.chain),i={id:this.nextId++,kind:e.kind,title:r.title,subtitle:r.prefix??``,score:e.score,eventTime:e.event.t,start:t[0].t,end:t[t.length-1].t,frames:t,events:n,actor:r.actor,secondary:r.secondary,team:r.team,clock:e.clock};this.moments.push(i),this.moments.length>Kn&&(this.moments.sort((e,t)=>t.score-e.score),this.moments.length=Kn)}tailMoment(){let e=this.buffer.toArray();if(e.length<10)return null;let t=e[e.length-1].t,n=e.filter(e=>e.t>=t-5);return{id:this.nextId++,kind:`tail`,title:`ULTIMOS SEGUNDOS`,subtitle:``,score:1,eventTime:n[Math.floor(n.length*.6)].t,start:n[0].t,end:t,frames:n,events:this.recent.filter(e=>e.t>=n[0].t),actor:n[n.length-1].owner,secondary:-1,team:null,clock:0}}lastFrame(){return this.buffer.last()??null}};function Yn(e,t,n){switch(t.type){case`goal`:{let e=`GOLAZO`;return t.ownGoal?e=`AUTOGOL ABSURDO`:t.golden?e=`GOL DE ORO`:t.distance>280?e=`MISIL DESDE LEJOS`:t.deflections+t.wallBounces>=2?e=`GOL DE RICOCHET`:t.postIn?e=`GOL POR EL PALO`:t.special?e=`GOL GLITCH`:t.lofted&&(e=`GOL POR ARRIBA`),{title:e,actor:t.scorer,secondary:-1,team:t.team,prefix:t.ownGoal?`AUTOGOL DE`:void 0}}case`save`:return{title:t.dive?`ATAJADA ESPECTACULAR`:`ATAJADA SEGURA`,actor:t.keeper,secondary:t.shooter,team:t.team};case`post`:return{title:t.crossbar?`AL LARGUERO`:`AL PALO`,actor:t.shooter,secondary:-1,team:t.team};case`nearMiss`:return{title:`POR UN PELO`,actor:t.shooter,secondary:-1,team:t.team};case`collision`:return{title:`CHOQUE BRUTAL`,actor:t.b,secondary:t.a,team:null};case`tackle`:return{title:`ROBO LIMPIO`,actor:t.tackler,secondary:t.victim,team:t.team};case`zap`:return{title:`ELECTROCUTADO`,actor:t.player,secondary:-1,team:null};case`wall`:case`deflect`:return{title:`PINBALL x${n}`,actor:t.type===`deflect`?t.player:-1,secondary:-1,team:null};default:return{title:e.toUpperCase(),actor:-1,secondary:-1,team:null}}}var Xn=null;function Zn(e){let t=document.createElement(`canvas`);return t.width=480,t.height=270,t.getContext(`2d`).drawImage(e,0,0),t}function Qn(e,t,n,r){let i=Math.max(1,Math.round(1+n*11));Xn||=document.createElement(`canvas`);let a=Math.ceil(480/i),o=Math.ceil(270/i);Xn.width=a,Xn.height=o;let s=Xn.getContext(`2d`);s.imageSmoothingEnabled=!1,s.drawImage(t,0,0,a,o),e.imageSmoothingEnabled=!1,e.fillStyle=`#05030b`,e.fillRect(0,0,480,270);for(let t=0;t<270;t+=6){let o=Math.sin(t*12.9898+Math.floor(r*20)*78.233)*43758.5453,s=o-Math.floor(o),c=s<n*.6?Math.round((s-.5)*60*n):0;e.drawImage(Xn,0,t/i,a,6/i,c,t,480,6)}n>.05&&(e.globalCompositeOperation=`lighter`,e.globalAlpha=.35*n,e.drawImage(Xn,0,0,a,o,Math.round(4*n),0,480,270),e.globalAlpha=1,e.globalCompositeOperation=`source-over`,e.fillStyle=`rgba(255,43,214,${.18*n})`,e.fillRect(0,0,480,270));let c=Math.round(r*300%310-20);e.fillStyle=`rgba(0,240,255,${.5*n})`,e.fillRect(0,c,480,2)}var $n=15,er=null;function tr(){if(!er){let e=Math.ceil(480/$n),t=Math.ceil(270/$n),n=e*t,r=Array.from({length:n},(e,t)=>t),i=e/2,a=t/2,o=r.map(t=>{let n=t%e,r=Math.floor(t/e),o=Math.sin(t*91.7)*1e3;return Math.hypot(n-i,(r-a)*1.6)/e+(o-Math.floor(o))*.6});r.sort((e,t)=>o[e]-o[t]),er=r}return er}function nr(e,t,n){let r=tr(),i=Math.ceil(480/$n),a=Math.floor(Math.max(0,Math.min(1,n))*r.length);typeof t==`string`&&(e.fillStyle=t);for(let n=a;n<r.length;n++){let a=r[n],o=a%i*$n,s=Math.floor(a/i)*$n;typeof t==`string`?e.fillRect(o,s,$n,$n):e.drawImage(t,o,s,$n,$n,o,s,$n,$n)}}var rr=class{app;backdrop=new Je;menu;constructor(e){this.app=e;let t=()=>this.app.save.data.options,n=()=>{this.app.applyOptions(),this.app.persist()},r=(e,r)=>{t()[e]=Math.round(Math.min(1,Math.max(0,t()[e]+r))*10)/10,n(),e===`sfxVolume`&&this.app.audio.play(`pass`)},i=e=>{t()[e]=!t()[e],n()},a=e=>`${Math.round(e*100)}%`,o=e=>e?`SI`:`NO`,s=e=>{let r=je.indexOf(t().difficulty);t().difficulty=je[(r+e+3)%3],n()};this.menu=new Ze([{label:`MUSICA`,value:()=>a(t().musicVolume),onLeft:()=>r(`musicVolume`,-.1),onRight:()=>r(`musicVolume`,.1)},{label:`EFECTOS`,value:()=>a(t().sfxVolume),onLeft:()=>r(`sfxVolume`,-.1),onRight:()=>r(`sfxVolume`,.1)},{label:`PANTALLA COMPLETA`,value:()=>this.app.display.fullscreenAvailable?o(this.app.display.isFullscreen):`NO DISPONIBLE`,onConfirm:()=>{this.app.display.toggleFullscreen().then(e=>{e||this.app.toast(`PANTALLA COMPLETA NO DISPONIBLE`)})}},{label:`ESCALADO ENTERO (NITIDO)`,value:()=>o(t().pixelPerfect),onLeft:()=>i(`pixelPerfect`),onRight:()=>i(`pixelPerfect`)},{label:`SCANLINES CRT`,value:()=>o(t().scanlines),onLeft:()=>i(`scanlines`),onRight:()=>i(`scanlines`)},{label:`TEMBLOR DE PANTALLA`,value:()=>o(t().screenShake),onLeft:()=>i(`screenShake`),onRight:()=>i(`screenShake`)},{label:`DIFICULTAD POR DEFECTO`,value:()=>Ae[t().difficulty].label,onLeft:()=>s(-1),onRight:()=>s(1)},{label:`INTERCAMBIAR MANDOS P1/P2`,value:()=>o(t().swapPads),onLeft:()=>i(`swapPads`),onRight:()=>i(`swapPads`)},{label:`CONTROLES`,onConfirm:()=>this.app.goTo(new or(this.app))},{label:`VOLVER`,onConfirm:()=>this.app.goTo(new Nm(this.app))}],90,40,300,19)}update(){this.menu.update(this.app)&&(this.app.audio.play(`uiBack`),this.app.goTo(new Nm(this.app)))}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.65)`,e.fillRect(0,0,480,270),$e(e,n,`OPCIONES`,10),this.menu.render(e,n,t),this.app.save.lastError&&n.draw(e,`AVISO: EL NAVEGADOR NO PERMITE GUARDAR`,240,236,V.orange,{align:`center`}),Qe(e,n,`← →: CAMBIAR · ENTER: ACEPTAR · ESC: VOLVER · SE GUARDA AUTOMATICAMENTE`)}},ir={up:`ARRIBA`,down:`ABAJO`,left:`IZQUIERDA`,right:`DERECHA`,shoot:`DISPARO`,pass:`PASE`,switch:`CAMBIAR JUG.`,special:`ESPECIAL`};function ar(e,t=!1){let n=De,r=(e,t)=>[e,`MOVER ${n(t.up)} ${n(t.left)} ${n(t.down)} ${n(t.right)}`,`TIRO ${n(t.shoot)} (MANTENER=FUERZA)`,`PASE ${n(t.pass)} · CAMBIO ${n(t.switch)}`,`ESPECIAL ${n(t.special)} (BARRA LLENA)`];return[...r(t?`JUGADOR 1 (ESQUEMA A)`:`JUGADOR 1`,e.p1),...r(t?`JUGADOR 1 (ESQUEMA B)`:`JUGADOR 2`,e.p2),`MANDO: A TIRO · X PASE · LB CAMBIO`,`MANDO: RB ESPECIAL · START PAUSA`,`SIN BALON TIRO=BARRIDA · ↑↓ APUNTA`]}var or=class{app;backdrop=new Je;row=0;col=0;waiting=!1;msg=``;msgT=0;constructor(e){this.app=e}get rows(){return de.length+2}exit(){this.app.input.capture=null}update(e){if(this.msgT=Math.max(0,this.msgT-e),this.waiting)return;let t=this.app.input.nav(`any`);if(t.up&&(this.row=(this.row-1+this.rows)%this.rows,this.app.audio.play(`uiMove`)),t.down&&(this.row=(this.row+1)%this.rows,this.app.audio.play(`uiMove`)),(t.left||t.right)&&this.row<de.length&&(this.col=+(this.col===0),this.app.audio.play(`uiMove`)),t.back)this.app.audio.play(`uiBack`),this.app.goTo(new rr(this.app));else if(t.confirm){if(this.app.audio.play(`uiOk`),this.row===de.length)this.app.save.data.bindings={p1:{...pe.p1},p2:{...pe.p2}},this.app.applyOptions(),this.app.persist(),this.flash(`CONTROLES RESTABLECIDOS`);else if(this.row===de.length+1)this.app.goTo(new rr(this.app));else{this.waiting=!0;let e=de[this.row],t=this.col===0?`p1`:`p2`;this.app.input.capture=n=>{this.waiting=!1,n===`Escape`?this.flash(`CANCELADO`):this.assign(t,e,n)}}}}assign(e,t,n){let r=this.app.save.data.bindings,i=r[e][t];for(let a of[`p1`,`p2`])for(let o of de)r[a][o]===n&&(a!==e||o!==t)&&(r[a][o]=i,this.flash(`INTERCAMBIADA CON ${a.toUpperCase()} ${ir[o]}`));r[e][t]=n,this.app.applyOptions(),this.app.persist(),this.msgT||this.flash(`${ir[t]} = ${De(n)}`)}flash(e){this.msg=e,this.msgT=2}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.7)`,e.fillRect(0,0,480,270),$e(e,n,`CONTROLES`,8);let r=this.app.save.data.bindings;n.draw(e,`JUGADOR 1`,250,32,V.cyan,{align:`center`}),n.draw(e,`JUGADOR 2`,370,32,V.magenta,{align:`center`}),de.forEach((i,a)=>{let o=44+a*15;n.draw(e,ir[i],70,o+3,V.white);for(let s of[0,1]){let c=this.row===a&&this.col===s,l=s===0?250:370;c&&qe(e,l-50,o,100,13,this.waiting?V.yellow:V.cyan,V.panel2);let u=c&&this.waiting?Math.floor(t*4)%2?`PULSA TECLA`:``:De((s===0?r.p1:r.p2)[i]);n.draw(e,u,l,o+3,c?V.white:`#b9acd9`,{align:`center`})}}),[`RESTABLECER`,`VOLVER`].forEach((t,r)=>{let i=176+r*16,a=this.row===de.length+r;a&&qe(e,180,i,120,13,V.cyan,V.panel2),n.draw(e,t,240,i+3,a?V.white:`#b9acd9`,{align:`center`})}),n.draw(e,`MANDO: STICK/CRUCETA MOVER · A TIRO · X PASE · LB/Y CAMBIO · START PAUSA`,240,214,V.dim,{align:`center`}),n.draw(e,`AVISO: ALGUNOS TECLADOS NO REGISTRAN MUCHAS TECLAS A LA VEZ.`,240,226,V.orange,{align:`center`}),n.draw(e,`EN 2 JUGADORES, SI FALLAN, USA UN MANDO PARA UNO DE ELLOS.`,240,236,V.orange,{align:`center`}),this.msgT>0&&n.draw(e,this.msg,240,164,V.acid,{align:`center`}),Qe(e,n,`↑↓ ← →: ELEGIR · ENTER: CAMBIAR TECLA · ESC: VOLVER`)}};oe();var sr=class{font;specialKeys;ruleText;specialBanner=null;constructor(e,t=[`SHIFT`,`SHIFT`],n=null){this.font=e,this.specialKeys=t,this.ruleText=n}onEvent(e,t){if(e.type===`special`){let n=t.config.teams[e.team];this.specialBanner={text:`¡${Mt[e.special].name}!`,color:n.colors.primary,t:0}}}update(e){this.specialBanner&&(this.specialBanner.t+=e,this.specialBanner.t>1.6&&(this.specialBanner=null))}drawEnergy(e,t,n){for(let r of[0,1]){let i=t.specials[r],a=Mt[t.config.teams[r].special],o=t.config.teams[r].colors.primary,s=r===0?20:400;e.fillStyle=`#2a1d48`,e.fillRect(s,16,60,3);let c=i.energy>=1,l=i.active>0?Math.round(60*Math.min(1,i.active/a.duration)):Math.round(60*i.energy);e.fillStyle=i.active>0?V.white:c&&Math.floor(n*6)%2?V.yellow:o,e.fillRect(r===0?s:s+60-l,16,l,3);let u=t.config.humans[r];if(c&&i.active<=0&&u&&t.phase===`play`){let t=`${this.specialKeys[u-1]} ★ LISTO`;Math.floor(n*3)%3&&this.font.draw(e,t,r===0?6:474,25,V.yellow,{align:r===0?`left`:`right`,outline:V.dark})}}}drawBossAlert(e,t,n){let r=t.boss;if(!r||t.phase!==`play`||r.phase===`idle`)return;let i=t.hazard.enabled&&t.hazard.phase!==`calm`?40:24,a=r.phase===`warning`,o=a?`⚠ ${bt(r)} EN ${Math.ceil(r.remaining)} ⚠`:bt(r),s=this.font.measure(o)+16,c=Math.round(240-s/2);for(let t=0;t<s;t+=4)e.fillStyle=(t/4+Math.floor(n*8))%2?`#ff2b4a`:`#1a0608`,e.fillRect(c+t,i,4,2),e.fillRect(c+t,i+12,4,2);e.fillStyle=`rgba(24,6,10,0.92)`,e.fillRect(c,i+2,s,10),(!a||Math.floor(n*4)%2==0||r.remaining>1.2)&&this.font.draw(e,o,240,i+4,a?V.yellow:`#ff9db0`,{align:`center`})}drawHazardAlert(e,t,n){let r=t.hazard;if(!r.enabled||r.phase===`calm`||t.phase!==`play`||!r.def)return;let i=r.def.sectors[r.sector]?.label??``,a=r.phase===`warning`,o=r.kind===`barriers`,s=a?`⚠ ${o?`GLITCH`:`ALERTA`}: ${i} EN ${Math.ceil(r.remaining)} ⚠`:o?`▶ BARRERAS ACTIVAS: ${i} ◀`:`⚡ ${i} ELECTRIFICADAS ⚡`.replace(`CIRCULO CENTRAL ELECTRIFICADAS`,`CIRCULO CENTRAL ELECTRIFICADO`),c=this.font.measure(s)+16,l=Math.round(240-c/2);for(let t=0;t<c;t+=4)e.fillStyle=(t/4+Math.floor(n*8))%2?`#ffb000`:`#1a1206`,e.fillRect(l+t,24,4,2),e.fillRect(l+t,36,4,2);e.fillStyle=`rgba(20,10,4,0.9)`,e.fillRect(l,26,c,10),(!a||Math.floor(n*4)%2==0||r.remaining>1.2)&&this.font.draw(e,s,240,28,a?V.yellow:`#7fe9ff`,{align:`center`})}render(e,t,n,r){let i=this.font,[a,o]=t.config.teams;e.fillStyle=`rgba(7,4,14,0.92)`,e.fillRect(0,0,480,21),e.fillStyle=a.colors.primary,e.fillRect(0,21,240,1),e.fillStyle=o.colors.primary,e.fillRect(240,21,240,1),M(e,a,6,6,1),i.draw(e,a.name,20,7,a.colors.primary),M(e,o,465,6,1),i.draw(e,o.name,460,7,o.colors.primary,{align:`right`});for(let n of[0,1]){let s=t.config.humans[n];if(!s)continue;let c=n===0?20+i.measure(a.name)+6:460-i.measure(o.name)-6-i.measure(`P${s}`);if(i.draw(e,`P${s}`,c,7,An[s]),r[s-1]){let t=n===0?c+14:c-10;e.fillStyle=An[s],e.fillRect(t,9,7,3),e.fillRect(t+1,8,5,5)}}e.fillStyle=`#120a24`,e.fillRect(194,0,92,21),e.fillStyle=V.cyan,e.fillRect(194,0,1,21),e.fillRect(285,0,1,21),i.draw(e,String(t.score[0]),210,4,V.white,{scale:2,align:`center`}),i.draw(e,String(t.score[1]),270,4,V.white,{scale:2,align:`center`});let s=t.clock<=10&&t.phase===`play`,c=t.overtime?V.yellow:s&&Math.floor(n*4)%2?V.red:V.acid;if(t.phase===`penalties`&&t.penalties?i.draw(e,`PEN`,240,4,V.yellow,{align:`center`}):i.draw(e,Tn(t.clock),240,4,c,{align:`center`}),t.overtime&&t.phase!==`penalties`&&i.draw(e,`ORO`,240,12,V.yellow,{align:`center`}),t.penalties?this.drawPenaltyTally(e,t):(this.drawEnergy(e,t,n),this.drawHazardAlert(e,t,n),this.drawBossAlert(e,t,n)),this.ruleText&&(e.fillStyle=`rgba(7,4,14,0.9)`,e.fillRect(0,262,480,8),this.font.draw(e,this.ruleText,240,263,V.yellow,{align:`center`})),(t.phase===`play`&&Ot(t.boss)&&Math.floor(n*4)%2||t.phase===`play`&&t.config.mods?.finalDoubleAfter!==void 0&&!t.overtime&&t.clock<=t.config.mods.finalDoubleAfter&&Math.floor(n*4)%2)&&this.font.draw(e,`x2`,290,4,V.yellow,{outline:V.dark}),this.specialBanner&&t.phase===`play`){let t=this.specialBanner,n=44-Math.round(Math.max(0,.15-t.t)*60);(t.t<1.2||Math.floor(t.t*12)%2)&&this.font.draw(e,t.text,240,n,t.color,{scale:2,align:`center`,outline:V.dark})}this.drawBanners(e,t,n)}drawPenaltyTally(e,t){let n=t.penalties;for(let t of[0,1]){let r=n.kicks[t],i=Math.max(3,r.length);for(let n=0;n<i;n++){let i=t===0?186-n*7:290+n*7,a=r[n];e.fillStyle=a===`goal`?V.acid:a?V.red:`#3a2d5c`,e.fillRect(i,25,5,5)}}let r=t.players[n.shooter],i=t.players[n.keeper];n.sub===`aim`&&(r.human?this.font.draw(e,`↑ ↓ APUNTA · DISPARO PARA PATEAR`,240,34,An[r.human],{align:`center`,outline:V.dark}):i.human&&this.font.draw(e,`MANTÉN ↑ O ↓ PARA LANZARTE (NADA = CENTRO)`,240,34,An[i.human],{align:`center`,outline:V.dark}))}banner(e,t,n,r,i,a){let o=this.font.measure(t,i)+24;e.fillStyle=`rgba(7,4,14,0.8)`,e.fillRect(240-o/2,r-6,o,7*i+12+(a?12:0)),e.fillStyle=n,e.fillRect(240-o/2,r-6,o,1),e.fillRect(240-o/2,r+7*i+5+(a?12:0),o,1),this.font.draw(e,t,240,r,n,{scale:i,align:`center`,shadow:V.dark}),a&&this.font.draw(e,a,240,r+7*i+4,V.white,{align:`center`})}drawBanners(e,t,n){if(t.phase===`kickoff`){let n=t.phaseT>Sn.kickoffDelay-.35;t.overtime&&!n?this.banner(e,`GOL DE ORO`,V.yellow,110,3,`EL PRIMERO QUE MARQUE GANA`):this.banner(e,n?`¡YA!`:`LISTOS...`,n?V.acid:V.cyan,118,3)}else if(t.phase===`goal`&&t.lastGoal){let r=t.lastGoal,i=t.config.teams[r.team],a=[i.colors.primary,i.colors.accent,V.white],o=a[Math.floor(n*10)%a.length],s=r.scorer>=0?t.players[r.scorer].name:``,c=r.ownGoal?`AUTOGOL DE ${s}`:`${s} · ${i.name}`,l=Math.round(Math.abs(Math.sin(t.phaseT*6))*-4),u=(t.goals[t.goals.length-1]?.value??1)>1;this.banner(e,r.golden?`¡GOL DE ORO!`:u?`¡GOL DOBLE!`:`¡GOOOL!`,o,104+l,4,c)}else t.phase===`otIntro`?this.banner(e,`¡EMPATE!`,V.yellow,100,3,`PRÓRROGA DE 30 S · GOL DE ORO`):t.phase===`penalties`&&t.penalties?.sub===`setup`&&t.penalties.kicks[0].length+t.penalties.kicks[1].length===0&&this.banner(e,`PENALTIS`,V.magenta,100,3,`TANDA DE 3 · LUEGO MUERTE SÚBITA`)}};oe(),Ue();var cr=class{app;setup;backdrop=new Je;menu;constructor(e,t){this.app=e,this.setup=t;let n=e=>{let t=je.indexOf(this.setup.difficulty);this.setup.difficulty=je[(t+e+je.length)%je.length]},r=e=>{let t=Ve.findIndex(e=>e.id===this.setup.stadiumId);this.setup.stadiumId=Ve[(t+e+Ve.length)%Ve.length].id};this.menu=new Ze([{label:t.mode===`solo`?`DIFICULTAD RIVAL`:`IA DE APOYO`,value:()=>Ae[this.setup.difficulty].label,onLeft:()=>n(-1),onRight:()=>n(1)},{label:`ESTADIO`,value:()=>He(this.setup.stadiumId).name,onLeft:()=>r(-1),onRight:()=>r(1)},{label:`HAZARDS`,value:()=>He(this.setup.stadiumId).hazard?this.setup.hazards?`ACTIVADOS`:`DESACTIVADOS`:`NINGUNO AQUI`,disabled:()=>!He(this.setup.stadiumId).hazard,onLeft:()=>this.setup.hazards=!this.setup.hazards,onRight:()=>this.setup.hazards=!this.setup.hazards},{label:`DURACION`,value:()=>`90 S`,disabled:!0},{label:`¡A JUGAR!`,onConfirm:()=>this.app.goTo(new km(this.app,{...this.setup}))},{label:`VOLVER`,onConfirm:()=>this.back()}],20,88,220,17),this.menu.index=4}back(){this.app.goTo(new ur(this.app,this.setup.mode))}update(){this.menu.update(this.app)&&(this.app.audio.play(`uiBack`),this.back())}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.6)`,e.fillRect(0,0,480,270),$e(e,n,`CONFIGURAR PARTIDO`,8);let[r,i]=this.setup.teams.map(ue);M(e,r,30,38,3),n.draw(e,r.name,62,44,r.colors.primary),n.draw(e,`VS`,62+n.measure(r.name)+10,44,V.yellow);let a=62+n.measure(r.name)+30;M(e,i,a,38,3),n.draw(e,i.name,a+32,44,i.colors.primary),n.draw(e,He(this.setup.stadiumId).description,20,70,V.dim),this.menu.render(e,n,t),qe(e,248,84,226,160,V.magenta),n.draw(e,`CONTROLES`,361,90,V.magenta,{align:`center`}),ar(this.app.save.data.bindings,this.setup.mode===`solo`).forEach((t,r)=>n.draw(e,t,254,102+r*10,t.startsWith(`JUGADOR`)||t.startsWith(`MANDO`)?V.cyan:V.white)),Qe(e,n,`← →: CAMBIAR VALOR · ENTER: ACEPTAR · ESC: VOLVER`)}};oe();var lr=[[`speed`,`VELOCIDAD`],[`power`,`POTENCIA`],[`passing`,`PASE`],[`defense`,`DEFENSA`],[`keeper`,`PORTERO`]],ur=class{app;mode;backdrop=new Je;idx=[0,1];locked=[!1,!1];warn=0;constructor(e,t){this.app=e,this.mode=t;let n=e.save.data.campaign.unlockedTeams;this.teams=P.filter(e=>n.includes(e.id)),this.lockedCount=P.length-this.teams.length,this.teams.length<2&&(this.teams=se.slice())}teams;lockedCount=0;update(e){this.warn=Math.max(0,this.warn-e),this.mode===`solo`?this.updateSolo():this.updateVersus()}cycle(e,t){let n=this.teams.length;this.idx[e]=(this.idx[e]+t+n)%n,this.app.audio.play(`uiMove`)}updateSolo(){let e=this.app.input.nav(`any`),t=+!!this.locked[0];if(e.left&&this.cycle(t,-1),e.right&&this.cycle(t,1),e.confirm){if(t===1&&this.idx[1]===this.idx[0]){this.warn=1.2,this.app.audio.play(`uiBack`);return}this.locked[t]=!0,this.app.audio.play(`uiOk`),t===0&&this.idx[1]===this.idx[0]&&this.cycle(1,1),t===1&&this.proceed()}e.back&&(this.app.audio.play(`uiBack`),this.locked[0]?this.locked[0]=!1:this.app.goTo(new Nm(this.app)))}updateVersus(){for(let e of[1,2]){let t=e-1,n=this.app.input.nav(e);if(this.locked[t])n.back&&(this.locked[t]=!1,this.app.audio.play(`uiBack`));else if(n.left&&this.cycle(t,-1),n.right&&this.cycle(t,1),n.confirm){let e=1-t;this.locked[e]&&this.idx[e]===this.idx[t]?(this.warn=1.2,this.app.audio.play(`uiBack`)):(this.locked[t]=!0,this.app.audio.play(`uiOk`))}}this.app.input.wasPressed(`Escape`)?(this.app.audio.play(`uiBack`),this.app.goTo(new Nm(this.app))):this.locked[0]&&this.locked[1]&&this.proceed()}proceed(){this.app.goTo(new cr(this.app,{mode:this.mode,teams:[this.teams[this.idx[0]].id,this.teams[this.idx[1]].id],difficulty:this.app.save.data.options.difficulty,stadiumId:`neon-alley`,hazards:!0}))}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.55)`,e.fillRect(0,0,480,270),$e(e,n,this.mode===`solo`?`ELIGE EQUIPOS`:`2 JUGADORES · ELIGE EQUIPOS`,8);let r=this.mode===`solo`?[`TU EQUIPO`,`RIVAL (IA)`]:[`JUGADOR 1`,`JUGADOR 2`];for(let n of[0,1]){let i=this.mode===`solo`?n===0?!this.locked[0]:this.locked[0]:!this.locked[n];this.card(e,n===0?10:260,32,this.teams[this.idx[n]],r[n],i,this.locked[n],n,t)}n.draw(e,`VS`,240,120,V.yellow,{scale:3,align:`center`,shadow:V.magenta}),this.warn>0?n.draw(e,`ELIGE UN EQUIPO DISTINTO`,240,236,V.red,{align:`center`,outline:V.dark}):this.lockedCount>0&&n.draw(e,`${this.lockedCount} EQUIPOS BLOQUEADOS: GANALOS EN LA CAMPAÑA`,240,236,V.dim,{align:`center`}),Qe(e,n,this.mode===`solo`?`← → / A D: CAMBIAR · ENTER: CONFIRMAR · ESC: VOLVER`:`P1: A D + ESPACIO (F: VOLVER) · P2: ← → + ENTER (/: VOLVER) · ESC: MENU`)}card(e,t,n,r,i,a,o,s,c){let l=this.app.font,u=o?V.acid:a?this.mode===`versus`?An[s+1]:V.cyan:V.dim;qe(e,t,n,210,196,u),l.draw(e,i,t+105,n+6,u,{align:`center`}),a&&!o&&Math.floor(c*3)%2==0&&(l.draw(e,`◀`,t+6,n+30,V.white),l.draw(e,`▶`,t+199,n+30,V.white)),M(e,r,t+16,n+18,3),l.draw(e,r.name,t+50,n+22,r.colors.primary),l.draw(e,r.style,t+50,n+33,V.yellow);for(let[i,a]of[r.colors.primary,r.colors.secondary,r.colors.accent].entries())e.fillStyle=V.dark,e.fillRect(t+50+i*12,n+43,10,6),e.fillStyle=a,e.fillRect(t+51+i*12,n+44,8,4);let d=this.app.sprites.get(r,3),f=this.app.sprites.get(r,0);e.save(),e.translate(t+168,n+58),e.scale(2,2),d.draw(e,Math.floor(c*10)%4==0?`run0`:Math.floor(c*10)%4==1?`run1`:Math.floor(c*10)%4==2?`run2`:`run3`,0,0,!1),e.restore(),e.save(),e.translate(t+190,n+58),e.scale(2,2),f.draw(e,`idle0`,0,0,!0),e.restore(),lr.forEach(([i,a],o)=>{let s=n+66+o*12;l.draw(e,a,t+10,s,V.white);let c=r.stats[i];for(let n=0;n<5;n++)e.fillStyle=n<c?c>=5?V.acid:c<=2?V.orange:V.cyan:`#2a1d48`,e.fillRect(t+80+n*14,s,12,7)}),l.draw(e,`+ ${r.strength}`,t+10,n+130,V.acid),l.draw(e,`- ${r.weakness}`,t+10,n+141,V.red);let p=Mt[r.special];l.draw(e,`★ ${p.name}`,t+10,n+153,V.yellow),l.wrap(p.description,190).forEach((r,i)=>l.draw(e,r,t+10,n+163+i*9,`#b9acd9`)),o&&l.draw(e,`LISTO`,t+196,n+184,V.acid,{align:`right`})}},dr=[[`NEON LEAGUE`,`h`],[``,``],[`DISEÑO Y DESARROLLO`,`s`],[`PROYECTO DE INGENIERIA WEB`,`n`],[``,``],[`TECNOLOGIA`,`s`],[`TYPESCRIPT · VITE · CANVAS 2D`,`n`],[`THREE.JS PARA NEON REPLAY`,`n`],[`WEB AUDIO API · GAMEPAD API`,`n`],[``,``],[`ARTE`,`s`],[`PIXEL ART Y FUENTE 5X7 GENERADOS POR CODIGO`,`n`],[`MODELOS 3D LOW-POLY CON PRIMITIVAS`,`n`],[``,``],[`SONIDO`,`s`],[`SINTETIZADO EN TIEMPO REAL`,`n`],[``,``],[`LIGA CLANDESTINA PATROCINADA POR`,`s`],[`KAIJU COLA · RAMEN 24H · SYNTH BAR`,`n`],[``,``],[`NINGUN ROBOT FUE DAÑADO`,`n`],[`(ALGUNOS PORTEROS SI)`,`n`],[``,``],[`GRACIAS POR JUGAR`,`h`]],fr=class{app;champion;backdrop=new Je;y=270;constructor(e,t=!1){this.app=e,this.champion=t}update(e){this.y-=e*22,this.y<-dr.length*14-40&&(this.y=270);let t=this.app.input.nav(`any`);(t.back||t.confirm)&&(this.app.audio.play(`uiBack`),this.app.goTo(new Nm(this.app)))}render(e,t){let n=this.app.font;if(this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.6)`,e.fillRect(0,0,480,270),dr.forEach(([r,i],a)=>{let o=Math.round(this.y+a*14);o<-20||o>270||(i===`h`&&r===`NEON LEAGUE`?Ye(e,n,240,o-20,t,2):n.draw(e,r,240,o,i===`h`?V.magenta:i===`s`?V.cyan:V.white,{align:`center`,scale:i===`h`?2:1}))}),this.champion){e.fillStyle=`rgba(7,4,14,0.85)`,e.fillRect(0,0,480,30);let r=[`#ffd23f`,`#ff2bd6`,`#00f0ff`][Math.floor(t*6)%3];n.draw(e,`★ CAMPEONES DEL NEON CIRCUIT ★`,240,8,r,{scale:2,align:`center`})}Qe(e,n,`ESC / ENTER: VOLVER`)}};oe();var pr=class{app;setup;pkg;fromReplay;menu;backdrop=new Je;t=0;recorded=!1;outcome=null;constructor(e,t,n,r){this.app=e,this.setup=t,this.pkg=n,this.fromReplay=r;let i=n.result.winner===0,a=t.campaignRound===void 0?[{label:`REVANCHA`,onConfirm:()=>this.app.goTo(new km(this.app,this.setup))},{label:`CAMBIAR EQUIPOS`,onConfirm:()=>this.app.goTo(new ur(this.app,this.setup.mode))},{label:`MENU PRINCIPAL`,onConfirm:()=>this.app.goTo(new Nm(this.app))}]:i?[{label:`CONTINUAR`,onConfirm:()=>this.continueCampaign()},{label:`VOLVER AL CIRCUITO`,onConfirm:()=>this.app.goTo(new Mm(this.app))},{label:`MENU PRINCIPAL`,onConfirm:()=>this.app.goTo(new Nm(this.app))}]:[{label:`REINTENTAR (GRATIS)`,onConfirm:()=>this.app.goTo(new km(this.app,this.setup))},{label:`VOLVER AL CIRCUITO`,onConfirm:()=>this.app.goTo(new Mm(this.app))},{label:`MENU PRINCIPAL`,onConfirm:()=>this.app.goTo(new Nm(this.app))}];this.menu=new Ze(a,170,212,140,15)}enter(){this.app.audio.setMusic(`menu`);let e=this.pkg.result;if(this.setup.mode===`solo`?this.app.audio.play(e.winner===0?`win`:`lose`):this.app.audio.play(`win`),!this.recorded&&this.setup.mode===`solo`){this.recorded=!0;let t=this.app.save.data.stats;t.played++,e.winner===0?t.wins++:t.losses++,t.goalsFor+=e.score[0],t.goalsAgainst+=e.score[1],this.setup.campaignRound!==void 0&&(this.outcome=Fe(this.app.save.data.campaign,this.setup.campaignRound,e.winner===0)),this.app.persist()}}continueCampaign(){let e=this.setup.campaignRound??0,t=B[e],n=e===B.length-1;this.app.goTo(new tt(this.app,t.win,{player:this.pkg.teams[0],rival:this.pkg.teams[1],title:n?`¡CAMPEONES!`:`RONDA ${e+1} SUPERADA`},()=>n?new fr(this.app,!0):new Mm(this.app)))}update(e){this.t+=e,!(this.fromReplay&&this.t<.6)&&this.menu.update(this.app)&&this.app.goTo(new Nm(this.app))}headline(){let e=this.pkg.result;return this.setup.mode===`versus`?{text:e.winner===null?`EMPATE`:`¡GANA JUGADOR ${e.winner+1}!`,color:e.winner===1?V.magenta:V.cyan}:e.winner===0?{text:`¡VICTORIA!`,color:V.acid}:{text:`DERROTA`,color:V.red}}render(e,t){let n=this.app.font,r=this.pkg.result,[i,a]=this.pkg.teams;this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.7)`,e.fillRect(0,0,480,270);let o=this.headline();n.draw(e,o.text,240,8,o.color,{scale:3,align:`center`,shadow:V.dark});for(let[t,r]of[i,a].entries()){let i=t===0?14:316;qe(e,i,36,150,44,r.colors.primary),M(e,r,i+8,44,3),n.draw(e,r.name,i+44,46,r.colors.primary),n.draw(e,this.setup.mode===`versus`?`JUGADOR ${t+1}`:t===0?`TU EQUIPO`:`RIVAL IA`,i+44,58,V.dim)}n.draw(e,`${r.score[0]}-${r.score[1]}`,240,40,V.white,{scale:4,align:`center`,outline:V.dark}),r.penalties?n.draw(e,`PENALTIS ${r.penalties[0]}-${r.penalties[1]}`,240,74,V.yellow,{align:`center`}):r.overtime&&n.draw(e,`GOL DE ORO`,240,74,V.yellow,{align:`center`});for(let t of[0,1]){let i=r.goals.filter(e=>e.team===t),a=t===0?18:320;n.draw(e,`GOLES`,a,88,V.dim),i.slice(0,6).forEach((t,r)=>{let i=`${Tn(t.clock)} ${t.scorerName}${t.ownGoal?` (AG)`:``}${t.golden?` ★`:``}`;n.draw(e,i,a,99+r*10,V.white)}),i.length>6&&n.draw(e,`+${i.length-6} MAS`,a,159,V.dim),i.length===0&&n.draw(e,`---`,a,99,V.dim)}qe(e,165,86,150,100,V.violet);let[s,c]=r.stats,l=s.possession+c.possession||1;[[String(s.shots),`TIROS`,String(c.shots)],[String(s.onTarget),`A PUERTA`,String(c.onTarget)],[String(s.passes),`PASES`,String(c.passes)],[`${Math.round(s.possession/l*100)}%`,`POSESION`,`${Math.round(c.possession/l*100)}%`],[String(s.saves),`ATAJADAS`,String(c.saves)],[String(s.tackles),`ROBOS`,String(c.tackles)]].forEach(([t,r,o],s)=>{let c=94+s*15;n.draw(e,t,176,c,i.colors.primary),n.draw(e,r,240,c,V.white,{align:`center`}),n.draw(e,o,304,c,a.colors.primary,{align:`right`})});let u=this.pkg.moments.map(e=>e.title).join(` · `);if(this.setup.campaignRound!==void 0){let i=B[this.setup.campaignRound];if(r.winner!==0){let t=i.lose[0];n.wrap(`"${t.text}"`,440).slice(0,2).forEach((t,r)=>n.draw(e,t,240,189+r*10,V.yellow,{align:`center`}))}else this.outcome?.unlocked?Math.floor(t*3)%2&&n.draw(e,`¡DESBLOQUEADO: ${ue(this.outcome.unlocked).name}!`,240,194,V.acid,{align:`center`,outline:V.dark}):n.draw(e,`RONDA ${this.setup.campaignRound+1} SUPERADA`,240,194,V.acid,{align:`center`})}else u&&n.draw(e,`REPLAYS: ${u}`,240,196,V.cyan,{align:`center`});this.menu.render(e,n,t),Qe(e,n,`ENTER/ESPACIO: ELEGIR · ESC: MENU`),this.fromReplay&&this.t<.9&&nr(e,V.bg,this.t/.9)}},mr=function(e,t,n){let r=Promise.resolve();function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function hr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function gr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _r(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function vr(){let e=_r(`canvas`);return e.style.display=`block`,e}function yr(...e){let t=`THREE.`+e.shift();ka?ka(`log`,t,...e):console.log(t,...e)}function br(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=br(e);let t=`THREE.`+e.shift();if(ka)ka(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=br(e);let t=`THREE.`+e.shift();if(ka)ka(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xr(...e){let t=e.join(` `);t in Oa||(Oa[t]=!0,U(...e))}function Sr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Cr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ma[e&255]+Ma[e>>8&255]+Ma[e>>16&255]+Ma[e>>24&255]+`-`+Ma[t&255]+Ma[t>>8&255]+`-`+Ma[t>>16&15|64]+Ma[t>>24&255]+`-`+Ma[n&63|128]+Ma[n>>8&255]+`-`+Ma[n>>16&255]+Ma[n>>24&255]+Ma[r&255]+Ma[r>>8&255]+Ma[r>>16&255]+Ma[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function wr(e,t){return(e%t+t)%t}function Tr(e,t,n){return(1-n)*e+n*t}function Er(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Dr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Or(){let e={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=kr(e.r),e.g=kr(e.g),e.b=kr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ar(e.r),e.g=Ar(e.g),e.b=Ar(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ca:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return xr(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return xr(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Sa]:{primaries:t,whitePoint:r,transfer:Ca,toXYZ:za,fromXYZ:Ba,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xa},outputColorSpaceConfig:{drawingBufferColorSpace:xa}},[xa]:{primaries:t,whitePoint:r,transfer:wa,toXYZ:za,fromXYZ:Ba,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xa}}}),e}function kr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ar(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function jr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ha.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}function Mr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Nr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){us.fromArray(e,a);let o=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),s=t.dot(us),c=n.dot(us),l=r.dot(us);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function Pr(e,t,n,r,i,a){Ws.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Gs.copy(Ws):(Gs.x=a*Ws.x-i*Ws.y,Gs.y=i*Ws.x+a*Ws.y),e.copy(t),e.x+=Gs.x,e.y+=Gs.y,e.applyMatrix4(Ks)}function Fr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;gc.copy(s),gc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(gc);return l<n.near||l>n.far?null:{distance:l,point:gc.clone(),object:e}}function Ir(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,uc),e.getVertexPosition(c,dc),e.getVertexPosition(l,fc);let u=Fr(e,t,n,r,uc,dc,fc,hc);if(u){let e=new q;Xo.getBarycoord(hc,uc,dc,fc,e),i&&(u.uv=Xo.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Xo.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Xo.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Xo.getNormal(uc,dc,fc,t.normal),u.face=t,u.barycoord=e}return u}function Lr(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Mc.fromBufferAttribute(s,i),Nc.fromBufferAttribute(s,a),n.distanceSqToSegment(Mc,Nc,Lc,Rc)>r)return;Lc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Lc);if(!(c<t.near||c>t.far))return{distance:c,point:Rc.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}function Rr(e,t,n,r,i,a,o){let s=Gc.distanceSqToPoint(e);if(s<n){let n=new q;Gc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function zr(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function Br(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Hr(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Hr(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Vr(e){let t={};for(let n=0;n<e.length;n++){let r=Br(e[n]);for(let e in r)t[e]=r[e]}return t}function Hr(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ur(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Y.workingColorSpace}function Gr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Kr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function qr(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Jr(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Yr(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=qr(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Jr(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}function Xr(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}function Zr(e,t,n,r){let i=Qr(r);switch(n){case xi:return e*t;case Ei:return e*t/i.components*i.byteLength;case Di:return e*t/i.components*i.byteLength;case Oi:return e*t*2/i.components*i.byteLength;case ki:return e*t*2/i.components*i.byteLength;case Si:return e*t*3/i.components*i.byteLength;case Ci:return e*t*4/i.components*i.byteLength;case Ai:return e*t*4/i.components*i.byteLength;case ji:case Mi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ni:case Pi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ii:case Ri:return Math.max(e,16)*Math.max(t,8)/4;case Fi:case Li:return Math.max(e,8)*Math.max(t,8)/2;case zi:case Bi:case Hi:case Ui:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Vi:case Wi:case Gi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ki:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qi:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ji:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Yi:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Xi:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Zi:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Qi:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case $i:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case oa:case sa:case ca:return Math.ceil(e/4)*Math.ceil(t/4)*16;case la:case ua:return Math.ceil(e/4)*Math.ceil(t/4)*8;case da:case fa:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Qr(e){switch(e){case ci:case li:return{byteLength:1,components:1};case di:case ui:case hi:return{byteLength:2,components:1};case gi:case _i:return{byteLength:2,components:4};case pi:case fi:case mi:return{byteLength:4,components:1};case yi:case bi:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var $r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,K,Fa,q,Ia,La,J,Ra,za,Ba,Y,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,X,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,Z,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu=n((()=>{$r=1e3,ei=1001,ti=1002,ni=1003,ri=1004,ii=1005,ai=1006,oi=1007,si=1008,ci=1009,li=1010,ui=1011,di=1012,fi=1013,pi=1014,mi=1015,hi=1016,gi=1017,_i=1018,vi=1020,yi=35902,bi=35899,xi=1021,Si=1022,Ci=1023,wi=1026,Ti=1027,Ei=1028,Di=1029,Oi=1030,ki=1031,Ai=1033,ji=33776,Mi=33777,Ni=33778,Pi=33779,Fi=35840,Ii=35841,Li=35842,Ri=35843,zi=36196,Bi=37492,Vi=37496,Hi=37488,Ui=37489,Wi=37490,Gi=37491,Ki=37808,qi=37809,Ji=37810,Yi=37811,Xi=37812,Zi=37813,Qi=37814,$i=37815,ea=37816,ta=37817,na=37818,ra=37819,ia=37820,aa=37821,oa=36492,sa=36494,ca=36495,la=36283,ua=36284,da=36285,fa=36286,pa=2300,ma=2301,ha=2302,ga=2303,_a=2400,va=2401,ya=2402,ba=3200,xa=`srgb`,Sa=`srgb-linear`,Ca=`linear`,wa=`srgb`,Ta=7680,Ea=35044,Da=2e3,Oa={},ka=null,Aa={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ja=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ma=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Na=Math.PI/180,Pa=180/Math.PI,K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fa=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new q,La=new Fa,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return xr(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return xr(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return xr(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new J,za=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Y=Or(),Ha=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Va===void 0&&(Va=_r(`canvas`)),Va.width=e.width,Va.height=e.height;let t=Va.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Va}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=_r(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=kr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(kr(t[e]/255)*255):t[e]=kr(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ua=0,Wa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ua++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(jr(r[t].image)):e.push(jr(r[t]))}else e=jr(r);n.url=e}return t||(e.images[this.uuid]=n),n}},Ga=0,Ka=new q,qa=class e extends ja{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ei,i=ei,a=ai,o=si,s=Ci,c=ci,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ga++}),this.uuid=Cr(),this.name=``,this.source=new Wa(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x-=Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ti:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y-=Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ti:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},qa.DEFAULT_IMAGE=null,qa.DEFAULT_MAPPING=300,qa.DEFAULT_ANISOTROPY=1,Ja=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends ja{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ja(0,0,e,t),this.scissorTest=!1,this.viewport=new Ja(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},i=new qa(r),a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xa=class extends Ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Za=class extends qa{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qa=class extends qa{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$a=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),i=1/eo.setFromMatrixColumn(e,1).length(),a=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(no,e,ro)}lookAt(e,t,n){let r=this.elements;return oo.subVectors(e,t),oo.lengthSq()===0&&(oo.z=1),oo.normalize(),io.crossVectors(n,oo),io.lengthSq()===0&&(Math.abs(n.z)===1?oo.x+=1e-4:oo.z+=1e-4,oo.normalize(),io.crossVectors(n,oo)),io.normalize(),ao.crossVectors(oo,io),r[0]=io.x,r[4]=ao.x,r[8]=oo.x,r[1]=io.y,r[5]=ao.y,r[9]=oo.y,r[2]=io.z,r[6]=ao.z,r[10]=oo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=eo.set(r[0],r[1],r[2]).length(),o=eo.set(r[4],r[5],r[6]).length(),s=eo.set(r[8],r[9],r[10]).length();i<0&&(a=-a),to.copy(this);let c=1/a,l=1/o,u=1/s;return to.elements[0]*=c,to.elements[1]*=c,to.elements[2]*=c,to.elements[4]*=l,to.elements[5]*=l,to.elements[6]*=l,to.elements[8]*=u,to.elements[9]*=u,to.elements[10]*=u,t.setFromRotationMatrix(to),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Da,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Da,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},eo=new q,to=new $a,no=new q(0,0,0),ro=new q(1,1,1),io=new q,ao=new q,oo=new q,so=new $a,co=new Fa,lo=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return so.makeRotationFromQuaternion(e),this.setFromRotationMatrix(so,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return co.setFromEuler(this),this.setFromQuaternion(co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},lo.DEFAULT_ORDER=`XYZ`,uo=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fo=0,po=new q,mo=new Fa,ho=new $a,go=new q,_o=new q,vo=new q,yo=new Fa,bo=new q(1,0,0),xo=new q(0,1,0),So=new q(0,0,1),Co={type:`added`},wo={type:`removed`},To={type:`childadded`,child:null},Eo={type:`childremoved`,child:null},Do=class e extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fo++}),this.uuid=Cr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new lo,r=new Fa,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $a},normalMatrix:{value:new J}}),this.matrix=new $a,this.matrixWorld=new $a,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(xo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return po.copy(e).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(xo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ho.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ho.lookAt(_o,go,this.up):ho.lookAt(go,_o,this.up),this.quaternion.setFromRotationMatrix(ho),r&&(ho.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(ho),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Co),To.child=e,this.dispatchEvent(To),To.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wo),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ho.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ho.multiply(e.parent.matrixWorld)),e.applyMatrix4(ho),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Co),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,vo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,yo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}},Do.DEFAULT_UP=new q(0,1,0),Do.DEFAULT_MATRIX_AUTO_UPDATE=!0,Do.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,Oo=class extends Do{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ko={type:`move`},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ko)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mo={h:0,s:0,l:0},No={h:0,s:0,l:0},X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=wr(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mr(i,r,e+1/3),this.g=Mr(i,r,e),this.b=Mr(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=xa){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xa){let n=jo[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xa){return Y.workingToColorSpace(Po.copy(this),e),Math.round(G(Po.r*255,0,255))*65536+Math.round(G(Po.g*255,0,255))*256+Math.round(G(Po.b*255,0,255))}getHexString(e=xa){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(Po.copy(this),t);let n=Po.r,r=Po.g,i=Po.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(Po.copy(this),t),e.r=Po.r,e.g=Po.g,e.b=Po.b,e}getStyle(e=xa){Y.workingToColorSpace(Po.copy(this),e);let t=Po.r,n=Po.g,r=Po.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mo),this.setHSL(Mo.h+e,Mo.s+t,Mo.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mo),e.getHSL(No);let n=Tr(Mo.h,No.h,t),r=Tr(Mo.s,No.s,t),i=Tr(Mo.l,No.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Po=new X,X.NAMES=jo,Fo=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new X(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Io=class extends Do{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lo,this.environmentIntensity=1,this.environmentRotation=new lo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lo=new q,Ro=new q,zo=new q,Bo=new q,Vo=new q,Ho=new q,Uo=new q,Wo=new q,Go=new q,Ko=new q,qo=new Ja,Jo=new Ja,Yo=new Ja,Xo=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Lo.subVectors(e,t),r.cross(Lo);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Lo.subVectors(r,t),Ro.subVectors(n,t),zo.subVectors(e,t);let a=Lo.dot(Lo),o=Lo.dot(Ro),s=Lo.dot(zo),c=Ro.dot(Ro),l=Ro.dot(zo),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bo)!==null&&Bo.x>=0&&Bo.y>=0&&Bo.x+Bo.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Bo)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Bo.x),s.addScaledVector(a,Bo.y),s.addScaledVector(o,Bo.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return qo.setScalar(0),Jo.setScalar(0),Yo.setScalar(0),qo.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qo,i.x),a.addScaledVector(Jo,i.y),a.addScaledVector(Yo,i.z),a}static isFrontFacing(e,t,n,r){return Lo.subVectors(n,t),Ro.subVectors(e,t),Lo.cross(Ro).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lo.subVectors(this.c,this.b),Ro.subVectors(this.a,this.b),Lo.cross(Ro).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Vo.subVectors(r,n),Ho.subVectors(i,n),Wo.subVectors(e,n);let s=Vo.dot(Wo),c=Ho.dot(Wo);if(s<=0&&c<=0)return t.copy(n);Go.subVectors(e,r);let l=Vo.dot(Go),u=Ho.dot(Go);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Vo,a);Ko.subVectors(e,i);let f=Vo.dot(Ko),p=Ho.dot(Ko);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ho,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Uo.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Uo,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Vo,a).addScaledVector(Ho,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zo=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($o.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($o.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$o.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$o):$o.fromBufferAttribute(r,t),$o.applyMatrix4(e.matrixWorld),this.expandByPoint($o);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$o),$o.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),cs.subVectors(this.max,ss),ts.subVectors(e.a,ss),ns.subVectors(e.b,ss),rs.subVectors(e.c,ss),is.subVectors(ns,ts),as.subVectors(rs,ns),os.subVectors(ts,rs);let t=[0,-is.z,is.y,0,-as.z,as.y,0,-os.z,os.y,is.z,0,-is.x,as.z,0,-as.x,os.z,0,-os.x,-is.y,is.x,0,-as.y,as.x,0,-os.y,os.x,0];return!Nr(t,ts,ns,rs,cs)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,ts,ns,rs,cs))?!1:(ls.crossVectors(is,as),t=[ls.x,ls.y,ls.z],Nr(t,ts,ns,rs,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$o).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($o).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qo)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qo=[new q,new q,new q,new q,new q,new q,new q,new q],$o=new q,es=new Zo,ts=new q,ns=new q,rs=new q,is=new q,as=new q,os=new q,ss=new q,cs=new q,ls=new q,us=new q,ds=new q,fs=new K,ps=0,ms=class extends ja{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ps++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXYZ(t,ds.x,ds.y,ds.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix4(e),this.setXYZ(t,ds.x,ds.y,ds.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyNormalMatrix(e),this.setXYZ(t,ds.x,ds.y,ds.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.transformDirection(e),this.setXYZ(t,ds.x,ds.y,ds.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array),r=Dr(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array),r=Dr(r,this.array),i=Dr(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},hs=class extends ms{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gs=class extends ms{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_s=class extends ms{constructor(e,t,n){super(new Float32Array(e),t,n)}},vs=new Zo,ys=new q,bs=new q,xs=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vs.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ys,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(bs)),this.expandByPoint(ys.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ss=0,Cs=new $a,ws=new Do,Ts=new q,Es=new Zo,Ds=new Zo,Os=new q,ks=class e extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ss++}),this.uuid=Cr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(hr(e)?gs:hs)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cs.makeRotationFromQuaternion(e),this.applyMatrix4(Cs),this}rotateX(e){return Cs.makeRotationX(e),this.applyMatrix4(Cs),this}rotateY(e){return Cs.makeRotationY(e),this.applyMatrix4(Cs),this}rotateZ(e){return Cs.makeRotationZ(e),this.applyMatrix4(Cs),this}translate(e,t,n){return Cs.makeTranslation(e,t,n),this.applyMatrix4(Cs),this}scale(e,t,n){return Cs.makeScale(e,t,n),this.applyMatrix4(Cs),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _s(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Es.setFromBufferAttribute(n),this.morphTargetsRelative?(Os.addVectors(this.boundingBox.min,Es.min),this.boundingBox.expandByPoint(Os),Os.addVectors(this.boundingBox.max,Es.max),this.boundingBox.expandByPoint(Os)):(this.boundingBox.expandByPoint(Es.min),this.boundingBox.expandByPoint(Es.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(Es.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ds.setFromBufferAttribute(n),this.morphTargetsRelative?(Os.addVectors(Es.min,Ds.min),Es.expandByPoint(Os),Os.addVectors(Es.max,Ds.max),Es.expandByPoint(Os)):(Es.expandByPoint(Ds.min),Es.expandByPoint(Ds.max))}Es.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Os.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Os));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Os.fromBufferAttribute(a,t),o&&(Ts.fromBufferAttribute(e,t),Os.add(Ts)),r=Math.max(r,n.distanceToSquared(Os))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ms(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ms(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Os.fromBufferAttribute(e,t),Os.normalize(),e.setXYZ(t,Os.x,Os.y,Os.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ms(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=Cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},js=new q,Ms=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix4(e),this.setXYZ(t,js.x,js.y,js.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyNormalMatrix(e),this.setXYZ(t,js.x,js.y,js.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.transformDirection(e),this.setXYZ(t,js.x,js.y,js.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dr(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dr(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dr(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dr(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dr(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Er(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Er(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Er(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Er(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array),r=Dr(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array),r=Dr(r,this.array),i=Dr(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){yr(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new ms(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yr(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=new q,Ps=new q,Fs=new J,Is=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ns.subVectors(n,t).cross(Ps.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ns),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fs.getNormalMatrix(e),r=this.coplanarPoint(Ns).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ls=0,Rs=class extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ls++}),this.uuid=Cr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Is().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zs=class extends Rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs=new q,Hs=new q,Us=new q,Ws=new K,Gs=new K,Ks=new $a,qs=new q,Js=new q,Ys=new q,Xs=new K,Zs=new K,Qs=new K,$s=class extends Do{constructor(e=new zs){if(super(),this.isSprite=!0,this.type=`Sprite`,Bs===void 0){Bs=new ks;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new As(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute(`position`,new Ms(t,3,0,!1)),Bs.setAttribute(`uv`,new Ms(t,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new K(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&W(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Hs.setFromMatrixScale(this.matrixWorld),Ks.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Us.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Pr(qs.set(-.5,-.5,0),Us,a,Hs,r,i),Pr(Js.set(.5,-.5,0),Us,a,Hs,r,i),Pr(Ys.set(.5,.5,0),Us,a,Hs,r,i),Xs.set(0,0),Zs.set(1,0),Qs.set(1,1);let o=e.ray.intersectTriangle(qs,Js,Ys,!1,Vs);if(o===null&&(Pr(Js.set(-.5,.5,0),Us,a,Hs,r,i),Zs.set(0,1),o=e.ray.intersectTriangle(qs,Ys,Js,!1,Vs),o===null))return;let s=e.ray.origin.distanceTo(Vs);s<e.near||s>e.far||t.push({distance:s,point:Vs.clone(),uv:Xo.getInterpolation(Vs,qs,Js,Ys,Xs,Zs,Qs,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}},ec=new q,tc=new q,nc=new q,rc=new q,ic=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ec)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ec.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ec.copy(this.origin).addScaledVector(this.direction,t),ec.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tc.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),rc.copy(this.origin).sub(tc);let i=e.distanceTo(t)*.5,a=-this.direction.dot(nc),o=rc.dot(this.direction),s=-rc.dot(nc),c=rc.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(tc).addScaledVector(nc,d),f}intersectSphere(e,t){if(e.radius<0)return null;ec.subVectors(e.center,this.origin);let n=ec.dot(this.direction),r=ec.dot(ec)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ec)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,ne=1/w,re=T-ee*D,ie=E-te*D,ae=O-ee*A,oe=k-te*A,se=j-ee*N,ce=M-te*N,P=se*oe-ce*ae,le=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(P<0||le<0||ue<0)return null}else if((P<0||le<0||ue<0)&&(P>0||le>0||ue>0))return null;let de=P+le+ue;if(de===0)return null;let fe=ne*(P*D+le*A+ue*N);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ac=class extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lo,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},oc=new $a,sc=new ic,cc=new xs,lc=new q,uc=new q,dc=new q,fc=new q,pc=new q,mc=new q,hc=new q,gc=new q,Z=class extends Do{constructor(e=new ks,t=new ac){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){mc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(pc.fromBufferAttribute(s,e),a?mc.addScaledVector(pc,r):mc.addScaledVector(pc.sub(t),r))}t.add(mc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(i),sc.copy(e.ray).recast(e.near),!(cc.containsPoint(sc.origin)===!1&&(sc.intersectSphere(cc,lc)===null||sc.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(i).invert(),sc.copy(e.ray).applyMatrix4(oc),(n.boundingBox===null||sc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,sc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ir(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ir(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ir(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ir(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}},_c=class extends qa{constructor(e=null,t=1,n=1,r,i,a,o,s,c=ni,l=ni,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vc=class extends ms{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yc=new $a,bc=new $a,xc=[],Sc=new Zo,Cc=new $a,wc=new Z,Tc=new xs,Ec=class extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Cc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yc),Sc.copy(e.boundingBox).applyMatrix4(yc),this.boundingBox.union(Sc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yc),Tc.copy(e.boundingSphere).applyMatrix4(yc),this.boundingSphere.union(Tc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(wc.geometry=this.geometry,wc.material=this.material,wc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tc.copy(this.boundingSphere),Tc.applyMatrix4(n),e.ray.intersectsSphere(Tc)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,yc),bc.multiplyMatrices(n,yc),wc.matrixWorld=bc,wc.raycast(e,xc);for(let e=0,n=xc.length;e<n;e++){let n=xc[e];n.instanceId=i,n.object=this,t.push(n)}xc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(r*this.count),r,this.count,Ei,mi));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dc=new xs,Oc=new K(.5,.5),kc=new q,Ac=class{constructor(e=new Is,t=new Is,n=new Is,r=new Is,i=new Is,a=new Is){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Da,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dc)}intersectsSprite(e){Dc.center.set(0,0,0);let t=Oc.distanceTo(e.center);return Dc.radius=.7071067811865476+t,Dc.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dc)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(kc.x=r.normal.x>0?e.max.x:e.min.x,kc.y=r.normal.y>0?e.max.y:e.min.y,kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jc=class extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mc=new q,Nc=new q,Pc=new $a,Fc=new ic,Ic=new xs,Lc=new q,Rc=new q,zc=class extends Do{constructor(e=new ks,t=new jc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Mc.fromBufferAttribute(t,e-1),Nc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Mc.distanceTo(Nc);e.setAttribute(`lineDistance`,new _s(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(r),Ic.radius+=i,e.ray.intersectsSphere(Ic)===!1)return;Pc.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(Pc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Lr(this,e,Fc,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Lr(this,e,Fc,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Lr(this,e,Fc,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Lr(this,e,Fc,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},Bc=new q,Vc=new q,Hc=class extends zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Bc.fromBufferAttribute(t,e),Vc.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Bc.distanceTo(Vc);e.setAttribute(`lineDistance`,new _s(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Uc=class extends Rs{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wc=new $a,Gc=new ic,Kc=new xs,qc=new q,Jc=class extends Do{constructor(e=new ks,t=new Uc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kc.copy(n.boundingSphere),Kc.applyMatrix4(r),Kc.radius+=i,e.ray.intersectsSphere(Kc)===!1)return;Wc.copy(r).invert(),Gc.copy(e.ray).applyMatrix4(Wc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);qc.fromBufferAttribute(l,n),Rr(qc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)qc.fromBufferAttribute(l,a),Rr(qc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},Yc=class extends qa{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xc=class extends qa{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zc=class extends qa{constructor(e,t,n=pi,r,i,a,o=ni,s=ni,c,l=wi,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qc=class extends Zc{constructor(e,t=pi,n=301,r,i,a=ni,o=ni,s,c=wi){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$c=class extends qa{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},el=class e extends ks{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _s(c,3)),this.setAttribute(`normal`,new _s(l,3)),this.setAttribute(`uv`,new _s(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},tl=class e extends ks{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new _s(a,3)),this.setAttribute(`normal`,new _s(o,3)),this.setAttribute(`uv`,new _s(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nl=class e extends ks{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new _s(u,3)),this.setAttribute(`normal`,new _s(d,3)),this.setAttribute(`uv`,new _s(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rl=class e extends ks{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new _s(i,3)),this.setAttribute(`normal`,new _s(i.slice(),3)),this.setAttribute(`uv`,new _s(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new q,r=new q,i=new q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new q,t=new q,n=new q,r=new q,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},il=new q,al=new q,ol=new q,sl=new Xo,cl=class extends ks{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(Na*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=sl;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),sl.getNormal(ol),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=sl[c[e]],o=sl[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(ol.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:ol.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];il.fromBufferAttribute(a,t),al.fromBufferAttribute(a,n),d.push(il.x,il.y,il.z),d.push(al.x,al.y,al.z)}this.setAttribute(`position`,new _s(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ll=class e extends rl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ul=class e extends ks{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _s(p,3)),this.setAttribute(`normal`,new _s(m,3)),this.setAttribute(`uv`,new _s(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},dl=class e extends ks{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new _s(p,3)),this.setAttribute(`normal`,new _s(m,3)),this.setAttribute(`uv`,new _s(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},fl=class extends ks{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new q,i=new q;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),zr(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),zr(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new _s(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},pl={clone:Br,merge:Vr},ml=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gl=class extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ml,this.fragmentShader=hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=Ur(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ja().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $a().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_l=class extends gl{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},vl=class extends Rs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new X(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yl=class extends Rs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lo,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bl=class extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ba,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Sl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Cl=class extends Sl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_a,endingEnd:_a}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case va:i=e,o=2*t-n;break;case ya:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case va:a=e,s=2*n-t;break;case ya:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},wl=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Tl=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},El=class extends Sl{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Yr(n,t,g,y,r);i[p]=qr(x,o,_,b,m)}return i}},Dl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Kr(e.settings)&&(n.settings={inTangents:Gr(e.settings.inTangents,Array),outTangents:Gr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new El(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break;case ga:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ha;case this.InterpolantFactoryMethodBezier:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Kr(this.settings)&&(Xr(this.settings.inTangents,e),Xr(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&gr(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ha,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Kr(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}},Dl.prototype.ValueTypeName=``,Dl.prototype.TimeBufferType=Float32Array,Dl.prototype.ValueBufferType=Float32Array,Dl.prototype.DefaultInterpolation=ma,Ol=class extends Dl{constructor(e,t,n){super(e,t,n)}},Ol.prototype.ValueTypeName=`bool`,Ol.prototype.ValueBufferType=Array,Ol.prototype.DefaultInterpolation=pa,Ol.prototype.InterpolantFactoryMethodLinear=void 0,Ol.prototype.InterpolantFactoryMethodSmooth=void 0,kl=class extends Dl{constructor(e,t,n,r){super(e,t,n,r)}},kl.prototype.ValueTypeName=`color`,Al=class extends Dl{constructor(e,t,n,r){super(e,t,n,r)}},Al.prototype.ValueTypeName=`number`,jl=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Fa.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ml=class extends Dl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}},Ml.prototype.ValueTypeName=`quaternion`,Ml.prototype.InterpolantFactoryMethodSmooth=void 0,Nl=class extends Dl{constructor(e,t,n){super(e,t,n)}},Nl.prototype.ValueTypeName=`string`,Nl.prototype.ValueBufferType=Array,Nl.prototype.DefaultInterpolation=pa,Nl.prototype.InterpolantFactoryMethodLinear=void 0,Nl.prototype.InterpolantFactoryMethodSmooth=void 0,Pl=class extends Dl{constructor(e,t,n,r){super(e,t,n,r)}},Pl.prototype.ValueTypeName=`vector`,Fl=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Il=new Fl,Ll=class{constructor(e){this.manager=e===void 0?Il:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}},Ll.DEFAULT_MATERIAL_NAME=`__DEFAULT`,Rl=class extends Do{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zl=class extends Rl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Do.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bl=new $a,Vl=new q,Hl=new q,Ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new $a,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Ja(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wl=new q,Gl=new Fa,Kl=new q,ql=class extends Do{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $a,this.projectionMatrix=new $a,this.projectionMatrixInverse=new $a,this.coordinateSystem=Da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Gl,Kl),Kl.x===1&&Kl.y===1&&Kl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Gl,Kl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Wl,Gl,Kl),Kl.x===1&&Kl.y===1&&Kl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Gl,Kl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jl=new q,Yl=new K,Xl=new K,Zl=class extends ql{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jl.x,Jl.y).multiplyScalar(-e/Jl.z),Jl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jl.x,Jl.y).multiplyScalar(-e/Jl.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Xl),t.subVectors(Xl,Yl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ql=class extends Ul{constructor(){super(new Zl(90,1,.5,500)),this.isPointLightShadow=!0}},$l=class extends Rl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},eu=class extends ql{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tu=class extends Ul{constructor(){super(new eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nu=class extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Do.DEFAULT_UP),this.updateMatrix(),this.target=new Do,this.shadow=new tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ru=class extends Rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},iu=-90,au=1,ou=class extends Do{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zl(iu,au,e,t);r.layers=this.layers,this.add(r);let i=new Zl(iu,au,e,t);i.layers=this.layers,this.add(i);let a=new Zl(iu,au,e,t);a.layers=this.layers,this.add(a);let o=new Zl(iu,au,e,t);o.layers=this.layers,this.add(o);let s=new Zl(iu,au,e,t);s.layers=this.layers,this.add(s);let c=new Zl(iu,au,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},su=class extends Zl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},cu=`\\[\\]\\.:\\/`,lu=RegExp(`[\\[\\]\\.:\\/]`,`g`),uu=`[^\\[\\]\\.:\\/]`,du=`[^`+cu.replace(`\\.`,``)+`]`,fu=`((?:WC+[\\/:])*)`.replace(`WC`,uu),pu=`(WCOD+)?`.replace(`WCOD`,du),mu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,uu),hu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,uu),gu=RegExp(`^`+fu+pu+mu+hu+`$`),_u=[`material`,`materials`,`bones`,`map`],vu=class{constructor(e,t,n){let r=n||yu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(lu,``)}static parseTrackName(e){let t=gu.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);_u.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},yu.Composite=vu,yu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yu.prototype.GetterByBindingType=[yu.prototype._getValue_direct,yu.prototype._getValue_array,yu.prototype._getValue_arrayElement,yu.prototype._getValue_toArray],yu.prototype.SetterByBindingTypeAndVersioning=[[yu.prototype._setValue_direct,yu.prototype._setValue_direct_setNeedsUpdate,yu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yu.prototype._setValue_array,yu.prototype._setValue_array_setNeedsUpdate,yu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yu.prototype._setValue_arrayElement,yu.prototype._setValue_arrayElement_setNeedsUpdate,yu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yu.prototype._setValue_fromArray,yu.prototype._setValue_fromArray_setNeedsUpdate,yu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`)}));function xu(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Su(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}function Cu(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Z(new el(1,1,1),new gl({name:`BackgroundCubeMaterial`,uniforms:Br(Df.backgroundCube.uniforms),vertexShader:Df.backgroundCube.vertexShader,fragmentShader:Df.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Af),l.material.toneMapped=Y.getTransfer(i.colorSpace)!==wa,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new ul(2,2),new gl({name:`BackgroundMaterial`,uniforms:Br(Df.background.uniforms),vertexShader:Df.background.vertexShader,fragmentShader:Df.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Y.getTransfer(i.colorSpace)!==wa,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Of,Wr(e)),n.buffers.color.setClear(Of.r,Of.g,Of.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function wu(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Tu(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Eu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Du(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Is,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ou(e){let t=[],n=[],r=e,i=e-jf+1+Mf;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Hf.set(1,r,n):e===1?Hf.set(-n,1,-r):e===2?Hf.set(-n,r,1):e===3?Hf.set(-1,r,-n):e===4?Hf.set(-n,-1,r):Hf.set(n,r,-1),Hf.toArray(l,(e*6+t)*3)}}let u=new ks;u.setAttribute(`position`,new ms(c,3)),u.setAttribute(`outputDirection`,new ms(l,3)),n.push(new Z(u,null)),r>jf&&r--}return{lodMeshes:n,sizeLods:t}}function ku(e,t,n){let r=new Xa(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Au(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ju(e,t,n){return new gl({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Pf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mu(e,t,n){return new gl({name:`SphericalGaussianBlur`,defines:{SAMPLES:Nf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nu(){return new gl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pu(){return new gl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Iu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Wf(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Uf(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Uf(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Lu(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&xr(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ru(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?gs:hs)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function zu(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Vu(e,t,n){let r=new WeakMap,i=new Ja;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),_=new Za(g,m,h,u);_.type=mi,_.needsUpdate=!0;let v=p*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new K(m,h)},r.set(o,d);function f(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,f)}o.addEventListener(`dispose`,f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Hu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}function Uu(e,t,n,r,i,a){let o=new Xa(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ks;l.setAttribute(`position`,new _s([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new _s([0,2,0,0,2,0],2));let u=new _l({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Z(l,u),f=new eu(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Xa(t,n,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new Xa(t,n,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Y.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Gf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}function Wu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Zf[i];if(a===void 0&&(a=new Float32Array(i),Zf[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gu(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ku(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qu(e,t){let n=Qf[t];n===void 0&&(n=new Int32Array(t),Qf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ju(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Yu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gu(n,t))return;e.uniform2fv(this.addr,t),Ku(n,t)}}function Xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gu(n,t))return;e.uniform3fv(this.addr,t),Ku(n,t)}}function Zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gu(n,t))return;e.uniform4fv(this.addr,t),Ku(n,t)}}function Qu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gu(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ku(n,t)}else{if(Gu(n,r))return;tp.set(r),e.uniformMatrix2fv(this.addr,!1,tp),Ku(n,r)}}function $u(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gu(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ku(n,t)}else{if(Gu(n,r))return;ep.set(r),e.uniformMatrix3fv(this.addr,!1,ep),Ku(n,r)}}function ed(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gu(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ku(n,t)}else{if(Gu(n,r))return;$f.set(r),e.uniformMatrix4fv(this.addr,!1,$f),Ku(n,r)}}function td(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gu(n,t))return;e.uniform2iv(this.addr,t),Ku(n,t)}}function rd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gu(n,t))return;e.uniform3iv(this.addr,t),Ku(n,t)}}function id(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gu(n,t))return;e.uniform4iv(this.addr,t),Ku(n,t)}}function ad(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function od(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gu(n,t))return;e.uniform2uiv(this.addr,t),Ku(n,t)}}function sd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gu(n,t))return;e.uniform3uiv(this.addr,t),Ku(n,t)}}function cd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gu(n,t))return;e.uniform4uiv(this.addr,t),Ku(n,t)}}function ld(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(qf.compareFunction=n.isReversedDepthBuffer()?518:515,a=qf):a=Kf,n.setTexture2D(t||a,i)}function ud(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Yf,i)}function dd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Xf,i)}function fd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Jf,i)}function pd(e){switch(e){case 5126:return Ju;case 35664:return Yu;case 35665:return Xu;case 35666:return Zu;case 35674:return Qu;case 35675:return $u;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return rd;case 35669:case 35673:return id;case 5125:return ad;case 36294:return od;case 36295:return sd;case 36296:return cd;case 35678:case 36198:case 36298:case 36306:case 35682:return ld;case 35679:case 36299:case 36307:return ud;case 35680:case 36300:case 36308:case 36293:return dd;case 36289:case 36303:case 36311:case 36292:return fd}}function md(e,t){e.uniform1fv(this.addr,t)}function hd(e,t){let n=Wu(t,this.size,2);e.uniform2fv(this.addr,n)}function gd(e,t){let n=Wu(t,this.size,3);e.uniform3fv(this.addr,n)}function _d(e,t){let n=Wu(t,this.size,4);e.uniform4fv(this.addr,n)}function vd(e,t){let n=Wu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yd(e,t){let n=Wu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bd(e,t){let n=Wu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xd(e,t){e.uniform1iv(this.addr,t)}function Sd(e,t){e.uniform2iv(this.addr,t)}function Cd(e,t){e.uniform3iv(this.addr,t)}function wd(e,t){e.uniform4iv(this.addr,t)}function Td(e,t){e.uniform1uiv(this.addr,t)}function Ed(e,t){e.uniform2uiv(this.addr,t)}function Dd(e,t){e.uniform3uiv(this.addr,t)}function Od(e,t){e.uniform4uiv(this.addr,t)}function kd(e,t,n){let r=this.cache,i=t.length,a=qu(n,i);Gu(r,a)||(e.uniform1iv(this.addr,a),Ku(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?qf:Kf;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ad(e,t,n){let r=this.cache,i=t.length,a=qu(n,i);Gu(r,a)||(e.uniform1iv(this.addr,a),Ku(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Yf,a[e])}function jd(e,t,n){let r=this.cache,i=t.length,a=qu(n,i);Gu(r,a)||(e.uniform1iv(this.addr,a),Ku(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Xf,a[e])}function Md(e,t,n){let r=this.cache,i=t.length,a=qu(n,i);Gu(r,a)||(e.uniform1iv(this.addr,a),Ku(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Jf,a[e])}function Nd(e){switch(e){case 5126:return md;case 35664:return hd;case 35665:return gd;case 35666:return _d;case 35674:return vd;case 35675:return yd;case 35676:return bd;case 5124:case 35670:return xd;case 35667:case 35671:return Sd;case 35668:case 35672:return Cd;case 35669:case 35673:return wd;case 5125:return Td;case 36294:return Ed;case 36295:return Dd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return jd;case 36289:case 36303:case 36311:case 36292:return Md}}function Pd(e,t){e.seq.push(t),e.map[t.id]=t}function Fd(e,t,n){let r=e.name,i=r.length;for(ap.lastIndex=0;;){let a=ap.exec(r),o=ap.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Pd(n,l===void 0?new np(s,e,t):new rp(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ip(s),Pd(n,e)),n=e}}}function Id(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function Ld(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Rd(e){Y._getMatrix(lp,Y.workingColorSpace,e);let t=`mat3( ${lp.elements.map(e=>e.toFixed(4))} )`;switch(Y.getTransfer(e)){case Ca:return[t,`LinearTransferOETF`];case wa:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ld(e.getShaderSource(t),r)}return i}function Bd(e,t){let n=Rd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Vd(e,t){let n=up[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Hd(){return Y.getLuminanceCoefficients(dp),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${dp.x.toFixed(4)}, ${dp.y.toFixed(4)}, ${dp.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ud(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Kd).join(`
`)}function Wd(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Gd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Kd(e){return e!==``}function qd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Yd(e){return e.replace(fp,Xd)}function Xd(e,t){let n=Q[t];if(n===void 0){let e=pp.get(t);if(e!==void 0)n=Q[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Yd(n)}function Zd(e){return e.replace(mp,Qd)}function Qd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function $d(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function ef(e){return hp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}function tf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:gp[e.envMapMode]||`ENVMAP_TYPE_CUBE`}function nf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_p[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}function rf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:vp[e.combine]||`ENVMAP_BLENDING_NONE`}function af(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function of(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ef(n),l=tf(n),u=nf(n),d=rf(n),f=af(n),p=Ud(n),m=Wd(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Kd).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Kd).join(`
`),_.length>0&&(_+=`
`)):(g=[$d(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Kd).join(`
`),_=[$d(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:Vd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,Bd(`linearToOutputTexel`,n.outputColorSpace),Hd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Kd).join(`
`)),o=Yd(o),o=qd(o,n),o=Jd(o,n),s=Yd(s),s=qd(s,n),s=Jd(s,n),o=Zd(o),s=Zd(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Id(i,i.VERTEX_SHADER,y),S=Id(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=zd(i,x,`vertex`),n=zd(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new op(i,h),T=Gd(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,sp)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function sf(e){return e===1030||e===37490||e===36285}function cf(e,t,n,r,i,a){let o=new uo,s=new bp,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Df[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,P=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,F=he&&!!i.iridescenceThicknessMap,Ce=ge&&!!i.sheenColorMap,we=ge&&!!i.sheenRoughnessMap,I=!!i.specularMap,L=!!i.specularColorMap,Te=!!i.specularIntensityMap,R=_e&&!!i.transmissionMap,z=_e&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let B={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Y.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:P,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&sf(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:F,sheen:ge,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:I,specularColorMap:L,specularIntensityMap:Te,transmission:_e,transmissionMap:R,thicknessMap:z,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:P&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:F&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:I&&m(i.specularMap.channel),specularColorMapUv:L&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:R&&m(i.transmissionMap.channel),thicknessMapUv:z&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Y.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:P&&i.emissiveMap.isVideoTexture===!0&&Y.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Df[t];n=pl.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new of(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function lf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function uf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function df(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ff(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||uf),r.length>1&&r.sort(t||df),i.length>1&&i.sort(t||df)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function pf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ff,e.set(t,[i])):n>=r.length?(i=new ff,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function mf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new X};break;case`SpotLight`:n={position:new q,direction:new q,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function hf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}function gf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function _f(e){let t=new mf,n=hf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new $a,o=new $a;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(gf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Sp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function vf(e){let t=new _f(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function yf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new vf(e),t.set(n,[a])):r>=i.length?(a=new vf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}function bf(e,t,n){let r=new Ac,i=new K,a=new K,o=new Ja,s=new bl,c=new xl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new gl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Cp,fragmentShader:wp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ks;m.setAttribute(`position`,new ms(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Xa(i.x,i.y,{format:Oi,type:hi,minFilter:ai,magFilter:ai,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Zc(i.x,i.y,mi),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=wi,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ni,d.map.depthTexture.magFilter=ni}else l.isPointLight?(d.map=new Wf(i.x),d.map.depthTexture=new Qc(i.x,pi)):(d.map=new Xa(i.x,i.y),d.map.depthTexture=new Zc(i.x,i.y,pi)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=wi,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ai,d.map.depthTexture.magFilter=ai):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ni,d.map.depthTexture.magFilter=ni);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Op.setFromMatrixPosition(l.matrixWorld),e.position.copy(Op),kp.copy(e.position),kp.add(Tp[t]),e.up.copy(Ep[t]),e.lookAt(kp),e.updateMatrixWorld(),n.makeTranslation(-Op.x,-Op.y,-Op.z),Dp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Dp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xa(i.x,i.y,{format:Oi,type:hi}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function xf(e,t){function n(){let t=!1,n=new Ja,r=null,i=new Ja(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Aa[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Ja().fromArray(ie),se=new Ja().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let P={};P[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),P[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),P[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(N&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function F(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function Ce(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||P[t]),i.type=t,i.texture=n)}function we(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function I(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function R(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function B(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ne(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:F,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:I,compressedTexImage3D:L,texImage2D:ke,texImage3D:Ae,pixelStorei:B,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Te,texSubImage3D:R,compressedTexSubImage2D:z,compressedTexSubImage3D:Ee,scissor:Me,viewport:Ne,reset:Ie}}function Sf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):_r(`canvas`)}function g(e,t,n){let r=1,i=I(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ca:Y.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&Ce(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ue(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ue(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?de(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[$r]:e.REPEAT,[ei]:e.CLAMP_TO_EDGE,[ti]:e.MIRRORED_REPEAT},ae={[ni]:e.NEAREST,[ri]:e.NEAREST_MIPMAP_NEAREST,[ii]:e.NEAREST_MIPMAP_LINEAR,[ai]:e.LINEAR,[oi]:e.LINEAR_MIPMAP_NEAREST,[si]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function P(e,t,n){return Math.floor(Math.floor(e/n)/t)}function le(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=P(n.start,r.width,4),c=P(t.start,r.width,4);n.start<=i+1&&a===c&&P(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ue(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=we(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);se(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ti,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&le(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Zr(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Zr(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=I(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=I(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=we(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);se(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=I(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Se(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),se(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=Se(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function he(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)me(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(i.__webglFramebuffer[0],t,0):me(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),pe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),pe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,i){let a=r.get(t);n!==void 0&&fe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&he(t)}function _e(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),pe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)fe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),se(c,a),fe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else fe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&he(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ye.push(l),be.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ce(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function we(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Y.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function I(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Cf(e,t){function n(n,r=``){let i,a=Y.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}function wf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Wr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Fp),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Tf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}function Ef(){return Lp===null&&(Lp=new _c(Ip,16,16,Oi,hi),Lp.name=`DFG_LUT`,Lp.minFilter=ai,Lp.magFilter=ai,Lp.wrapS=ei,Lp.wrapT=ei,Lp.generateMipmaps=!1,Lp.needsUpdate=!0),Lp}var Q,$,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp=n((()=>{bu(),Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},Df={basic:{uniforms:Vr([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:Vr([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:Vr([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:Vr([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:Vr([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new X(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:Vr([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:Vr([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:Vr([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:Vr([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:Vr([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:Vr([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:Vr([$.common,$.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:Vr([$.lights,$.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}},Df.physical={uniforms:Vr([Df.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},Of={r:0,b:0,g:0},kf=new $a,Af=new J,Af.set(-1,0,0,0,1,0,0,0,1),jf=4,Mf=6,Nf=20,Pf=256,Ff=new eu,If=new X,Lf=null,Rf=0,zf=0,Bf=!1,Vf=new q,Hf=new q,Uf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Vf}=i;Lf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Rf,zf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,Au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:hi,format:Ci,colorSpace:Sa,depthBuffer:!1},r=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ou(r)),this._blurMaterial=Mu(r,e,t),this._ggxMaterial=ju(r,e,t)}return r}_compileMaterial(e){let t=new Z(new ks,e);this._renderer.compile(t,Ff)}_sceneToCubeUV(e,t,n,r,i){let a=new Zl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(If),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new el,new ac({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(If),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Au(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Au(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ff)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-jf?n-d+jf:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Au(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ff),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Au(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ff)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Au(t,3*l*(r>this._lodMax-jf?r-this._lodMax+jf:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ff)}},Wf=class extends Xa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),i=new gl({name:`CubemapFromEquirect`,uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ai),new ou(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Gf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`},Kf=new qa,qf=new Zc(1,1),Jf=new Za,Yf=new Qa,Xf=new Yc,Zf=[],Qf=[],$f=new Float32Array(16),ep=new Float32Array(9),tp=new Float32Array(4),np=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pd(t.type)}},rp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nd(t.type)}},ip=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ap=/(\w+)(\])?(\[|\.)?/g,op=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Fd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},sp=37297,cp=0,lp=new J,up={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`},dp=new q,fp=/^[ \t]*#include +<([\w\d./]+)>/gm,pp=new Map,mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,hp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`},gp={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`},_p={302:`ENVMAP_MODE_REFRACTION`},vp={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`},yp=0,bp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}},xp=class{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}},Sp=0,Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tp=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Ep=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Dp=new $a,Op=new q,kp=new q,Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gl({vertexShader:Ap,fragmentShader:jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new ul(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Np=class extends ja{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Mp,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new Zl;T.viewport=new Ja;let E=new Zl;E.viewport=new Ja;let D=[T,E],O=new su,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ao,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ao,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ao,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ti:wi,a=_.stencil?vi:pi);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Xa(d.textureWidth,d.textureHeight,{format:Ci,type:ci,depthTexture:new Zc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xa(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new q,te=new q;function ne(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;re(O,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,O,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Pa*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Zl,o.layers.enable(n),o.viewport=new Ja,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new $c,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new xu;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Pp=new $a,Fp=new J,Fp.set(-1,0,0,0,1,0,0,0,1),Ip=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Lp=null,Rp=class{constructor(e={}){let{canvas:t=vr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ci}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Ai,ki,Di]),g=new Set([ci,pi,di,vi,gi,_i]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=xa;let j=0,M=0,N=null,ee=-1,te=null,ne=new Ja,re=new Ja,ie=null,ae=new X(0),oe=0,se=t.width,ce=t.height,P=1,le=null,ue=null,de=new Ja(0,0,se,ce),fe=new Ja(0,0,se,ce),pe=!1,me=new Ac,he=!1,ge=!1,_e=new $a,ve=new q,ye=new Ja,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return N===null?P:1}let F=n;function Ce(e,n){return t.getContext(e,n)}let we,I,L,Te,R,z,Ee,De,Oe,ke,Ae,je,B,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),F===null){let t=`webgl2`;if(F=Ce(t,e),F===null)throw Ce(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}He()}catch(e){throw t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),W(`WebGLRenderer: `+e.message),e}function He(){we=new Lu(F),we.init(),ze=new Cf(F,we),I=new Eu(F,we,e,ze),L=new xf(F,we),I.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),Te=new Bu(F),R=new lf,z=new Sf(F,we,L,R,I,ze,Te),Ee=new Iu(T),De=new Su(F),Be=new wu(F,De),Oe=new Ru(F,De,Te,Be),ke=new Hu(F,Oe,De,Be,Te),Ie=new Vu(F,I,z),Ne=new Du(R),Ae=new cf(T,Ee,we,I,Be,Ne),je=new wf(T,R),B=new pf,Me=new yf(we),Fe=new Cu(T,Ee,L,ke,p,s),Pe=new bf(T,ke,I),Ve=new Tf(F,Te,I,L),Le=new Tu(F,we,Te),Re=new zu(F,we,Te),Te.programs=Ae.programs,T.capabilities=I,T.extensions=we,T.properties=R,T.renderLists=B,T.shadowMap=Pe,T.state=L,T.info=Te}m!==1009&&(w=new Uu(m,t.width,t.height,o,r,i));let Ue=new Np(T,F);this.xr=Ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=we.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=we.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(e){e!==void 0&&(P=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){Ue.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,ce=n,t.width=Math.floor(e*P),t.height=Math.floor(n*P),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*P,ce*P).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,P=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),L.viewport(ne.copy(de).multiplyScalar(P).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),L.scissor(re.copy(fe).multiplyScalar(P).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){L.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),Fe.dispose(),B.dispose(),Me.dispose(),R.dispose(),Ee.dispose(),ke.dispose(),Be.dispose(),Ve.dispose(),Ae.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,Qe),Ue.removeEventListener(`sessionend`,$e),et.stop()};function We(e){e.preventDefault(),yr(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){yr(`WebGLRenderer: Context Restored.`),E=!1;let e=Te.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;He(),Te.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Ke(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function V(e){let t=e.target;t.removeEventListener(`dispose`,V),qe(t)}function qe(e){Je(e),R.remove(e)}function Je(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ae.releaseProgram(e)}),e.isShaderMaterial&&Ae.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Oe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=De.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Se()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(we.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?De.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),he===!0&&Ne.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Me.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ge=this.localClippingEnabled,he=Ne.init(this.clippingPlanes,ge),he===!0&&Ne.setGlobalState(this.clippingPlanes,t),D!==null&&Pe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ye(o,n,t,e),r.add(o)}else Ye(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}we.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function Ze(e){Xe&&Xe(e)}function Qe(){et.stop()}function $e(){et.start()}let et=new xu;et.setAnimationLoop(Ze),typeof self<`u`&&et.setContext(self),this.setAnimationLoop=function(e){Xe=e,Ue.setAnimationLoop(e),e===null?et.stop():et.start()},Ue.addEventListener(`sessionstart`,Qe),Ue.addEventListener(`sessionend`,$e),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ue.enabled===!0&&Ue.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Me.get(e,C.length),x.init(t),x.state.textureUnits=z.getTextureUnits(),C.push(x),_e.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(_e,Da,t.reversedDepth),ge=this.localClippingEnabled,he=Ne.init(this.clippingPlanes,ge),b=B.get(e,S.length),b.init(),S.push(b),Ue.enabled===!0&&Ue.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&tt(e,t,-1/0,T.sortObjects)}tt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,ue),xe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,xe&&Fe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Ne.beginShadows();let i=x.state.shadowsArray;if(Pe.render(i,e,t),he===!0&&Ne.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];H(n,r,e,a)}xe&&Fe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];nt(b,e,n,n.viewport)}}else r.length>0&&H(n,r,e,t),xe&&Fe.render(e),nt(b,e,t)}N!==null&&M===0&&(z.updateMultisampleRenderTarget(N),z.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Be.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],z.setTextureUnits(x.state.textureUnits),he===!0&&Ne.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(me)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(_e);let i=ke.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ye.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(me))){let i=ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ye.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(_e)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ye.z,s,t)}}else a.visible&&b.push(e,i,a,n,ye.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)tt(i[e],t,n,r)}function nt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),he===!0&&Ne.setGlobalState(T.clippingPlanes,n),r&&L.viewport(ne.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function H(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=we.has(`EXT_color_buffer_half_float`)||we.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Xa(1,1,{generateMipmaps:!0,type:e?hi:ci,minFilter:si,samples:Math.max(4,I.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Fe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),he===!0&&Ne.setGlobalState(T.clippingPlanes,r),rt(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),we.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e,t,n){t.isScene!==!0&&(t=be);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ae.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ae.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ee.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,V),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=Ae.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ae.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ne.uniform),st(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=op.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function lt(e,t,n,r,i){t.isScene!==!0&&(t=be),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Y.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ee.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=x.state.lights;if(he===!0&&(ge===!0||e!==te)){let t=e===te&&r.id===ee;Ne.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ne.numPlanes||v.numIntersection!==Ne.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,ve.setFromMatrixPosition(e.matrixWorld)),I.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(F,`sunShadowMap`,y.state.sunShadowMap,z),y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,z),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,z),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,z));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ie.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Ef()),w){if(O.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(k,E),a&&r.fog===!0&&je.refreshFogUniforms(k,a),je.refreshMaterialUniforms(k,r,P,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}op.upload(F,ot(v),k,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(op.upload(F,ot(v),k,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ve.update(n,S),Ve.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,L.viewport(ne),L.scissor(re),L.setScissorTest(ie),ee=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(de).multiplyScalar(P).floor(),re.copy(fe).multiplyScalar(P).floor(),ie=pe;if(n!==0&&(r=O),L.bindFramebuffer(F.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(ne),L.scissor(re),L.setScissorTest(ie),i){let r=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function ft(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=I.textureFormatReadable(e.format),t.__typeReadable=I.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),a)}finally{let e=N===null?null:R.get(N).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,ze.convert(l),ze.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=N===null?null:R.get(N).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Sr(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ze.convert(t.format),_=ze.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=F.TEXTURE_2D),L.activeTexture(F.TEXTURE0),L.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(F.UNPACK_ROW_LENGTH),b=L.getParameter(F.UNPACK_IMAGE_HEIGHT),x=L.getParameter(F.UNPACK_SKIP_PIXELS),S=L.getParameter(F.UNPACK_SKIP_ROWS),C=L.getParameter(F.UNPACK_SKIP_IMAGES);L.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(F.UNPACK_SKIP_PIXELS,l),L.pixelStorei(F.UNPACK_SKIP_ROWS,u),L.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(F.READ_FRAMEBUFFER,k),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(F.UNPACK_ROW_LENGTH,y),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(F.UNPACK_SKIP_PIXELS,x),L.pixelStorei(F.UNPACK_SKIP_ROWS,S),L.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,L.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y._getUnpackColorSpace()}}}));function Bp(e,t){if(t<=e[0].t)return 0;if(t>=e[e.length-1].t)return e.length-1;let n=0,r=e.length-1;for(;r-n>1;){let i=n+r>>1;e[i].t<=t?n=i:r=i}return n}function Vp(e,t){let n=Bp(e,t),r=e[n],i=e[Math.min(e.length-1,n+1)],a=i.t-r.t,o=a>1e-6?Math.min(1,Math.max(0,(t-r.t)/a)):0,s=r.p.length/6,c=[];for(let e=0;e<s;e++){let t=e*6,n=r.p[t]+(i.p[t]-r.p[t])*o,s=r.p[t+1]+(i.p[t+1]-r.p[t+1])*o,l=r.p[t+2]+(i.p[t+2]-r.p[t+2])*o,u=r.p[t+3]+(i.p[t+3]-r.p[t+3])*o,d=r.p[t+4]+(i.p[t+4]-r.p[t+4])*o,f=a>1e-6?Math.hypot(i.p[t]-r.p[t],i.p[t+1]-r.p[t+1])/a:0;c.push({x:n,y:s,z:l,fx:u,fy:d,anim:gn[o<.5?r.p[t+5]:i.p[t+5]]??`idle`,speed:f})}return{t,bx:r.bx+(i.bx-r.bx)*o,by:r.by+(i.by-r.by)*o,bz:r.bz+(i.bz-r.bz)*o,owner:o<.5?r.owner:i.owner,hz:o<.5?r.hz:i.hz,ht:r.ht+(i.ht-r.ht)*o,players:c}}function Hp(e,t,n=0){return[(e-s.L/2)*Up,n*Up,(t-s.W/2)*Up]}var Up,Wp=n((()=>{vn(),_(),Hn(),Up=.1}));function Gp(e){let t=e.eventTime,n=Math.max(e.start,t-3),r=Math.min(e.end,t+(e.kind===`goal`?2.1:1.5));if(e.kind===`tail`){let e=Math.min(r,n+1.6);return[{from:n,to:e,speed:1,shot:`orbit`},{from:e,to:r,speed:1,shot:`track`}].filter(e=>e.to>e.from)}let i=Math.max(n,t-1.1),a=Math.max(i,t-.35),o=Math.min(r,t+.45);return[{from:n,to:i,speed:1,shot:`orbit`},{from:i,to:a,speed:1,shot:`track`},{from:a,to:o,speed:Kp,shot:`dolly`},{from:o,to:r,speed:.85,shot:`closeup`}].filter(e=>e.to-e.from>.01)}var Kp,qp,Jp=n((()=>{zp(),Kp=.28,qp=class{camera;pos=new q;target=new q;fov=50;roll=0;constructor(e){this.camera=new Zl(50,e,.1,300)}cut(e,t,n){this.pos.copy(e),this.target.copy(t),this.fov=n,this.apply()}follow(e,t,n,r,i=5){let a=1-Math.exp(-r*i);this.pos.lerp(e,a),this.target.lerp(t,Math.min(1,a*1.6)),this.fov+=(n-this.fov)*a,this.apply()}get position(){return this.pos}get lookTarget(){return this.target}get currentFov(){return this.fov}apply(){this.camera.position.copy(this.pos),this.camera.lookAt(this.target),this.roll&&this.camera.rotateZ(this.roll),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}}}));function Yp(){return hm||(hm=new _c(new Uint8Array([70,150,255]),3,1,Ei),hm.minFilter=ni,hm.magFilter=ni,hm.needsUpdate=!0),hm}function Xp(){hm?.dispose(),hm=null}function Zp(e){e.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material,r=Array.isArray(n)?n:n?[n]:[];for(let e of r){for(let t of[`map`,`emissiveMap`,`alphaMap`]){let n=e[t];n&&n!==hm&&n.dispose()}e.dispose()}})}function Qp(e,t=!0){let n=new Xc(e);return n.colorSpace=xa,t&&(n.magFilter=ni,n.minFilter=ni,n.generateMipmaps=!1),n}function $p(e,t){let n=new Oo,r=new Oo;n.add(r);let i=gm(e.jersey,e.jersey,.08),a=gm(e.socks),o=gm(`#1b1230`),s=gm(e.skin),c=new ac({color:`#0a0612`,side:1}),l=e=>{let t=new Oo;t.position.set(0,.62,e);let n=new Z(_m.leg,a);n.position.y=-.29;let i=new Z(_m.boot,o);return i.position.set(.06,-.58,0),t.add(n,i),r.add(t),t},u=l(.13),d=l(-.13),f=new Z(_m.shorts,gm(e.shorts));f.position.y=.7,r.add(f);let p=new Z(_m.torso,i);p.position.y=1.08;let m=new Z(_m.torso,c);m.position.copy(p.position),m.scale.setScalar(1.09);let h=new Z(_m.stripe,gm(e.stripe));h.position.set(.27,1.08,0),r.add(p,m,h);let g=n=>{let a=new Oo;a.position.set(0,1.34,n);let o=new Z(_m.arm,t?gm(e.jerseyDark):i);o.position.y=-.25;let c=new Z(_m.hand,t?gm(`#f4f1ff`):s);return c.position.y=-.52,a.add(o,c),r.add(a),a},_=g(.38),v=g(-.38),y=new Oo;y.position.y=1.82;let b=new Z(_m.head,s),x=new Z(_m.head,c);x.scale.setScalar(1.08);let S=new Z(_m.hair,gm(e.hair));S.position.y=.04,S.rotation.z=.25;let C=new Z(_m.visor,new ac({color:e.visor}));C.position.set(.36,.02,0),y.add(b,x,S,C),r.add(y);let w=new Z(_m.shadow,new ac({color:`#000000`,transparent:!0,opacity:.4,depthWrite:!1}));return w.rotation.x=-Math.PI/2,w.position.y=.02,n.add(w),{root:n,body:r,head:y,legL:u,legR:d,armL:_,armR:v,shadow:w}}function em(e,t,n,r,i,a){let o=e.body;o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),e.head.rotation.set(0,0,0);for(let t of[e.legL,e.legR,e.armL,e.armR])t.rotation.set(0,0,0);e.shadow.scale.setScalar(1);let s=Math.sin(n);switch(t){case`idle`:o.position.y=Math.abs(Math.sin(r*3))*.03,e.armL.rotation.x=.12,e.armR.rotation.x=-.12;break;case`run`:e.legL.rotation.z=s*.9,e.legR.rotation.z=-s*.9,e.armL.rotation.z=-s*.8,e.armR.rotation.z=s*.8,o.rotation.z=-.18,o.position.y=Math.abs(Math.cos(n))*.12;break;case`kick`:e.legR.rotation.z=1.5,e.legL.rotation.z=-.2,e.armL.rotation.x=.9,e.armR.rotation.x=-.9,o.rotation.z=.3;break;case`slide`:o.rotation.z=1.15,o.position.set(-.3,.25,0),e.legL.rotation.z=.3,e.legR.rotation.z=.5,e.armL.rotation.x=1.2,e.armR.rotation.x=-1.2;break;case`dive`:o.rotation.x=1.45*a,o.position.y=.55,o.position.z=.3*a,e.armL.rotation.x=2.9,e.armR.rotation.x=-2.9,e.shadow.scale.set(1.8,1,1);break;case`fall`:o.rotation.z=1.5,o.position.set(-.7,.28,0),e.armL.rotation.x=1.4+Math.sin(r*10)*.3,e.armR.rotation.x=-1.4-Math.sin(r*10)*.3,e.legL.rotation.z=.4+Math.sin(r*8)*.3,e.legR.rotation.z=.2-Math.sin(r*8)*.3,e.shadow.scale.set(2,1,1);break;case`celebrate`:{let t=Math.abs(Math.sin(r*9));o.position.y=t*.35*(1+i),e.armL.rotation.x=2.7+Math.sin(r*14)*.3,e.armR.rotation.x=-2.7-Math.sin(r*14)*.3,e.legL.rotation.z=.3*t,e.legR.rotation.z=-.3*t,i>0&&(o.scale.set(1+.12*i*(1-t),1+.25*i*t,1+.12*i*(1-t)),o.rotation.y=Math.sin(r*4)*.6*i);break}case`hold`:e.armL.rotation.z=1.35,e.armR.rotation.z=1.35,e.armL.rotation.x=-.2,e.armR.rotation.x=.2;break;case`sad`:e.head.rotation.z=-.45,e.armL.rotation.x=2.3,e.armR.rotation.x=-2.3,e.armL.rotation.z=.9,e.armR.rotation.z=.9,o.position.y=-.04,i>0&&(o.scale.y=1-.18*i,o.rotation.z=-.25*i)}}function tm(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`),r=n.createRadialGradient(32,32,0,32,32,32);return r.addColorStop(0,e),r.addColorStop(.4,e+`88`),r.addColorStop(1,e+`00`),n.fillStyle=r,n.fillRect(0,0,64,64),Qp(t,!1)}function nm(){let e=new Z(new ll(.26,1),new vl({color:`#ffffff`,gradientMap:Yp(),emissive:`#7fe9ff`,emissiveIntensity:.25})),t=new Z(new ll(.265,0),new ac({color:`#2a1d48`,wireframe:!0}));e.add(t);let n=new $s(new zs({map:tm(`#00f0ff`),blending:2,depthWrite:!1,transparent:!0}));n.scale.setScalar(1.4);let r=new Z(new tl(.3,10),new ac({color:`#000000`,transparent:!0,opacity:.45,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=Array.from({length:24},()=>new q),a=new zc(new ks().setFromPoints(i),new jc({color:`#00f0ff`,transparent:!0,opacity:.8}));return a.frustumCulled=!1,{mesh:e,glow:n,shadow:r,trail:a,trailPts:i}}function rm(e){let t=document.createElement(`canvas`);t.width=s.L*2,t.height=s.W*2;let n=t.getContext(`2d`);for(let r=0;r<s.L;r+=40)n.fillStyle=Math.floor(r/40)%2==0?e.palette.grassA:e.palette.grassB,n.fillRect(r*2,0,80,t.height);n.strokeStyle=e.palette.line,n.lineWidth=2;let r=(e,t,r,i)=>n.strokeRect(e*2,t*2,r*2,i*2);r(1,1,s.L-2,s.W-2),n.beginPath(),n.moveTo(s.L/2*2,0),n.lineTo(s.L/2*2,t.height),n.stroke(),n.beginPath(),n.arc(s.L/2*2,s.W/2*2,s.centerRadius*2,0,Math.PI*2),n.stroke(),r(0,s.boxTop,s.boxDepth,s.boxBottom-s.boxTop),r(s.L-s.boxDepth,s.boxTop,s.boxDepth,s.boxBottom-s.boxTop),r(0,s.smallBoxTop,s.smallBoxDepth,s.smallBoxBottom-s.smallBoxTop),r(s.L-s.smallBoxDepth,s.smallBoxTop,s.smallBoxDepth,s.smallBoxBottom-s.smallBoxTop),n.fillStyle=e.palette.line;for(let e of[s.penaltySpot,s.L/2,s.L-s.penaltySpot])n.fillRect(e*2-2,s.W/2*2-2,4,4);return t}function im(){let e=document.createElement(`canvas`);e.width=32,e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#120a22`,t.fillRect(0,0,32,64);let n=[`#00e5ff`,`#ffd23f`,`#ff2bd6`,`#a6ff00`,`#ffffff`];for(let e=2;e<64;e+=5)for(let r=2;r<32;r+=5)Math.random()<.35&&(t.fillStyle=n[Math.floor(Math.random()*n.length)],t.fillRect(r,e,2,3));return e}function am(e,t,n){let r=document.createElement(`canvas`);r.width=e.measure(t)+8,r.height=13;let i=r.getContext(`2d`);return i.fillStyle=`#07040e`,i.fillRect(0,0,r.width,r.height),i.fillStyle=n,i.fillRect(0,0,r.width,1),i.fillRect(0,r.height-1,r.width,1),e.draw(i,t,4,3,n),r}function om(e,t,n){let r=new Oo,i=e.palette,a=new Z(new ul(140,90),new yl({color:`#100b1a`}));a.rotation.x=-Math.PI/2,a.position.y=-.02,r.add(a);let o=Qp(rm(e)),c=new Z(new ul(pm,mm),new yl({map:o,emissive:`#ffffff`,emissiveMap:o,emissiveIntensity:.32}));c.rotation.x=-Math.PI/2,r.add(c);let l=new ac({color:`#ffffff`}),u=new jc({color:`#c8b8ff`,transparent:!0,opacity:.45}),d=s.crossbar*fm,f=(s.goalTop-s.W/2)*fm,p=(s.goalBottom-s.W/2)*fm,m=s.goalDepth*fm;for(let e of[-1,1]){let t=e*pm/2,n=new ac({color:e<0?i.farRail:i.nearRail,transparent:!0,opacity:.35});for(let e of[f,p]){let i=new Z(new nl(.07,.07,d,8),l);i.position.set(t,d/2,e);let a=new Z(new nl(.16,.16,d,8),n);a.position.copy(i.position),r.add(i,a)}let a=new Z(new nl(.07,.07,p-f,8),l);a.rotation.x=Math.PI/2,a.position.set(t,d,(f+p)/2),r.add(a);let o=new el(m,d*.85,p-f,4,5,8),s=new Hc(new fl(o),u.clone());o.dispose(),s.position.set(t+e*m/2,d*.85/2,(f+p)/2),r.add(s)}let h=new yl({color:`#1a0f2e`}),g=(e,t,n,i,a)=>{let o=new Z(new el(e,.7,t),h);o.position.set(n,.35,i);let s=new Z(new el(e+.02,.07,t+.04),new ac({color:a}));s.position.set(n,.72,i),r.add(o,s)};g(pm+3,.2,0,-mm/2-.4,i.farRail),g(pm+3,.2,0,mm/2+.4,i.nearRail);for(let e of[-1,1]){let t=e*(pm/2+m+.6);g(.2,mm+1,t,0,e<0?i.farRail:i.nearRail)}let _=[],v=new yl({color:`#160c28`});for(let e of[-1,1])for(let t=0;t<4;t++){let n=new Z(new el(pm+6,.5,.9),v),i=e*(mm/2+1.6+t*.9);n.position.set(0,.25+t*.5,i),r.add(n);for(let e=-pm/2-2;e<=pm/2+2;e+=.55)Math.random()<.12||_.push({x:e+(Math.random()-.5)*.15,y:.5+t*.5+.21,z:i,phase:Math.random()*Math.PI*2})}let y=new Ec(new el(.3,.42,.24),new yl({color:`#ffffff`}),_.length),b=[...n,`#00e5ff`,`#ff2bd6`,`#ffd23f`,`#a6ff00`,`#f4f1ff`,`#9b6bff`],x=new Do,S=new X;_.forEach((e,t)=>{x.position.set(e.x,e.y,e.z),x.updateMatrix(),y.setMatrixAt(t,x.matrix),y.setColorAt(t,S.set(b[t%b.length]))}),r.add(y);let C=Qp(im());C.wrapS=C.wrapT=$r;let w=new yl({color:i.buildingNear,emissive:`#ffffff`,emissiveMap:C,emissiveIntensity:.8,map:C});for(let e=0;e<26;e++){let t=3+Math.random()*4,n=8+Math.random()*18,i=e/26*Math.PI*2,a=46+Math.random()*10,o=new Z(new el(t,n,t),w);o.position.set(Math.cos(i)*a,n/2-.5,Math.sin(i)*a*.75),r.add(o)}let T=[[`NEON LEAGUE`,`#ff2bd6`,0,7,-24],[e.signs[1]??`KAIJU COLA`,`#00e5ff`,-18,5,-22],[e.signs[2]??`RAMEN 24H`,`#ffd23f`,18,5.5,-22],[e.name,`#a6ff00`,0,5,24]];for(let[e,n,i,a,o]of T){let s=am(t,e,n),c=Qp(s),l=new Z(new ul(s.width*.09,s.height*.09),new ac({map:c,side:2}));l.position.set(i,a,o),o>0&&(l.rotation.y=Math.PI),r.add(l)}if(e.theme===`dome`){let e=new Hc(new fl(new dl(42,18,10,0,Math.PI*2,0,Math.PI/2)),new jc({color:`#8a3dff`,transparent:!0,opacity:.35}));e.scale.set(1,.55,.8),r.add(e)}if(e.theme===`factory`){let e=new yl({color:i.buildingNear}),t=new ac({color:`#ff2b4a`});for(let[n,i,a]of[[-30,-34,26],[-10,-40,32],[16,-36,24],[34,-30,30]]){let o=new Z(new nl(1.2,1.6,a,10),e);o.position.set(n,a/2,i);let s=new Z(new dl(.35,6,4),t);s.position.set(n,a+.4,i),r.add(o,s)}}r.add(new ru(`#6a4aa8`,.9)),r.add(new zl(`#7fe9ff`,`#ff2bd6`,.55));let E=new nu(`#ffffff`,1.6);E.position.set(-8,20,12),r.add(E);let D=new $l(i.farRail,30,40);D.position.set(-14,6,0);let O=new $l(i.nearRail,30,40);return O.position.set(14,6,0),r.add(D,O),{root:r,crowd:y,crowdBase:_}}function sm(e,t,n){let r=new Do,i=4+n*8,a=.04+n*.2;e.crowdBase.forEach((n,o)=>{r.position.set(n.x,n.y+Math.max(0,Math.sin(t*i+n.phase))*a,n.z),r.updateMatrix(),e.crowd.setMatrixAt(o,r.matrix)}),e.crowd.instanceMatrix.needsUpdate=!0}function cm(e,t=260){let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new X;for(let a=0;a<t;a++)i.set(e[a%e.length]),r.set([i.r,i.g,i.b],a*3),n.set([0,-100,0],a*3);let a=new ks;a.setAttribute(`position`,new ms(n,3)),a.setAttribute(`color`,new ms(r,3));let o=new Jc(a,new Uc({size:.16,vertexColors:!0}));return o.frustumCulled=!1,{points:o,vel:new Float32Array(t*3),life:0}}function lm(e,t,n,r){let i=e.points.geometry.getAttribute(`position`);for(let a=0;a<i.count;a++){i.setXYZ(a,t+(Math.random()-.5),n+Math.random(),r+(Math.random()-.5));let o=Math.random()*Math.PI*2,s=2+Math.random()*5;e.vel.set([Math.cos(o)*s,4+Math.random()*7,Math.sin(o)*s],a*3)}i.needsUpdate=!0,e.life=3}function um(e){let t=e.points.geometry.getAttribute(`position`);for(let e=0;e<t.count;e++)t.setXYZ(e,0,-100,0);t.needsUpdate=!0,e.life=0}function dm(e,t){if(e.life<=0)return;e.life-=t;let n=e.points.geometry.getAttribute(`position`);for(let r=0;r<n.count;r++){e.vel[r*3+1]-=9*t,e.vel[r*3]*=.99,e.vel[r*3+2]*=.99;let i=n.getY(r)+e.vel[r*3+1]*t;i<.02&&(i=.02,e.vel[r*3+1]=0,e.vel[r*3]*=.6,e.vel[r*3+2]*=.6),n.setXYZ(r,n.getX(r)+e.vel[r*3]*t,i,n.getZ(r)+e.vel[r*3+2]*t)}n.needsUpdate=!0}var fm,pm,mm,hm,gm,_m,vm=n((()=>{zp(),_(),Wp(),fm=Up,pm=s.L*fm,mm=s.W*fm,hm=null,gm=(e,t=`#000000`,n=0)=>new vl({color:e,gradientMap:Yp(),emissive:t,emissiveIntensity:n}),_m={leg:new el(.2,.58,.22),boot:new el(.34,.14,.24),shorts:new el(.42,.26,.56),torso:new nl(.3,.25,.62,8),arm:new el(.14,.5,.14),hand:new dl(.09,6,4),head:new dl(.44,12,9),hair:new dl(.46,12,6,0,Math.PI*2,0,Math.PI*.45),visor:new el(.16,.13,.62),stripe:new el(.04,.6,.12),shadow:new tl(.5,12)}})),ym=r({Replay3DScene:()=>wm}),bm,xm,Sm,Cm,wm,Tm=n((()=>{zp(),_(),oe(),Ue(),Wp(),ln(),Jp(),vm(),bm=.7,xm=new q(0,21,25),Sm=new q(0,0,1.2),Cm={goal:`¡GOOOL!`,save:`¡QUÉ ATAJADA!`,post:`¡AL PALO!`,nearMiss:`¡CASI!`,chaos:`¡PINBALL!`,collision:`¡CRASH!`,tackle:`¡ROBO!`,zap:`¡BZZZT!`,tail:`¡FINAL!`},wm=class{pkg;renderer;scene=new Io;cam;arena;players=[];prevY=[];ball;confetti;steps=[];stepIdx=0;stepT=0;plans=[];tau=0;seg=0;holdT=0;reacted=!1;reactionT=0;lastShot=null;pixel=10;size={w:480,h:270};time=0;excitement=0;sample=null;disposed=!1;hazardMeshes=[];barrierMeshes=[];onSfx=null;onSlowmo=null;constructor(e,t,n){this.pkg=t,this.renderer=new Rp({canvas:e,antialias:!1,powerPreference:`high-performance`}),this.renderer.setPixelRatio(1),this.scene.background=new X(`#0b0618`),this.scene.fog=new Fo(`#140a26`,.014),this.cam=new qp(16/9);let r=He(t.stadiumId);this.arena=om(r,n,[t.teams[0].colors.primary,t.teams[1].colors.primary]),this.scene.add(this.arena.root),r.hazard?.kind===`barriers`&&r.hazard.sectors.forEach((e,t)=>(e.barriers??[]).forEach(e=>{let n=e.rect,r=new el((n.x1-n.x0)*.1,2,(n.y1-n.y0)*.1),i=new Z(r,new ac({color:`#ff2bd6`,transparent:!0,opacity:.55,depthWrite:!1}));i.add(new Hc(new cl(r),new jc({color:`#00f0ff`}))),i.visible=!1,this.scene.add(i),this.barrierMeshes.push({sector:t,def:e,mesh:i})})),r.hazard?.sectors.forEach((e,t)=>e.rects.forEach(e=>{let n=new ul((e.x1-e.x0)*.1,(e.y1-e.y0)*.1),r=new Z(n,new ac({color:`#ffb000`,transparent:!0,opacity:0,depthWrite:!1}));r.rotation.x=-Math.PI/2;let[i,,a]=Hp((e.x0+e.x1)/2,(e.y0+e.y1)/2);r.position.set(i,.04,a);let o=new Hc(new cl(n),new jc({color:`#ffb000`,transparent:!0,opacity:.6}));o.rotation.copy(r.rotation),o.position.set(i,.05,a),this.scene.add(r,o),this.hazardMeshes.push({sector:t,mesh:r})}));for(let e=0;e<10;e++){let n=t.teams[e<5?0:1],r=e%5,i=$p(j(n,r),r===0);this.players.push(i),this.prevY.push(0),this.scene.add(i.root)}this.ball=nm(),this.scene.add(this.ball.mesh,this.ball.glow,this.ball.shadow,this.ball.trail),this.confetti=cm([t.teams[0].colors.primary,t.teams[1].colors.primary,`#ffffff`,`#ffd23f`]),this.scene.add(this.confetti.points),this.plans=t.moments.map(e=>Gp(e)),this.steps.push({kind:`intro`,dur:1.9,idx:0}),t.moments.forEach((e,t)=>{t>0&&this.steps.push({kind:`swap`,dur:.55,idx:t}),this.steps.push({kind:`moment`,dur:1/0,idx:t})}),this.steps.push({kind:`outro`,dur:1.7,idx:Math.max(0,t.moments.length-1)}),this.steps.push({kind:`done`,dur:1/0,idx:0}),this.cam.cut(xm,Sm,42),t.moments.length&&(this.tau=this.plans[0][0]?.from??t.moments[0].start,this.applySample(t.moments[0],this.tau,0))}resize(e,t){this.size={w:Math.max(32,e),h:Math.max(18,t)},this.cam.camera.aspect=this.size.w/this.size.h,this.cam.camera.updateProjectionMatrix(),this.applyPixel(!0)}applyPixel(e=!1){let t=Math.max(1,Math.round(this.pixel)),n=Math.max(16,Math.floor(this.size.w/t)),r=Math.max(9,Math.floor(this.size.h/t)),i=this.renderer.getSize(new K);(e||i.x!==n||i.y!==r)&&this.renderer.setSize(n,r,!1)}get done(){return this.steps[this.stepIdx]?.kind===`done`}skip(){let e=this.steps.findIndex(e=>e.kind===`outro`);this.stepIdx<e&&(this.stepIdx=e,this.stepT=0,this.onSlowmo?.(!1),this.onSfx?.(`whoosh`))}nextStep(){this.stepIdx=Math.min(this.steps.length-1,this.stepIdx+1),this.stepT=0;let e=this.steps[this.stepIdx];e.kind===`moment`&&(this.seg=0,this.holdT=0,this.reacted=!1,this.reactionT=0,this.lastShot=null,this.tau=this.plans[e.idx][0]?.from??this.pkg.moments[e.idx].start,um(this.confetti)),(e.kind===`swap`||e.kind===`outro`)&&this.onSfx?.(e.kind===`swap`?`glitch`:`whoosh`)}update(e){this.time+=e,this.stepT+=e;let t=this.steps[this.stepIdx],n=this.pkg.moments,r={phase:t.kind,phaseT:this.stepT,phaseDur:t.dur,momentIndex:t.idx,momentCount:n.length,title:``,subtitle:``,cardT:-1,slowmo:!1,reaction:null,reactionColor:`#ffffff`,reactionT:0,letterbox:0,flash:0,pixel:this.pixel};switch(this.excitement=Math.max(0,this.excitement-e*.5),t.kind){case`intro`:{let i=Math.min(1,this.stepT/t.dur),a=i*i*(3-2*i);this.pixel=10-9*Math.min(1,i*1.25);let o=n[0];if(o){this.applySample(o,this.tau,e*0);let n=this.shotPose(`orbit`,o,this.sample),i=xm.clone().lerp(n.pos,a),s=Sm.clone().lerp(n.target,a);this.cam.cut(i,s,42+(n.fov-42)*a),this.fillCard(r,o,0),r.cardT=this.stepT-t.dur+.6}r.letterbox=a,this.stepT>=t.dur&&this.nextStep();break}case`swap`:r.flash=1-this.stepT/t.dur,r.letterbox=1,this.pixel=1+5*Math.sin(Math.min(1,this.stepT/t.dur)*Math.PI),this.stepT>=t.dur&&this.nextStep();break;case`moment`:this.updateMoment(e,t.idx,r);break;case`outro`:{let n=Math.min(1,this.stepT/t.dur),i=n*n*(3-2*n);this.pixel=1+11*i,this.cam.follow(xm,Sm,42,e,2+i*10),r.letterbox=1-i,this.stepT>=t.dur&&this.nextStep();break}}return r.pixel=this.pixel,this.applyPixel(),sm(this.arena,this.time,this.excitement),dm(this.confetti,e),r}fillCard(e,t,n){let r=this.pkg.playerNames,i=t.team===null?null:this.pkg.teams[t.team];e.title=t.title;let a=t.actor>=0?`${t.subtitle?t.subtitle+` `:``}${r[t.actor]}`:``,o=Math.floor(t.clock/60),s=Math.floor(t.clock%60).toString().padStart(2,`0`);e.subtitle=[a,i?.name??``,t.kind===`tail`?``:`${o}:${s}`].filter(Boolean).join(` · `),e.momentIndex=n}updateMoment(e,t,n){let r=this.pkg.moments[t],i=this.plans[t];this.fillCard(n,r,t),n.letterbox=1,n.cardT=this.stepT;let a=i[Math.min(this.seg,i.length-1)];if(!a){this.nextStep();return}let o=this.seg>=i.length,s=o?0:a.speed;if(!o){if(this.tau+=e*s,this.tau>=a.to){this.tau=a.to,this.seg++;let e=i[this.seg];e&&e.shot===`dolly`&&(this.onSfx?.(`slowmo`),this.onSlowmo?.(!0)),a.shot===`dolly`&&this.onSlowmo?.(!1)}}else if(this.holdT+=e,this.holdT>=bm){this.onSlowmo?.(!1),this.nextStep();return}let c=o?`closeup`:a.shot;n.slowmo=!o&&a.speed<=.280001,(c===`closeup`||o)&&!this.reacted&&(this.reacted=!0,this.reactionT=0,this.triggerReaction(r)),this.reacted&&(this.reactionT+=e,n.reaction=Cm[r.kind],n.reactionT=this.reactionT,n.reactionColor=r.team===null?`#ffd23f`:this.pkg.teams[r.team].colors.primary),this.applySample(r,this.tau,e*Math.max(s,.2),this.reacted);let l=this.shotPose(c,r,this.sample);c!==this.lastShot&&this.lastShot!==null&&c!==`dolly`?this.cam.cut(l.pos,l.target,l.fov):this.cam.follow(l.pos,l.target,l.fov,e,c===`dolly`?2.5:4),this.cam.roll=c===`dolly`?Math.sin(this.time*.8)*.06:0,this.lastShot=c,o&&(n.flash=Math.max(0,(this.holdT-bm+.25)/.25)*.6)}triggerReaction(e){if(e.kind===`goal`){this.excitement=1;let t=this.sample;if(t&&e.actor>=0){let n=t.players[e.actor],[r,,i]=Hp(n.x,n.y);lm(this.confetti,r,1.5,i)}this.onSfx?.(`goal`)}else e.kind===`save`?(this.excitement=.6,this.onSfx?.(`save`)):e.kind===`collision`?this.onSfx?.(`ouch`):this.excitement=.4}applySample(e,t,n,r=!1){let i=Vp(e.frames,t);this.sample=i,i.players.forEach((n,i)=>{let a=this.players[i],[o,s,c]=Hp(n.x,n.y,n.z);a.root.position.set(o,s,c),Math.hypot(n.fx,n.fy)>.01&&(a.root.rotation.y=Math.atan2(-n.fy,n.fx));let l=n.y-this.prevY[i];this.prevY[i]=n.y;let u=n.anim,d=0;if(r){let t=e.team!==null&&(i<5?0:1)===e.team;e.kind===`goal`&&t&&(i===e.actor||u===`celebrate`)?(u=`celebrate`,d=1):e.kind===`goal`&&!t&&(u===`sad`||u===`fall`)?d=1:((e.kind===`post`||e.kind===`nearMiss`)&&i===e.actor||e.kind===`save`&&i===e.secondary)&&(u=`sad`,d=1)}em(a,u,t*13+i,this.time,d,l>=0?-1:1)});let[a,o,s]=Hp(i.bx,i.by,i.bz);for(let e of this.barrierMeshes){let t=i.hz>=0&&Math.floor(i.hz/2)===e.sector,n=t&&i.hz%2==1;if(e.mesh.visible=t,!t)continue;let r=rn(e.def,n?i.ht:0),[a,,o]=Hp((r.x0+r.x1)/2,(r.y0+r.y1)/2);e.mesh.position.set(a,1,o);let s=e.mesh.material;s.opacity=n?Math.floor(this.time*15)%7==0?.25:.55:Math.floor(this.time*6)%2?.2:.05,e.mesh.scale.x=n&&Math.floor(this.time*20)%11==0?1.15:1}for(let e of this.hazardMeshes){let t=e.mesh.material,n=i.hz>=0&&Math.floor(i.hz/2)===e.sector,r=n&&i.hz%2==1;t.color.set(r?Math.floor(this.time*20)%2?`#7fe9ff`:`#ffffff`:`#ffb000`),t.opacity=n?r?.55:Math.floor(this.time*6)%2?.4:.15:0}let c=this.ball.mesh.position.clone();this.ball.mesh.position.set(a,o+.26,s);let l=c.distanceTo(this.ball.mesh.position);n>0&&(this.ball.mesh.rotation.z-=l*3,this.ball.mesh.rotation.x+=l*1.3),this.ball.glow.position.copy(this.ball.mesh.position),this.ball.shadow.position.set(a,.03,s);let u=this.ball.trailPts;for(let e=0;e<u.length-1;e++)u[e].copy(u[e+1]);if(u[u.length-1].copy(this.ball.mesh.position),l>1.5)for(let e of u)e.copy(this.ball.mesh.position);this.ball.trail.geometry.setFromPoints(u);let d=e.team===null?`#00f0ff`:this.pkg.teams[e.team].colors.primary;this.ball.trail.material.color.set(d)}shotPose(e,t,n){let[r,i,a]=Hp(n.bx,n.by,n.bz),o=new q(r,i,a),s=t.team===null?1:u(t.team);switch(e){case`orbit`:{let e=-.5*s+this.tau*.25;return{pos:new q(r+Math.sin(e)*12,7.5,a+Math.cos(e)*12),target:o,fov:50}}case`track`:return{pos:new q(r-s*5,3,a+8.5),target:o.clone().add(new q(s*2,.4,0)),fov:48};case`dolly`:{let e=Math.max(-20,Math.min(20,r-s*3.2));return{pos:new q(e,1.6+i*.5,a+4.6),target:o,fov:38}}default:{let e=t.actor>=0?n.players[t.actor]:null,[i,,o]=e?Hp(e.x,e.y):[r,0,a],s=this.time*.55;return{pos:new q(i+Math.cos(s)*4.3,2.1,o+3.2+Math.sin(s)*1.4),target:new q(i,1.25,o),fov:40}}}}render(){this.disposed||this.renderer.render(this.scene,this.cam.camera)}dispose(){this.disposed||(this.disposed=!0,Zp(this.scene),Xp(),this.renderer.dispose(),this.renderer.forceContextLoss())}}})),Em=5,Dm=class{app;setup;pkg;frozen;overlay3D=!0;scene=null;loading=!0;failed=null;failT=0;loadT=0;state=null;leaving=!1;resizeHandler=()=>this.resize();constructor(e,t,n,r){this.app=e,this.setup=t,this.pkg=n,this.frozen=r}enter(){if(this.app.audio.setMusic(`replay`),this.pkg.moments.length===0){this.fail(`SIN JUGADAS PARA REPETIR`);return}let e=this.app.fresh3DCanvas();this.app.set3DMode(!0),mr(async()=>{let{Replay3DScene:e}=await Promise.resolve().then(()=>(Tm(),ym));return{Replay3DScene:e}},void 0,{}.url).then(({Replay3DScene:t})=>{if(!this.leaving)try{let n=new t(e,this.pkg,this.app.font);n.onSfx=e=>this.app.audio.play(e),n.onSlowmo=e=>this.app.audio.setMuffled(e),this.scene=n,this.loading=!1,this.resize(),this.app.display.onResize=this.resizeHandler,this.app.audio.play(`whoosh`)}catch(e){console.error(e),this.fail(`WEBGL NO DISPONIBLE`)}}).catch(e=>{console.error(e),this.fail(`NO SE PUDO CARGAR EL REPLAY`)})}fail(e){this.failed=e,this.loading=!1,this.app.set3DMode(!1)}resize(){if(!this.scene)return;let{w:e,h:t}=this.app.display.cssSize;this.scene.resize(Math.min(e,1600),Math.min(t,900))}exit(){this.leaving=!0,this.app.display.onResize=null,this.app.audio.setMuffled(!1);try{this.scene?.dispose()}catch(e){console.error(e)}this.scene=null,this.app.set3DMode(!1)}finish(){this.leaving||(this.leaving=!0,this.app.goTo(new pr(this.app,this.setup,this.pkg,!0)))}update(e){let t=this.app.input.nav(`any`);if(this.failed)this.failT+=e,(this.failT>1.6||t.confirm)&&this.finish();else if(this.loading)this.loadT+=e,this.loadT>Em&&this.fail(`EL REPLAY TARDO DEMASIADO`);else if(this.scene){(t.confirm||t.back)&&this.state&&this.state.phase!==`outro`&&this.scene.skip();try{this.state=this.scene.update(e)}catch(e){console.error(e),this.fail(`ERROR EN EL REPLAY`);return}this.scene.done&&this.finish()}}render(e,t){let n=this.app.font;if(this.failed||this.loading)this.failed?(e.fillStyle=V.bg,e.fillRect(0,0,480,270),n.draw(e,this.failed,240,120,V.magenta,{scale:2,align:`center`}),n.draw(e,`MOSTRANDO RESULTADOS...`,240,145,V.dim,{align:`center`})):(Qn(e,this.frozen,1,t),n.draw(e,`RECONSTRUYENDO ARENA...`,240,130,V.cyan,{align:`center`,outline:V.dark}));else if(this.scene&&this.state){try{this.scene.render()}catch(e){console.error(e),this.fail(`ERROR DE RENDER 3D`);return}this.drawOverlay(e,this.state,t)}}drawOverlay(e,t,n){let r=this.app.font,i=Math.round(20*t.letterbox);if(i>0&&(e.fillStyle=`#000000`,e.fillRect(0,0,480,i),e.fillRect(0,270-i,480,i)),t.phase===`intro`){let r=Math.min(1,t.phaseT/1.1);r<1&&(t.phaseT<.25?Qn(e,this.frozen,1-t.phaseT*2,n):nr(e,this.frozen,r))}if((t.phase===`moment`||t.phase===`intro`||t.phase===`swap`)&&(Math.floor(n*2)%2==0&&(e.fillStyle=V.red,e.fillRect(372,7,5,5)),r.draw(e,`NEON REPLAY`,380,6,V.white),r.draw(e,`${t.momentIndex+1}/${t.momentCount}`,472,6,V.cyan,{align:`right`})),t.cardT>=0&&t.cardT<2.6&&t.title){let n=Math.min(1,t.cardT/.25)*(t.cardT>2.3?Math.max(0,(2.6-t.cardT)/.3):1),i=Math.max(r.measure(t.title,2),r.measure(t.subtitle))+20,a=Math.round(-i+(i+10)*n);e.fillStyle=`rgba(7,4,14,0.85)`,e.fillRect(a,30,i,38),e.fillStyle=V.magenta,e.fillRect(a,30,i,1),e.fillRect(a+i-2,30,2,38),r.draw(e,`REPLAY ${t.momentIndex+1}`,a+8,34,V.magenta),r.draw(e,t.title,a+8,44,V.white,{scale:2}),t.subtitle&&r.draw(e,t.subtitle,a+8,60,V.cyan)}if(t.slowmo&&Math.floor(n*3)%2==0&&r.draw(e,`◀◀ x0.3 CAMARA LENTA`,10,255,V.yellow),t.reaction&&t.reactionT<1.8){let n=t.reactionT<.08?5:4,i=104-Math.round(Math.max(0,.15-t.reactionT)*60);r.draw(e,t.reaction,240,i,t.reactionColor,{scale:n,align:`center`,outline:V.dark})}if(t.flash>0&&(e.fillStyle=`rgba(255,255,255,${Math.min(1,t.flash)*.8})`,e.fillRect(0,0,480,270)),t.phase===`outro`||t.phase===`done`){let n=t.phase===`done`?1:Math.max(0,(t.phaseT-t.phaseDur+.7)/.7);n>0&&nr(e,V.bg,1-n)}t.phase!==`outro`&&t.phase!==`done`&&r.draw(e,`ESPACIO: SALTAR`,472,255,V.dim,{align:`right`})}};Ue();var Om=10,km=class e{app;setup;match;renderer;hud;recorder;acc=0;paused=!1;showControls=!1;pauseMenu;endT=-1;frozen=null;pkg=null;constructor(t,n){this.app=t,this.setup=n;let r=t.save.data.bindings,i=n.campaignRound===void 0?null:B[n.campaignRound],a=i?`RONDA ${n.campaignRound+1} · ${i.rule??i.title}`:null;this.hud=new sr(t.font,[De(r.p1.special),De(r.p2.special)],a),this.pauseMenu=new Ze([{label:`CONTINUAR`,onConfirm:()=>this.paused=!1},{label:`REINICIAR PARTIDO`,onConfirm:()=>this.app.goTo(new e(this.app,this.setup))},{label:`VER CONTROLES`,onConfirm:()=>this.showControls=!0},{label:`SALIR AL MENU`,onConfirm:()=>this.app.goTo(new Nm(this.app))}],160,108,160)}enter(){let e=(Date.now()^Math.floor(Math.random()*1e9))>>>0,t=Me(this.setup,e);this.match=new kn(t);let n=this.match.config.teams,r=new Bn(this.app.font,He(this.setup.stadiumId),[n[0].colors.primary,n[1].colors.primary]);this.renderer=new Mn(this.app.font,this.app.sprites,r,this.match,{shake:this.app.save.data.options.screenShake}),this.recorder=new Jn,this.app.audio.setMusic(`match`),this.app.input.clear(),mr(()=>Promise.resolve().then(()=>(Tm(),ym)),void 0,{}.url).catch(()=>void 0)}onFocusLost(){this.endT<0&&(this.paused=!0)}get solo(){return this.setup.mode===`solo`}update(e){let t=this.app.input;if(this.endT>=0){this.updateEnd(e);return}if(t.pausePressed){this.showControls?this.showControls=!1:(this.paused=!this.paused,this.pauseMenu.index=0),this.app.audio.play(this.paused?`uiBack`:`uiOk`);return}if(this.paused){if(this.showControls){let e=t.nav(`any`);(e.back||e.confirm)&&(this.showControls=!1)}else this.pauseMenu.update(this.app)&&(this.paused=!1);return}let n=this.match;for(let e of[0,1]){let r=n.config.humans[e];if(!r)continue;let i=t.control(r,this.solo);n.setInput(e,{mx:i.mx,my:i.my,shoot:i.shoot,shootPressed:i.shootPressed,passPressed:i.passPressed,switchPressed:i.switchPressed,specialPressed:i.specialPressed})}this.acc+=e;let r=0;for(;this.acc>=Sn.fixedDt&&r<Om;){n.step(Sn.fixedDt);for(let e of n.drainEvents())this.onEvent(e);if(this.recorder.sample(n,Sn.fixedDt),this.acc-=Sn.fixedDt,r++,n.isOver)break}r>=Om&&(this.acc=0),this.renderer.update(e),this.hud.update(e),n.isOver&&this.beginEnd()}onEvent(e){let t=this.app.audio;switch(this.renderer.onEvent(e),this.hud.onEvent(e,this.match),this.recorder.onEvent(e,this.match),e.type){case`kick`:e.kind===`pass`?t.play(`pass`):t.play(`shot`,e.speed/380);break;case`bounce`:t.play(`bounce`,e.speed/200);break;case`wall`:t.play(`wall`,e.speed/250);break;case`post`:t.play(`post`);break;case`goal`:t.play(`goal`);break;case`save`:t.play(`save`);break;case`tackle`:t.play(`tackle`);break;case`collision`:t.play(`ouch`);break;case`whistle`:t.play(e.kind===`end`?`whistleEnd`:`whistle`);break;case`special`:t.play(`special`);break;case`hazard`:e.phase===`warning`?t.play(`hazard`):e.phase===`active`&&t.play(this.match.hazard.kind===`barriers`?`glitch`:`zap`,.6);break;case`zap`:t.play(`zap`);break;case`boss`:e.phase===`warning`?t.play(`hazard`):e.phase===`active`&&t.play(`special`);break;case`penalty`:t.play(e.result===`goal`?`goal`:`save`)}}beginEnd(){this.endT=0,this.recorder.flush();let e=this.match,t=Gn(this.recorder.moments,2);if(t.length===0){let e=this.recorder.tailMoment();t=e?[e]:[]}this.pkg={moments:t,teams:e.config.teams,playerNames:e.players.map(e=>e.name),result:e.result,stadiumId:this.setup.stadiumId,lastFrame:this.recorder.lastFrame()}}updateEnd(e){this.endT+=e,this.renderer.update(e*.2),this.endT>1.5&&!this.frozen&&(this.frozen=Zn(this.app.canvas2d),this.app.audio.play(`glitch`));let t=this.app.input.nav(`any`).confirm&&this.endT>.6;(this.endT>2.6||t&&this.frozen)&&(this.frozen||=Zn(this.app.canvas2d),this.app.goTo(new Dm(this.app,this.setup,this.pkg,this.frozen)))}render(e,t){if(this.frozen&&this.endT>1.5)Qn(e,this.frozen,Math.min(1,(this.endT-1.5)/1),t);else{if(this.renderer.render(e,t),this.hud.render(e,this.match,t,[!!this.app.input.padFor(1),!!this.app.input.padFor(2)]),this.endT>=0){let t=this.match.result;e.fillStyle=`rgba(7,4,14,0.55)`,e.fillRect(0,100,480,64),this.app.font.draw(e,`FINAL DEL PARTIDO`,240,110,V.magenta,{scale:3,align:`center`,shadow:V.dark});let n=t.penalties?`  (PEN ${t.penalties[0]}-${t.penalties[1]})`:``;this.app.font.draw(e,`${t.score[0]} - ${t.score[1]}${n}`,240,140,V.white,{scale:2,align:`center`})}this.paused&&this.renderPause(e,t)}}renderPause(e,t){let n=this.app.font;e.fillStyle=`rgba(7,4,14,0.75)`,e.fillRect(0,0,480,270),this.showControls?(qe(e,40,40,400,190,V.magenta),n.draw(e,`CONTROLES`,240,50,V.magenta,{scale:2,align:`center`}),ar(this.app.save.data.bindings).forEach((t,r)=>n.draw(e,t,56,72+r*11,r%5==0||t.startsWith(`MANDO`)?V.cyan:V.white)),n.draw(e,`ESC / ENTER: VOLVER`,240,214,V.dim,{align:`center`})):(qe(e,140,60,200,128,V.cyan),n.draw(e,`PAUSA`,240,74,V.cyan,{scale:3,align:`center`,shadow:V.magenta}),this.pauseMenu.render(e,n,t))}};oe(),Ue();var Am=e=>40+e*66.6,jm=e=>e%2==0?62:82,Mm=class{app;backdrop=new Je;menu;sel;picking;pickIdx=0;confirmReset=0;constructor(e){this.app=e;let t=e.save.data.campaign;this.sel=Math.min(t.round,B.length-1),this.picking=t.team===null,this.menu=new Ze([{label:()=>`JUGAR RONDA ${this.sel+1}`,onConfirm:()=>this.play(),disabled:()=>!Ne(this.campaign,this.sel)},{label:`CAMBIAR EQUIPO`,onConfirm:()=>this.startPicking()},{label:()=>this.confirmReset>0?`¿SEGURO? PULSA OTRA VEZ`:`REINICIAR CAMPAÑA`,onConfirm:()=>this.reset()},{label:`VOLVER`,onConfirm:()=>this.app.goTo(new Nm(this.app))}],318,116,152,17)}get campaign(){return this.app.save.data.campaign}get choices(){let e=this.campaign.unlockedTeams;return P.filter(t=>e.includes(t.id)&&![`thewall`,`drones`,`idols`].includes(t.id))}enter(){this.app.audio.setMusic(`menu`)}startPicking(){this.picking=!0;let e=this.choices.findIndex(e=>e.id===this.campaign.team);this.pickIdx=Math.max(0,e)}reset(){this.confirmReset<=0?this.confirmReset=2.5:(Ie(this.campaign),this.app.persist(),this.confirmReset=0,this.sel=0,this.picking=!0,this.app.toast(`CAMPAÑA REINICIADA (LOS EQUIPOS SE CONSERVAN)`))}play(){let e=this.campaign;if(!Ne(e,this.sel)||!e.team)return;let t=B[this.sel],n=Le(e,this.sel),r=t.mods.boss!==void 0;this.app.goTo(new tt(this.app,t.intro,{player:ue(e.team),rival:ue(t.rival),title:`RONDA ${this.sel+1}: ${t.title}`,subtitle:t.rule??void 0,boss:r},()=>new km(this.app,n)))}update(e){this.confirmReset=Math.max(0,this.confirmReset-e);let t=this.app.input.nav(`any`);if(this.picking){let e=this.choices.length;(t.left||t.up)&&(this.pickIdx=(this.pickIdx-1+e)%e,this.app.audio.play(`uiMove`)),(t.right||t.down)&&(this.pickIdx=(this.pickIdx+1)%e,this.app.audio.play(`uiMove`)),t.confirm?(this.campaign.team=this.choices[this.pickIdx].id,this.app.persist(),this.picking=!1,this.app.audio.play(`uiOk`)):t.back&&(this.app.audio.play(`uiBack`),this.campaign.team?this.picking=!1:this.app.goTo(new Nm(this.app)));return}t.left&&this.sel>0&&(this.sel--,this.app.audio.play(`uiMove`)),t.right&&this.sel<B.length-1&&(this.sel++,this.app.audio.play(`uiMove`));let n=this.app.input.mouse;n.clicked&&B.forEach((e,t)=>{Math.abs(n.x-Am(t))<11&&Math.abs(n.y-jm(t))<11&&(this.sel=t)}),this.menu.update(this.app)&&(this.app.audio.play(`uiBack`),this.app.goTo(new Nm(this.app)))}render(e,t){let n=this.app.font,r=this.campaign;if(this.backdrop.draw(e,t),e.fillStyle=`rgba(7,4,14,0.62)`,e.fillRect(0,0,480,270),$e(e,n,`THE NEON CIRCUIT`,6),r.team){let t=ue(r.team);M(e,t,10,27,1),n.draw(e,t.name,23,28,t.colors.primary)}let i=r.wins.filter(e=>e>0).length;n.draw(e,r.finished?`★ CAMPEON DEL CIRCUITO ★`:`SUPERADAS ${i}/${B.length}`,470,28,r.finished?V.yellow:V.dim,{align:`right`});for(let t=0;t<B.length-1;t++){let n=Pe(r,t);C(e,Am(t),jm(t),Am(t+1),jm(t+1),n?V.acid:`#3a2d5c`)}B.forEach((i,a)=>{let o=Math.round(Am(a)-10),s=jm(a)-10,c=i.mods.boss!==void 0,l=Ne(r,a),u=Pe(r,a),d=a===r.round,f=l?u?V.acid:V.cyan:`#3a2d5c`;d&&Math.floor(t*3)%2&&(f=V.white),qe(e,o,s,20,20,c&&l?V.red:f,c?`#2a0a14`:V.panel),n.draw(e,u?`★`:l?String(a+1):`-`,o+10,s+7,u?V.acid:l?V.white:V.dim,{align:`center`}),c&&n.draw(e,a===B.length-1?`FINAL`:`JEFE`,o+10,s+23,V.red,{align:`center`}),a===this.sel&&(e.fillStyle=V.yellow,e.fillRect(o-2,s-3,24,1),e.fillRect(o-2,s+22,24,1))});let a=B[this.sel],o=ue(a.rival),s=Ne(r,this.sel);if(qe(e,10,112,298,132,a.mods.boss?V.red:V.cyan),n.draw(e,`RONDA ${this.sel+1}: ${a.title}`,18,118,a.mods.boss?V.red:V.cyan),s){if(M(e,o,18,132,3),n.draw(e,`VS ${o.name}`,52,134,o.colors.primary),n.draw(e,o.style,52,145,V.dim),n.draw(e,`ESTADIO: ${He(a.stadiumId).name}`,18,168,V.white),n.draw(e,`DIFICULTAD: ${Ae[a.difficulty].label}`,18,179,V.white),a.rule&&n.wrap(`REGLA: ${a.rule}`,280).forEach((t,r)=>n.draw(e,t,18,192+r*10,V.yellow)),n.draw(e,`V ${r.wins[this.sel]??0} · D ${r.losses[this.sel]??0}`,300,134,V.dim,{align:`right`}),a.unlock){let t=ue(a.unlock),i=r.unlockedTeams.includes(a.unlock);n.draw(e,i?`DESBLOQUEADO: ${t.name}`:`PREMIO: ${t.name}`,18,228,i?V.acid:V.magenta)}}else n.draw(e,`BLOQUEADA`,159,150,V.dim,{scale:2,align:`center`}),n.draw(e,`GANA LA RONDA ANTERIOR PARA ACCEDER`,159,172,V.dim,{align:`center`});this.menu.render(e,n,t),Qe(e,n,`← →: ELEGIR RONDA · ↑↓: MENU · ENTER: ACEPTAR · ESC: VOLVER`),this.picking&&this.renderPicker(e,t)}renderPicker(e,t){let n=this.app.font;e.fillStyle=`rgba(7,4,14,0.85)`,e.fillRect(0,0,480,270);let r=this.choices[this.pickIdx];qe(e,90,40,300,190,r.colors.primary),n.draw(e,`ELIGE TU EQUIPO PARA EL CIRCUITO`,240,48,V.cyan,{align:`center`}),Math.floor(t*3)%2&&(n.draw(e,`◀`,100,100,V.white),n.draw(e,`▶`,374,100,V.white)),M(e,r,213,66,6),n.draw(e,r.name,240,128,r.colors.primary,{scale:2,align:`center`}),n.draw(e,r.style,240,146,V.yellow,{align:`center`});let i=r.stats;n.draw(e,`VEL ${i.speed} · POT ${i.power} · PASE ${i.passing} · DEF ${i.defense} · POR ${i.keeper}`,240,162,V.white,{align:`center`}),n.wrap(r.description,270).forEach((t,r)=>n.draw(e,t,240,178+r*10,`#b9acd9`,{align:`center`})),n.draw(e,`${this.pickIdx+1}/${this.choices.length} · DESBLOQUEA MAS EN LA CAMPAÑA`,240,214,V.dim,{align:`center`})}},Nm=class{app;backdrop=new Je;menu;constructor(e){this.app=e,this.menu=new Ze([{label:`PARTIDO RAPIDO`,onConfirm:()=>e.goTo(new ur(e,`solo`))},{label:`2 JUGADORES LOCAL`,onConfirm:()=>e.goTo(new ur(e,`versus`))},{label:`CAMPAÑA: NEON CIRCUIT`,onConfirm:()=>e.goTo(new Mm(e))},{label:`OPCIONES`,onConfirm:()=>e.goTo(new rr(e))},{label:`CREDITOS`,onConfirm:()=>e.goTo(new fr(e))}],155,122,170,17)}enter(){this.app.audio.setMusic(`menu`)}update(){this.menu.update(this.app)&&(this.app.audio.play(`uiBack`),this.app.goTo(new Pm(this.app)))}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),Ye(e,n,240,18,t,4),qe(e,145,116,190,94,V.magenta,`rgba(7,4,14,0.82)`),this.menu.render(e,n,t);let r=this.app.save.data.stats;n.draw(e,`PARTIDOS ${r.played} · VICTORIAS ${r.wins} · DERROTAS ${r.losses}`,8,246,V.dim);let i=this.app.input.padCount;n.draw(e,i?`MANDOS: ${i}`:`SIN MANDO`,472,246,i?V.acid:V.dim,{align:`right`}),Qe(e,n,`↑↓ / W S: MOVER · ENTER / ESPACIO: ACEPTAR · ESC: VOLVER`)}},Pm=class{app;backdrop=new Je;t=0;constructor(e){this.app=e}enter(){this.app.audio.setMusic(`menu`)}update(e){this.t+=e,this.t>.3&&this.app.input.anyKey&&(this.app.audio.unlock(),this.app.audio.play(`uiOk`),this.app.goTo(new Nm(this.app)))}render(e,t){let n=this.app.font;this.backdrop.draw(e,t),Ye(e,n,240,40,t,5),n.draw(e,`FUTBOL ARCADE DE LA LIGA CLANDESTINA`,240,136,V.yellow,{align:`center`,outline:V.dark}),Math.floor(t*2)%2==0&&n.draw(e,`PULSA CUALQUIER TECLA`,240,196,V.white,{scale:2,align:`center`,outline:V.dark}),n.draw(e,`v0.3 · CAMPAÑA NEON CIRCUIT · TECLADO Y MANDO`,240,252,V.dim,{align:`center`})}};function Fm(e){let t=document.createElement(`div`);t.style.cssText=`color:#ff2bd6;font:16px monospace;padding:24px;text-align:center`,t.textContent=e,document.body.appendChild(t)}try{let e=new ke;e.start(new Pm(e))}catch(e){console.error(e),Fm(`NEON LEAGUE no pudo iniciarse: ${e instanceof Error?e.message:String(e)}`)}})();