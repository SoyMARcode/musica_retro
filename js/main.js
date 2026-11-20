// MAIN: conecta los botones con las funciones. Es el único archivo que "escucha" clics.

// Dibuja lo inicial
document.querySelectorAll("[data-logo]").forEach((el) => (el.innerHTML = LOGO_SVG));
pintarArtistas();
pintarCinta();

// Navegación entre pantallas
$("btn-entrar").onclick = () => mostrarPantalla("pantalla-artistas");
$("btn-volver").onclick = () => mostrarPantalla("pantalla-artistas");
$("btn-salir").onclick = () => {
  detener();
  mostrarPantalla("pantalla-entrada");
};

// Elegir artista
$("lista-artistas").onclick = (e) => {
  const tarjeta = e.target.closest("[data-artista]");
  if (tarjeta) abrirArtista(Number(tarjeta.dataset.artista));
};

// Tocar una carta: si no es la central, la enfoca; si ya es la central, la reproduce
$("escenario").onclick = (e) => {
  const carta = e.target.closest("[data-carta]");
  if (!carta) return;
  const k = Number(carta.dataset.carta);
  if (k === estado.carta) reproducir(estado.artista, k);
  else enfocar(k);
};

// Flechas y controles
$("btn-izq").onclick = () => enfocar(estado.carta - 1);
$("btn-der").onclick = () => enfocar(estado.carta + 1);
$("btn-play").onclick = alternarPlay;
$("btn-anterior").onclick = () => cambiarCancion(-1);
$("btn-siguiente").onclick = () => cambiarCancion(1);

// Deslizar con el dedo sobre el abanico
let inicioX = null;
$("escenario").addEventListener("touchstart", (e) => (inicioX = e.touches[0].clientX));
$("escenario").addEventListener("touchend", (e) => {
  if (inicioX === null) return;
  const diferencia = e.changedTouches[0].clientX - inicioX;
  if (Math.abs(diferencia) > 40) enfocar(estado.carta + (diferencia < 0 ? 1 : -1));
  inicioX = null;
});

window.addEventListener("resize", colocarCartas);
