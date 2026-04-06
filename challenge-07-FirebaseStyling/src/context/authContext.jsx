import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const ContextoAuth = createContext();

export const ProveedorAuth = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const desuscribir = onAuthStateChanged(auth, (usuarioActual) => {
      setUsuario(usuarioActual);
      setCargando(false);
    });
    return () => desuscribir();
  }, []);

  return (
    <ContextoAuth.Provider value={{ usuario }}>
      {!cargando && children}
    </ContextoAuth.Provider>
  );
};

export const usarContextoAuth = () => useContext(ContextoAuth);