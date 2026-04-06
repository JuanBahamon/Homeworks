import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { registrarse } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registrarse(email, password);
      navigate("/tasks");
    } catch (err) {
      setError("Error al crear la cuenta.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        {error && <p className="error-message">{error}</p>}

        <p>Correo electrónico</p>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Ej: juan@correo.com"
          required
        />

        <p>Contraseña</p>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Mínimo 6 caracteres"
          required
        />

        <button type="submit" className="btn-auth">Registrarse ahora</button>

        <p className="switch-auth">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;