import React from "react";
import QuizFormat from "./QuizFormat";
import { nanoid } from "nanoid";


export default function Main(){

  const [quizData, setQuizData] = React.useState([])
  const [submitted, setSubmitted] = React.useState(false)
  const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0)


 

  const quizElements = quizData.map( each => {
     return <QuizFormat 
      question={each.question}
      answers={each.answers}
      key={each.id}
      id={each.id}
      isSelected={each.isSelected}
      onclick={HandleSelection}
      submitState={submitted}
      correctAnswer={each.correct_answer}
    />
  })


  function HandleSelection(id, answer, submitState){
    if (submitState === false){
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
  
  }


  function checkAnswer(){
    setSubmitted(true)
    for (let i = 0; i < quizData.length; i++) {
     if ( quizData[i].isSelected === quizData[i].correct_answer) {
       setCorrectAnswerCount( prevstate => prevstate + 1)
     }
      
    }
  }

  console.log(correctAnswerCount)
  console.log(quizData)
    React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then((data) => data.json())
    .then((actualData) => actualData.results)
    .then((gottenData) => gottenData.map( each => {
      const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
  
      let answerArr = [
        ...each.incorrect_answers,
        each.correct_answer
  
      ]
      
      shuffleArray(answerArr)

      return {
        ...each,
        id: nanoid(),
        isSelected:"",
        answers: answerArr
      }
    }))
    .then((realData) => setQuizData(realData))
  }, [])





  return(
    <main className="main">
      <div className="top-border-circle"></div>
      {quizElements}
      <div className="btn-div">
          <p className="scores-info">You scored 3/5 correct answers</p>
          <button className="btn-check" onClick={checkAnswer}>Check answer</button>
      </div>
      <div className="bottom-border-circle"></div>
    </main>
  )
}