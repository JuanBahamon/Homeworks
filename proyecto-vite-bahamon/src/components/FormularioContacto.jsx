import React, { useState } from 'react';
import './FormularioContacto.css';

function FormularioContacto({ alAgregarContacto }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !telefono.trim()) {
            alert('Por favor, completa ambos campos.');
            return;
        }

        alAgregarContacto({ nombre, telefono });
        setNombre('');
        setTelefono('');
    };

        return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                    onChange={(e) => {
                        const soloLetras = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, '');
                        setNombre(soloLetras);
            }}
            />
            <input
                type="tel"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => {
                    const soloNumeros = e.target.value.replace(/[^0-9]/g, '');
                    setTelefono(soloNumeros);
                }}
            />
            <button className="boton-agregar" type="submit">Agregar</button>
        </form>
    );
}

export default FormularioContacto;