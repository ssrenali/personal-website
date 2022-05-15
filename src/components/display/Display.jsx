import "./display.scss"
import React from 'react'

function Display() {

  
  return (
    <div className="display">
      
      <div className="textBox">
        {/* <h3 className="dark-green">(they/she)</h3> */}
        <h3>A FULLSTACK DEVELOPER, DESIGNER, AND ARTIST.</h3>
        <h3 className="uni">PASSIONATE ABOUT CREATING ENGAGING, DELIGHTFUL EXPERIENCES</h3>
      </div>
      <img className="small-star" alt="" />
      <img className="big-star" alt="" />
      {/* <div className="about-me">
        <h1 className="about-text">about <br/>me</h1>
        <h1 className="about-text">about <br/>me</h1>
        <h1 className="about-text">about <br/>me</h1>
        <h1 className="about-text">about <br/>me</h1>
      </div> */}
      
    </div>
  )
}

export default Display
