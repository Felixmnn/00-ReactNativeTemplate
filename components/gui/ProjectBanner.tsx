import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProjectBanner = ({containerStyles,imageSource,projectName,projectPercentage, projectDetailsPassed,projectQuestions, projectQuestionsAnswered, checkmark, handlePress, isLoading, backgroundColor, textStyles}) => {
  return (
    <TouchableOpacity 
      className={`flex-row items-center p-2 rounded-[5px] ${containerStyles}`}
      disabled = {isLoading}
      activeOpacity={0.7}
      onPress={handlePress}
      style={{ backgroundColor:backgroundColor }}
      >
        {imageSource?<Image style={{ height: 60, width: 60, borderRadius: 30 }} source={imageSource} className='mr-1'/>:null}
        <View>
            <Text className={`font-semibold text-xl ${textStyles}`}>{projectName?projectName:"[Project Name]"}</Text>
            <Text className={`font-semibold ${textStyles}`}>{projectPercentage?`${projectPercentage} % Abgeschlossen`:"[Compleation %]"}</Text>
            <Text className={` ${textStyles ? textStyles: "text-gray-500" }`}>{`${projectDetailsPassed? projectQuestions : 0} Bestanden | ${projectQuestionsAnswered? projectQuestionsAnswered : 0}/${projectQuestions? projectQuestions : 0} Questions`}</Text>
        </View>
        {checkmark?<Image style={{ height: 16, width: 16, borderRadius: 8 }} source={checkmark} className='ml-1'/>:null}
    </TouchableOpacity>
  )
}

export default ProjectBanner