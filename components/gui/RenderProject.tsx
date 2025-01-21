import { View, Text } from 'react-native'
import React from 'react'
import { getReactNavigationConfig } from 'expo-router/build/getReactNavigationConfig'

const RenderProject = ({project}) => {
  console.log("A Project :)", project)
  async function getTrueCount() {
    const parsedProjectConfig = JSON.parse(project.projectChpaters[0].chapterQuestionConfig)
    let overallCount = 0;
    
    for (let i = 0; i < parsedProjectConfig.legth; i++){
      if (parsedProjectConfig[i].questionTrue > parsedProjectConfig[i].questionFalse){
        overallCount +=1
      } else {
        overallCount -= 1
      }
    }
    console.log("The Overall Count is:",overallCount )
  }

  getTrueCount()

  return (
    <View className='w-[96%] max-w-[600px] mt-2'>
        <View className='w-full bg-red-500 rounded-[5px] p-2'>
            <Text className='font-bold text-center'>{project.projectName}</Text>
            <Text className='font-bold text-center'>{project.projectPassed}</Text>
            <Text className='font-bold text-center'>{project.projectCount}</Text>
            <Text className='font-bold text-center'>{project.projectType}</Text>
            <Text className='font-bold text-center'>{project.projectChpaters[0].chapterName}</Text>
            <Text className='font-bold text-center'>{project.projectChpaters[0].chapterQuestion}</Text>
        </View>
    </View>
    
  )
}

export default RenderProject
