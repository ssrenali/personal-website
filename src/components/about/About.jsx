import "./about.scss"

import React from 'react'

function About() {
  return (
    <div className="about" id="about">
      <img className="starImg" alt="" />
      <img className="starImg2" alt="" />
      <div className="textBox">
        <h1 className="about-me">about <br/>me</h1>
      </div>
      <div className="descritption">
        <p>
          Hello! I'm Serena (they/she). I was a Web Developer at AutoTrader and am currently looking for Fall 2022 internships.
          I am passionate about tackling problems through coding and design. I love making things work and look as nicely as possible.
          <br/>
          Outside of work and school, I love drawing, thrifting and fashion. I am also an avid music listener who creates probably too many playlists. If you ever see me, I will most likely have coloured hair and am very willing to talk about anything!
        </p>
      </div>
    </div>
  )
}

export default About
