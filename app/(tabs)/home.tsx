import { View,Text, TouchableOpacity,FlatList,Platform,ScrollView } from 'react-native';
import { GlobalContext } from '@/context/GlobalProvider';
import { useContext, useEffect, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import ProjectSlectable from '@/components/gui/ProjectSlectable';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  
  const colorScheme = useColorScheme();

  const { state, setState } = useContext(GlobalContext);
  const [ projectList, setProjectList ] = useState(null)
  const [ projectTemplateList, setTemplateProjectList ] = useState([])
  console.log("Hier fehler warum?",state.projektTemplates) 

  useEffect (()=> {
    setProjectList(state.projekte)
    setTemplateProjectList(state.projektTemplates)
  },[state.projektTemplates])

  const currentTime = new Date()
  return (
    
    <SafeAreaView className='flex-1 ' >
      <View className='bg-white flex-1 items-center'>
      <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">All Projects</Text>
          <View className='w-full flex-1 items-center' >
              <FlatList
                  data={projectTemplateList}
                  keyExtractor={(item) => item.projectName}
                  className='w-[96%] mx-2 mb-2'
                  renderItem={ ({item}) => {
                    return (
                        <ProjectSlectable project={item} projectList={projectList}/>
                    )
                  }
                    
                  }
                />
            </View>
      </View>
    </SafeAreaView>
)};
