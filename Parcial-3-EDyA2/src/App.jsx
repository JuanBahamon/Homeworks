import "./styles/main.scss";
import useMusicEngine from "./Hooks/useMusicEngine";
import BarraDeBusqueda from "./Components/BarraDeBusqueda/BarraDeBusqueda";
import RankingPanel from "./Components/RankingPanel/RankingPanel";
import GrafoDeRecomendar from "./Components/GrafoDeRecomendar/GrafoDeRecomendar";
import { TEXTOS } from "./Data/Constantes";

const App = () => {
  const {
    listo,
    textoBusqueda,
    sugerencias,
    ranking,
    recomendaciones,
    cancionActiva,
    buscar,
    seleccionarCancion,
    limpiarBusqueda,
    limpiarSeleccion,
  } = useMusicEngine();

  if (!listo) {
    return (
      <div className="app-cargando">
        <span>{TEXTOS.cargando}</span>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo">
          <span className="app-logo-icono">♫</span>
          <span className="app-logo-texto">Spotify Edu</span>
        </div>

        <BarraDeBusqueda
          textoBusqueda={textoBusqueda}
          sugerencias={sugerencias}
          onBuscar={buscar}
          onSeleccionar={seleccionarCancion}
          onLimpiar={limpiarBusqueda}
        />

        {cancionActiva && (
          <button className="app-limpiar-seleccion" onClick={limpiarSeleccion}>
            ✕ Limpiar
          </button>
        )}
      </header>

      <main className="app-contenido">
        <div className="app-columna app-columna-izquierda">
          <RankingPanel
            ranking={ranking}
            cancionActiva={cancionActiva}
            onSeleccionar={seleccionarCancion}
          />
        </div>

        <div className="app-columna app-columna--derecha">
          <GrafoDeRecomendar
            recomendaciones={recomendaciones}
            cancionActiva={cancionActiva}
            onSeleccionar={seleccionarCancion}
          />
        </div>
      </main>
    </div>
  );
};

export default App;