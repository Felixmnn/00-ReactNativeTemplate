import { View, Text , TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'

const CustomButton = ({title,containerStyles,textStyles, handlePress,isLoading}) => {
  return (
    <TouchableOpacity 
        className={`bg-primary items-center rounded-[5px] min-w-[100px] p-2 m-2 ${containerStyles}`}
        onPress={handlePress}
        disabled = {isLoading}
        activeOpacity={0.7}
        >
        {
          isLoading && isLoading == false ?
          <Text className={`text-white font-semibold text-xl ${textStyles}`}>{title}</Text>
          :
          isLoading == true ? 
          <ActivityIndicator size="small" color="#fff" />
          : 
          <Text className={`text-white font-semibold text-xl ${textStyles}`}>{title}</Text>

          
        }
    </TouchableOpacity>
  )
}

export default CustomButton