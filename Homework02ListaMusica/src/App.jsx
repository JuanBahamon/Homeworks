import { useState } from 'react'
import ReproductorMusica from './pages/ReproductorMusica'
import HistorialNavegador from './pages/HistorialNavegador'
import './App.css';

function App() {
  const [paginaActual, setPaginaActual] = useState('reproductor')

  return (
    <div className="main-layout">
      <h1>Lista de Música</h1>

      <nav className="tabs">
        <button
          className={`tab-btn ${paginaActual === 'reproductor' ? 'active' : ''}`}
          onClick={() => setPaginaActual('reproductor')}
        >
          Reproductor de Música
        </button>
        <button
          className={`tab-btn ${paginaActual === 'historial' ? 'active' : ''}`}
          onClick={() => setPaginaActual('historial')}
        >
          Historial del Navegador
        </button>
      </nav>

      {paginaActual === 'reproductor' && <ReproductorMusica />}
      {paginaActual === 'historial' && <HistorialNavegador />}
    </div>
  )
}

export default App