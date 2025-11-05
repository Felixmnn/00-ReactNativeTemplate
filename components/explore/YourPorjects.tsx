import { View, Text } from 'react-native'
import React from 'react'
import TouchableIcon from '../gui/TouchableIcon';

const YourPorjects = ({project,setSelectedProject,selectedProject}) => {
  
  function changeProjekt(value){
    //console.log("Selected Project",selectedProject)
    if (!(project.length === 0)){
      if (value == "minus" && selectedProject == 0 ){
        setSelectedProject(project.length-1)
      } else if (value == "minus"){
        setSelectedProject(selectedProject-1)
      } else if ( value == "plus" && selectedProject == project.length -1){
        setSelectedProject(0)
      } else {
        setSelectedProject(selectedProject +1 )

      }
    }

  }

  return (
    <View className='h-[75px] rounded-[5px] w-[96%] max-w-[500px] m-2 flex-row justify-between items-center'>
      <TouchableIcon iconName={"chevron-left"} handlePress={()=> changeProjekt("minus")}/>
        <Text className='text-black font-bold'>{project[selectedProject].projectName}</Text>
      <TouchableIcon iconName={"chevron-right"} handlePress={()=> changeProjekt("plus")}/>
    </View>
  )
}

export default YourPorjects