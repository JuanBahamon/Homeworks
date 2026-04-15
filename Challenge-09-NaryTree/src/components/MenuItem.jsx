import { useState } from 'react';

const MenuItem = ({ nodo, onSelect }) => {
  const [abierto, setAbierto] = useState(false);

  const tieneHijos = nodo.hijos.length > 0;

  return (
    <div className="menu-item">
      <div
        className={`menu-label ${tieneHijos ? 'has-children' : ''}`}
        onClick={() => {
          if (tieneHijos) {
            setAbierto(!abierto);
          } else {
            onSelect(nodo.titulo);
          }
        }}
      >
        <span>{nodo.titulo}</span>
        {tieneHijos && (
          <span className="arrow">{abierto ? '▲' : '▼'}</span>
        )}
      </div>

      {tieneHijos && abierto && (
        <div className="submenu">
          {nodo.hijos.map((hijo, index) => (
            <MenuItem key={index} nodo={hijo} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;