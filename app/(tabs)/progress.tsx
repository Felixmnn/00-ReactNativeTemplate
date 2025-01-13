import { View, Text, ScrollView, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import SystemDeutschlands from "../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json"
import SystemAllgemein from "../../assets/questions/Einführungsvorlesung Forschungsdesign in der Politikwissenschaft.json"
import SystemOderSo from "../../assets/questions/Einführungsvorlesung Vergleichende Politikwissenschaft.json"
import CustomButton from '@/components/gui/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router'
import { GlobalContext } from '@/context/GlobalProvider';
import { useContext,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const progress = () => {
  const projectList = [SystemDeutschlands,SystemAllgemein,SystemOderSo]
  const { state, setState } = useContext(GlobalContext);
  //const projects = state.projekte
 
    
  const projects = [{ 
    projectName:"System Deutschland", 
    projectPercentage: 1, 
    projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projectPassedQuizes:0,
    projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
    projectKategorys:["Grundgesetzänderung", "Verfassungssystem", "Exekutive_2","Legislative","Foederalismus","Verfassungsgericht","Wahlsystem","Parteiensystem","Interessengruppen"],
    projectFilters:["All Questions", "BadQuestion", "Multiple Choice", "SingleChoice", "Leicht", "Mittel", "Schwer", "Faktensweissen", "Verständniswissen", ">1 Miuntet", "1-3 Minuten", ">3 Minuten"],
    projectBanner:"../../assets/images/splash.png"
  },{ projectName:"Forschungsdesign", 
    projectPercentage: 1, 
    projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projectPassedQuizes:0,
    projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
    projectKategorys:["Grundgesetzänderung", "Verfassungssystem", "Exekutive_2","Legislative","Foederalismus","Verfassungsgericht","Wahlsystem","Parteiensystem","Interessengruppen"],
    projectFilters:["All Questions", "BadQuestion", "Multiple Choice", "SingleChoice", "Leicht", "Mittel", "Schwer", "Faktensweissen", "Verständniswissen", ">1 Miuntet", "1-3 Minuten", ">3 Minuten"],
    projectBanner:"../../assets/images/splash.png"
  },{ projectName:"Vergleichende Politikwissenschaft", 
    projectPercentage: 1, 
    projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projectPassedQuizes:0,
    projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
    projectKategorys:["Grundgesetzänderung", "Verfassungssystem", "Exekutive_2","Legislative","Foederalismus","Verfassungsgericht","Wahlsystem","Parteiensystem","Interessengruppen"],
    projectFilters:["All Questions", "BadQuestion", "Multiple Choice", "SingleChoice", "Leicht", "Mittel", "Schwer", "Faktensweissen", "Verständniswissen", ">1 Miuntet", "1-3 Minuten", ">3 Minuten"],
    projectBanner:"../../assets/images/splash.png"
  }
]
  

  const [selecetedProject, setSelectedProject] = useState(0)
  const [showAllQuestions, setShowAllQuestions ] = useState([])
  
  function changeShowAllQuestions (item){
    if (Array.isArray(showAllQuestions) && showAllQuestions.length > 0){
      if (showAllQuestions.includes(item)){
        const filtered = showAllQuestions.filter(item2 => item2 !== item)
        setShowAllQuestions(filtered)
      }else {
        setShowAllQuestions([...showAllQuestions,item])
      }
    } else{
        setShowAllQuestions([item])
    }
    
  }

  function changeProject (value){
    if (selecetedProject == projects.length -1  && value == +1){
      setSelectedProject(0)
      setShowAllQuestions([])
    } else if (selecetedProject == 0 && value == -1 ) {
      setSelectedProject(projects.length -1)
      setShowAllQuestions([])

    } else {
      setSelectedProject(selecetedProject + value)
      setShowAllQuestions([])

    }
}
console.log(projectList[selecetedProject]["Grundgesetzänderung"])
const keys = Object.keys(projectList[selecetedProject])


  return (
    <ScrollView>
            <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Project Progress</Text>

      {
        projects ? 
      
      <View className='w-full items-center'>
      <View className='w-full max-w-[600px] bg-blue-300 border border-blue-400 border-[3px] p-2 my-2 rounded-[5px]'>
      <View className='flex-row justify-between items-center rounded-[5px]'>
        <CustomButton containerStyles={"bg-white justify-center h-[30px]"} title={"<"} textStyles={"text-black font-bold text-xl"} handlePress={()=> changeProject(-1)}/>
          <Text className='text-white text-xl font-bold'>
            {projects[selecetedProject].projectName}
          </Text>
        <CustomButton containerStyles={"bg-white justify-center h-[30px]"} title={">"} textStyles={"text-black font-bold text-xl"} handlePress={()=> changeProject(+1)}/>
      </View>
      <FlatList
          data = {keys}
          keyExtractor={(key) => key}
          renderItem={({item,index})=> {
            return (
            <View>
              {
                !showAllQuestions.includes(item) ? 
                <View className='mx-2 flex-row justify-between'>
                  <Text className='font-bold text-xl '>{index+1}. {item}</Text>
                  <TouchableOpacity onPress={()=> changeShowAllQuestions(item)}>
                    <Icon name={"eye-slash"} size={30} color={"black"}/>
                  </TouchableOpacity>
                </View>

                : 
                <View>
                <View className='mx-2 flex-row justify-between'>
                    <Text className='font-bold text-xl '>{index+1}. {item}</Text>
                    <TouchableOpacity onPress={()=> changeShowAllQuestions(item)}>
                      <Icon name={"eye"} size={30} color={"black"}/>
                    </TouchableOpacity>
                  </View>
                  <FlatList
                      data={projectList[selecetedProject][item]}
                      keyExtractor={(item) => item.frage}
                      renderItem={({item}) => {
                        const count = projects[selecetedProject].projectQuestionLog[item.id]
                        return (
                          <View className={`mx-2 mt-1 p-1 rounded-[5px] ${count !== 0 ? count < 0 ? "bg-red-400" : "bg-green-400" : "bg-orange-400"}`}>
                            <Text>Antwort Count: {projects[selecetedProject].projectQuestionLog[item.id]} </Text>
                            <Text>Frage: {item.frage}</Text>
                          </View>
                        )
                      }}
                    />
                </View>
              }
              
            </View>
            )
          }}
        />
        <View className='items-center'>
        <CustomButton title={"New Quiz"} handlePress={()=> router.push("/explore")} containerStyles={"w-[150px] items-center m-0"}/>
        </View>
        </View>
        
        
        <CustomButton title={"Add A Project"} containerStyles={"items-center max-w-[150px]"} handlePress={()=> router.push("/allquizzes")}/>
      </View>
        :
        <CustomButton title={"Create your first Projetc"}/>
}
    </ScrollView>
  )
}

export default progress