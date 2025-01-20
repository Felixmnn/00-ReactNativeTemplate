import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../gui/CustomButton'

const QuestionNavigation = ({finishQuiz, questionsLength,currentQuestion,changeQuestion}) => {
  return (
    <View className='items-center'>
      {
        currentQuestion == 0?
            <View className='flex-row'>
                <View />
                <CustomButton title="Next Question" handlePress={ ()=> changeQuestion(currentQuestion +1 )} containerStyles={"w-[200px] items-center"}/>
            </View>
        : currentQuestion == questionsLength -1 ?
            <View className='flex-row'>
                <CustomButton title={"Previous Question"} handlePress={()=> changeQuestion(currentQuestion -1)} containerStyles={"w-[200px] items-center"}/>
                <CustomButton title="End Quiz" handlePress={()=> finishQuiz(true)} containerStyles={"w-[2000px] items-center"}/>
            </View>
            
        : 
            <View className='flex-row'>
                <CustomButton title={"Previous Question"} handlePress={()=> changeQuestion(currentQuestion -1)} containerStyles={"w-[200px] items-center"}/>
                <CustomButton title={"Next Question"} handlePress={ ()=> changeQuestion(currentQuestion +1 )} containerStyles={"w-[200px] items-center"}/>
            </View>


      }
    </View>
  )
}

export default QuestionNavigation