import React from 'react'
import AnswersFormat from './AnswersFormat';
import { nanoid } from 'nanoid';



export default function QuizFormat (props){
  const answerArray= props.answers

const answerElements = answerArray.map( each => {
  
  return <AnswersFormat 
            answer={each}
            id={props.id}
            key= {nanoid()}
            isSelected={props.isSelected}
            correctAnswer={props.correctAnswer}
            onclick={props.onclick}
            submitState={props.submitState}
          />
})
  return(
    <div className='quiz-div'>
      <div className='question-div'>
        <h2 className='question'>{props.question}</h2>
      </div>
      <div className='answers-div'>
          {answerElements}
      </div>
    </div>
  )
}