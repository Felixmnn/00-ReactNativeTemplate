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
    <View>
      {
        content.map((obj)=>{
          return <TouchableOpacity key={obj.id} className={` p-2 ${ item !== null && obj.name === item.name ? " bg-red-500" :"bg-gray-300"}`} onPress={()=> changeItem(obj)}>
            <Text>{obj.name}</Text>
          </TouchableOpacity>
        })
      }
    </View>
  )
}

export default SingleSelectList