import React, { useState } from "react";
import Pacientes from "./components/Pacientes";
import Historial from "./components/Historial";
import Medicos from "./components/Medicos";
import Comite from "./components/Comite";
import "./App.css";

const App = () => {
    const [historial, setHistorial] = useState([]);

    const agregarAlHistorial = (paciente) => {
        setHistorial((prev) => [
            ...prev,
            { fecha: new Date().toISOString().split("T")[0], ...paciente },
        ]);
    };

    return (
        <div>
            <h1>Sistema de Gestión Clínica</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <Pacientes agregarAlHistorial={agregarAlHistorial} />
                </div>

                <div>
                    <Historial historial={historial} />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <div>
                    <Medicos />
                </div>

                <div>
                    <Comite />
                </div>
            </div>
        </div>
    );
};

export default App;
