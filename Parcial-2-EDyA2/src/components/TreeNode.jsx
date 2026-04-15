import { useAuth } from '../context/AuthContext.jsx';
import './TreeNode.scss';

const TreeNode = ({ node, onAddChild, onDelete }) => {
  const { user } = useAuth();

  if (!node) return null;

  return (
    <div className="node-container">
      <div className="node">
        <span>{node.tipo === 'carpeta' ? '📁' : '📄'} {node.nombre}</span>
        <span className="node-owner">{node.creadoPor}</span>
        {user && node.tipo === 'carpeta' && (
          <div className="node-actions">
            <button onClick={() => onAddChild(node, 'carpeta')}>+ Carpeta</button>
            <button onClick={() => onAddChild(node, 'archivo')}>+ Archivo</button>
          </div>
        )}
        {user && (
          <button className="btn-delete" onClick={() => onDelete(node)}>✕</button>
        )}
      </div>
      {node.hijos && node.hijos.length > 0 && (
        <div className="children">
          {node.hijos.map((hijo, index) => (
            <TreeNode
              key={index}
              node={hijo}
              onAddChild={onAddChild}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;