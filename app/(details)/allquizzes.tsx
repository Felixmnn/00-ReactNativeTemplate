import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProjectBanner from '@/components/gui/ProjectBanner'

const allquizzes = () => {
    const exampleProjectBanner =[{imageSource:"../../assets/images/splash.png",containerStyles:"bg-red-500 max-w-[300px] mt-2",projectName:"System Deutschland",projectPercentage:"65% abgeschlossen"}]
  
  return (
    <View className='items-center'>
      <FlatList
        data={exampleProjectBanner}
        keyExtractor={(project) => project.projectName}
        renderItem={({item})=> {
            return (
                <ProjectBanner
                    imageSource={item.imageSource}
                    containerStyles = {item.containerStyles}
                />
            )
        }}
      />
    </View>
  )
}

export default allquizzes