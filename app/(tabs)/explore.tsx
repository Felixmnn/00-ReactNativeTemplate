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
import SingleSelectList from "@/components/gui/SingleSelectList";
import FilterList from "@/components/explore/FilterList";
import ChapterList from "@/components/explore/ChapterList";
import { returnQuestions } from "@/hooks/createQuestions";
import { getItem } from "@/lib/appwriteData";
import Toast from "react-native-toast-message";

export default function TabTwoScreen() {
  const { state, setState } = useContext(GlobalContext);
  const [ projectList, setProjectList ] = useState(null)
  useEffect (()=> {
    setProjectList(state.projekte)
  },[state.projekte])
   
  //Projekt Fragen Filter
  const [ selectedProject, setSelectedProject ] = useState(0)
  const [ selectedDuration, setSelectedDuration ] = useState(null)
  const [ selectedAmount, setSelectedAmount ] = useState(null)
  const [ selectedTopics, setSelectedTopics ] = useState(null)
  const [ selectedFilters, setSelectedFilters ] = useState(null)

//Konstanten
const duration = [
  {name:"5",timeDuration:5},
  {name:"10",timeDuration:10},
  {name:"15",timeDuration:15},
  {name:"30",timeDuration:30},
  {name:"45",timeDuration:45},
]
const amount = [
  {name:"5/5",timeDuration:5},
  {name:"10/10",timeDuration:10},
  {name:"15/15",timeDuration:15},
  {name:"30/30",timeDuration:30},
  {name:"45/45",timeDuration:45},
]

async function startQuiz() {
  //Sichersetlle das alle Werte vorhanden Sind
  if (selectedDuration === null){
    Toast.show({
      type: 'error', 
      position: 'top',
      text1: `Select a Duration`, 
    });
  } else if (selectedAmount === null) {
    Toast.show({
      type: 'error', 
      position: 'top',
      text1: `Select a Amount`, 
    });
  } else if (selectedTopics === null) {
    Toast.show({
      type: 'error', 
      position: 'top',
      text1: `Select a Topic`, 
    });
  } else if (selectedFilters === null) {
    Toast.show({
      type: 'error', 
      position: 'top',
      text1: `Select a Filter`, 
    });
  } else {
  //Aufruf mit Beispieldaten:
  console.log("Stating the Question formating")
  const randomquestions = returnQuestions({selectedProject:projectList[selectedProject],selectedDuration:10,selectedAmount:10,selectedTopics:[ 'Legislative', 'Verfassungsgericht', 'Wahlsystem'],selectedFilters:['ALLQUESTIONS', '>3MINUTES']})
  let formatedQuestions = []
  for (let i = 0 ; i< randomquestions.length; i++){
    const question = await getItem(randomquestions[i])
    const formatedQuestion = {
      questionQuestion: question.questionName,
      questionAnswers:question.questionAnswers,
      questionCorrectAnswers:question.questionCorrectAnswers,
      questionDifficultry:question.questionDifficulty,
      questionDuration:question.questionDuration,
      questionSource:question.questionSource,
      questionType:question.questionType,
      questionBase:question.questionBase,
      questionChapter:question.chapter,
      questionID:question.$id
    }
    formatedQuestions.push(formatedQuestion)

  }
  const allParams = {formatedQuestions:formatedQuestions,selectedProject: projectList[selectedProject].projectName }
  router.push({ pathname: "/activequiz", params: { data: JSON.stringify(allParams) } })
    //const questions = returnQuestions({selectedProject:projectList[selectedProject],selectedDuration:selectedDuration,selectedAmount:selectedAmount,selectedTopics:selectedTopics,selectedFilters:selectedFilters})
    }
  }



  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
      <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Start Quiz</Text>
        <View className="flex-1 bg-white">
        {
          projectList === null ? 

          <Text>Lade Projekte</Text>
          :
          projectList === false ?
          <Text>Keine Projekte</Text>
          :
          <View className="bg-whites flex-1">
            <YourPorjects project={projectList} setSelectedProject={setSelectedProject} selectedProject={selectedProject}/>
            <SingleSelectList content={duration} item={selectedDuration} setItem={setSelectedDuration}/>
            <SingleSelectList content={amount} item={selectedAmount} setItem={setSelectedAmount}/>
            <FilterList filters={projectList[selectedProject].projectFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <ChapterList topics={projectList[selectedProject].projectChpaters} selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}/>
            <CustomButton title={"Let the fun Part begin"} handlePress={()=> startQuiz()}/>
          </View>
        }
        </View>
        </ScrollView>
    </SafeAreaView>
  )
};
