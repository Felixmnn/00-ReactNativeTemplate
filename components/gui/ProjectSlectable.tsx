import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from './CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';


const ProjectSlectable = ({project,projectList}) => {

    const [ showDetails, setShowDetails ] = useState(false)
    console.log("Project List Name:", projectList)
    async function addAsyncEntry (){ 
        const newEntry = {
            projectName: project.projectName,
            projectId: project.$id,
            projectPassed: 0,
            projectCount: project.projektCount,
            projectChpaters: project.projectChapter,
            projectType: project.porjectType,
            projectFilters: project.projectFilters
        }
        console.log("The Entry Name:", `Project-${newEntry.projectName}`)
        console.log("The Entry: ",newEntry)
        await AsyncStorage.setItem(`Project-${newEntry.projectName}`,JSON.stringify(newEntry))
        router.push("/")
    }
 
  return (
    <View 
        className={` p-2 bg-blue-300 mt-2 rounded-[5px] w-full border border-[2px] border-blue-500 max-w-[600px]`}
        >
        <View className='  flex-row justify-between'>
        <Text className=' font-bold text-xl text-left'>{project.projectName}</Text>
        {
            showDetails? 
            <TouchableOpacity
                onPress={()=> setShowDetails(false)}
            >
                <Icon name={"chevron-down"} size={20} color="black"/>     
            </TouchableOpacity>

             : 
                <TouchableOpacity
                    onPress={()=> {

                        setShowDetails(true);
                    }}
                >
                    <Icon name={"chevron-up"} size={20} color="black"/>  
   
                </TouchableOpacity>
        }
        </View>
        {   showDetails === true ?
            <View>
               {
                Array.isArray(project.projectChapter) && project.projectChapter.length > 0 ? (
                    project.projectChapter.map((item, index) => (
                    <Text key={index} className='font-bold'>{index+1}. {item.chapterName}</Text>
                    ))
                ) : (
                    <Text >No chapters available</Text>
                )
                }
                {
                    projectList && projectList.some((item)=> item.projectName ==  project.projectName) ?

                    <Text>Project Already Added</Text>
                    :
                    <CustomButton title={"Add to my Projects"} containerStyles={"items-cente justify-center"} textStyles={"text-center"} handlePress={()=> addAsyncEntry() }/>
                } 
            </View>

            : <></>
        }
    </View>
  )
}

export default ProjectSlectable