import {Client, Account, ID, Avatars, Databases } from 'react-native-appwrite'
import { isFunctionOrConstructorTypeNode } from 'typescript';

export const config = {
    endpoint: process.env.ENDPOINT,
    platform: process.env.PLATFORM,
    projectId: process.env.PROJECT_ID,
    databaseId: process.env.DATABASE_ID, 
    userCollectionId: process.env.USER_COLLECTION_ID,
}

const client = new Client();

client
    .setProject("677b479b0034de575e3b") 
;

const account = new Account(client)
const database = new Databases(client)


//Renders all Projects (currently single subject based)
export async function getProjectTemplates() {
    return database.listDocuments("6786157700383f990260", "6787ac2800107da03a65")
        .then(response => {
            console.log("Loaded Project Templates", response.documents);
            return response.documents;
        })
        .catch(error => {
            console.error(error);
        });
}

//Gets a single Item
export async function getItem(documentId){
    try{
        const response = await database.getDocument("6786157700383f990260", "6787b8cf001262878ed9", documentId)
        return response
    } catch (error){
        console.log("Error fetching item", error)
    }


}

export async function getItemList(itemListIDs){
    let items = []
    for (let i = 0; i < itemListIDs.lenght; i++){
        try{
            const response = await database.getDocument("6786157700383f990260", "6787ad5f001fd36898dd", itemListIDs[i])
            items.push(response.documents)
            console.log("Die Chapter",response)
        } catch (error){
            console.log("Error fetching item", error)
        }
    }
    console.log(items)
}

//Loads the questions 
export function getQuestions(chapterQuestionTemplateIDs){

}

//Erstellt Projekteintrag im Asnychronen Speicher
export function addProjectAsync(){

}

//Removes Question based on a certain ID
export function removeQuestion(questionID){

}

