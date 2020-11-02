/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [firstAccess, setFirstAccess] = useState(null);

  useEffect(() => {
    (async () => {
      const storagedValue = await AsyncStorage.getItem('@helper:firstAccess');
      setFirstAccess(storagedValue !== 'false');
    })();
  }, [firstAccess]);

  async function presentationDone() {
    await AsyncStorage.setItem('@helper:firstAccess', 'false');
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
