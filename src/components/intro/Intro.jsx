import React from 'react'
import nightVideo from '../../assets/night2.mp4';
import bigGreenStar from '../../assets/bigGreenStar.svg'
import smallGreenStar from '../../assets/smallGreenStar.svg'
import './intro.scss'

const Intro = () => {
  return (
    <div>
        <div className="intro " id="intro">
            {/* <img id='nightImage' src={nightImg} alt="" /> */}
            <img className='smallGreenStar' src={smallGreenStar} alt="" />
            <img className='bigGreenStar' src={bigGreenStar} alt=""/>
            <div className="wrapper">
                <h2 className="introduction">hello there, i'm</h2>
                <h1 className="name">serena</h1>
                <h1 className='text-cream font-bold intro-text text-4xl' >
                    a designer, developer, and artist, passionate about creating inclusive spaces and engaging experiences
                </h1>
            </div>
            <h3 className='school font-bold text-light text-xl'>systems design engineering @ university of waterloo</h3>
            <video autoPlay muted loop id="nightVideo" src={nightVideo}></video>
        </div>
    </div>
  )
}

export default Intro