import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = () => {
  
  const registrarse = async (email, password) => {
    try {
      const credenciales = await createUserWithEmailAndPassword(auth, email, password);
      return credenciales.user;
    } catch (error) {
      console.error("Error en registro:", error.code);
      throw error;
    }
  };

  const iniciarSesion = async (email, password) => {
    try {
      const credenciales = await signInWithEmailAndPassword(auth, email, password);
      return credenciales.user;
    } catch (error) {
      console.error("Error en login:", error.code);
      throw error;
    }
  };

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al salir:", error);
    }
  };

  return { registrarse, iniciarSesion, cerrarSesion };
};