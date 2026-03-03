
    const input = document.getElementById('input');
    const results = document.getElementById('results');

    // Mapeo de estilos (Unicode)
    const maps = {
        "Negrita": { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳" },
        "Monoespacio": { a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣" }
    };

    function convert(text, map) {
        return text.toLowerCase().split('').map(char => map[char] || char).join('');
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        alert("¡Copiado!");
    }

    input.addEventListener('input', () => {
        const val = input.value;
        results.innerHTML = '';
        
        if(val.length === 0) return;

        for (let style in maps) {
            const converted = convert(val, maps[style]);
            results.innerHTML += `
                <div class="result-card">
                    <span class="result-text">${converted}</span>
                    <button onclick="copyToClipboard('${converted}')">Copiar</button>
                </div>
            `;
        }
    });
