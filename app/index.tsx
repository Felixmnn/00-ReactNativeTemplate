import { View, Text, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { router } from 'expo-router'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from '@/context/GlobalProvider';
import CustomButton from '@/components/gui/CustomButton';

const index = () => {
  const [isLoading , setIsLoading] = useState(true)
  const { state, setState } = useContext(GlobalContext);

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

    setIsLoading(false)
  },[])


  return (
    <View className='items-center justify-center flex-1'>
      {
        isLoading ? 
          <ActivityIndicator size="large" color="#1f3f70" />
        :
        <View>
          <TouchableOpacity onPress={()=> router.push("/progress")} className="bg-primary p-2 rounded-[5px] w-[150px] items-center">
            <Text className='text-xl font-bold text-white'>Get Started</Text>
          </TouchableOpacity>
        </View>
      }
      
    </View>
  )
}

export default index