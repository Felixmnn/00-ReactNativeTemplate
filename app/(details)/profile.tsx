import { View, Text } from 'react-native'
import React from 'react'
import PersonalData from '@/components/profile/PersonalData'
import Seperator from '@/components/profile/Seperator';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileOptions from '@/components/profile/ProfileOptions';

const profile = () => {
    const generalSettings   = [ {name:"Mode",additionalNotes:"Dark&Light",actionTypeType:"toggle",icon:""},
                                {name:"Change Password",additionalNotes:null,actionType:"/",icon:""},
                                {name:"Language",additionalNotes:null,actionType:"/",icon:""}
    ]
    const information       = [ {name:"About App",additionalNotes:null,actionType:"/",icon:""},
                                {name:"Terms & Conditions",additionalNotes:null,actionType:"/",icon:""},
                                {name:"Privacy Policy",additionalNotes:null,actionType:"/",icon:""},
                                {name:"Share This App",additionalNotes:null,actionType:"/",icon:""}
    ]

  return (
    <View className='items-center'>
        <PersonalData/>
        <Seperator message={"General Settings"}/>
        <ProfileOptions data={generalSettings}/>
        <Seperator message={"Information"}/>
        <ProfileOptions data={information}/>
    </View> 
  )
}

export default profile