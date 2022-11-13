//import React from 'react'
import "./contact.scss"
import bigGreenStar from '../../assets/bigGreenStar.svg'
import smallGreenStar from '../../assets/smallGreenStar.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Contact() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div className="contact" id="contact">
      <h2 className="textBox" data-aos="fade-right">
        like what you see? <br/>let's chat! ✭
      </h2>
      {/* <div className="other-contact">
          <a href="mailto:s868li@uwaterloo.ca">email</a>
          <a href="" className="star-text">✭</a>
          <a href="https://www.linkedin.com/in/sserenali/">linkedin</a>
          <a href="" className="star-text">✭</a>
          <a href="https://www.etsy.com/shop/aestronart">etsy</a>
          <a href="" className="star-text">✭</a>
          <a href="https://github.com/ssrenali">github</a>

      </div> */}
      <img src={bigGreenStar} className='big-star' alt="" />
      {/* <img src={smallGreenStar} className='small-star' alt="" /> */}
      
      <div className="contact-info">
        <div className="empty-section">
        </div>
        <div className="contact-section">
          <p>
            serena li ✭ © 2022
          </p>
          <p>
            designed and developed with love
          </p>
        </div>

        <div className="contact-section">
          <p>
            <a href="mailto:s868li@uwaterloo.ca">email</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/sserenali/">linkedin</a>
          </p>
        </div>

        <div className="contact-section">
          <p>
            <a href="https://www.etsy.com/shop/aestronart">etsy</a>
          </p>
          <p>
            <a href="https://github.com/ssrenali">github</a>
          </p>
        </div>     
      </div>

      {/* <hr/> */}
    </div>
    
  )
}
