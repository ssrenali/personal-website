import React from 'react'
import bigGreenStar from '../../assets/bigGreenStar.svg'
import smallGreenStar from '../../assets/smallGreenStar.svg'

import './intro.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Intro = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>
        <div className="intro" id="intro">
            <img data-aos='fade-up' className='smallGreenStar' src={smallGreenStar} alt="" />
            <img data-aos='fade-down' className='bigGreenStar' src={bigGreenStar} alt=""/>
            <div className="wrapper">
                <h2 className="text-cream font-bold hello-there text-lg lg:text-4xl" data-aos="fade-right">hi there! i'm</h2>
                <h1 className="name" data-aos="fade-left">serena li</h1>
                <h1 className='text-cream font-bold intro-text decription-text text-lg lg:text-4xl' data-aos="fade-right">
                    a designer, engineer, and artist, passionate about crafting engaging experiences through empathy and design.
                </h1>
                <h3 className='school font-bold text-cream text-sm'>ui/ux designer @ cibc ✭ systems design engineering @ university of waterloo</h3>
                <h2 className='arrow-down'>&#8595;</h2>
                {/* <hr />
                <h3>scroll down</h3> */}

            </div>
        </div>
        
    </div>
  )
}

export default Intro