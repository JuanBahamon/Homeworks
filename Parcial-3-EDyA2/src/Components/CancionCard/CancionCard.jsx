import { formatearReproducciones, COLORES_GENERO } from "../../Data/Constantes";
import "./CancionCard.Module.scss";

const CancionCard = ({ cancion, onClick, activa = false }) => {
    const colorGenero = COLORES_GENERO[cancion.genero] ?? "#1DB954";

    return (
        <div
            className={`cancion-card ${activa ? "cancion-card--activa" : ""}`}
            onClick={() => onClick(cancion)}
        >
            <img
                className="cancion-card-portada"
                src={cancion.portada}
                alt={cancion.titulo}
                onError={(e) => { e.target.src = "https://placehold.co/56x56/1a1a2e/1DB954?text=♪"; }}
            />

            <div className="cancion-card-info">
                <span className="cancion-card-titulo">{cancion.titulo}</span>
                <span className="cancion-card-artista">{cancion.artista}</span>
                <span
                    className="cancion-card-genero"
                    style={{ backgroundColor: colorGenero + "22", color: colorGenero, border: `1px solid ${colorGenero}55` }}
                >
                    {cancion.genero}
                </span>
            </div>

            <div className="cancion-card-meta">
                <span className="cancion-card-reproducciones">
                    {formatearReproducciones(cancion.reproducciones)}
                </span>
                <span className="cancion-card-duracion">{cancion.duracion}</span>
            </div>
        </div>
    );
};

export default CancionCard;