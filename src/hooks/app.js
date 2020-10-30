import React, { createContext, useEffect, useContext, useState } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [firstAccess, setFirstAccess] = useState(true);

  return (
    <AppContext.Provider
      value={{
        firstAccess
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const app = useContext(AppContext);

  return app;
}

export default AppProvider;
