import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { usuario, cerrarSesion } = useAuth();
  const navegar = useNavigate();

  const manejarCerrarSesion = () => {
    cerrarSesion();
    navegar("/");
  };

  return (
    <nav>
      <span>Bienvenido: {usuario?.correo}</span>
      <button onClick={() => navegar("/pilas")}>Pilas</button>
      <button onClick={() => navegar("/colas")}>Colas</button>
      <button onClick={manejarCerrarSesion}>Cerrar Sesión</button>
    </nav>
  );
}

export default Navbar;