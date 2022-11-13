import React from 'react'

function PortfolioRight() {
  return (
    <div>
    <h1 className='project-title pt-10' data-aos="fade-up">syde hustle</h1>
    <div className='project-container md:ml-20 md:pl-20 2xl:ml-2' data-aos="fade-up">
        <div className='text-section'>
            <div className='project-info right-text'>
                {/* <p className='case-study'>case study</p>
                <h3 className='project-header'>SYDE Hustle</h3> */}
                <p className='description'>A side hustle app for UWaterloo students to find a low commitment means to make money</p>
                <a href="https://www.notion.so/sserenali/SYDEHustle-6243845988724d8b9ce9c540633d7e66" className='explore'>explore the process! &rarr;</a>
            </div>
        </div>
        <div className='img-section right-img-section'>
            <a href="https://www.notion.so/sserenali/SYDEHustle-6243845988724d8b9ce9c540633d7e66">
                <img src={sydeHustle} alt="" className='right-img'/>
            </a>
        </div>            
    </div>
    </div>
  )
}

export default PortfolioRight