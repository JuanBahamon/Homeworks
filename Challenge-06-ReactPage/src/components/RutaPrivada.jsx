import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

function RutaPrivada({ children }) {
  const { usuario } = useAuth();

  return usuario ? children : <Navigate to="/" />;
}

export default RutaPrivada;