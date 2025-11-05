import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const QuizOption = ({text,containerStyles, addAnswer, answerIndex, questionIndex,answers}) => {
    
    const [isSelected,setIsSelected] = useState(false)

    useEffect(()=> {
      const updatedEntries = [...answers]; 
      const entrieIndex = updatedEntries.findIndex(entry => entry.question === questionIndex);
    
      if (entrieIndex !== -1) {
        const entrie = updatedEntries[entrieIndex];
    
        if (entrie.answers.some(answer => answer === answerIndex)) {
          setIsSelected(true)
        } else {
          setIsSelected(false)
        }
      } else {
        setIsSelected(false)
      }
    },[text])
    
    //const [entries, setEntries] = useState([{ question: 1, answers: [0] }]);

    function changeAnswers() {
      const updatedEntries = [...answers]; 
      const entrieIndex = updatedEntries.findIndex(entry => entry.question === questionIndex);
    
      if (entrieIndex !== -1) {
        const entrie = updatedEntries[entrieIndex];
    
        if (entrie.answers.some(answer => answer === answerIndex)) {
          const answers = entrie.answers.filter(answer => answer !== answerIndex);
          entrie.answers = answers;
        } else {
            entrie.answers.push(answerIndex);
            entrie.answers.sort()
        }
      } else {
        updatedEntries.push({ question: questionIndex, answers: [answerIndex] });
      }
      addAnswer(updatedEntries);
      console.log(updatedEntries);
    }

  return ( 
    <TouchableOpacity
        onPress={() => {setIsSelected(!isSelected);changeAnswers()}}
        className={`${isSelected?"bg-primary":"bg-white border border-2 border-primary"} flex-row w-full max-w-[600px] rounded-[5px] m-1 items-center p-2 justify-between ${containerStyles}`}
        >
        <Text className={`mb-[1px] ${isSelected?"text-white font-semibold":"text-primary font-bold"}`}>{text}</Text>
        <View className={`rounded-full ${isSelected?"border border-1 border-white":"border border-1 border-primary "} justify-center items-center w-[20px] h-[20px]`}>{isSelected?<Icon name="check" size={10} color="white"/>:null}</View>
    </TouchableOpacity>
  )
}

export default QuizOption