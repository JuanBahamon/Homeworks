import { useState } from 'react';
import TreeNode from './TreeNode';

const BinaryTree = ({ initialRoot }) => {
  const [tree, setTree] = useState(initialRoot);

  const insertNode = (current, side) => {
    if (!current[side]) {
      current[side] = {
        valor: Math.floor(Math.random() * 100),
        izquierda: null,
        derecha: null
      };
      setTree({ ...tree });
    }
  };

  return (
    <div className="tree">
      <TreeNode nodo={tree} onInsert={insertNode} />
    </div>
  );
};

export default BinaryTree;