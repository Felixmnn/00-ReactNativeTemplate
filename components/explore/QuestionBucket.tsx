import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const QuestionBucket = ({selectedProject,changeQuestionBucket,questionBucket,typeSet}) => {
  return (
    <View className="flex-row flex-wrap mb-2 w-full max-w-[500px]">
            <Text className="text-xl font-semibold m-2">{typeSet}</Text>

            <FlatList
              data={selectedProject}
              keyExtractor={(item) => item}
    
              renderItem={({item})=> {
                return (
                  <TouchableOpacity 
                    className={`p-2 ml-2 mt-2 rounded-[5px] border border-2 
                    ${Array.isArray(questionBucket) && questionBucket.length > 0 
                    ? questionBucket.includes(item) 
                        ? "bg-blue-200 border-blue-300" 
                        : "bg-gray-300 border-gray-400" 
                    : "bg-gray-300 border-gray-400"}
                    `} 
                    onPress={()=> changeQuestionBucket(item)}>
                    <Text >{item}</Text>
                  </TouchableOpacity>
                )
              } }
              contentContainerStyle={{
                flexDirection: 'row', 
                flexWrap: 'wrap', 
              }}
            />
    </View>
  )
}

export default QuestionBucket