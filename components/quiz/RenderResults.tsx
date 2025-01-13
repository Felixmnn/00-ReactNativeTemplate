import { View, Text,ScrollView, TouchableOpacity } from 'react-native'
import CustomButton from '../gui/CustomButton'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'

const RenderResults = ({answers, questions, restartGame, isLoading}) => {
  //question: questionIndex, answers: [answerIndex] 
  const [showAnswers, setShowAnswers] = useState(["test"])

  function changeShownAnsers (frage) {
    
    if (showAnswers.some(answer => answer === frage )){
      const newArray = showAnswers.filter(answer => answer !== frage)
      setShowAnswers(newArray)
    } else {
      setShowAnswers([...showAnswers,frage])
    }
  }

  function areArraysEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return false; 
    }
  
    return arr1.every((value, index) => value === arr2[index]);
  }

  
  return (
    <ScrollView className='items-center ' contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }} >
      <View className='my-5'>
      <Text className='text-3xl font-bold'>Results:</Text>
      {
        questions.map((question, index) => {

          const yourAnswers = answers && answers.find(answer => answer.question === index)?.answers || null;
          //console.log("Deine Antwort",yourAnswers,"Die richtige Antwort",question.correctAnswers)
          return (
          <TouchableOpacity
            key={index} // Einzigartiger Schlüssel für jedes TouchableOpacity
            className={`p-2 mb-1 border border-[3px] rounded-[5px] max-w-[600px] ${areArraysEqual(yourAnswers, question.correctAnswers) ? "bg-green-200 border-green-300":"bg-red-200 border-red-300"}`}
            onPress={() => changeShownAnsers(question.frage)} // Korrekte Funktionsausführung
          >
            <Text className="text-black">
              {index + 1}. {question.frage}
            </Text>
            {
              showAnswers.includes(question.frage) ? (
                question.antworten.map((answer, answerIndex) => (
                  <View className={`mt-1 rounded-[5px] justify-between flex-row pr-2 ${question.correctAnswers.includes(answerIndex)? "bg-green-300" : null}`}>
                    <Text key={answerIndex} className="text-black">
                      {answer}
                    </Text>
                    <Text>
                      {
                        Array.isArray(yourAnswers) && yourAnswers.includes(answerIndex)  ? "X" : null
                      }
                    </Text>
                  </View>
                  
                ))
              ) : (
                null
              )
            }
          </TouchableOpacity>
        )})
      }
      <View className='flex-row justify-center'>
      <CustomButton title={"Home"} handlePress={()=> router.push("/home")} containerStyles={"w-[150px]  items-center"} isLoading={isLoading}/>
      <CustomButton title={"Try Again"}  handlePress={restartGame} containerStyles={"w-[150px]  items-center"} isLoading={isLoading}/>
      </View>
      </View>
    </ScrollView>
    
  )
}

export default RenderResults