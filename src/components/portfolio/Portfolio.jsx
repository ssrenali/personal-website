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
  const list = [
    {
      id: 'projects',
      title: 'PROJECTS',
    },
    // {
    //   id: 'coding',
    //   title: 'CODING',
    // },
    // {
    //   id: 'design',
    //   title: 'DESIGN',
    // },
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
            <div className="item">
            <img
              src={d.img}
              alt=""/>
            <h3>{d.title}</h3>
          </div>
          ))}
        </div>
    </div>
  )
}
