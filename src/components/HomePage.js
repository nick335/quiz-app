import React from "react";


export default function HomePage(props){
  return(
    <div className="home">
      <div className="top-border-circle"></div>
      <div className="home-content">
          <h1 className="title">Quizzical</h1>
          <p className="para">Some description if needed</p>
          <button className="btn" onClick={props.onclick} >Start quiz</button>
      </div>
      <div className="bottom-border-circle"></div>
    </div>
  )
}