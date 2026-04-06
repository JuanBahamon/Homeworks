import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await iniciarSesion(email, password);
      navigate("/tasks");
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {error && <p className="error-message">{error}</p>}

        <p>Email del usuario</p>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />

        <p>Tu clave</p>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />

        <button type="submit" className="btn-auth">Entrar al sistema</button>

        <p className="switch-auth">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;