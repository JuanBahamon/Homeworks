import React from 'react';
import './listaContactos.css';

function ListaContactos({ contactos, alEliminarContacto }) {
    return (
        <div>
            <h2>Lista de Contactos</h2>
            <ul>
                {contactos.map((contacto, index) => (
                    <li key={index}>
                        {contacto.nombre} - {contacto.telefono}
                        <button className="boton-eliminar" onClick={() => alEliminarContacto(index)}>✕</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaContactos;