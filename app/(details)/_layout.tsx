import React from 'react'
import { Stack } from 'expo-router'


const DetailsLayout = () => {
  return (
    <>
      <Stack>
          <Stack.Screen name="modes"
            options={{
              headerTitle: "Modes",
              headerStyle: {
                backgroundColor:"#1f3f70",
                borderBottomWidth: 0
              },
              headerTintColor: "white"
            }}/>
        <Stack.Screen name="allquizzes"
            options={{
            headerTitle: "Quizzes",
            headerStyle: {
                backgroundColor:"#1f3f70",
                borderBottomWidth: 0
            },
            headerTintColor: "white"
            }}/>
        <Stack.Screen name="profile"
            options={{
            headerTitle: "Profile",
            headerStyle: {
                backgroundColor:"#1f3f70",
                borderBottomWidth: 0
            },
            headerTintColor: "white"
            }}/>
      </Stack>
    </>
  )
}

export default DetailsLayout