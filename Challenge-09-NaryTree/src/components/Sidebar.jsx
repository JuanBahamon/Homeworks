import MenuItem from './MenuItem';
import raiz from '../data';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      {raiz.hijos.map((nodo, index) => (
        <MenuItem key={index} nodo={nodo} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Sidebar;