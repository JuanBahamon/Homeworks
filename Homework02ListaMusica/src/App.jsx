import { useState } from 'react'
import ReproductorMusica from './pages/ReproductorMusica'
import HistorialNavegador from './pages/HistorialNavegador'

function App() {
  const [paginaActual, setPaginaActual] = useState('reproductor')

  return (
    <div>
      <h1>Lista de Música</h1>

      <nav>
        <button onClick={() => setPaginaActual('reproductor')}>
          Reproductor de Música
        </button>
        <button onClick={() => setPaginaActual('historial')}>
          Historial del Navegador
        </button>
      </nav>

      {paginaActual === 'reproductor' && <ReproductorMusica />}
      {paginaActual === 'historial' && <HistorialNavegador />}
    </div>
  )
}

export default App