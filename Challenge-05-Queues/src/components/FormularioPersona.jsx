import { useState } from 'react';

function FormularioPersona({ enAgregar }) {
    const [nombre, setNombre] = useState('');
    const [monto, setMonto] = useState('');

    const agregarPersona = () => {
        if (!nombre || !monto) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        enAgregar({ nombre, monto, fecha: Date.now() });
        setNombre('');
        setMonto('');
    };
    return (
        <div>
            <h2>Agregar persona</h2>
            <p>Nombre</p>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder='Ej: Pepito'
            />
            <p>Monto</p>
            <input
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                placeholder='Ej: 777000'
            />
            <button onClick={agregarPersona}>Agregar a la cola</button>
        </div>
    );
}

export default FormularioPersona;