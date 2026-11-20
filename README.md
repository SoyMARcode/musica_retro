# Retro Spotify

Reproductor retro (80s y 90s) con 9 artistas. Diseño hecho con **Tailwind CSS** y JavaScript simple, sin librerías extra.

## Cómo abrirlo
Abre `index.html` en el navegador (doble clic). Necesita internet para cargar Tailwind (CDN) y las fuentes de Google.
Opcional, con servidor local: `npx serve .`

## Estructura
```
retro-spotify/
├── index.html            Las 3 pantallas (entrada, artistas, abanico) con clases de Tailwind
├── assets/
│   └── tienda-spotify.jpg  Fondo de la pantalla de entrada
├── css/
│   └── styles.css        Solo lo que Tailwind no cubre (líneas CRT, vinilo, carrete, botón)
└── js/
    ├── tailwind-config.js  Colores, fuentes y animaciones del proyecto
    ├── data.js             Artistas y canciones  ← aquí agregas música
    ├── ui.js               Dibuja las pantallas y coloca las cartas en abanico
    ├── player.js           Estado del reproductor (qué suena, segundos, play/pausa)
    └── main.js             Conecta los botones con las funciones
```

## Tareas comunes
- **Agregar un artista:** copia un bloque en `js/data.js` (nombre, color, canciones).
- **Cambiar colores o fuentes:** `js/tailwind-config.js`.
- **Cambiar el fondo de entrada:** reemplaza `assets/tienda-spotify.jpg`.

## Notas
- El reproductor es una **simulación** (no hay audio). Para sonido real, puedes añadir una propiedad `archivo` a cada canción y usar un elemento `<audio>` en `player.js`.
- Para publicar en producción, reemplaza el CDN de Tailwind por su CLI (`npx tailwindcss -i ... -o css/tailwind.css`).
- Las duraciones de las canciones son aproximadas.
