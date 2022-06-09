import React from "react";

export default function AnswersFormat(props){

  let selected = props.isSelected === props.answer ? 'selected' : ''
  return(
    <h3 className={`answer ${selected}`} onClick={(event) => {props.onclick (props.id, props.answer)}}>{props.answer}</h3>
  )
} 