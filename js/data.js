// DATOS: para agregar un artista o canción, edita solo este archivo.
// Cada canción: { titulo, segundos } (la duración es aproximada)

const ARTISTAS = [
  { nombre: "Michael Jackson", color: "#ff2e93", canciones: [
    { titulo: "Billie Jean", segundos: 294 },
    { titulo: "Beat It", segundos: 258 },
    { titulo: "Thriller", segundos: 357 },
  ]},
  { nombre: "Axl Rose", color: "#ffd23f", canciones: [
    { titulo: "Sweet Child O’ Mine", segundos: 356 },
    { titulo: "Paradise City", segundos: 406 },
    { titulo: "November Rain", segundos: 537 },
  ]},
  { nombre: "Dr. Alba", color: "#27e8f5", canciones: [
    { titulo: "Away from Home", segundos: 216 },
    { titulo: "Let the Beat Go On", segundos: 230 },
    { titulo: "It’s My Life", segundos: 212 },
  ]},
  { nombre: "Madonna", color: "#c77dff", canciones: [
    { titulo: "Like a Prayer", segundos: 340 },
    { titulo: "Vogue", segundos: 320 },
    { titulo: "La Isla Bonita", segundos: 241 },
  ]},
  { nombre: "Queen", color: "#ff8a3d", canciones: [
    { titulo: "Bohemian Rhapsody", segundos: 355 },
    { titulo: "Another One Bites the Dust", segundos: 215 },
    { titulo: "Don’t Stop Me Now", segundos: 209 },
  ]},
  { nombre: "Prince", color: "#9b5de5", canciones: [
    { titulo: "Purple Rain", segundos: 520 },
    { titulo: "Kiss", segundos: 226 },
    { titulo: "When Doves Cry", segundos: 354 },
  ]},
  { nombre: "Nirvana", color: "#1ed760", canciones: [
    { titulo: "Smells Like Teen Spirit", segundos: 301 },
    { titulo: "Come as You Are", segundos: 218 },
    { titulo: "Lithium", segundos: 257 },
  ]},
  { nombre: "Whitney Houston", color: "#f15bb5", canciones: [
    { titulo: "I Wanna Dance with Somebody", segundos: 291 },
    { titulo: "How Will I Know", segundos: 276 },
    { titulo: "I Will Always Love You", segundos: 273 },
  ]},
  { nombre: "a-ha", color: "#00bbf9", canciones: [
    { titulo: "Take On Me", segundos: 225 },
    { titulo: "The Sun Always Shines on TV", segundos: 285 },
    { titulo: "Hunting High and Low", segundos: 252 },
  ]},
];

// Textos de la cinta que se desplaza abajo en la pantalla de artistas
const HITOS = [
  "1979 WALKMAN", "1981 NACE MTV", "1982 THRILLER", "1982 EL CD LLEGA A LAS TIENDAS",
  "1985 LIVE AID", "1991 NEVERMIND", "90s EUROPOP & DANCE", "REBOBINA EL CASSETTE",
];
