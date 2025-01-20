
//Die Funktion erhält das geählte Projekt, sowie die Bedingungen für die Fragen
//Dauer/ Anzahl der Fragen
//Ausgewählte Themen
//Ausgewählte Filter
//Die BEispiele: {selectedProject:projectList[selectedProject],selectedDuration:10,selectedAmount:10,selectedTopics:['Exekutive_2', 'Legislative', 'Verfassungsgericht', 'Wahlsystem'],selectedFilters:['Exekutive_2', 'Legislative']}
export function returnQuestions({selectedProject,selectedDuration,selectedAmount,selectedTopics,selectedFilters}){
    console.log("Funktion wird Aufgerufen")
    //Filtert die Projekte
    const relevantTopics = filterTopics({allChapters:selectedProject.projectChpaters,selectedChapters:selectedTopics})
    //Returnt die Fragenids 
    const questions = getQuestions({relevantTopics:relevantTopics,selectedFilters:selectedFilters})
    //Funktion returnt die IDs
    const randomQuestions = getRandomUniqueEntries(questions,selectedAmount)
    return randomQuestions
    
}


function filterTopics({allChapters,selectedChapters}){
    console.log("Diese Funktion ebenfalls")
    let topics = []
    for (let i = 0; i < selectedChapters.length; i++){
        console.log(selectedChapters[i])
        if (allChapters.some((chapter)=> chapter.chapterName === selectedChapters[i])){
            topics.push(allChapters.filter((chapter)=> chapter.chapterName !== selectedChapters[i]))
        }
    }
    return topics
}

function getQuestions({relevantTopics,selectedFilters}){
    let questions = []
    for (let i = 0; i < relevantTopics.length;i++){
        const relevant = relevantTopics[i][0].chapterQuestionConfig
        const parsedString = JSON.parse(relevant)
        console.log(selectedFilters)
        for (let y = 0; y < parsedString.length;y++){
            if (selectedFilters.includes("ALLQUESTIONS")){
                questions.push(parsedString[y].questionId)
            } else if (selectedFilters.some((filter)=> JSON.stringify(parsedString[y]).includes(filter))) {
                questions.push(parsedString[y].questionId)
            }
        }
    }
    
    
    return questions
}

function getRandomUniqueEntries(stringsList, numberOfEntries) {
    // Fisher-Yates Shuffle Algorithmus
    for (let i = stringsList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stringsList[i], stringsList[j]] = [stringsList[j], stringsList[i]];
    }

    // Extrahiere die ersten `numberOfEntries` Einträge
    return stringsList.slice(0, numberOfEntries);
}