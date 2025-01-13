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
    const exampleQuestion = data ? JSON.parse(data) : null;

    const quizFragen = exampleQuestion ? exampleQuestion : questions.questions
    const questionsLength = quizFragen.length
    const dauer = null
    const examMode = false
    const [ fragenAbgeschlossen, setFragenAbgeschlossen ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ answers, setAnswer ] = useState([])
    const [ answersShown, setAnsersShown ] = useState(true)
    const [ project, setProject  ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ allEntrysMade, setAllEntrysMade] = useState(false)

    async function endQuiz (state){
        setIsLoading(true)
        const projectString = await AsyncStorage.getItem("Project-System Deutschland")
        const parsedProject = JSON.parse(projectString)
        const newArray = parsedProject.projectQuestionLog
        console.log(newArray)
        if (answers.length <= 0){
            console.log("Cringe einfach keine Antworten")
        } else {
            for (let i = 0; i < answers.length; i++){
                const question  = quizFragen[answers[i].question]

                if (
                    question.correctAnswers.length === answers[i].answers.length &&
                    question.correctAnswers.sort().every((value, index) => value === answers[i].answers.sort()[index])
                  ){
                    console.log("I added 1 to your counter")
                    newArray[question.id-1] = newArray[question.id-1] +1 
                } else {
                    console.log("Question Answers:", question, "dont match your ANswers", )
                    newArray[question.id-1] = newArray[question.id-1] -1 
                }
            }
        } 
        console.log(newArray)
        setProject((prevState)=> ({
            ...prevState,
            projectQuestionLog: newArray
        }))
        setFragenAbgeschlossen(state)
        setAllEntrysMade(true)
        setIsLoading(false)

    }

    function restartGame () {
        setFragenAbgeschlossen(false)
        setAnswer([])
        setCurrentQuestion(0)
    }
    
    useEffect (()=> {
        async function saveProgress() {
            await AsyncStorage.setItem("Project-System Deutschland",JSON.stringify(project))
        }
        if(allEntrysMade){
            saveProgress()
            console.log("Updated your Porgress :)")
        }
    },[allEntrysMade])
 
  return (
    <View className='flex-1'>
        {
            !fragenAbgeschlossen   ?
                <View className='flex-1'>
                    <QuizHeader questionCount={questionsLength} questionsAnswered={currentQuestion +1} compleationBarWidht={300} />
                    <View className='flex-1 items-center justify-center'>
                        <Text className='text-xl font-bold mb-5 max-w-[600px] text-center'>{quizFragen[currentQuestion].frage}</Text>
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