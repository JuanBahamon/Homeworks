import { useState } from 'react';

function FormularioLibros({ enAgregar }) {
    const [nombre, setNombre] = useState('');
    const [isbn, setIsbn] = useState('');
    const [autor, setAutor] = useState('');
    const [editorial, setEditorial] = useState('');

    const agregarLibro = () => {
        if (!nombre || !isbn || !autor || !editorial) {
            alert('Por favor, completa todos los campos antes de agregar el libro.');
            return;
        }
        enAgregar({ nombre, isbn, autor, editorial });
        setNombre('');
        setIsbn('');
        setAutor('');
        setEditorial('');
    };

    return (
        <div>
            <h2>Agregar Libro</h2>
            <h2>Nombre </h2>
            <input
                type= "text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder='Ejemplo: Wigetta y el Baculo Dorado'
            />
            <h2>ISBN </h2>
            <input
                type= "text"
                value={isbn}
                onChange={e => setIsbn(e.target.value)}
                placeholder='Ejemplo: 978-1234567890'
            />
            <h2>Autor </h2>
            <input
                type= "text"
                value={autor}
                onChange={e => setAutor(e.target.value)}
                placeholder='Ejemplo: Vegetta777 y Willyrex'
            />
            <h2>Editorial </h2>
            <input
                type= "text"
                value={editorial}
                onChange={e => setEditorial(e.target.value)}
                placeholder='Ejemplo: Editorial Pinguino'
            />

            <button onClick={agregarLibro}>
                Agregar
            </button>
        </div>
     );
}

export default FormularioLibros;