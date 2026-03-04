import React, { useState, useEffect } from "react";

const Medicos = () => {
    class nodoMedico {
        constructor(nombre, especialidad) {
            this.nombre = nombre;
            this.especialidad = especialidad;
            this.siguiente = null;
        }
    }

    const [cabeza] = useState(() => {
        const medico1 = new nodoMedico("Dr. Juan", "Cardiología");
        const medico2 = new nodoMedico("Dra. Ana", "Pediatría");
        const medico3 = new nodoMedico("Dr. Luis", "Neurología");

        medico1.siguiente = medico2;
        medico2.siguiente = medico3;
        medico3.siguiente = medico1;

        return medico1;
    });

    const [actual, setActual] = useState(cabeza);

    const rotarMedico = () => {
        if (actual) {
            setActual(actual.siguiente);
        }
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            setActual(prev => prev.siguiente);
        }, 10000);
    
        return () => clearInterval(intervalo);
    }, []);

    const mostrarMedicos = () => {
        const medicos = [];
        if (!cabeza) return medicos;

        let temp = cabeza;
        do {
            medicos.push(`${temp.nombre} - ${temp.especialidad}`);
            temp = temp.siguiente;
        } while (temp !== cabeza);

        return medicos;
    };

    return (
        <div className = "contenedor-general">
            <h2>Gestión de Médicos</h2>
            <div>
                <h3>Médicos en la lista:</h3>
                <ul>
                    {mostrarMedicos().map((medico, index) => (
                        <li key={index}>{medico}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Médico de guardia actual:</h3>
                {actual ? (
                    <p>
                        {actual.nombre} - {actual.especialidad}
                    </p>
                ) : (
                    <p>No hay médicos en la lista.</p>
                )}
            </div>
        </div>
    );
};

export default Medicos;
