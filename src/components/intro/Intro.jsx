import "./intro.scss";
import "../../assets/orangeStar.png";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <img className="purple-star" alt="" />
      <div className="imgContainer">
        <img className="starImg" alt=""/>
      </div>
        <div className="wrapper">
          <h2 className="introduction">hello there, i'm</h2>
          <h1 className="name">serena</h1>
        </div>
    </div>
  )
}
