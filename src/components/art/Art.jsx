import React from 'react'
import Contact from '../contact/Contact'
import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import { useState } from 'react';
import "./art.scss"

function Art() {
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
              <p>in the meantime, checkout some of my works below</p>
              <a href="https://www.etsy.com/shop/aestronart">⭑ etsy ⭑</a>
              <a href="https://www.artstation.com/aestronart">⭑ artstation ⭑</a>
            </div>
            
          </div>
          
        </div>
        <Contact/>
    </div>
   
  )
}

export default Art