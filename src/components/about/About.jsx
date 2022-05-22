import "./about.scss"
import night2 from '../../assets/night2.mp4';

import React from 'react'

function About() {
  return (
    <div className="about" id="about">
       <video autoPlay muted loop id="flowerVideo" src={night2}></video>
      <img className="starImg" alt="" />
      <img className="starImg2" alt="" />
      <div className="textBox">
        <h1 className="about-me">about <br/>me</h1>
        <h1 className="about-me-horz">about <br/>me</h1>
      </div>
      <div className="descriptionContainer">
        <p className="description">
          Hello, I'm Serena (they/she)!
          I am passionate about tackling problems and creating engaging, delightful experiences through coding and design.
          {/* <br/>
          Outside of work and school, I love drawing, thrifting and fashion. I am also an avid music listener who creates probably too many playlists. If you ever see me, I will most likely have coloured hair and am very willing to talk about anything! */}
          <br/>
          Currently I am studying at the University of Waterloo as a Systems Design Engineering student. Previously, I was a Web Developer at AutoTrader and am currently looking for Fall 2022 internships.
        </p>
      </div>
    </div>
  )
}

export default About
