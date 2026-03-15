import { useState } from 'react';
import ListaLibros from './components/ListaLibros';
import FormularioLibros from './components/FormularioLibros';

class Pila {
  constructor() {
    this.libros = [];
  }
  push(valor) {
    this.libros.push(valor);
  }
  pop() {
    return this.libros.length > 0 ? this.libros.pop() : null;
  }
  peek() {
    return this.libros.length > 0
      ? this.libros[this.libros.length - 1]
      : null;
  }
  isEmpty() {
    return this.libros.length === 0;
  }
  size() {
    return this.libros.length;
  }
}

  const miPila = new Pila();
  miPila.push({ nombre: 'Wigetta y el Baculo Dorado', isbn: '978-1234567890', autor: 'Vegetta777 y Willyrex', editorial: 'Editorial Pinguino' });
  miPila.push({ nombre: 'El Secreto de la Isla', isbn: '978-0987654321', autor: 'Luna y Sol', editorial: 'Editorial Estrella' });
  miPila.push({ nombre: 'La Aventura del Bosque Encantado', isbn: '978-1122334455', autor: 'Bosque y Magia', editorial: 'Editorial Encantada' });
  miPila.push({ nombre: 'El Misterio del Castillo', isbn: '978-5566778899', autor: 'Castillo y Sombra', editorial: 'Editorial Misterio' });

function App() {

  const [libros, setLibros] = useState([...miPila.libros].reverse());

  const agregarLibro = (libro) => {
    miPila.push(libro);
    setLibros([...miPila.libros].reverse());
  };

  return (
    <div className="contenedor">
      <h1>Pila de Libros</h1>
      <ListaLibros libros={libros} />
      <FormularioLibros enAgregar={agregarLibro} />
    </div>
  );
}

export default App;