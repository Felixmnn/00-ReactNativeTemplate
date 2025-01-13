import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../gui/CustomButton'
import { router } from 'expo-router'

const QuestionDetails = ({question, finishQuiz,showAnswers, shownAnsers }) => {
  return (
    <View className='flex-row justify-between'>
      <CustomButton title={"Source"} 
                    containerStyles={"h-[20px] py-0 px-1"} 
                    handlePress={() => {
                      router.push({
                        pathname: '/source',
                        params: { data: JSON.stringify(question) },
                      })}}         
                    />
      <CustomButton title={shownAnsers? "Show Answers" : "Hide Answers"} 
                    containerStyles={"h-[20px] py-0 px-1"}
                    handlePress={()=> showAnswers(!shownAnsers)}
                    />
      <CustomButton title={"Finish Quiz"} 
                    containerStyles={"h-[20px] py-0 px-1"} 
                    handlePress={()=> finishQuiz(true)}
                    />
      <CustomButton title={"Stop Game"} 
                    containerStyles={"h-[20px] py-0 px-1"} 
                    handlePress={()=> router.push("/home")}
                    />
      <CustomButton title={"Report"} 
                    containerStyles={"bg-red-500 h-[20px] py-0 px-1"} 
                    handlePress={() => {
                      router.push({
                        pathname: '/report',
                        params: { data: JSON.stringify(question) },
                      })}}         
                    />
    </View>
  )
}

export default QuestionDetails