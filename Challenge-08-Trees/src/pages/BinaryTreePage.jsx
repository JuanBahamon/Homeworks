import { useState } from 'react';
import Tree from 'react-d3-tree';
import arbol, { convertirParaD3 } from '../data';
import '../index.scss'

const BinaryTreePage = () => {
  const [resultado, setResultado] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [encontrado, setEncontrado] = useState(null);
  const [recorrido, setRecorrido] = useState('');

  const capturarRecorrido = (metodo) => {
    const valores = [];
    const originalLog = console.log;
    console.log = (val) => valores.push(val);
    metodo(arbol.raiz);
    console.log = originalLog;
    return valores;
  };

  const handlePreorden = () => {
    setRecorrido('PreOrder (N-L-R)');
    setResultado(capturarRecorrido(arbol.preorden.bind(arbol)));
    setEncontrado(null);
  };

  const handleInorden = () => {
    setRecorrido('InOrder (L-N-R)');
    setResultado(capturarRecorrido(arbol.inorden.bind(arbol)));
    setEncontrado(null);
  };

  const handlePostorden = () => {
    setRecorrido('PostOrder (L-R-N)');
    setResultado(capturarRecorrido(arbol.postorden.bind(arbol)));
    setEncontrado(null);
  };

  const handleBuscar = () => {
    const valor = parseInt(busqueda);
    if (isNaN(valor)) return;
    const found = arbol.buscar(valor);
    setEncontrado({ valor, found });
    setResultado([]);
  };

  const treeData = convertirParaD3(arbol.raiz);

  return (
    <div className="page">
      <h1>Challenge 08</h1>

      <div className="buttons">
        <button onClick={handlePreorden}>PreOrder</button>
        <button onClick={handleInorden}>InOrder</button>
        <button onClick={handlePostorden}>PostOrder</button>
      </div>

      {resultado.length > 0 && (
        <div className="resultado">
          <h3>{recorrido}:</h3>
          <p>{resultado.join(' , ')}</p>
        </div>
      )}

      <div className="search-row">
        <input
          type="number"
          placeholder="Buscar valor..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>

      {encontrado !== null && (
        <p>
          El valor <strong>{encontrado.valor}</strong>{' '}
          {encontrado.found ? 'está en el árbol' : 'no está en el árbol'}
        </p>
      )}

      <hr />

      <h3>Visualización del Árbol:</h3>
      <div className="tree-container">
        <Tree
          data={treeData}
          orientation="vertical"
          translate={{ x: 450, y: 50 }}
          pathClassFunc={() => 'custom-link'}
          zoom={0.8}
          collapsible={false}
        />
      </div>
    </div>
  );
};

export default BinaryTreePage;