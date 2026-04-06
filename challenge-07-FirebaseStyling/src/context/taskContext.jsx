import { createContext, useContext, useState } from "react";

const ContextoTareas = createContext();

export const ProveedorTareas = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (titulo) => {
    const nuevaTarea = {
      id: Date.now(),
      titulo,
      completada: false, // El profe pidió el "toggle", usaremos esta propiedad
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const alternarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const editarTarea = (id, nuevoTitulo) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, titulo: nuevoTitulo } : tarea
      )
    );
  };

  return (
    <ContextoTareas.Provider value={{ tareas, agregarTarea, eliminarTarea, alternarTarea, editarTarea }}>
      {children}
    </ContextoTareas.Provider>
  );
};

export const usarTareas = () => useContext(ContextoTareas);