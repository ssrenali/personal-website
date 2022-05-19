import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  projectsPortfolio,
  appsPortfolio,
  designPortfolio,
  artworkPortfolio
} from "./data";
import ArtPopUp from "../art popup/ArtPopUp";

export default function Portfolio() {

  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

 

  const list = [
    {
      id: 'projects',
      title: 'PROJECTS',
    },
    {
      id: 'artwork',
      title: 'ART',
    }    
  ]

  useEffect(() => {
    switch(selected) {
      case "projects":
        setData(projectsPortfolio);
        break;
      case "artwork":
        setData(artworkPortfolio);
        break;
      default:
        setData(projectsPortfolio);
    }
  }, [selected])

  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <div className="portfolio" id="portfolio">
        <h1>portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}/>
          ))}
        </ul>
        <img className="green-star" alt="" />
        <img className="orange-star" alt="" />
        <img className="purple-star" alt="" />
        <div className="container">
          {data.map ((d) => (
            <a className="item-link" href={d.link}>
              <div className="item"
              onMouseEnter={() => {setShowDescription(true); setItemIndex(d.id)}}
              onMouseLeave={() => setShowDescription(false)}
            >           
              <img
                className='itemImg'
                src={d.img}
                alt=""/>
              {/* {selected === "projects" ? <a href={d.link}>{d.title}</a> : <a onClick={togglePopUp}>{d.title}</a>} */}
              <a href={d.link}>{d.title}</a>
              <h3 className="brief">{d.brief}</h3>              
              <h3 className="tools">{d.tools}</h3>
              {isPopupOpen && <ArtPopUp
                handleClose={togglePopUp}
                content={d.artImg}
              />}       
          </div>
            </a>
            
          ))}
        </div>
        
        {itemIndex ? 
         <h3 className={showDescription ? "description" : "description cover"}>
          {data.find(item => item.id === itemIndex).description}
         </h3> : null
        }
             
    </div>
  )
}