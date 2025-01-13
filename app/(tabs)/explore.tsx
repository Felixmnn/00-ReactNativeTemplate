import Modes from "@/components/explore/Modes";
import QuestionBucket from "@/components/explore/QuestionBucket";
import YourPorjects from "@/components/explore/YourPorjects";
import CustomButton from "@/components/gui/CustomButton";
import ProjectBanner from "@/components/gui/ProjectBanner";
import { router } from "expo-router";
import { useState } from "react";
import { View,Text, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SystemDeutschlands from "../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json"
import SystemAllgemein from "../../assets/questions/Einführungsvorlesung Forschungsdesign in der Politikwissenschaft.json"
import SystemOderSo from "../../assets/questions/Einführungsvorlesung Vergleichende Politikwissenschaft.json"
import { GlobalContext } from '@/context/GlobalProvider';
import { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabTwoScreen() {
    const colorScheme = useColorScheme();
  
  const { state, setState } = useContext(GlobalContext);
  //const projects = state.projekte

  
  const modes = [ {name:"Bullet",source:"", question:5, duration:60},
                  {name:"Blitz",source:"", question:10, duration:300},
                  {name:"Quick",source:"", question:20, duration:900},
                  {name:"Exam",source:"", question:40, duration:2700},
                  {name:"5/5",source:"", question:5, duration:null},
                  {name:"10/10",source:"", question:10, duration:null},
                  {name:"30/30",source:"", question:30, duration:null},
                  {name:"60/60",source:"", question:60, duration:null}
                ]
  //Async Storage gets projets

  const projectList = [SystemDeutschlands,SystemAllgemein,SystemOderSo]
  //*
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
    projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projectPassedQuizes:0,
    projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
    projectKategorys:["Grundgesetzänderung", "Verfassungssystem", "Exekutive_2","Legislative","Foederalismus","Verfassungsgericht","Wahlsystem","Parteiensystem","Interessengruppen"],
    projectFilters:["All Questions", "BadQuestion", "Multiple Choice", "SingleChoice", "Leicht", "Mittel", "Schwer", "Faktensweissen", "Verständniswissen", ">1 Miuntet", "1-3 Minuten", ">3 Minuten"],
    projectBanner:"../../assets/images/splash.png"
  },{ projectName:"Vergleichende Politikwissenschaft", 
    projectPercentage: 1, 
    projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projectPassedQuizes:0,
    projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
    projectKategorys:["Grundgesetzänderung", "Verfassungssystem", "Exekutive_2","Legislative","Foederalismus","Verfassungsgericht","Wahlsystem","Parteiensystem","Interessengruppen"],
    projectFilters:["All Questions", "BadQuestion", "Multiple Choice", "SingleChoice", "Leicht", "Mittel", "Schwer", "Faktensweissen", "Verständniswissen", ">1 Miuntet", "1-3 Minuten", ">3 Minuten"],
    projectBanner:"../../assets/images/splash.png"
  }
]
 // */
  const [selecetedProject, setSelectedProject] = useState(0)
    function changeProject (value){
      if (selecetedProject == projects.length -1  && value == +1){
        setSelectedProject(0)
      } else if (selecetedProject == 0 && value == -1 ) {
        setSelectedProject(projects.length -1)
      } else {
        setSelectedProject(selecetedProject + value)
      }
  }


  const [selectedMode , setSelectedMode] = useState(null)
  const [selectedDuration , setSelectedDuration] = useState(null)
  const [questionNumer , setQuestionNumer] = useState(null)
  const [questionBucket, setQuestionBucket] = useState([])
  const [filterBucket, setFilterBucket] = useState([])
  const [error, setError] = useState(null)

  
  function changeQuestionBucket (newEntry) {
    if (Array.isArray(questionBucket) && questionBucket.length > 0){
      
      if (questionBucket.includes(newEntry)){
          const filteredQuestions = questionBucket.filter(question => question !== newEntry)
          setQuestionBucket(filteredQuestions)
        } else {
          setQuestionBucket([...questionBucket,newEntry])
        } 
      
      }
      else {
        setQuestionBucket([newEntry])
      }
  }
  function changeFilterBucket (newEntry) {
    if (Array.isArray(filterBucket) && filterBucket.length > 0){
      if (newEntry == "All Questions" && !filterBucket.includes(newEntry) ){
        setFilterBucket(["All Questions"])
      } else {
        if (filterBucket.includes(newEntry)){
          const filteredQuestions = filterBucket.filter(filter => filter !== newEntry)
          setFilterBucket(filteredQuestions)
        } else {
          setFilterBucket([...filterBucket,newEntry])
        } 
      }
      }
      else {
        setFilterBucket([newEntry])
      }
  }


  function generateQuiz (){
    const questions = []
    
    if (questionBucket.length < 1){
      setError("Please Select A Question Bucket")
    } else if (questionNumer == null){
      setError("Please Select A Mode")
    } else
      {
        const project = projectList[selecetedProject]
        for (let j = 0; j <= questionBucket.length -1; j++ )  {
          //Hier kommen dann später die Filter
          for (let i = 0; i < Math.floor(questionNumer/questionBucket.length); i++ ){
            const random = Math.floor(Math.random() * (project[questionBucket[j]].length));
            questions.push(project[questionBucket[j]][random])
          }
        }
        while (questions.length !== questionNumer){
          const i = Math.floor(Math.random() * (questionBucket.length - 0 + 1));
          const j = Math.floor(Math.random() * (project[questionBucket[i]].length - 0 + 1));
          questions.push(project[questionBucket[i]][j])
        }
      console.log("Fragen Bucket",questions)
      console.log(filterBucket)

      if (questions.length == questionNumer){
        router.push({
          pathname: '/activequiz',
          params: { data: JSON.stringify(questions) },
        })
      }
    }
    
  }




  return (
    <SafeAreaView className="flex-1 items-center">
      
            <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Start A Quiz</Text>
            <View className="h-[1px] w-full bg-primary" />
            { projects ?
      <ScrollView className="w-full">
        <View className="w-full items-center mb-5">
      <YourPorjects setSelectedProject={changeProject} 
                    selecetedProject={selecetedProject} 
                    project={projects[selecetedProject]}
                    />
      <Modes  modes={modes} 
              selectedMode={selectedMode} 
              setSelectedMode={setSelectedMode}
              setselectNumber = {setQuestionNumer}
              setSelectedDuration = {setSelectedDuration}
              />
      <QuestionBucket selectedProject={projects[selecetedProject].projectKategorys} 
                      changeQuestionBucket={changeQuestionBucket} 
                      questionBucket= {questionBucket}
                      typeSet = {"Question Bucket"}
                      />
      {/*
      <QuestionBucket selectedProject={projects[selecetedProject].projectFilters} 
                      changeQuestionBucket={changeFilterBucket} 
                      questionBucket= {filterBucket}
                      typeSet = {"Question Filters"}
                      />
    */} 
      <CustomButton title={"Start Quiz"}
                    handlePress={()=> console.log(generateQuiz ())}
                    containerStyles={"w-[150px] items-center"}
                    /*
                    handlePress={()=> router.push({
                                        pathname: '/activequiz',
                                        params: { data: JSON.stringify(generateQuiz()) },
                                      })}
                    */
                    />
      { error == null ? null : <View className=" rounded-[5px] bg-red-400 border border-[2px] border-red-500 p-2 m-3"><Text className="font-bold">{error}</Text></View>}

          </View>
        </ScrollView>

        :
        <CustomButton title={"create your first project"}/>
      }
    </SafeAreaView>
  )
};
