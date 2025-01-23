import { View, Text } from 'react-native'
import React from 'react'


const RenderProject = ({project}) => {

  //item.chapterQuestionConfig
  function getTrueCount(item) {

    const parsedProjectConfig = JSON.parse(item)
    let overallCount = 0;
    console.log("The length",parsedProjectConfig.length)
    for (let i = 0; i < parsedProjectConfig.length; i++){
      if (parsedProjectConfig[i].questionTrue > parsedProjectConfig[i].questionFalse){
       overallCount +=1
      } else {
        overallCount -= 1
      }
    }
    console.log("The Overall Count is:",overallCount )
    return overallCount
  }
  function getTrue(item) {

    const parsedProjectConfig = JSON.parse(item)
    let overallCount = 0;
    console.log("The length",parsedProjectConfig.length)
    for (let i = 0; i < parsedProjectConfig.length; i++){
      if (parsedProjectConfig[i].questionTrue > parsedProjectConfig[i].questionFalse){
       overallCount +=1
      } 
    }
    console.log("The Overall Count is:",overallCount )
    return overallCount
  }
  function getFalse(item) {

    const parsedProjectConfig = JSON.parse(item)
    let overallCount = 0;
    console.log("The length",parsedProjectConfig.length)
    for (let i = 0; i < parsedProjectConfig.length; i++){
      if (parsedProjectConfig[i].questionTrue < parsedProjectConfig[i].questionFalse){
       overallCount +=1
      } 
    }
    console.log("The Overall Count is:",overallCount )
    return overallCount
  }
  function getAmount(item) {

    const parsedProjectConfig = JSON.parse(item)
    let overallCount = 0;
    console.log("The length",parsedProjectConfig.length)
    for (let i = 0; i < parsedProjectConfig.length; i++){
      overallCount +=1

    }
    console.log("The Overall Count is:",overallCount )
    return overallCount
  }

  

  return (
    <View className='w-[96%] max-w-[600px] mt-2'>
        <View className='w-full bg-red-500 rounded-[5px] p-2'>
            <Text className='font-bold text-center'>{project.projectName}</Text>
            <Text className='font-bold text-center'>{project.projectPassed}</Text>
            <Text className='font-bold text-center'>{project.projectCount}</Text>
            <Text className='font-bold text-center'>{project.projectType}</Text>
            <Text className='font-bold text-center'>{project.projectChpaters[0].chapterName}</Text>
            <Text className='font-bold text-center'>{getTrueCount(project.projectChpaters[0].chapterQuestionConfig)}</Text>
            {
              project.projectChpaters.map((item)=> {
                return (
                  <View className='flex-row justify-between'>
                <Text>{item.chapterName}</Text>
                <Text>{getTrueCount(item.chapterQuestionConfig)}</Text>
                <Text>{getTrue(item.chapterQuestionConfig)}</Text>
                <Text>{getFalse(item.chapterQuestionConfig)}</Text>
                <Text>{getAmount(item.chapterQuestionConfig)}</Text>

                  </View>
              )
              })
            }
        </View>
    </View>
    
  )
}

export default RenderProject
