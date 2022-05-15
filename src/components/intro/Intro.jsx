import "./intro.scss";
import "../../assets/orangeStar.png";
import nightVideo from '../../assets/nightVideo.mp4';

export default function intro() {
  return (
      <div className="intro" id="intro">
        <video autoPlay muted loop id="nightVideo" src={nightVideo}></video>
        <img className="purple-star" alt="" />
        <img className="starImg" alt=""/>
          <div className="wrapper">
            <h2 className="introduction">hello there, i'm</h2>
            <h1 className="name">serena</h1>
            <h1 className="name mobileName orange">serena</h1>
            <h1 className="name mobileName purple">serena</h1>
          </div>
      </div>
  )
}
