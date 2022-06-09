import React from "react";
import QuizFormat from "./QuizFormat";
import { nanoid } from "nanoid";


export default function Main(){

  const [quizData, setQuizData] = React.useState([])
  // const [randomizedAnswer, setRandomizedAnswer]= React.useState([])

  // const shuffleArray = array => {
  //   for (let i = answerArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  // };

  const quizElements = quizData.map( each => {
    return <QuizFormat 
      question={each.question}
      answers={[
        ...each.incorrect_answers,
        each.correct_answer
      ]}
      key={each.id}
      id={each.id}
      isSelected={each.isSelected}
      onclick={HandleSelection}
    />
  })

  // setRandomizedAnswer( quizData.map( each =>{
  //  const newArr = [
  //     ...each.incorrect_answers,
  //       each.correct_answer
  //   ]
  //   shuffleArray(newArr)

  //   return newArr
  // }))

  // console.log(randomizedAnswer)

  function HandleSelection(id, answer){
    console.log(answer)
    setQuizData( quizData.map( item => {
      if(item.id === id){
         return{
          ...item,
          isSelected:answer
        }
      }else{
        return item
      }

    }))
  }
console.log(quizData)
    React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then((data) => data.json())
    .then((actualData) => actualData.results)
    .then((gottenData) => gottenData.map( each => {
      return {
        ...each,
        id: nanoid(),
        isSelected:""
      }
    }))
    .then((realData) => setQuizData(realData))
  }, [])





  return(
    <main className="main">
      <div className="top-border-circle"></div>
      {quizElements}
      <div className="bottom-border-circle"></div>
    </main>
  )
}