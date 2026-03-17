function listaPersonas ({ personas }) {
    if (!personas || personas.length === 0) {
        return <p>No hay personas en la cola.</p>;
    }

    return (
        <div>
            <h2>Cola de cajero</h2>
            {personas.map((persona, index) => (
                <div key={index}>
                    <p><strong>Nombre:</strong> {persona.nombre}</p>
                    <p><strong>Monto:</strong> ${persona.monto.toLocaleString()}</p>
                    <p><strong>Fecha:</strong> {new Date(persona.fecha).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default listaPersonas;