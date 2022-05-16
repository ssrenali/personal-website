//import React from 'react'
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <img className="orange-star" alt="" />
      <img className="purple-star" alt="" />
      <div className="textBox">
        <h2 className="say">say</h2>
        <h2>hello!</h2>
      </div>
      <div className="emailBox">
        <a class="button" href="mailto:s868li@uwaterloo.ca">E-MAIL ME</a>
      </div>
      <div className="other-contact">
          <a href="https://www.linkedin.com/in/serena-li-03/">LINKEDIN</a>
          <img className="small-star" alt="" />
          <a href="https://github.com/ssrenali">GITHUB</a>
          <img className="small-star" alt="" />
          <a href="https://www.etsy.com/shop/aestronart">ETSY</a>
          <img className="small-star" alt="" />
          <a href="https://www.figma.com/proto/eowYZpuqqUpv9zoBCo7h4J/resume?node-id=2%3A5&scaling=min-zoom&page-id=0%3A1">RESUME</a>
      </div>
      <div className="copyright">
        <p>
          designed and developed with love by serena li 2022 &lt;3
        </p>
      </div>
    </div>
    
  )
}
