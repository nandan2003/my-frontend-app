import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
