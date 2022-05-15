import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  projectsPortfolio,
  appsPortfolio,
  designPortfolio,
  artworkPortfolio
} from "./data";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
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
      // case "featured":
      //   setData(featuredPortfolio);
      //   break;
      // case "apps":
      //   setData(appsPortfolio);
      //   break;
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
            <div className="item"
              onMouseEnter={() => {setShowDescription(true); setItemIndex(d.id)}}
              onMouseLeave={() => setShowDescription(false)}
              onClick={d.link}>
            <img
              className='itemImg'
              src={d.img}
              alt=""/>
            <h3>{d.title}</h3>
          </div>
          ))}
        </div>
        <h3 className={showDescription ? "description" : "description cover"}>
          {data.find(items => items.id == itemIndex).description}
        </h3>       
    </div>
  )
}