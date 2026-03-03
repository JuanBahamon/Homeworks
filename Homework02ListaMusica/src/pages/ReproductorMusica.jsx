import { useState} from 'react';
import { NodoMusica } from '../utils/Listas';
import './ReproductorMusica.css';

const cancion1 = new NodoMusica("Bohemian Rhapsody", "Queen");
const cancion2 = new NodoMusica("Imagine", "John Lennon");
const cancion3 = new NodoMusica("Hotel California", "Eagles");
const cancion4 = new NodoMusica("Stairway to Heaven", "Led Zeppelin");

cancion1.siguiente = cancion2;
cancion2.siguiente = cancion3;
cancion3.siguiente = cancion4;

function ReproductorMusica() {
  const [actual, setActual] = useState(cancion1);

  const irSiguiente = ()  => {
    if (actual.siguiente) {
      setActual(actual.siguiente);
    }else{
      alert("No hay más canciones en la lista");
    }
  };

  return (
    <div className="reproductor-card">
      <h2>Reproductor</h2>
      
      <div className="info-cancion">
        <p><strong>Título:</strong> {actual.titulo}</p>
        <p><strong>Artista:</strong> {actual.artista}</p>
      </div>

      <button 
        className="boton-next" 
        onClick={irSiguiente} 
        disabled={!actual.siguiente}
      >
        Siguiente Canción
      </button>
      
      {!actual.siguiente && <p className="footer-text">Fin de la lista simple.</p>}
    </div>
  );
}

export default ReproductorMusica;