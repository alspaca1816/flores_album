function buildEsquinas() {
    const path = `<path d="M2 2 L18 2 Q34 2 34 18 L34 34" stroke="#b8956a" stroke-width="1.2" fill="none"/>
                <circle cx="2" cy="2" r="1.5" fill="#b8956a"/>
                <circle cx="34" cy="34" r="1.5" fill="#b8956a"/>`;
    const svg = (cls) =>
    `<svg class="corner-dec ${cls}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;
    return svg('tl') + svg('tr') + svg('bl') + svg('br');
}

function buildDivisor() {
    return `<div class="divisor">
    <div class="linea-divisor"></div>
    <div class="diamante"></div>
    <div class="linea-divisor rev"></div>
    </div>`;
}

const icono_reproducir = `<svg class="icono-reproducir"  viewBox="0 0 14 14" fill="none"><polygon points="3,1.5 12,7 3,12.5" fill="currentColor"/></svg>`;
const icono_pausa = `<svg class="icono-pausa" viewBox="0 0 14 14" fill="none"><rect x="2" y="1.5" width="3.5" height="11" rx="0.5" fill="currentColor"/><rect x="8.5" y="1.5" width="3.5" height="11" rx="0.5" fill="currentColor"/></svg>`;

function buildPortadaPag(data, container, wrapper) {
    wrapper.classList.add('portada-pag');

    container.innerHTML = `
    <div class="portada-cont">
        <span class="portada-label">${data.label}</span>
        <h1 class="portada-titulo">${data.title.replace(/\n/g, '<br>')}</h1>
        <p class="portada-subtitulo">${data.subtitle.replace(/\n/g, '<br>')}</p>
        <p class="portada-fecha">${data.date}</p>
    </div>`;
}

function buildPosdataPag(data, container) {
    container.innerHTML = `
        ${buildEsquinas()}
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:16px 8px; position:relative; z-index:1;">
            <span style="font-family:'Englebert',cursive; font-size:0.68rem; letter-spacing:0.29em; color:var(--granate); text-transform:uppercase; margin-bottom:1.7rem; opacity:0.7; display:block;">
                Posdata
            </span>
            <h2 style="font-family:'Sniglet',cursive; font-size:1rem; color:var(--vino); line-height:1.4; margin-bottom:1rem;">
                ${data.heading.replace(/\n/g, '<br>')}
            </h2>
            ${buildDivisor()}
            <p style="font-family:'Dekko',cursive; margin-top:0.38rem;font-size:0.73rem; line-height:1.65; color:var(--bermellon-fuerte); opacity:0.85; max-width:240px;">
                ${data.body}
            </p>
            <p style="margin-top:1.6rem; font-family:'Dekko',cursive; font-style:italic; font-size:0.7rem; color:var(--rosa-oscuro); margin-bottom:2rem;">
                ${data.signature}
            </p>
        </div>
        <span class="num">1</span>`;
}

function buildFlorPag(data, container, numeroPag) {
    container.innerHTML = `
        ${buildEsquinas()}
        <div class="flor-img">
            <img src="${data.image}" alt="Dibujo de ${data.name}" />
        </div>
        <h2 class="nombre-flor">${data.name}</h2>
        <p class="flor-latin">${data.latin}</p>
        ${buildDivisor()}
        <p class="descripcion-flor">${data.description}</p>
        <button class="audio-btn" data-audio="${data.audio}">
            ${icono_reproducir} Aquí te lo digo
        </button>
        <span class="num">${numeroPag}</span>`;

    const btn = container.querySelector('.audio-btn');
    btn.addEventListener('click', () => toggleAudio(btn, data.audio));
}

function buildCierrePag(data, container, numeroPag) {
    container.innerHTML = `
        ${buildEsquinas()}
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:14px 8px; position:relative; z-index:1;">
            <span style="font-family:'Englebert',cursive; font-size:0.7rem; letter-spacing:0.27em; color:var(--granate); text-transform:uppercase; margin-bottom:2rem; opacity:0.7; display:block;">
                Finaaal
            </span>
            <blockquote style="font-family:'Sniglet',cursive; font-size:0.95rem; color:var(--vino); line-height:1.5; margin-bottom:1.1rem;">
                ${data.quote.replace(/\n/g, '<br>')}
            </blockquote>
            ${buildDivisor()}
            <p style="font-family:'Dekko',cursive; margin-top:0.3rem;font-size:0.76rem; line-height:1.65; color:var(--bermellon-fuerte); opacity:0.8; max-width:240px;">
                ${data.body}
            </p>
            <p style="margin-top:1.85rem; font-family:'Dekko',cursive; font-style:italic; color:var(--rosa-oscuro); font-size:0.85rem;">
                ${data.signature}
            </p>
        </div>
        <span class="num">${numeroPag}</span>`;
}

function renderPag(indice, container) {
    const wrapper = container.parentElement;

    wrapper.classList.remove(
        'tinta-rosa', 'tinta-clavel', 'tinta-lirio',
        'tinta-margarita', 'tinta-girasol', 'tinta-geranio',
        'tinta-orquidea', 'portada-pag'
    );
    wrapper.style.background = '';
    container.innerHTML = '';

    if (indice < 0 || indice >= album_pags.length) {
        wrapper.style.background = `
            linear-gradient(
            135deg,
            #F7E4EA 0%, 
            #F0C8D3 100%
            )`;
        return;
    }

    const data = album_pags[indice];

    if (data.tint) wrapper.classList.add(data.tint);

    const inicioFlores = album_pags.findIndex(p => p.type === 'flor');
    const numeroPag = indice >= inicioFlores ? indice - inicioFlores + 2 : '';

    switch (data.type) {
        case 'portada':
        buildPortadaPag(data, container, wrapper);
        break;
        case 'Posdata':
        buildPosdataPag(data, container);
        break;
        case 'flor':
        buildFlorPag(data, container, numeroPag);
        break;
        case 'cierre':
        buildCierrePag(data, container, numeroPag);
        break;
    }
}

function getSpreadIndices(spread) {
    if (spread === 0) return { izq: -1, der: 0 };
    const base = 1 + (spread - 1) * 2;
    return { izq: base, der: base + 1 };
}

const totalSpreads = Math.ceil((album_pags.length - 1) / 2);
let currentSpread = 0;
let isFlipping = false;


function renderSpread(spread) {
    const { izq, der } = getSpreadIndices(spread);
    renderPag(izq, document.getElementById('cont_pag_izq'));
    renderPag(der, document.getElementById('cont_pag_der'));

    document.getElementById('control_info').textContent =
        spread === 0 ? 'Portada':
        spread === totalSpreads ? 'Final':
        `${(spread - 1) * 2 + 1} — ${(spread - 1) * 2 + 2}`;

    document.getElementById('boton_retroceder').disabled = spread === 0;
    document.getElementById('boton_avanzar').disabled = spread === totalSpreads;
}

function flip(direction) {
    if (isFlipping) return;
    const nextSpread = currentSpread + direction;
    if (nextSpread < 0 || nextSpread > totalSpreads) return;

    isFlipping = true;
    pararAudio();

    const flipAnimada = document.getElementById('pag_animada');
    const flipCara = document.getElementById('pag_cara');
    const flipReverso = document.getElementById('pag_reverso');

    if (direction === 1) {
        flipCara.innerHTML = document.getElementById('cont_pag_der').innerHTML;
        flipCara.className = 'pag_cara ' + getClaseTinta('derecha_est');

        const { izq: siguienteIzq } = getSpreadIndices(nextSpread);
        renderPag(siguienteIzq, flipReverso);
        flipReverso.className = 'pag_reverso ' + (siguienteIzq >= 0 && siguienteIzq < album_pags.length && album_pags[siguienteIzq].tint ? album_pags[siguienteIzq].tint : '');

        renderSpread(nextSpread);

        flipAnimada.style.transition = 'none';
        flipAnimada.style.transform = 'rotateY(0deg)';
        flipAnimada.style.display = 'block';
        requestAnimationFrame(() => {
        flipAnimada.style.transition = `transform var(--duracion-flip) var(--flip-ez)`;
        flipAnimada.style.transform = 'rotateY(-180deg)';
        });

    } else {
        flipReverso.innerHTML = document.getElementById('cont_pag_izq').innerHTML;
        flipReverso.className = 'pag_reverso ' + getClaseTinta('izquierda_est');

        const { der: anteriorDer } = getSpreadIndices(nextSpread);
        renderPag(anteriorDer, flipCara);
        flipCara.className = 'pag_cara ' + (anteriorDer >= 0 && anteriorDer < album_pags.length && album_pags[anteriorDer].tint ? album_pags[anteriorDer].tint : '');
        if (anteriorDer >= 0 && album_pags[anteriorDer]?.type === 'portada') flipCara.classList.add('portada-pag');

        renderSpread(nextSpread);

        flipAnimada.style.transition = 'none';
        flipAnimada.style.transform = 'rotateY(-180deg)';
        flipAnimada.style.display = 'block';
        requestAnimationFrame(() => {
        flipAnimada.style.transition = `transform var(--duracion-flip) var(--flip-ez)`;
        flipAnimada.style.transform  = 'rotateY(0deg)';
        });
    }

    flipAnimada.addEventListener('transitionend', function handler() {
        flipAnimada.removeEventListener('transitionend', handler);
        flipAnimada.style.display = 'none';
        currentSpread = nextSpread;
        isFlipping = false;
    });
}

function getClaseTinta(elementId) {
  const el = document.getElementById(elementId);
  return [...el.classList].find(c => c.startsWith('tinta-')) || '';
}

let audioActivo = null;
let btnActivo   = null;

function toggleAudio(btn, archivo) {
    if (btnActivo && btnActivo !== btn) pararAudio();

    if (!audioActivo) {
        audioActivo = new Audio(archivo);
        btnActivo   = btn;

        audioActivo.play().catch(() => {
            btn.innerHTML = `${icono_reproducir} Archivo no encontrado`;
            audioActivo = null;
            btnActivo   = null;
        });

        btn.classList.add('reproduciendo');
        btn.innerHTML = `${icono_pausa} Reproduciendo…`;

        audioActivo.addEventListener('ended', () => {
            btn.classList.remove('reproduciendo');
            btn.innerHTML = `${icono_reproducir} Aquí te lo digo`;
            audioActivo = null;
            btnActivo   = null;
        });

    } else if (audioActivo.paused) {
        audioActivo.play();
        btn.classList.add('reproduciendo');
        btn.innerHTML = `${icono_pausa} Reproduciendo…`;
    } else {
        audioActivo.pause();
        btn.classList.remove('reproduciendo');
        btn.innerHTML = `${icono_reproducir} Continuar`;
    }
}

function pararAudio() {
    if (audioActivo) {
        audioActivo.pause();
        audioActivo = null;
    }
    if (btnActivo) {
        btnActivo.classList.remove('reproduciendo');
        btnActivo.innerHTML = `${icono_reproducir} Aquí te lo digo`;
        btnActivo = null;
    }
}

document.getElementById('pag_animada').style.display = 'none';
renderSpread(0);

document.getElementById('boton_avanzar').addEventListener('click',    () => flip(1));
document.getElementById('boton_retroceder').addEventListener('click', () => flip(-1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') flip(1);
    if (e.key === 'ArrowLeft')  flip(-1);
});