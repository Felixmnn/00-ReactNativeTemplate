import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import questions from "../../assets/questions/10Questions.json"
import Sitzung_5_Foederalismus from "../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json"
import CustomButton from '@/components/gui/CustomButton'
import RenderQuestion from '@/components/quiz/RenderQuestion'
import RenderResults from '@/components/quiz/RenderResults'
import QuestionNavigation from '@/components/quiz/QuestionNavigation'
import QuestionDetails from '@/components/quiz/QuestionDetails'
import QuizHeader from '@/components/quiz/QuizHeader'
import Answers from '@/components/quiz/Answers'
import { useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'


const activequiz = () => {
    const { data } = useLocalSearchParams();
    const parsedData = data ? JSON.parse(data) : null;

    const projectName = parsedData.selectedProject
    const quizFragen = parsedData ? parsedData.formatedQuestions : questions.questions
    const questionsLength = quizFragen.length
    const examMode = false
    
    const [ fragenAbgeschlossen, setFragenAbgeschlossen ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ answers, setAnswer ] = useState([])
    const [ answersShown, setAnsersShown ] = useState(true)
    const [ project, setProject  ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ allEntrysMade, setAllEntrysMade] = useState(false)

    async function endQuiz (){
        setIsLoading(true)
        const currentProject = await AsyncStorage.getItem(`Project-${projectName}`)
        
        const parsedData = JSON.parse(currentProject);
        parsedData.projectPassed = 1; 
        await AsyncStorage.setItem(`Project-${projectName}`, JSON.stringify(parsedData));
        setFragenAbgeschlossen(true)
        setAllEntrysMade(true)
        setIsLoading(false)
    }
    function restartGame () {
        setFragenAbgeschlossen(false)
        setAnswer([])
        setCurrentQuestion(0)
    }
    
 
  return (
    <View className='flex-1'>^
        
        {
            !fragenAbgeschlossen   ?
                <View className='flex-1'>
                    <QuizHeader questionCount={questionsLength} questionsAnswered={currentQuestion +1} compleationBarWidht={300} />
                    <View className='flex-1 items-center justify-center'>
                        <Text className='text-xl font-bold mb-5 max-w-[600px] text-center'>{quizFragen[currentQuestion].questionQuestion}</Text>
                            <RenderQuestion question= {quizFragen[currentQuestion]} 
                                            addAnswer={setAnswer}
                                            answers = {answers}
                                            questionIndex = {currentQuestion}
                                            />
                            <QuestionNavigation
                                            finishQuiz={endQuiz} 
                                            questionsLength={questionsLength}
                                            currentQuestion = {currentQuestion}
                                            changeQuestion = {setCurrentQuestion}
                                            />
                            {
                                !answersShown? 
                                    <Answers answers = {quizFragen[currentQuestion]}/>
                                :
                                    null
                            }
                    </View>
                    { !examMode ? 
                            <QuestionDetails 
                                            question={quizFragen[currentQuestion]} 
                                            finishQuiz={endQuiz}
                                            showAnswers = {setAnsersShown}
                                            shownAnsers = {answersShown}
                                            /> : null}

                                            
                </View>
                                :
                            <RenderResults  answers={answers} 
                                            questions={quizFragen} 
                                            restartGame={() => restartGame()}
                                            isLoading = {isLoading}
                                            />
        }
    </View>
  )
}

export default activequiz