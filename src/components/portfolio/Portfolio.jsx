import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  projectsPortfolio,
} from "./data";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setData(projectsPortfolio)
  }, [])

  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <div className="portfolio" id="portfolio">
        <h1>portfolio</h1>
        <img className="green-star" alt="" />
        <img className="orange-star" alt="" />
        <img className="purple-star" alt="" />
        <div className="container">
          {data.map ((d) => (
            <a key={data.id} className="item-link" href={d.link}>
              <div className="item"
              onMouseEnter={() => {setShowDescription(true); setItemIndex(d.id)}}
              onMouseLeave={() => setShowDescription(false)}
            >           
              <img
                className='itemImg'
                src={d.img}
                alt=""/>
              <h1 className="item-title">{d.title}</h1>
              <h3 className="brief">{d.brief}</h3>              
              <h3 className="tools">{d.tools}</h3>
          </div>
            </a>
            
          ))}
        </div>
        
        {itemIndex && showDescription ? 
         <h3 className="description">
          {data.find(item => item.id === itemIndex).description}
         </h3> : null
        }
             
    </div>
  )
}