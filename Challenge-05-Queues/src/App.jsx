import { useState } from 'react';
import ListaPersonas from './components/ListaPersonas';
import FormularioPersona from './components/FormularioPersona';

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
  miCola.enqueue({ nombre: 'Carlos Pérez', monto: 500000, fecha: new Date('2024-03-10 09:00').getTime() });
  miCola.enqueue({ nombre: 'Ana García', monto: 200000, fecha: new Date('2024-01-11 09:15').getTime() });
  miCola.enqueue({ nombre: 'Luis Martínez', monto: 350000, fecha: new Date('2024-01-12 09:30').getTime() });
  miCola.enqueue({ nombre: 'María López', monto: 150000, fecha: new Date('2024-01-13 09:45').getTime() });

function App() {

  const [personas, setPersonas] = useState([...miCola.personas]);

  const agregarPersona = (persona) => {
    miCola.enqueue(persona);
    setPersonas([...miCola.personas]);
  };
  return (
    <div className='contenedor'>
      <h1>Cola del Cajero</h1>
      <FormularioPersona enAgregar={agregarPersona} />
      <ListaPersonas personas={personas} />
    </div>
  );
}

export default App;