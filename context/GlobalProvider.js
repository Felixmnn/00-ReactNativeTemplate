import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProjectTemplates } from '@/lib/appwriteData';

// Erstellen des Kontexts
export const GlobalContext = createContext();


// Erstellen des Providers
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    userName: 'Felix',
    projekte: null,
    projektTemplates: []
  });

  useEffect(()=> {
    async function getProject(){
                const keys = await AsyncStorage.getAllKeys()
                const projectKeys = keys.filter((key) => key.includes("Project-"))
                const allProjects = await AsyncStorage.multiGet(projectKeys)
                const parsedProjects = allProjects.map(([key,value]) => JSON.parse(value));
                const projectTemplates = await getProjectTemplates();
                console.log("Loaded project templates sucessfully",projectTemplates)
                console.log("loaded Projects Successfully",parsedProjects)
                
                if (parsedProjects && parsedProjects.length > 0) {
                  setState(prevState => ({ 
                    ...prevState,
                    projekte: parsedProjects,
                    projektTemplates:projectTemplates
                  }))
                } else {
                  setState(prevState => ({ 
                    ...prevState,
                    projekte: false,
                    projektTemplates:projectTemplates
                  }))
                }
            }
            getProject()

  },[])
  
  
  
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
