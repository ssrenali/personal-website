import "./landing.scss"
import { useState } from "react";
import Intro from "../intro/Intro";
import Contact from "../contact/Contact";
import NewPortfolio from "../newPortfolio/NewPortfolio";
import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import Art from "../art/Art";


function Landing() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
    <Topbar className='' menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <NewPortfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default Landing;
