import { View, Text } from 'react-native'
import React from 'react'

const Answers = ({answers}) => {
  console.log("Antworten",answers)
  return (
    <View>
      {
        answers.questionCorrectAnswers && answers.questionCorrectAnswers.map((index)=>{
          return (
            <Text key={answers.questionAnswers[index]} className='font-bold'>{answers.questionAnswers[index]}</Text>
          )
        })
      }
      <Text>Answers Shown</Text>
    </View>
  )
}

export default Answers