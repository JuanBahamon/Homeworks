import { useTree } from '../context/TreeContext';
import { useAuth } from '../context/AuthContext';
import useCollection from '../hooks/useCollection';
import TreeNode from './TreeNode';

const FileTree = () => {
  const { tree, setTree } = useTree();
  const { user } = useAuth();
  const { add, update } = useCollection('arboles');

  const addChild = async (parentNode, tipo) => {
    if (!user) return;
    const nombre = prompt(`Nombre del ${tipo}:`);
    if (!nombre) return;

    const nuevoNodo = {
      id: Date.now().toString(),
      nombre,
      tipo,
      creadoPor: user.email,
      hijos: tipo === 'carpeta' ? [] : null
    };

    const insertarHijo = (nodo) => {
      if (nodo.id === parentNode.id) {
        nodo.hijos.push(nuevoNodo);
        return;
      }
      if (nodo.hijos) {
        nodo.hijos.forEach(hijo => insertarHijo(hijo));
      }
    };

    const nuevoArbol = { ...tree };
    insertarHijo(nuevoArbol);
    setTree(nuevoArbol);
    await update(tree.firebaseId, { estructura: JSON.stringify(nuevoArbol) });
  };

  const deleteNode = async (targetNode) => {
    const eliminar = (nodo) => {
      if (nodo.hijos) {
        nodo.hijos = nodo.hijos.filter(h => h.id !== targetNode.id);
        nodo.hijos.forEach(hijo => eliminar(hijo));
      }
    };
    const nuevoArbol = { ...tree };
    eliminar(nuevoArbol);
    setTree(nuevoArbol);
    await update(tree.firebaseId, { estructura: JSON.stringify(nuevoArbol) });
  };

  if (!tree) return <p>Cargando árbol...</p>;

  return (
    <TreeNode
      node={tree}
      onAddChild={addChild}
      onDelete={deleteNode}
    />
  );
};

export default FileTree;