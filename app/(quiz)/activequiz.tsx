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

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
        }
        return true;
      }
    
    

    async function endQuiz (){
        setIsLoading(true)
        const currentProjectString = await AsyncStorage.getItem(`Project-${projectName}`)

        

        let count = 0
        for (let i = 0; i < answers.length; i++){
            console.log("Die Passende Antwort",quizFragen[answers[i].question].questionCorrectAnswers)
            console.log("Meine Antwort.",answers[i].answers )
            if (arraysEqual(answers[i].answers, quizFragen[answers[i].question].questionCorrectAnswers)) {
                console.log("Success")
                console.log("Question ID:", quizFragen[answers[i].question].questionID)
                count += 1
            }
        }
        console.log("Count: ", count)

        if (currentProjectString){
            let currentProject = JSON.parse(currentProjectString)
            console.log(quizFragen.length)
            console.log(quizFragen.length/2)

            if (count >= quizFragen.length/2){
                currentProject.projectPassed += 1
                console.log("Added 1 to success Counte")
            } else {
                if (currentProject.projectPassed > 0){
                    currentProject.projectPassed -= 1
                    console.log("Nicht bestanden")
                }
            }
            for (let i = 0; i < answers.length; i++) {
                for (let j = 0; j < currentProject.projectChpaters.length; j++) {
                  if (currentProject.projectChpaters[j].chapterQuestionConfig.includes(quizFragen[answers[i].question].questionID)) {
                    const parsed = JSON.parse(currentProject.projectChpaters[j].chapterQuestionConfig);
                    
                    // Finde die Position 'x', an der die 'questionId' übereinstimmt
                    const x = parsed.findIndex(item => item.questionId === quizFragen[answers[i].question].questionID);
              
                    if (x !== -1) { // Stelle sicher, dass ein gültiger Index gefunden wurde
                      if (arraysEqual(answers[i].answers, quizFragen[answers[i].question].questionCorrectAnswers)) {
                        parsed[x].questionTrue += 1;
                      } else {
                        parsed[x].questionTrue -= 1;
                      }
              
                      // Optionale Speicherung der aktualisierten `parsed` zurück in `chapterQuestionConfig`
                      currentProject.projectChpaters[j].chapterQuestionConfig = JSON.stringify(parsed);
                      console.log("Erfolgreich Angepasst")
                    }
                  }
                }
              }
            
            

            currentProject.projectCount += 1;
            const updatedProjectString = JSON.stringify(currentProject);
            await AsyncStorage.setItem(`Project-${projectName}`, updatedProjectString);
            console.log("Updated Project:", currentProject);
        }
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
    <View className='flex-1 bg-white'>
        
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