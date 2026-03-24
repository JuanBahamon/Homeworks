import { useState } from 'react';
import Navbar from "../components/Navbar";
import FormularioPersona from '../components/FormularioPersona';
import ListaPersonas from '../components/ListaPersonas';

class Cola {
  constructor() {
    this.personas = [];
  }
  enqueue(valor) {
    this.personas.push(valor);
  }
  dequeue() {
    return this.personas.length > 0 ? this.personas.shift() : null;
  }
  peek() {
    return this.personas.length > 0 ? this.personas[0] : null;
  }
  isEmpty() {
    return this.personas.length === 0;
  }
  size() {
    return this.personas.length;
  }
}

const miCola = new Cola();

function Colas() {
  const [personas, setPersonas] = useState([...miCola.personas]);

  const agregarPersona = (persona) => {
    miCola.enqueue(persona);
    setPersonas([...miCola.personas]);
  };

  return (
    <div>
      <Navbar />
      <div className="contenedor">
        <h1>Cola de Cajero</h1>
        <ListaPersonas personas={personas} />
        <FormularioPersona enAgregar={agregarPersona} />
      </div>
    </div>
  );
}

export default Colas;