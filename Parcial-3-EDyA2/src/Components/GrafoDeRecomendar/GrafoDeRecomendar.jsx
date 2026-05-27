import styles from './GrafoDeRecomendar.module.scss';
import CancionCard from "../CancionCard/CancionCard";
import { TEXTOS } from "../../Data/Constantes";

const GrafoDeRecomendar = ({ recomendaciones, cancionActiva, onSeleccionar }) => {
    if (!cancionActiva) {
        return (
            <section className={styles.grafoRecomendar}>
                <h2 className={styles.titulo}>{TEXTOS.recomTitulo}</h2>
                <p className={styles.vacio}>{TEXTOS.sinRecomendaciones}</p>
            </section>
        );
    }

    return (
        <section className={styles.grafoRecomendar}>
            <h2 className={styles.titulo}>{TEXTOS.recomTitulo}</h2>

            <div className={styles.origen}>
                <span className={styles.origenLabel}>Porque escuchaste</span>
                <span className={styles.origenNombre}>{cancionActiva.titulo}</span>
            </div>

            {recomendaciones.length === 0 ? (
                <p className={styles.vacio}>Sin recomendaciones disponibles</p>
            ) : (
                <ul className={styles.lista}>
                    {recomendaciones.map((cancion) => (
                        <li key={cancion.id} className={styles.item}>
                            <span
                                className={styles.distancia}
                                title={`Distancia en el grafo: ${cancion.distancia}`}
                            >
                                {"●".repeat(cancion.distancia)}
                            </span>
                            <CancionCard
                                cancion={cancion}
                                onClick={onSeleccionar}
                                activa={false}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default GrafoDeRecomendar;