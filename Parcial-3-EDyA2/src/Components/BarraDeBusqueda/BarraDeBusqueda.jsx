import { useRef, useEffect } from "react";
import { TEXTOS, MIN_CHARS_BUSQUEDA } from "../../Data/Constantes";
import "./BarraDeBusqueda.Module.scss";

const BarraDeBusqueda = ({ textoBusqueda, sugerencias, onBuscar, onSeleccionar, onLimpiar }) => {
    const inputRef = useRef(null);
    const listaRef = useRef(null);

    const manejarCambio = (e) => {
        const valor = e.target.value;
        if (valor.length >= MIN_CHARS_BUSQUEDA || valor === "") {
            onBuscar(valor);
        }
    };

    const manejarClickSugerencia = (cancion) => {
        onSeleccionar(cancion);
        inputRef.current?.blur();
    };

    useEffect(() => {
        const cerrarAlClickAfuera = (e) => {
            if (listaRef.current && !listaRef.current.contains(e.target) &&
                inputRef.current && !inputRef.current.contains(e.target)) {
                onLimpiar();
            }
        };
        document.addEventListener("mousedown", cerrarAlClickAfuera);
        return () => document.removeEventListener("mousedown", cerrarAlClickAfuera);
    }, [onLimpiar]);

    return (
        <div className="barra-busqueda">
            <div className="barra-busqueda-contenedor">

                <input
                    ref={inputRef}
                    className="barra-busqueda-input"
                    type="text"
                    value={textoBusqueda}
                    onChange={manejarCambio}
                    placeholder={TEXTOS.placeholderBusqueda}
                    autoComplete="off"
                />

                {textoBusqueda && (
                    <button className="barra-busqueda-limpiar" onClick={onLimpiar}>
                        ✕
                    </button>
                )}
            </div>

            {sugerencias.length > 0 && (
                <ul ref={listaRef} className="barra-busqueda-sugerencias">
                    {sugerencias.map((cancion) => (
                        <li
                            key={cancion.id}
                            className="barra-busqueda-sugerencia"
                            onMouseDown={() => manejarClickSugerencia(cancion)}
                        >
                            <img
                                className="barra-busqueda-sugerencia-portada"
                                src={cancion.portada}
                                alt={cancion.titulo}
                                onError={(e) => { e.target.src = "https://placehold.co/32x32/1a1a2e/1DB954?text=♪"; }}
                            />
                            <div className="barra-busqueda-sugerencia-texto">
                                <span className="barra-busqueda-sugerencia-titulo">{cancion.titulo}</span>
                                <span className="barra-busqueda-sugerencia-artista">{cancion.artista}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BarraDeBusqueda;