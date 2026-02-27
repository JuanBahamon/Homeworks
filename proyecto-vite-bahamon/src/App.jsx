import { useState } from 'react'
import './App.css'
import ListaContactos from './components/ListaContactos'
import FormularioContacto from './components/FormularioContacto'
import Cargador from './components/Cargador'

function App() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Juan', telefono: '123456789' },
    { id: 2, nombre: 'María', telefono: '987654321' },
    { id: 3, nombre: 'Pedro', telefono: '555555555' }
  ]);

  const [cargando, setCargando] = useState(true);

  setTimeout(() => {
    setCargando(false);
  }, 2000);

  const alEliminarContacto = (index) => {
    setContactos(contactos.filter((contacto, i) => i !== index));
  };

  const alAgregarContacto = (nuevoContacto) => {
    setContactos([...contactos, { id: Date.now(), ...nuevoContacto }]);
  }

  return (
    <div>
      <h1>Contactos</h1>

      {cargando ? (
        <Cargador />
      ) : (
        <>
          <ListaContactos 
            contactos={contactos} 
            alEliminarContacto={alEliminarContacto} />
          <FormularioContacto 
            alAgregarContacto={alAgregarContacto} />
        </>
      )}

    </div>
  );
}

export default App;