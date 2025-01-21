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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }} >
      <View className='my-5 items-center w-full'>
      <Text className='text-3xl font-bold'>Results:</Text>
      {
        questions.map((question, index) => {

          const yourAnswers = answers && answers.find(answer => answer.question === index)?.answers || null;
          //console.log("Deine Antwort",yourAnswers,"Die richtige Antwort",question.correctAnswers)
          return (
          <TouchableOpacity
            key={index} // Einzigartiger Schlüssel für jedes TouchableOpacity
            className={`p-2 m-1 border  border-[2px] rounded-[5px] w-full max-w-[600px] ${areArraysEqual(yourAnswers, question.questionCorrectAnswers) ? "bg-green-400 border-green-600":"bg-red-400 border-red-600"}`}
            onPress={() => changeShownAnsers(question.questionQuestion)} // Korrekte Funktionsausführung
          >
            <Text className="font-bold">
              {index + 1}. {question.questionQuestion}
            </Text>
            {
              showAnswers.includes(question.questionQuestion) ? (
                question.questionAnswers.map((answer, answerIndex) => (
                  <View className={`mt-1 rounded-[5px] justify-between flex-row pr-2 ${question.questionCorrectAnswers.includes(answerIndex)? "bg-green-400" : null}`}>
                    <Text key={answerIndex} className="text-black">
                      {answer}
                    </Text>
                    <Text className='text-black'>
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
      <CustomButton title={"Home"} handlePress={()=> router.push("/progress")} containerStyles={"w-[150px]  items-center"} isLoading={isLoading}/>
      <CustomButton title={"Try Again"}  handlePress={restartGame} containerStyles={"w-[150px]  items-center"} isLoading={isLoading}/>
      </View>
      </View>
    </ScrollView>
    
  )
}

export default RenderResults