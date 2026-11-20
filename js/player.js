// REPRODUCTOR: guarda qué está sonando y cuenta los segundos.
// (Es una simulación: no reproduce audio real, solo avanza el tiempo.)

const estado = {
  artista: 0,            // artista que se ve en el abanico
  carta: 0,              // carta enfocada (la del centro)
  artistaSonando: 0,     // artista de la canción que suena
  cancionSonando: null,  // índice de la canción que suena (null = ninguna)
  segundos: 0,           // segundos transcurridos
  reproduciendo: false,
};

let reloj = null;

function refrescar() {
  pintarReproductor();
  colocarCartas();
}

function reproducir(artista, cancion) {
  estado.artistaSonando = artista;
  estado.cancionSonando = cancion;
  estado.segundos = 0;
  reanudar();
}

function reanudar() {
  clearInterval(reloj);
  estado.reproduciendo = true;
  reloj = setInterval(avanzarSegundo, 1000);
  refrescar();
}

function pausar() {
  clearInterval(reloj);
  estado.reproduciendo = false;
  refrescar();
}

function detener() {
  clearInterval(reloj);
  estado.reproduciendo = false;
  estado.cancionSonando = null;
  estado.segundos = 0;
  refrescar();
}

function alternarPlay() {
  if (estado.cancionSonando === null) reproducir(estado.artista, estado.carta);
  else if (estado.reproduciendo) pausar();
  else reanudar();
}

function avanzarSegundo() {
  estado.segundos++;
  const duracion = ARTISTAS[estado.artistaSonando].canciones[estado.cancionSonando].segundos;
  if (estado.segundos >= duracion) cambiarCancion(1); // terminó: pasa a la siguiente
  else pintarReproductor();
}

// paso = +1 siguiente, -1 anterior
function cambiarCancion(paso) {
  if (estado.cancionSonando === null) return reproducir(estado.artista, estado.carta);

  const total = ARTISTAS[estado.artistaSonando].canciones.length;
  const nueva = (estado.cancionSonando + paso + total) % total;
  if (estado.artistaSonando === estado.artista) estado.carta = nueva; // el abanico sigue la canción
  reproducir(estado.artistaSonando, nueva);
}

// Mueve la carta central (flechas o deslizar)
function enfocar(k) {
  const total = ARTISTAS[estado.artista].canciones.length;
  estado.carta = Math.max(0, Math.min(total - 1, k));
  colocarCartas();
}
