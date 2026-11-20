// INTERFAZ: funciones que dibujan cosas en pantalla. No guardan estado ni reproducen nada.

const $ = (id) => document.getElementById(id);

const LOGO_SVG = `
  <svg viewBox="0 0 24 24" class="h-8 w-8" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#1ed760"/>
    <path d="M5.5 8.6c4.2-1.2 9-.9 13 1.3M6.3 12.2c3.6-1 7.6-.7 10.9 1.1M7 15.6c3-.8 6-.5 8.6.9"
          stroke="#1b0b2e" stroke-width="1.9" stroke-linecap="round" fill="none"/>
  </svg>`;

function formatoTiempo(segundos) {
  return Math.floor(segundos / 60) + ":" + String(segundos % 60).padStart(2, "0");
}

// Muestra una pantalla y oculta las demás
function mostrarPantalla(id) {
  document.querySelectorAll(".pantalla").forEach((p) => p.classList.toggle("hidden", p.id !== id));
  window.scrollTo(0, 0);
}

// Pantalla 2: tarjetas de artistas (cada una llena su celda del grid)
function pintarArtistas() {
  $("lista-artistas").innerHTML = ARTISTAS.map((artista, i) => `
    <button data-artista="${i}"
      class="flex h-full min-h-0 flex-col items-center justify-center gap-1.5 border-[3px] border-cian bg-superficie px-1 text-center text-xl leading-none shadow-duro-negro hover:border-rosa hover:shadow-duro-rosa">
      <div class="grid aspect-square h-[clamp(34px,8dvh,64px)] place-items-center rounded-full font-pixel text-base text-fondo"
           style="background:${artista.color}">${artista.nombre[0]}</div>
      <span>${artista.nombre}</span>
    </button>`).join("");
}

// Pantalla 2: cinta con hitos (el texto se repite 2 veces para que el bucle no se corte)
function pintarCinta() {
  const texto = HITOS.map((h) => `<span class="pr-10">★ ${h}</span>`).join("");
  $("cinta").innerHTML = texto + texto;
}

// Pantalla 3: crea las cartas de un artista y las coloca en abanico
function abrirArtista(i) {
  const artista = ARTISTAS[i];
  estado.artista = i;
  estado.carta = Math.min(1, artista.canciones.length - 1); // empieza con la carta del medio

  $("nombre-artista").textContent = artista.nombre.toUpperCase();
  $("pantalla-abanico").style.background =
    `radial-gradient(circle at 50% 30%, ${artista.color}aa 0, #1b0b2e 70%)`;

  $("escenario").innerHTML = artista.canciones.map((cancion, k) => `
    <button data-carta="${k}"
      class="absolute left-1/2 top-0 w-[min(44vw,210px)] border-[3px] border-texto/70 bg-white/20 p-2 text-center shadow-duro-negro transition-all duration-500 ease-out">
      <div class="vinilo grid aspect-square place-items-center" style="background:${artista.color}">
        <span class="relative z-10 grid h-[30%] w-[30%] place-items-center rounded-full bg-amarillo font-pixel text-xs text-fondo">${k + 1}</span>
      </div>
      <div class="mt-1.5 truncate text-[22px]">${cancion.titulo}</div>
      <div class="truncate text-[17px] text-cian">${artista.nombre} · ${formatoTiempo(cancion.segundos)}</div>
    </button>`).join("");

  colocarCartas();
  mostrarPantalla("pantalla-abanico");
}

// Coloca cada carta según su distancia a la carta central:
// más lejos = más girada, más pequeña y más transparente.
function colocarCartas() {
  const cartas = document.querySelectorAll("#escenario [data-carta]");
  if (!cartas.length) return;
  const ancho = cartas[0].offsetWidth;

  cartas.forEach((carta, k) => {
    const distancia = k - estado.carta;
    const lejos = Math.abs(distancia);
    carta.style.transform =
      `translateX(calc(-50% + ${distancia * ancho * 0.78}px)) translateZ(${-lejos * 70}px) ` +
      `rotateY(${-distancia * 32}deg) scale(${1 - lejos * 0.1})`;
    carta.style.zIndex = 10 - lejos;
    carta.style.opacity = lejos > 2 ? 0 : 1 - lejos * 0.18;

    // borde amarillo en la canción que está sonando
    const suena = estado.reproduciendo && estado.artistaSonando === estado.artista && estado.cancionSonando === k;
    carta.classList.toggle("border-amarillo", suena);
    carta.classList.toggle("border-texto/70", !suena);
  });
}

// Barra inferior: título, artista, progreso y botón play/pausa
function pintarReproductor() {
  const artista = ARTISTAS[estado.artistaSonando];
  const cancion = estado.cancionSonando !== null ? artista.canciones[estado.cancionSonando] : null;

  $("rep-titulo").textContent = cancion ? cancion.titulo : "—";
  $("rep-artista").textContent = cancion ? artista.nombre : "";
  $("rep-progreso").style.width = cancion ? (estado.segundos / cancion.segundos) * 100 + "%" : "0%";
  $("btn-play").textContent = estado.reproduciendo ? "||" : "▶";
  $("reproductor").classList.toggle("sonando", estado.reproduciendo); // activa el ecualizador
}
