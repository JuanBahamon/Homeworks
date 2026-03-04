import React, { useState, useEffect } from "react";

const Historial = ({ historial }) => {
    class nodoHistorial {
        constructor(fecha, tratamiento) {
            this.fecha = fecha;
            this.tratamiento = tratamiento;
            this.siguiente = null;
            this.anterior = null;
        }
    }

    const construirLista = (arr) => {
        if (arr.length === 0) return null;

        const cabeza = new nodoHistorial(arr[0].fecha, `${arr[0].nombre} - ${arr[0].enfermedad}`);
        let actual = cabeza;

        for (let i = 1; i < arr.length; i++) {
            const nuevo = new nodoHistorial(arr[i].fecha, `${arr[i].nombre} - ${arr[i].enfermedad}`);
            actual.siguiente = nuevo;
            nuevo.anterior = actual;
            actual = nuevo;
        }

        return cabeza;
    };

    const [cabeza, setCabeza] = useState(null);
    const [actual, setActual] = useState(null);

    useEffect(() => {
        const nuevaCabeza = construirLista(historial);
        setCabeza(nuevaCabeza);
        setActual(nuevaCabeza);
    }, [historial]);

    const siguiente = () => {
        if (actual && actual.siguiente) setActual(actual.siguiente);
    };

    const anterior = () => {
        if (actual && actual.anterior) setActual(actual.anterior);
    };

    const mostrarRegistros = () => {
        const registros = [];
        let temp = cabeza;
        while (temp) {
            registros.push(`${temp.fecha} - ${temp.tratamiento}`);
            temp = temp.siguiente;
        }
        return registros;
    };

    return (
        <div className="contenedor-general">
            <h2>Historial de Atención</h2>

            <div>
                <h3>Registros en el historial:</h3>
                <ul>
                    {mostrarRegistros().map((registro, index) => (
                        <li key={index}>{registro}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Navegación:</h3>
                {actual ? (
                    <p>{actual.fecha} - {actual.tratamiento}</p>
                ) : (
                    <p>No hay registros.</p>
                )}
                <button onClick={anterior} disabled={!actual || !actual.anterior}>
                    Anterior
                </button>
                <button onClick={siguiente} disabled={!actual || !actual.siguiente}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Historial;