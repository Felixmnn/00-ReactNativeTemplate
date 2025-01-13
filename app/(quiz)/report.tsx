import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import questions from "../../assets/questions/10Questions.json"
import CustomButton from '@/components/gui/CustomButton'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'


const report = () => {
  const exampleQuestion = questions.questions[2]
  const possibleProblems = ["Irrelvant", "Falsche Antwort", "Zu Spezifisch"]
  const [selectedProblems, setSelectedProblems] = useState([])
  const [aditionalNotes, setAdtionalNotes] = useState("")

  function addOrRemove(currentProblem) {
    if (selectedProblems.some(problem => problem === currentProblem)) {
      // Problem entfernen
      const newProblems = selectedProblems.filter(problem => problem !== currentProblem);
      setSelectedProblems(newProblems);
    } else {
      // Problem hinzufügen
      const newProblems = [...selectedProblems, currentProblem]; // Neues Array mit Spread-Operator
      setSelectedProblems(newProblems);
    }
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl font-bold'>Häufige Gründe:</Text>
      {
        possibleProblems.map((currentProblem)=>{
          return (
            <TouchableOpacity 
              className={`p-2 rounded-[5px] border border-[3px] w-[240px] mt-2 ${selectedProblems.some(selectedProblem => selectedProblem === currentProblem ) ? "bg-red-800 border-red-900" : "bg-gray-300 border-gray-400"}`}
              onPress={()=> addOrRemove(currentProblem)}
            >
              <Text className='font-bold text-xl text-center'>{currentProblem}</Text>
            </TouchableOpacity>
          )
        })
      }
      <Text className='text-3xl font-bold mt-5'>Weiteres:</Text>
      <TextInput
        className='w-[240px] bg-gray-300 p-2 rounded-[5px] border border-[3px] border-gray-400 min-h-[300px]'
        placeholder='-Erkläre dein Problem'
        onChange={(text)=> setAdtionalNotes(text)}
        textAlignVertical='top'
        multiline={true}
      >
      </TextInput>
      <CustomButton 
        title={"Feedback Senden"} 
        containerStyles={"w-[240px] mt-4 "} 
        textStyles={" font-bold text-xl text-center"}
        handlePress={()=> {
          Toast.show({
          type: 'success', 
          position: 'top',
          text1: `Vielen Dank für dein Feedback :)`, 
          });
          router.back();}}
        />
    </View> 
  )
}

export default report