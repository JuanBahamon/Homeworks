import { createContext, useContext, useState } from 'react';

const TreeContext = createContext();

export const TreeProvider = ({ children }) => {
  const [tree, setTree] = useState(null);

  return (
    <TreeContext.Provider value={{ tree, setTree }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTree = () => useContext(TreeContext);