import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const { iniciarSesion } = useAuth();
  const navegar = useNavigate();

  const manejarLogin = () => {
    if (correo === "user@mail.com" && contrasena === "123") {
      iniciarSesion({ correo });
      navegar("/inicio");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <button onClick={manejarLogin}>Ingresar</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;