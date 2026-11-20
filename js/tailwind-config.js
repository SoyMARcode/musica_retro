// Configuración de Tailwind: aquí viven los colores, fuentes y animaciones del proyecto.
// Luego se usan como clases: bg-fondo, text-rosa, font-pixel, animate-girar, shadow-duro-rosa...
tailwind.config = {
  theme: {
    extend: {
      colors: {
        fondo: "#1b0b2e",
        superficie: "#2a1245",
        oscuro: "#0d0418",
        rosa: "#ff2e93",
        cian: "#27e8f5",
        amarillo: "#ffd23f",
        verde: "#1ed760",
        texto: "#fdf3ff",
        progreso: "#3a1a5e",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"], // títulos y botones
        retro: ["VT323", "monospace"],            // texto normal
      },
      boxShadow: {
        "duro-rosa": "5px 5px 0 #ff2e93", // sombras sin desenfoque = estilo retro
        "duro-negro": "4px 4px 0 #000",
      },
      keyframes: {
        girar: { to: { transform: "rotate(360deg)" } },
        marquesina: { to: { transform: "translateX(-50%)" } },
        flotar: { "50%": { transform: "translateY(-8px) rotate(-1.5deg)" } },
        ecualizador: { to: { height: "28px" } },
        parpadeo: { "50%": { opacity: ".2" } },
      },
      animation: {
        girar: "girar 2.2s linear infinite",
        marquesina: "marquesina 28s linear infinite",
        flotar: "flotar 2.4s ease-in-out infinite",
        ecualizador: "ecualizador .6s steps(4) infinite alternate",
        parpadeo: "parpadeo 1s steps(2) infinite",
      },
    },
  },
};
