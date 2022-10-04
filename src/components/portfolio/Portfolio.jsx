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

  return (
    <div className="portfolio" id="portfolio">
        <h1 className="project-title">syde hustle</h1>
        <div className="container">
          {data.map ((d) => (
            <a key={data.id} className="item-link" href={d.link}>
              <div className="basis-1/3 ">           
              <img
                className='item-img'
                src={d.img}
                alt=""/>
              <h1 className="item-title">{d.title}</h1>
              </div>
            </a>
            
          ))}
        </div>
        
        {/* {itemIndex && showDescription ? 
         <h3 className="description">
          {data.find(item => item.id === itemIndex).description}
         </h3> : null
        } */}
             
    </div>
  )
}