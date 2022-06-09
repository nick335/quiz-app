import React from "react";
import HomePage from "./HomePage";
import Main from "./Main";



export default function PageTemplate(){

  const [startQuiz, setStartQuiz]= React.useState(false)
  function StartQuiz(){
    setStartQuiz(true)
  }

  return(
    <div className="page-template">
      {startQuiz ? <Main /> : <HomePage onclick={StartQuiz}/>}
    </div>
  )
}