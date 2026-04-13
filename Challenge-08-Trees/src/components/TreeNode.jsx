const TreeNode = ({ nodo, onInsert }) => {
  if (!nodo) return null;

  return (
    <div className="node-container">
      <div className="node">
        {nodo.valor}
        <div>
          <button onClick={() => onInsert(nodo, 'izquierda')}>Left</button>
          <button onClick={() => onInsert(nodo, 'derecha')}>Right</button>
        </div>
      </div>
      <div className="children">
        <TreeNode nodo={nodo.izquierda} onInsert={onInsert} />
        <TreeNode nodo={nodo.derecha} onInsert={onInsert} />
      </div>
    </div>
  );
};

export default TreeNode;