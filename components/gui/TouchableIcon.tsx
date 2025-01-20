import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const TouchableIcon = ({iconName, handlePress}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        className='m-2'
    >
      <Icon name={iconName} size={30} color={"black"}/>
    </TouchableOpacity>
  )
}

export default TouchableIcon