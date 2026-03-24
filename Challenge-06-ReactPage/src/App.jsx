import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login";
import Pilas from "./pages/Pilas";
import Colas from "./pages/Colas";
import RutaPrivada from "./components/RutaPrivada";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/inicio"
            element={
              <RutaPrivada>
                <Pilas />
              </RutaPrivada>
            }
          />
          <Route
            path="/pilas"
            element={
              <RutaPrivada>
                <Pilas />
              </RutaPrivada>
            }
          />
          <Route
            path="/colas"
            element={
              <RutaPrivada>
                <Colas />
              </RutaPrivada>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;