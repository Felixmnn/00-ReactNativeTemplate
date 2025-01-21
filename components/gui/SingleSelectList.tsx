import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SingleSelectList = ({content, item, setItem}) => {
  console.log("Item",item)
  function changeItem(newItem){
    if (item === newItem){
      setItem(null)
    } else {
      console.log("Item sollte jetz geändert sein", newItem)
      setItem(newItem)
    } 
  }

  return (
    <View className="flex-row flex-wrap justify-start w-full">
        {content.map((obj) => (
          <TouchableOpacity
            key={obj.id}
            className={`p-2 m-1 rounded ${item !== null && obj.name === item.name ? 'bg-red-500' : 'bg-gray-300'}`}
            onPress={() => changeItem(obj)}
          >
            <Text>{obj.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
  )
}

export default SingleSelectList