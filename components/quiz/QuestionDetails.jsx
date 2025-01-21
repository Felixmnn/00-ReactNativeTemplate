import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../gui/CustomButton'
import { router } from 'expo-router'
import TouchableIcon from '../gui/TouchableIcon'

const QuestionDetails = ({question, finishQuiz,showAnswers, shownAnsers }) => {
  return (
    <View className='flex-row justify-between w-full max-w-[600px]'>
      <TouchableIcon iconName={"book"} handlePress={() => {
                      router.push({
                        pathname: '/source',
                        params: { data: JSON.stringify(question) },
                      })}} />
      <TouchableIcon iconName={shownAnsers? "eye-slash" : "eye"} handlePress={()=> showAnswers(!shownAnsers)}/>
      <TouchableIcon iconName={"trophy"} handlePress={()=> finishQuiz(true)}/>
      <TouchableIcon iconName={"bug"} handlePress={() => {
                      router.push({
                        pathname: '/report',
                        params: { data: JSON.stringify(question) },
                      })}} />
    </View>
  )
}

export default QuestionDetails