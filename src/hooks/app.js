import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [firstAccess, setFirstAccess] = useState(
    async () =>
      (await AsyncStorage.getItem('@helper:firstAccess')) === null && true
  );

  async function presentationDone() {
    await AsyncStorage.setItem('@helper:firstAccess', false);
    setFirstAccess(false);
  }

  return (
    <AppContext.Provider
      value={{
        firstAccess,
        presentationDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const app = useContext(AppContext);

  return app;
}

export default AppProvider;
