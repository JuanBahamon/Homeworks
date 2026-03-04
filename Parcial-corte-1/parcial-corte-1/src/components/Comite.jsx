import React, { useState } from "react";

const Comite = () => {
    class nodoComite {
        constructor(nombre, cargo) {
            this.nombre = nombre;
            this.cargo = cargo;
            this.siguiente = null;
            this.anterior = null;
        }
    }

    const [cabeza] = useState(() => {
        const miembro1 = new nodoComite("Juan", "Presidente");
        const miembro2 = new nodoComite("Ana", "Secretaria");
        const miembro3 = new nodoComite("Luis", "Tesorero");

        miembro1.siguiente = miembro2;
        miembro2.anterior = miembro1;
        miembro2.siguiente = miembro3;
        miembro3.anterior = miembro2;
        miembro3.siguiente = miembro1;
        miembro1.anterior = miembro3;

        return miembro1;
    });

    const mostrarMiembros = () => {
        const miembros = [];
        if (!cabeza) return miembros;

        let temp = cabeza;
        do {
            miembros.push(`${temp.nombre} - ${temp.cargo}`);
            temp = temp.siguiente;
        } while (temp !== cabeza);

        return miembros;
    };

    return (
        <div className = "contenedor-general">
            <h2>Comité Administrativo</h2>
            <div>
                <h3>Miembros del Comité:</h3>
                <ul>
                    {mostrarMiembros().map((miembro, index) => (
                        <li key={index}>{miembro}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Comite;
