import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const ProfileHeader = ({name,welcomeMessage,imageSource , handlePress, isLoading, textStyle}) => {
  return (
    <TouchableOpacity 
        className='flex-row m-2'
        disabled = {isLoading}
        activeOpacity={0.7}
        onPress={handlePress}
        >
        <View className='h-[60px] w-[60px] rounded-full mr-1 bg-red-900'>
            {imageSource?<Image style={{ height: 60, width: 60, borderRadius: 30 }} source={imageSource}  /> : null}
        </View>
        <View >
            <Text className='font-bold text-white text-xl'>{welcomeMessage?welcomeMessage:"Welcome"}</Text>
            <Text className='text-white font-bold'>{name?name:"[Name]"}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProfileHeader