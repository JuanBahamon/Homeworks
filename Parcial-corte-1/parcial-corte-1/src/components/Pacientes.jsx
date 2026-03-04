import React, { useState } from "react";

const Pacientes = ({ agregarAlHistorial }) => {
    class nodoPaciente {
        constructor(nombre, edad, enfermedad) {
            this.nombre = nombre;
            this.edad = edad;
            this.enfermedad = enfermedad;
            this.siguiente = null;
        }
    }

    const [cabeza, setCabeza] = useState(() => {
        const paciente1 = new nodoPaciente("Juan", 30, "Gripe");
        const paciente2 = new nodoPaciente("Ana", 25, "Dolor de cabeza");
        const paciente3 = new nodoPaciente("Luis", 40, "Fiebre");

        paciente1.siguiente = paciente2;
        paciente2.siguiente = paciente3;

        return paciente1;
    });

    const atenderPaciente = () => {
        if (cabeza) {
            agregarAlHistorial({
                nombre: cabeza.nombre,
                edad: cabeza.edad,
                enfermedad: cabeza.enfermedad,
            });
            setCabeza(cabeza.siguiente);
        }
    };

    const mostrarPacientes = () => {
        const pacientes = [];
        let actual = cabeza;
        while (actual) {
            pacientes.push(`${actual.nombre} (${actual.edad} años) - ${actual.enfermedad}`);
            actual = actual.siguiente;
        }
        return pacientes;
    };

    return (
        <div className="contenedor-general">
            <h2>Gestión de Pacientes</h2>
            <div>
                <button className="boton" onClick={atenderPaciente}>
                    Atender Paciente
                </button>
            </div>
            <div>
                <h3>Pacientes en espera:</h3>
                <ul className="lista">
                    {mostrarPacientes().map((paciente, index) => (
                        <li className="elemento-lista" key={index}>
                            {paciente}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pacientes;