import YourPorjects from "@/components/explore/YourPorjects";
import CustomButton from "@/components/gui/CustomButton";
import { router } from "expo-router";
import { useState } from "react";
import { View,Text, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { GlobalContext } from '@/context/GlobalProvider';
import { useContext, useEffect } from 'react';
import SingleSelectList from "@/components/gui/SingleSelectList";
import FilterList from "@/components/explore/FilterList";
import ChapterList from "@/components/explore/ChapterList";
import { returnQuestions } from "@/hooks/createQuestions";
import { getItem } from "../../hooks/appwriteData";
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
  
  const [ loading, setLoading ] = useState(false)

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
  } else if (selectedAmount !== null && selectedTopics !== null && selectedFilters !== null && selectedDuration !== null) {

  
    setLoading(true)
  //Funktionierender Test Case -->
  //const randomquestions = returnQuestions({selectedProject:projectList[selectedProject],selectedDuration:10,selectedAmount:10,selectedTopics:[ 'Tsebelis', 'Systeme', 'Wahlen'],selectedFilters:['ALLQUESTIONS', '>3MINUTES']})
  const randomquestions = returnQuestions({selectedProject:projectList[selectedProject],selectedDuration:selectedDuration.timeDuration,selectedAmount:selectedAmount.timeDuration,selectedTopics:selectedTopics,selectedFilters:selectedFilters})
  
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
  }
    }
  



  return (
    <SafeAreaView className="flex-1 items-center">
      <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Start Quiz</Text>

      <ScrollView className="bg-white">
        <View className="flex-1 ">
        {
          projectList === null ? 

          <Text>Lade Projekte</Text>
          :
          projectList === false ?
          <Text>Keine Projekte</Text>
          :
          <View className="items-center w-full">
            <YourPorjects project={projectList} setSelectedProject={setSelectedProject} selectedProject={selectedProject}/>
            <Text className="font-bold ml-2 w-full text-start">Duration</Text>
            <SingleSelectList content={duration} item={selectedDuration} setItem={setSelectedDuration}/>
            <Text className="font-bold  ml-2 w-full text-start">Question Amount</Text>
            <SingleSelectList content={amount} item={selectedAmount} setItem={setSelectedAmount}/>
            <Text className="font-bold  ml-2 w-full text-start">Chapters</Text>
            <ChapterList topics={projectList[selectedProject].projectChpaters} selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}/>
            <Text className="font-bold  ml-2 w-full text-start">Filters</Text>
            <FilterList filters={projectList[selectedProject].projectFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            
            <CustomButton title={"Lets Go"} handlePress={()=> {startQuiz()}} isLoading={loading}/>
          </View>
        }
        </View>
        </ScrollView>
    </SafeAreaView>
  )
};
