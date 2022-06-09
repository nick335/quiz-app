import React from 'react'
import AnswersFormat from './AnswersFormat';
import { nanoid } from 'nanoid';



export default function QuizFormat (props){
  const answerArray= props.answers
  // const shuffled= props.shuffled
  const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

 shuffleArray(answerArray)


const answerElements = answerArray.map( each => {
  return <AnswersFormat 
            answer={each}
            id={props.id}
            key= {nanoid()}
            isSelected={props.isSelected}
            onclick={props.onclick}
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