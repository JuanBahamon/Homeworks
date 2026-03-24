function ListaLibro({ libros }) {
    return (
        <div>
            <h2> Pila de libros ({ libros.length })</h2>
            {libros.map((libro, index) => (
             <div key={index}>
                <p><strong>Nombre: </strong>{libro.nombre}</p>
                <p><strong>ISBN: </strong>{libro.isbn}</p>
                <p><strong>Autor: </strong>{libro.autor}</p>
                <p><strong>Editorial: </strong>{libro.editorial}</p>
                <hr />
             </div>
            ))}
        </div>
    );
}

export default ListaLibro;