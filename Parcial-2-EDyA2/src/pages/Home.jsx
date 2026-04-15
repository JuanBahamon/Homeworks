import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTree } from '../context/TreeContext';
import useCollection from '../hooks/useCollection';
import FileTree from '../components/FileTree';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const { user, logout } = useAuth();
  const { tree, setTree } = useTree();
  const { getAll, add } = useCollection('arboles');
  const navigate = useNavigate();

  useEffect(() => {
    const cargarArbol = async () => {
      const datos = await getAll();
      if (datos.length > 0) {
        const arbol = JSON.parse(datos[0].estructura);
        arbol.firebaseId = datos[0].id;
        setTree(arbol);
      } else {
        const raiz = {
          id: 'root',
          nombre: 'raiz',
          tipo: 'carpeta',
          creadoPor: user?.email || null,
          hijos: []
        };
        const id = await add({ estructura: JSON.stringify(raiz) });
        raiz.firebaseId = id;
        setTree(raiz);
      }
    };
    cargarArbol();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Gestor de Archivos</h1>
        <div className="header-right">
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <button onClick={() => navigate('/login')}>Iniciar sesión</button>
          )}
        </div>
      </div>
      <div className="home-body">
        <FileTree />
      </div>
    </div>
  );
};

export default Home;