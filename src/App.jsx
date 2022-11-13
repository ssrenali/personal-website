import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Landing from "./components/landing/Landing";

import { Routes, Route, Link } from "react-router-dom"; 
import Art from "./components/art/Art";
import About from "./components/about/About";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/play' element={<Art/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
