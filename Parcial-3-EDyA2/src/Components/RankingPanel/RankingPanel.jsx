import CancionCard from "../CancionCard/CancionCard";
import { TEXTOS } from "../../Data/Constantes";
import "./RankingPanel.Module.scss";

const MEDALLAS = ["(1)", "(2)", "(3)"];

const RankingPanel = ({ ranking, cancionActiva, onSeleccionar }) => {
    return (
        <section className="ranking-panel">
            <h2 className="ranking-panel-titulo">{TEXTOS.rankingTitulo}</h2>

            <ul className="ranking-panel-lista">
                {ranking.map((cancion, index) => (
                    <li key={cancion.id} className="ranking-panel-item">
                        <span className="ranking-panel-posicion">
                            {index < 3 ? MEDALLAS[index] : `#${index + 1}`}
                        </span>
                        <CancionCard
                            cancion={cancion}
                            onClick={onSeleccionar}
                            activa={cancionActiva?.id === cancion.id}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RankingPanel;