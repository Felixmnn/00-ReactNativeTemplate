import React from 'react'
import { Stack } from 'expo-router'


const QuizLayout = () => {
  return (
    <>
      <Stack>
          <Stack.Screen name="activequiz"
            options={{
              headerTitle: "Active Quiz",
              headerStyle: {
                backgroundColor:"#1f3f70",
                borderBottomWidth: 0
              },
              headerTintColor: "white"
            }}/>
        <Stack.Screen name="report"
            options={{
            headerTitle: "Quiz Report",
            headerStyle: {
                backgroundColor:"#1f3f70",
                borderBottomWidth: 0
            },
            headerTintColor: "white"
            }}/>
        <Stack.Screen name="source"
            options={{
            headerTitle: "Question Source",
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

export default QuizLayout