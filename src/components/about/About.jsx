import React from 'react'
import Contact from '../contact/Contact'
import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import { useState } from 'react';
import "./about.scss"


function About() {

    const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div>
         <Topbar className='' menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='art'>
          <div className='art-child'>
            <h1>
              coming soon!
            </h1>
            <div className='subtext'>
              <a href='#contact'>⭑ something pique your interest? i'm just a coffee chat away ⭑</a>
            </div>
            
          </div>
          
        </div>
        <Contact id="contact"/>
    </div>
  )
}

export default About