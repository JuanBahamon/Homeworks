import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const SidebarPage = () => {
  const [paginaActiva, setPaginaActiva] = useState('Bienvenido');

  return (
    <div className="layout">
      <Sidebar onSelect={setPaginaActiva} />
      <div className="content">
        <h1>{paginaActiva}</h1>
        <p>Selecciona una opción del menú</p>
      </div>
    </div>
  );
};

export default SidebarPage;