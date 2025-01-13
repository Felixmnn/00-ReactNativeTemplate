import { View, Text } from 'react-native'
import React from 'react'

const Answers = ({answers}) => {
  console.log(answers)
  return (
    <View>
      {
        answers.correctAnswers && answers.correctAnswers.map((index)=>{
          return (
            <Text key={answers.antworten[index]} className='font-bold'>{answers.antworten[index]}</Text>
          )
        })
      }
    </View>
  )
}

export default Answers