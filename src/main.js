import * as THREE from 'three';
import { lua, lauxlib, lualib, to_luastring } from 'fengari';
import mapaLua from './scripts/mapa.lua?raw';
import missaoLua from './scripts/missao.lua?raw';
import './style.css';

const L = lauxlib.luaL_newstate();
lualib.luaL_openlibs(L);
const runLua = (source) => {
  const result = lauxlib.luaL_dostring(L, to_luastring(source));
  if (result !== lua.LUA_OK) throw new Error('Erro Lua: ' + lua.lua_tojsstring(L, -1));
};
runLua(mapaLua);
runLua(missaoLua);
const mapLocations = [];
lua.lua_getglobal(L, to_luastring('mapa'));
lua.lua_getfield(L, -1, to_luastring('locais'));
lua.lua_pushnil(L);
while (lua.lua_next(L, -2)) {
  lua.lua_getfield(L, -1, to_luastring('nome'));
  const name = lua.lua_tojsstring(L, -1); lua.lua_pop(L, 1);
  lua.lua_getfield(L, -1, to_luastring('tipo'));
  const type = lua.lua_tojsstring(L, -1); lua.lua_pop(L, 1);
  lua.lua_getfield(L, -1, to_luastring('posicao'));
  const readCoord = (key) => { lua.lua_getfield(L, -1, to_luastring(key)); const n = lua.lua_tonumber(L, -1); lua.lua_pop(L, 1); return n; };
  const x = readCoord('x'), y = readCoord('y'), z = readCoord('z');
  lua.lua_pop(L, 1);
  mapLocations.push({ name, type, x: x * 0.05, y: -y * 0.05, height: z * 0.05 });
  lua.lua_pop(L, 1);
}
lua.lua_pop(L, 2);
const callLua = (code) => runLua(code);
const luaState = () => {
  lua.lua_getglobal(L, to_luastring('estadoMissao'));
  lua.lua_call(L, 0, 3);
  const state = { active: lua.lua_toboolean(L, -3), done: lua.lua_toboolean(L, -2), reward: lua.lua_tonumber(L, -1) };
  lua.lua_pop(L, 3); return state;
};

const $ = (s) => document.querySelector(s);
const gameEl = $('#game');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#d69869');
scene.fog = new THREE.FogExp2('#d69b72', 0.0095);
const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 260);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
gameEl.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight('#ffe3c4', '#36443f', 2.0));
const sun = new THREE.DirectionalLight('#ffcf95', 3.4);
sun.position.set(-32, 48, 25); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -55; sun.shadow.camera.right = 55; sun.shadow.camera.top = 55; sun.shadow.camera.bottom = -55;
sun.shadow.bias = -0.0004; scene.add(sun);
const fill = new THREE.DirectionalLight('#7aa5a5', 0.7); fill.position.set(30, 18, -30); scene.add(fill);

const mats = {};
const mat = (name, color, roughness = 0.85, metalness = 0) => mats[name] ||= new THREE.MeshStandardMaterial({ color, roughness, metalness });
const plane = (w, d, material, x = 0, z = 0, y = 0) => {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), material);
  mesh.rotation.x = -Math.PI / 2; mesh.position.set(x, y, z); mesh.receiveShadow = true; scene.add(mesh); return mesh;
};
plane(180, 160, mat('earth', '#a69b78'));
plane(85, 100, mat('ocean', '#376b70', 0.35), -58, 0, -0.15);
plane(20, 33, mat('sand', '#d2b37f'), -31, 5, -0.05);

const buildings = [];
const addBox = (w, h, d, material, x, y, z, { shadow = true } = {}) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y + h / 2, z); mesh.castShadow = shadow; mesh.receiveShadow = true; scene.add(mesh); return mesh;
};
const roadMat = mat('road', '#353a39', 0.98);
const sidewalkMat = mat('walk', '#8d8a7b');
const roadX = new Set([-20, -12, -4, 4, 12, 20]);
const roadZ = new Set([-20, -12, -4, 4, 12, 20]);
for (const x of roadX) {
  plane(3.2, 78, roadMat, x, 0, 0.015);
  plane(0.13, 78, mat('line' + x, '#c6b99b'), x - 1.46, 0, 0.027);
  plane(0.13, 78, mat('lineb' + x, '#c6b99b'), x + 1.46, 0, 0.027);
}
for (const z of roadZ) {
  plane(82, 3.2, roadMat, 0, z, 0.018);
  for (let x = -39; x < 40; x += 5) plane(1.7, 0.09, mat('dash' + z + x, '#d6c69d'), x, z, 0.03);
}
// Avenida dourada: a rua segue a rota da missão até as colinas.
const avenue = [[0, 1], [0, -4], [4, -4], [8, -4], [8, -8], [12, -8], [16, -12], [20, -16], [25, -19]];
for (let i = 1; i < avenue.length; i++) {
  const [ax, az] = avenue[i - 1], [bx, bz] = avenue[i];
  const len = Math.hypot(bx - ax, bz - az), angle = Math.atan2(bx - ax, bz - az);
  const segment = plane(3.5, len + 0.1, roadMat, (ax + bx) / 2, (az + bz) / 2, 0.045);
  segment.rotation.z = 0; segment.rotation.y = -angle;
}
// blocks and storefronts, with simple warm lit windows.
let seed = 41;
const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const facades = ['#b8a48c', '#9d9a89', '#c5b39a', '#7b8987', '#b08b73', '#828784', '#c7bca6'];
for (let gx = -2; gx <= 2; gx++) for (let gz = -2; gz <= 2; gz++) {
  const bx = gx * 8, bz = gz * 8;
  if (Math.hypot(bx, bz) < 4) continue;
  for (let ox of [-1.6, 1.7]) for (let oz of [-1.55, 1.65]) {
    const x = bx + ox, z = bz + oz;
    if (x < -19 || x > 19 || z < -19 || z > 19) continue;
    const w = 2.6 + rand() * 1.2, d = 2.4 + rand() * 1.3;
    const h = 2.5 + rand() * (Math.abs(x) < 11 && Math.abs(z) < 11 ? 15 : 8);
    const material = mat('facade' + Math.floor(rand() * facades.length), facades[Math.floor(rand() * facades.length)]);
    const b = addBox(w, h, d, material, x, 0.05, z); buildings.push({ x, z, w, d, h });
    addBox(w + 0.16, 0.22, d + 0.16, mat('roof' + facades.indexOf(material.color.getHexString()), '#514f49'), x, h + 0.05, z, { shadow: false });
    const windowMat = mat('window' + Math.floor(rand() * 5), '#edc58b', 0.4, 0.18);
    if (h > 4) {
      for (let wy = 1.1; wy < h - 0.5; wy += 2.0) {
        for (let wx = -w / 2 + 0.48; wx < w / 2 - 0.25; wx += 0.75) {
          const win = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.42, 0.035), windowMat);
          win.position.set(x + wx, wy, z + d / 2 + 0.018); scene.add(win);
        }
      }
    }
  }
}
// A few memorable Los Santos landmarks.
addBox(1.25, 19, 1.25, mat('tower', '#dfc7a2'), -1, 0, -1);
addBox(2.2, 1.2, 2.2, mat('towercap', '#4b4d48'), -1, 19, -1);
const sign = addBox(7, 1.25, 0.22, mat('sign', '#eee2c3'), 25, 11, -15);
const labelCanvas = document.createElement('canvas'); labelCanvas.width = 512; labelCanvas.height = 96;
const labelCtx = labelCanvas.getContext('2d'); labelCtx.fillStyle = '#e9ddc0'; labelCtx.font = 'bold 68px Arial'; labelCtx.textAlign = 'center'; labelCtx.fillText('VINEWOOD', 256, 72);
const labelTexture = new THREE.CanvasTexture(labelCanvas); labelTexture.colorSpace = THREE.SRGBColorSpace;
const label = new THREE.Mesh(new THREE.PlaneGeometry(7, 1.3), new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true })); label.position.set(25, 11, -14.87); scene.add(label);

// Hill country and mountain silhouette, with scattered pines.
for (let i = 0; i < 13; i++) {
  const x = 22 + i * 1.75, z = -16 - (i % 5) * 2.6, r = 5 + (i % 4) * 1.5, h = 4 + (i % 5) * 2.2;
  const hill = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), mat('hill' + i, ['#777e61', '#858467', '#6e795f'][i % 3]));
  hill.position.set(x, h / 2 - 0.1, z); hill.receiveShadow = true; scene.add(hill);
}
const pineMat = mat('pine', '#4f6755');
for (let i = 0; i < 85; i++) {
  const x = 17 + rand() * 25, z = -9 - rand() * 25;
  if (x < 19 && z > -12) continue;
  const h = 1.3 + rand() * 2.4;
  const trunk = addBox(0.18, h * 0.55, 0.18, mat('trunk' + i, '#67533f'), x, 0, z, { shadow: false });
  const crown = new THREE.Mesh(new THREE.ConeGeometry(h * 0.34, h, 6), pineMat); crown.position.set(x, h * 0.75, z); crown.castShadow = true; scene.add(crown);
}
// Airport apron and runway with visible center markings.
plane(17, 25, mat('tarmac', '#4a5050'), -27, 15, 0.03);
plane(2.4, 22, mat('runway', '#343b3c'), -31, 15, 0.045);
for (let z = 5; z < 26; z += 3) plane(0.13, 1.3, mat('runwaystripe' + z, '#d6d2b9'), -31, z, 0.06);
for (let i = 0; i < 6; i++) {
  const x = -34 + (i % 3) * 4, z = 9 + Math.floor(i / 3) * 12;
  addBox(2.3, 1.8, 3.8, mat('hangar' + i, '#8a8b7f'), x, 0.05, z);
  addBox(2.35, 0.18, 3.9, mat('hangarroof' + i, '#545b59'), x, 1.85, z);
}
// Beach, pier, and palms.
for (let i = 0; i < 5; i++) {
  const x = -36 + i * 2.6, z = 0 + (i % 2) * 6;
  addBox(0.22, 2.1, 0.22, mat('palmtrunk' + i, '#a78c62'), x, 0, z, { shadow: false });
  for (let f = 0; f < 6; f++) {
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.22, 2.0, 5), mat('leaf' + i + '-' + f, '#598069'));
    leaf.position.set(x + Math.sin(f * 1.047) * 0.65, 2.35, z + Math.cos(f * 1.047) * 0.65); leaf.rotation.z = -0.8; scene.add(leaf);
  }
}
plane(3, 14, mat('pier', '#796b55'), -37, 6, 0.1);

// Roadside lights, subtle glowing lamps.
const lampMat = new THREE.MeshStandardMaterial({ color: '#f6d79e', emissive: '#ffb55e', emissiveIntensity: 1.4 });
for (let x = -16; x <= 16; x += 8) for (let z = -16; z <= 16; z += 8) {
  if (rand() > 0.56) continue;
  const side = rand() > 0.5 ? 2.4 : -2.4;
  addBox(0.08, 3.2, 0.08, mat('lampPole' + x + z, '#555a54'), x + side, 0, z, { shadow: false });
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.07, 0.07), mat('lampArm' + x + z, '#555a54'));
  arm.position.set(x + side + 0.28, 3.08, z); scene.add(arm);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), lampMat); bulb.position.set(x + side + 0.55, 3.0, z); scene.add(bulb);
}

// Car model generator: compact coupe silhouettes with wheels and glass.
function makeCar(color, isPlayer = false) {
  const group = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.42 });
  const dark = mat('carDark', '#20272a', 0.32);
  const glass = new THREE.MeshStandardMaterial({ color: '#263d43', roughness: 0.2, metalness: 0.45 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.48, 2.7), paint); body.position.y = 0.58; body.castShadow = true; group.add(body);
  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.18, 0.8), paint); hood.position.set(0, 0.84, -0.79); group.add(hood);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.02, 0.5, 1.18), glass); cabin.position.set(0, 0.99, 0.28); cabin.castShadow = true; group.add(cabin);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.11, 0.88), paint); roof.position.set(0, 1.27, 0.3); group.add(roof);
  for (const x of [-0.73, 0.73]) for (const z of [-0.83, 0.85]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.19, 12), dark);
    wheel.rotation.z = Math.PI / 2; wheel.position.set(x, 0.38, z); group.add(wheel);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.2, 10), mat('hub', '#92958d', 0.3, 0.7));
    hub.rotation.z = Math.PI / 2; hub.position.set(x * 1.03, 0.38, z); group.add(hub);
  }
  const headlightMat = new THREE.MeshBasicMaterial({ color: '#fff0cd' });
  for (const x of [-0.46, 0.46]) {
    const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.12, 0.04), headlightMat); headlight.position.set(x, 0.63, -1.37); group.add(headlight);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.12, 0.04), new THREE.MeshBasicMaterial({ color: '#d34d3d' })); tail.position.set(x, 0.65, 1.37); group.add(tail);
  }
  if (isPlayer) {
    const glow = new THREE.PointLight('#ffb365', 0.8, 7); glow.position.set(0, 1.4, -1); group.add(glow);
  }
  return group;
}
const player = makeCar('#c67d4e', true); player.position.set(0, 0.05, 2); scene.add(player);
const target = makeCar('#d6d1bc'); scene.add(target);
// Mission vehicle marker, always legible above the moving car.
const marker = new THREE.Group();
const ring = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.08, 8, 28), new THREE.MeshBasicMaterial({ color: '#ffd36e' })); ring.rotation.x = Math.PI / 2; ring.position.y = 2.7; marker.add(ring);
const beam = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 4), new THREE.MeshBasicMaterial({ color: '#ffd36e' })); beam.position.y = 2.0; marker.add(beam); target.add(marker);
const route = [[0, 0], [0, -4], [4, -4], [8, -4], [8, -8], [12, -8], [16, -12], [20, -16], [24, -18]];
let targetLeg = 0, targetT = 0, targetPos = new THREE.Vector3(0, 0.05, -2);
target.position.copy(targetPos);

// Mission HUD and minimap.
const mapCanvas = $('#minimap'); const mapCtx = mapCanvas.getContext('2d');
function drawMap() {
  const w = mapCanvas.width, h = mapCanvas.height;
  mapCtx.clearRect(0, 0, w, h);
  mapCtx.fillStyle = '#1b2926'; mapCtx.fillRect(0, 0, w, h);
  const scale = 2.65, cx = w / 2, cy = h / 2;
  const px = (x) => cx + (x - player.position.x) * scale;
  const py = (z) => cy + (z - player.position.z) * scale;
  mapCtx.strokeStyle = '#59615a'; mapCtx.lineWidth = 7;
  for (const x of [-20, -12, -4, 4, 12, 20]) { mapCtx.beginPath(); mapCtx.moveTo(px(x), 0); mapCtx.lineTo(px(x), h); mapCtx.stroke(); }
  for (const z of [-20, -12, -4, 4, 12, 20]) { mapCtx.beginPath(); mapCtx.moveTo(0, py(z)); mapCtx.lineTo(w, py(z)); mapCtx.stroke(); }
  mapCtx.strokeStyle = '#d4a976'; mapCtx.lineWidth = 2; mapCtx.beginPath();
  avenue.forEach(([x, z], i) => i ? mapCtx.lineTo(px(x), py(z)) : mapCtx.moveTo(px(x), py(z))); mapCtx.stroke();
  const dest = mapLocations.find((l) => l.name === 'Vinewood');
  if (dest) { mapCtx.fillStyle = '#f6c867'; mapCtx.beginPath(); mapCtx.arc(px(dest.x), py(dest.y), 5, 0, Math.PI * 2); mapCtx.fill(); }
  mapCtx.fillStyle = '#f0d071'; mapCtx.beginPath(); mapCtx.arc(px(target.position.x), py(target.position.z), 5, 0, Math.PI * 2); mapCtx.fill();
  mapCtx.save(); mapCtx.translate(cx, cy); mapCtx.rotate(player.rotation.y); mapCtx.fillStyle = '#f2eee0';
  mapCtx.beginPath(); mapCtx.moveTo(0, -8); mapCtx.lineTo(5, 6); mapCtx.lineTo(0, 3); mapCtx.lineTo(-5, 6); mapCtx.closePath(); mapCtx.fill(); mapCtx.restore();
}

const keys = new Set();
let started = false, paused = false, won = false, speed = 0, heading = 0;
let lastTime = performance.now(), elapsed = 0, money = 0, nearFrames = 0;
const touch = { gas: false, brake: false, left: false, right: false };
const clamp = THREE.MathUtils.clamp;
const setMessage = (title, text) => { $('#toast-title').textContent = title; $('#toast-text').textContent = text; $('#toast').classList.add('show'); clearTimeout(setMessage.timer); setMessage.timer = setTimeout(() => $('#toast').classList.remove('show'), 2800); };
function beginMission() {
  if (started) return;
  started = true; callLua('iniciarMissao()');
  $('#intro').classList.add('hidden'); $('#mission-panel').classList.remove('hidden');
  $('#topbar').classList.remove('hidden'); $('#bottom-hud').classList.remove('hidden'); $('#minimap-wrap').classList.remove('hidden');
  setMessage('MISSÃO INICIADA', 'Siga o veículo marcado até Vinewood.');
}
$('#start-button').addEventListener('click', beginMission);
$('#play-again').addEventListener('click', () => location.reload());
$('#pause-button').addEventListener('click', () => { if (!started || won) return; paused = !paused; $('#pause-layer').classList.toggle('hidden', !paused); });
$('#resume-button').addEventListener('click', () => { paused = false; $('#pause-layer').classList.add('hidden'); });
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(key)) e.preventDefault();
  keys.add(key);
  if (key === 'escape' && started && !won) { paused = !paused; $('#pause-layer').classList.toggle('hidden', !paused); }
  if (key === 'enter' && !started) beginMission();
});
window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
for (const button of document.querySelectorAll('[data-drive]')) {
  const name = button.dataset.drive;
  const on = (e) => { e.preventDefault(); touch[name] = true; button.classList.add('pressed'); button.setPointerCapture?.(e.pointerId); };
  const off = (e) => { e.preventDefault(); touch[name] = false; button.classList.remove('pressed'); };
  button.addEventListener('pointerdown', on); button.addEventListener('pointerup', off); button.addEventListener('pointercancel', off); button.addEventListener('lostpointercapture', off);
}

function update(dt) {
  if (!started || paused || won) return;
  const gas = keys.has('w') || keys.has('arrowup') || touch.gas;
  const brake = keys.has('s') || keys.has('arrowdown') || touch.brake;
  const left = keys.has('a') || keys.has('arrowleft') || touch.left;
  const right = keys.has('d') || keys.has('arrowright') || touch.right;
  if (gas) speed += 17 * dt;
  else speed *= Math.pow(0.987, dt * 60);
  if (brake) speed -= 25 * dt;
  speed = clamp(speed, -7, 31);
  const steer = (right ? 1 : 0) - (left ? 1 : 0);
  if (Math.abs(speed) > 0.2) heading += steer * dt * (0.82 + Math.min(Math.abs(speed) / 15, 1.35)) * Math.sign(speed);
  const forward = new THREE.Vector3(Math.sin(heading), 0, -Math.cos(heading));
  const oldX = player.position.x, oldZ = player.position.z;
  player.position.addScaledVector(forward, speed * dt);
  let hit = false;
  for (const b of buildings) {
    if (Math.abs(player.position.x - b.x) < b.w / 2 + 0.82 && Math.abs(player.position.z - b.z) < b.d / 2 + 0.95) { hit = true; break; }
  }
  if (hit) { player.position.x = oldX; player.position.z = oldZ; speed *= -0.19; }
  if (Math.abs(player.position.x) > 43 || Math.abs(player.position.z) > 39) { player.position.x = clamp(player.position.x, -43, 43); player.position.z = clamp(player.position.z, -39, 39); speed *= 0.6; }
  player.rotation.y = heading;
  // The marked driver follows the scenic road at a pace the player can catch.
  const a = route[targetLeg], b = route[targetLeg + 1];
  const legLen = Math.hypot(b[0] - a[0], b[1] - a[1]);
  targetT += dt * (0.37 / Math.max(legLen, 1));
  if (targetT >= 1) { targetLeg = Math.min(targetLeg + 1, route.length - 2); targetT = 0; }
  const [ax, az] = route[targetLeg], [bx, bz] = route[targetLeg + 1];
  target.position.set(THREE.MathUtils.lerp(ax, bx, targetT), 0.05, THREE.MathUtils.lerp(az, bz, targetT));
  target.rotation.y = Math.atan2(bx - ax, -(bz - az));
  const dTarget = player.position.distanceTo(target.position);
  $('#distance').textContent = Math.max(0, Math.round(dTarget * 9)) + ' m';
  $('#distance-fill').style.width = clamp(100 - dTarget * 3.2, 4, 100) + '%';
  $('#speed-value').textContent = String(Math.round(Math.abs(speed) * 5.2)).padStart(2, '0');
  const destination = mapLocations.find((l) => l.name === 'Vinewood');
  const dDest = destination ? Math.hypot(player.position.x - destination.x, player.position.z - destination.y) : 99;
  if (targetLeg === route.length - 2 && targetT > 0.88 && dDest < 6 && dTarget < 14) nearFrames += dt;
  else nearFrames = Math.max(0, nearFrames - dt * 0.5);
  if (nearFrames > 1.5) {
    callLua('definirObjetivoConcluido(true); verificarObjetivo()');
    const state = luaState(); money += state.reward; won = true;
    $('#win-reward').textContent = '$' + state.reward.toLocaleString('en-US');
    $('#victory').classList.remove('hidden');
  }
}
function render(now) {
  requestAnimationFrame(render);
  const dt = Math.min((now - lastTime) / 1000, 0.05); lastTime = now;
  update(dt);
  if (started && !paused && !won) elapsed += dt;
  const forward = new THREE.Vector3(Math.sin(heading), 0, -Math.cos(heading));
  const compactView = innerWidth < 700;
  const fieldOfView = compactView ? 78 : 58;
  if (camera.fov !== fieldOfView) { camera.fov = fieldOfView; camera.updateProjectionMatrix(); }
  const desired = player.position.clone().addScaledVector(forward, compactView ? -15 : -9.5).add(new THREE.Vector3(0, compactView ? 22 : 4.8, 0));
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  camera.lookAt(player.position.clone().addScaledVector(forward, compactView ? 7 : 4).add(new THREE.Vector3(0, compactView ? 1.4 : 1.2, 0)));
  if (started) {
    $('#clock').textContent = new Date(elapsed * 1000).toISOString().slice(14, 19);
    drawMap();
  }
  renderer.render(scene, camera);
}
requestAnimationFrame(render);
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
});

// The Lua map above supplies both the city landmarks and mission destination.
