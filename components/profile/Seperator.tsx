import { View, Text } from 'react-native'
import React from 'react'

const Seperator = ({message}) => {
  return (
    <View className='bg-gray-300 w-full'>
        <Text className='text-xl text-gray-500 text-center'>{message}</Text>
    </View>
  )
}

export default Seperator