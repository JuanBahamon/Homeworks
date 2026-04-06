import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProveedorAuth, usarContextoAuth } from "./context/authContext";
import { ProveedorTareas } from "./context/TaskContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PaginaTareas from "./pages/PaginaTarea"; 

const RutaPrivada = ({ children }) => {
  const { usuario } = usarContextoAuth();
  return usuario ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ProveedorAuth>
      <ProveedorTareas>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tasks" element={
              <RutaPrivada>
                <PaginaTareas />
              </RutaPrivada>
            } />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ProveedorTareas>
    </ProveedorAuth>
  );
}

export default App;