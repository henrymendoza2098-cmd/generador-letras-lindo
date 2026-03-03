const input = document.getElementById('input');
const results = document.getElementById('results');

// Diccionarios expandidos
const maps = {
    "Negrita": { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳" },
    "Gótico": { a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷" },
    "Burbujas": { a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙", k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣", u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩" },
    "Cursiva": { a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏" },
    "Cuadrados": { a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄿", h: "🄶", i: "🄸", j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉" },
    "Especial": { a: "卂", b: "乃", c: "匚", d: "ᗪ", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ", k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ɋ", r: "尺", s: "丂", t: "ㄒ", u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙" },
    "Flechas": { a: "➵", b: "➴", c: "➶", d: "➷", e: "➸", f: "➹", g: "➺", h: "➻", i: "➼", j: "➽", k: "➾", l: "➛", m: "➚", n: "➘", o: "➙", p: "➧", q: "➦", r: "➥", s: "➦", t: "➢", u: "➣", v: "➤", w: "➥", x: "➦", y: "➧", z: "➨" }
};

// Función de conversión
function convert(text, map) {
    return text.toLowerCase().split('').map(char => map[char] || char).join('');
}

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        
        // Mostrar la notificación
        toast.classList.add('show');
        
        // Esconderla después de 2 segundos
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// Listener para el input
input.addEventListener('input', () => {
    const val = input.value;
    results.innerHTML = '';
    if(val.length === 0) return;

    for (let style in maps) {
        const converted = convert(val, maps[style]);
        results.innerHTML += `
            <div class="result-card">
                <div>
                    <small style="color: var(--accent); display:block;">${style}</small>
                    <span class="result-text">${converted}</span>
                </div>
                <button onclick="copyToClipboard('${converted}')">Copiar</button>
            </div>
        `;
    }
});

// Lógica del Modo Claro/Oscuro

// Agrega esto al final de tu archivo java.js actual
function toggleTheme() {
    // 1. Alternar la clase light-mode en el body
    document.body.classList.toggle('light-mode');
    
    // 2. Cambiar el icono del botón
    const btn = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light-mode')) {
        btn.innerText = '🌙 Modo Oscuro';
    } else {
        btn.innerText = '☀️ Modo Claro';
    }
}
// Añade esto dentro del bucle donde generas los resultados en el input.addEventListener
const subrayado = val.split('').map(char => char + "\u0332").join('');
results.innerHTML += `
    <div class="result-card">
        <div>
            <small style="color: var(--accent); display:block;">Subrayado</small>
            <span class="result-text">${subrayado}</span>
        </div>
        <button onclick="copyToClipboard('${subrayado}')">Copiar</button>
    </div>
`;