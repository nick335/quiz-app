import React from "react";

export default function AnswersFormat(props){

  let selected = ''

  if(props.submitState){
    props.answer === props.correctAnswer ? selected = 'correct' : 
    props.isSelected === props.answer && props.answer !== props.correctAnswer ?
    selected = 'incorrect' : selected = 'others'
    
  }else{
    props.isSelected === props.answer ? selected = 'selected' : selected = ''
  }
  return(
    <h3 className={`answer ${selected}`} onClick={(event) => {props.onclick (props.id, props.answer, props.submitState )}}>{props.answer}</h3>
  )
} 