import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import QuizOption from './QuizOption'

const RenderQuestion = ({question, addAnswer,questionIndex,answers}) => {
  return (
    <View className='items-center w-full'>
        {
            question.questionAnswers.map((item, index) => { 
                return (
                    <QuizOption 
                    text={item} 
                    addAnswer={addAnswer} 
                    answerIndex={index} 
                    questionIndex={questionIndex} 
                    answers={answers}/>
                )
            })
        }
    </View>
  )
}

export default RenderQuestion