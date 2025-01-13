import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProjectModule = ({containerStyles, name, handlePress, isLoading}) => {
  return (
    <TouchableOpacity
        className={`m-2 p-2 rounded-[5px] ${containerStyles}`}
        onPress={handlePress}
        disabled = {isLoading}
        activeOpacity={0.7}
        >
            <Text>{name?name:"[Session X]"}</Text>
    </TouchableOpacity>
  )
}

export default ProjectModule