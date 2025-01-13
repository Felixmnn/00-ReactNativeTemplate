import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../gui/CustomButton'
import ProjectBanner from '../gui/ProjectBanner'

const YourPorjects = ({project,setSelectedProject,selecetedProject}) => {
  const questionAmount = project.projectQuestionLog.length
  let counter = 0
  for (let zahl of project.projectQuestionLog){
    if(zahl >0){
      counter += 1
    }
  }
  const questionsAnswered = counter


  return (
    <View className='h-[150px] bg-primary rounded-[5px] w-[96%] max-w-[500px] m-2 flex-row justify-between items-center'>
      <CustomButton containerStyles={"bg-white justify-center"} title={"<"} textStyles={"text-black font-bold text-xl"} handlePress={()=> setSelectedProject(-1)}/>
        <ProjectBanner projectName={project.projectName}
            projectPercentage={project.projectPercentage}
            projectDetailsPassed={project.projectPassedQuizes}
            projectQuestions={questionAmount} 
            projectQuestionsAnswered={questionsAnswered}
            textStyles={"text-white"}
            />
      <CustomButton containerStyles={"bg-white justify-center"} title={">"} textStyles={"text-black font-bold text-xl"} handlePress={()=> setSelectedProject(+1)}/>
    </View>
  )
}

export default YourPorjects