import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ChapterList = ({topics, selectedTopics, setSelectedTopics}) => {
    console.log("The topic :)",topics)

    function changeFilters( newChapterName){
        console.log("The Filters",newChapterName)
        console.log("All Filters", selectedTopics)
        if (selectedTopics == null){
            setSelectedTopics([newChapterName])
        } else if (Array.isArray(selectedTopics) && selectedTopics.includes(newChapterName)){
            const newArray = selectedTopics.filter((filter)=> filter !== newChapterName)
            setSelectedTopics(newArray)
        } else {
                setSelectedTopics([...selectedTopics, newChapterName]);
            }
            console.log("The selected Topics",selectedTopics)

        }

  return (
    <View className="flex-row flex-wrap justify-start w-full">
        {
            topics.map((topic , index)=> {
                return <TouchableOpacity
                    key={index}
                    className={`p-2 rounded-[5px] m-1 ${Array.isArray(selectedTopics) && selectedTopics.includes(topic.chapterName)? "bg-red-500": "bg-gray-300"}`}
                    onPress={()=> changeFilters(topic.chapterName)}
                >
                    <Text>{topic.chapterName}</Text>
                </TouchableOpacity>
            })
        }
    </View>
  )
}

export default ChapterList