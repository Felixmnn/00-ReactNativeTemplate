import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({title,containerStyles,textStyles, handlePress,isLoading}) => {
  return (
    <TouchableOpacity 
        className={`bg-primary rounded-[5px] p-2 m-2 ${containerStyles}`}
        onPress={handlePress}
        disabled = {isLoading}
        activeOpacity={0.7}
        >
        <Text className={`text-white font-semibold text-xl ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton