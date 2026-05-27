export const TOP_N_CANCIONES = 10;
export const TOP_N_DASHBOARD = 5;

export const MAX_SUGERENCIAS = 6;
export const MIN_CHARS_BUSQUEDA = 1;

export const MAX_RECOMENDACIONES = 5;
export const PROFUNDIDAD_BFS = 2;

export const formatearReproducciones = (n) => {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
    return `${n}`;
};

export const COLORES_GENERO = {
    "Synth-pop": "#1DB954",
    "Pop": "#1ED760",
    "Soul": "#E8A0BF",
    "R&B": "#B026FF",
    "Electropop": "#00D2FF",
    "Disco-pop": "#FF6B9D",
    "Hip-hop": "#FF9500",
    "Rock": "#E63946",
    "Rock alternativo": "#F4A261",
    "Grunge": "#6B4226",
    "Indie-pop": "#A8DADC",
    "Pop-rock": "#457B9D",
};

export const DURACION_FADE = 300;
export const DURACION_SLIDE = 250;

export const TEXTOS = {
    placeholderBusqueda: "Buscar canción...",
    sinResultados: "No se encontraron canciones",
    sinRecomendaciones: "Selecciona una canción para ver recomendaciones",
    rankingTitulo: "Top Canciones",
    recomTitulo: "¡Recomendadas para ti!",
    cargando: "Cargando...",
};