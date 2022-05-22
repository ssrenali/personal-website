import "./display.scss"
import React from 'react'
import flowerVideo from '../../assets/flowers.mp4';

function Display() {

  
  return (
    <div className="display">
      <video autoPlay muted loop id="flowerVideo" src={flowerVideo}></video>
      <div className="textBox">
        <h3>A FULLSTACK DEVELOPER, DESIGNER, AND ARTIST.</h3>
        <h3 className="uni">PASSIONATE ABOUT CREATING ENGAGING, DELIGHTFUL EXPERIENCES</h3>
      </div>
      <img className="small-star" alt="" />
      <img className="big-star" alt="" />
      
    </div>
  )
}

export default Display
