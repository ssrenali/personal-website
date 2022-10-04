import React from 'react'
import bigGreenStar from '../../assets/bigGreenStar.svg'
import smallGreenStar from '../../assets/smallGreenStar.svg'
import './intro.scss'

const Intro = () => {
  return (
    <div>
        <div className="intro" id="intro">
            <img className='smallGreenStar' src={smallGreenStar} alt="" />
            <img className='bigGreenStar' src={bigGreenStar} alt=""/>
            <div className="wrapper">
                <h2 className="text-cream font-bold hello-there text-lg lg:text-4xl">hi there! i'm</h2>
                <h1 className="name">serena li</h1>
                <h1 className='text-cream font-bold intro-text decription-text text-lg lg:text-4xl' >
                    a designer, engineer, and artist, passionate about crafting engaging experiences through empathy and design.
                </h1>
            </div>
            <h3 className='school font-bold text-light text-sm'>ui/ux designer @ cibc ✭ systems design engineering @ university of waterloo</h3>
        </div>
    </div>
  )
}

export default Intro