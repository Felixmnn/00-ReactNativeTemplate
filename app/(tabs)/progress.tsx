import { View, Text, ScrollView, TouchableOpacity,FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { GlobalContext } from '@/context/GlobalProvider';
import { useContext,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalExample from '@/components/gui/ModalExample'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderProject from '@/components/gui/RenderProject'


const progress = () => {
  const { state, setState } = useContext(GlobalContext);
  const [ listIndex, setListIndex ] = useState(0)
  const [ projectList, setProjectList ] = useState([])
  console.log("Hier fehler warum?",state.projektTemplates) 
  const projekte = state.projekte
  console.log("Projekte", projekte)
  useEffect (()=> {
    setProjectList(state.projektTemplates)
  },[state.projektTemplates])
  
  async function clear() {
    await AsyncStorage.clear()
  }


  return (
    <SafeAreaView className='flex-1 '>
    <ScrollView className='bg-white'>
            <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Progress</Text>
            {
              Array.isArray(projekte) ? 
                <View className='w-full items-center'>
                  {
                    projekte.map((projekt)=> {
                      return <RenderProject project={projekt}/>

                    })
                  }
                </View>
              :

              projekte === false ?
                <View>
                  <ModalExample showModal={true}/>
                </View>
              :
              <View>
                <Text>Lade Projekte</Text>
              </View>
                
            }
      
    </ScrollView>
    </SafeAreaView>
  )
}

export default progress