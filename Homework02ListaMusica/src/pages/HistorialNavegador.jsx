import { useState } from 'react';
import { NodoHistorial } from '../utils/Listas';
import './HistorialNavegador.css';

const pag1 = new NodoHistorial("https://www.google.com");
const pag2 = new NodoHistorial("https://www.facebook.com");
const pag3 = new NodoHistorial("https://www.twitter.com");
const pag4 = new NodoHistorial("https://www.linkedin.com");

pag1.siguiente = pag2;
pag2.anterior = pag1;
pag2.siguiente = pag3;
pag3.anterior = pag2;
pag3.siguiente = pag4;
pag4.anterior = pag3;

function HistorialNavegador() {
  const [actual, setActual] = useState(pag1);

  const irSiguiente = () => {
    if (actual.siguiente) {
      setActual(actual.siguiente);
    } else {
      alert("No hay más páginas en el historial");
    }
  };

  const irAnterior = () => {
    if (actual.anterior) {
      setActual(actual.anterior);
    }
  };

  return (
    <div className="browser-container">
      <h2>Historial del Navegador</h2>

      <div className="url-bar">
        {actual.url}
      </div>

      <button
        className="btn-nav"
        onClick={irAnterior}
        disabled={!actual.anterior}
      >
        Atrás
      </button>

      <button
        className="btn-nav"
        onClick={irSiguiente}
        disabled={!actual.siguiente}
      >
        Adelante
      </button>
    </div>
  );
}

export default HistorialNavegador;