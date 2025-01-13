import { View, Text, FlatList } from 'react-native'
import React from 'react'

const modes = () => {
    const modes = [ {name:"Bullet",source:"", description: "I do something"},
        {name:"Blitz",source:"", description: "I do something"},
        {name:"Quick",source:"", description: "I do something I do something"},
        {name:"Exam",source:"", description: "I do something"},
        {name:"5/5",source:"", description: "I do something"},
        {name:"10/10",source:"", description: "I do something"},
        {name:"30/30",source:"", description: "I do something"},
        {name:"60/60",source:"", description: "I do something"}
      ]
  return (
    <View className='items-center'>
      <FlatList
        data = {modes}
        keyExtractor={(mode)=> mode.name }
        renderItem={({item})=> {
            return (
                <View className='flex-row items-center bg-red-500 p-2 rounded-[5px] my-1'>
                  <View className="h-[60px] w-[60px] bg-gray-500 "></View>
                  <View className='ml-2'>
                    <Text className="font-semibold">{item.name}</Text>
                    <Text className="font-semibold">{item.description}</Text>
                  </View>
                </View>
            )
        }}
      />
    </View>
  )
}

export default modes