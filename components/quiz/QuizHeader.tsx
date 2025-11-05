import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const QuizHeader = ({startTime,questionCount,questionsAnswered,timeLimit, compleationBarWidht}) => {

    function calculateRemainingTime () {
        const sT = new Date(startTime)
        const cT = new Date()
        const beginInt = (sT.getHours() * 3600) + (sT.getMinutes() * 60) + (sT.getSeconds())
        const currentInt = (cT.getHours() * 3600) + (cT.getMinutes() * 60) + (cT.getSeconds())
        const remainingTime = timeLimit - (currentInt - beginInt)
        return remainingTime
    }
    function formatCalculatedTime (){
        const remainingTime = calculateRemainingTime ()
        const m = remainingTime/60
        const s = remainingTime%60
        const time = (remainingTime > 0 ? `${m > 10? m: m > 0? `0${m}`:"00"}:${s > 10? s: s > 0? `0${s}`:"00"}` : "00:00")
        return time
    }
    const progressWidth = (compleationBarWidht * questionsAnswered/questionCount) ;

  return (
    <View className='items-center'>
        {timeLimit?
        <View className='justify-between flex-row items-center'>
            <Text className='font-semibold text-xl mr-1'>Remaining Time</Text>
            <View className='flex-row items-center'>
                <Text className='mr-1 font-semibold text-xl'>{formatCalculatedTime()}</Text>
                <Icon name="clock-o" size={20} color="black" /> 
            </View>
        </View> : null
        }
        <View className='justify-between'>
            <Text className='font-bold'>{`${questionsAnswered}/${questionCount} Questions Answered`}</Text>
        </View>
        <View style={{ width: compleationBarWidht }} className="h-[14px] rounded-lg border border-blue-500 mt-2">
            <View
                style={{ width: progressWidth }}
                className="h-[12px] bg-primary rounded-lg"
            />
        </View>
    </View>
  )
}

export default QuizHeader