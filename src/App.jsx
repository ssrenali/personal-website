import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import NewPortfolio from "./components/newPortfolio/NewPortfolio";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
      <Topbar className='' menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        {/* <Portfolio/> */}
        <NewPortfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
