import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Erstellen des Kontexts
export const GlobalContext = createContext();


// Erstellen des Providers
export const GlobalProvider = ({ children }) => {
  useEffect(()=> {
    async function getProject(){
                const keys = await AsyncStorage.getAllKeys()
                const projectKeys = keys.filter((key) => key.includes("Project-"))
                const allProjects = await AsyncStorage.multiGet(projectKeys)
                const parsedProjects = allProjects.map(([key,value]) => JSON.parse(value));
              console.log("loaded Projects Successfully",parsedProjects)
                if (parsedProjects) {
                  setState(prevState => ({
                    ...prevState,
                    projekte: parsedProjects
                  }))
                } else {
                  console.log("Noch keine Projekte")
                }
            }
            getProject()

  },[])
  
  const [state, setState] = useState({
    userName: 'Felix',
    projekte: null,
  });
  
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
