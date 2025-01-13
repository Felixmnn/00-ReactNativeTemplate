import { View, Text } from 'react-native'
import React from 'react'
import questions from "../../assets/questions/10Questions.json"
import { useLocalSearchParams } from 'expo-router';

const source = () => {
  const { data } = useLocalSearchParams();
  const exampleQuestion = data ? JSON.parse(data) : null;

  return (
    <View className='flex-1 justify-between m-2'>
      <View>
        <Text className='font-bold text-xl'>Frage: {exampleQuestion.frage}</Text>
        <Text className='font-bold text-xl'>Quelle:</Text>
        <Text className='font-semibold'>PDF: {exampleQuestion.ectractLectureName}</Text>
        <Text className='font-semibold'>Session: {exampleQuestion.extractedSession}</Text>
        <Text className='font-semibold'>Page: {exampleQuestion.extractedPage}</Text>
        <Text className='font-bold'>Page Content: </Text>
        <Text className=''>{exampleQuestion.extractedText}</Text>
      </View>
      <Text>Ich bin mir ziemlich sicher dass man die Orginalfolien nicht nutzen darf. Deshal bis auf weiteres diese Zwischenlösung.</Text>
    </View>
  )
}

export default source