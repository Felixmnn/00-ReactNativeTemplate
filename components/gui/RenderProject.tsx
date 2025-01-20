import { View, Text } from 'react-native'
import React from 'react'

const RenderProject = ({project}) => {
  return (
    <View className='max-w-[600px] m-2'>
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