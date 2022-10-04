//import React from 'react'
import "./contact.scss"
import bigGreenStar from '../../assets/bigGreenStar.svg'
import smallGreenStar from '../../assets/smallGreenStar.svg'

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="textBox">
        like what you see? <br/>let's chat!
      </h2>
      <div className="other-contact">
          <a href="mailto:s868li@uwaterloo.ca">email</a>
          <a href="" className="star-text">✭</a>
          <a href="https://www.linkedin.com/in/sserenali/">linkedin</a>
          <a href="" className="star-text">✭</a>
          <a href="https://www.etsy.com/shop/aestronart">etsy</a>
          <a href="" className="star-text">✭</a>
          <a href="https://github.com/ssrenali">github</a>

      </div>
      <img src={bigGreenStar} className='big-star' alt="" />
      <img src={smallGreenStar} className='small-star' alt="" />
      <div className="copyright">
        <p>
          serena li ✭ © 2022 <br/> ✭ designed and developed with love ✭
        </p>
      </div>
    </div>
    
  )
}
