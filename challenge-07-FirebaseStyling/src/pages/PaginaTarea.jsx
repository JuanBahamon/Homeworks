import { useState } from "react";
import { usarTareas } from "../context/TaskContext";
import { useAuth } from "../hooks/useAuth";

const PaginaTareas = () => {
  const { tareas, agregarTarea, eliminarTarea, alternarTarea } = usarTareas();
  const { cerrarSesion } = useAuth();
  const [nuevoTexto, setNuevoTexto] = useState("");

  const manejarAgregar = () => {
    if (!nuevoTexto) {
      alert("Escribe una tarea antes de agregar.");
      return;
    }
    agregarTarea(nuevoTexto);
    setNuevoTexto("");
  };

  return (
    <div className="contenedor">
      <h1>Panel de Tareas</h1>
      <button onClick={cerrarSesion} className="btn-salir">Salir de la cuenta</button>

      <div className="formulario-seccion">
        <h2>Nueva tarea</h2>
        <p>¿Qué vas a hacer hoy?</p>
        <input 
          type="text" 
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          placeholder="Ej: Lavar la ropa"
        />
        <button onClick={manejarAgregar}>Agregar a la lista</button>
      </div>

      <div className="lista-seccion">
        <h2>Lista de pendientes</h2>
        {tareas.length === 0 ? (
          <p>No hay tareas registradas.</p>
        ) : (
          tareas.map((tarea) => (
            <div key={tarea.id} className="item-tarea">
              <p><strong>Descripción:</strong> {tarea.titulo}</p>
              <p><strong>Estado:</strong> {tarea.completada ? "Finalizada" : "Pendiente"}</p>
              
              <div className="botones-accion">
                <button onClick={() => alternarTarea(tarea.id)}>
                  {tarea.completada ? "Reabrir" : "Terminar"}
                </button>
                <button onClick={() => eliminarTarea(tarea.id)}>Borrar</button>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PaginaTareas;