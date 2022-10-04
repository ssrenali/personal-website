import React from 'react'
import "./newPortfolio.scss";

import sydeHustle from '../../assets/sydehustle.png';
import dineTime from '../../assets/dinetime.png';
import questMobile from '../../assets/questmobile.png';

function NewPortfolio() {
  return (
    <div className='portfolio-new'>
        {/* ------------------------------------------------------ SYDE HUSTLE --------------------------------------------------------------------------------- */}
         <h1 className='project-title pt-10'>syde hustle</h1>
        <div className='project-container'>
            <div className='text-section'>
                <div className='project-info'>
                    <p className='case-study'>case study</p>
                    <h3 className='project-header'>SYDE Hustle</h3>
                    <p className='description'>A side hustle app for UWaterloo students to find a low commmitment means to make money</p>
                    <a href="https://www.notion.so/sserenali/SYDEHustle-6243845988724d8b9ce9c540633d7e66" className='explore'>explore the process! &rarr;</a>
                </div>
            </div>
            <div className='img-section right-img-section'>
                <a href="https://www.notion.so/sserenali/SYDEHustle-6243845988724d8b9ce9c540633d7e66">
                    <img src={sydeHustle} alt="" className='right-img'/>
                </a>
            </div>            
        </div>

        {/* ------------------------------------------------------ DINETIME --------------------------------------------------------------------------------- */}
        <h1 className='project-title'>dinetime</h1>
         <div className='project-container left-project'>
            <div className='img-section'>
                <a href="https://sserenali.notion.site/DineTime-Your-next-meal-without-the-wait-a621849397aa4685a0768cd81e32ee5a">
                <img src={dineTime} alt="" className='right-img'/>
                </a>
            </div>  
            <div className='text-section'>
                <div className='project-info left-text'>
                    <p className='case-study'>case study</p>
                    <h3 className='project-header'>DineTime</h3>
                    <p className='description'>An app to order ahead and escape restaurant wait times.</p>
                    <a href="https://sserenali.notion.site/DineTime-Your-next-meal-without-the-wait-a621849397aa4685a0768cd81e32ee5a" className='explore'>explore the process! &rarr;</a>
                </div>
            </div>          
        </div>

        {/* ------------------------------------------------------ QUEST MOBILE --------------------------------------------------------------------------------- */}
        <h1 className='project-title pt-10'>quest mobile</h1>
        <div className='project-container mb-10'>
            <div className='text-section'>
                <div className='project-info'>
                    <p className='case-study'>case study</p>
                    <h3 className='project-header'>Quest Mobile</h3>
                    <p className='description'>Redesigning the student portal for UWaterloo students for quicker, on the go access.</p>
                    <a href="https://sserenali.notion.site/Quest-Mobile-Case-Study-feb9febd40bf4ead87b4fe959fb014b6" className='explore'>explore the process! &rarr;</a>
                </div>
            </div>
            <div className='img-section' id='sydeHustleImg'>
                <a href="https://sserenali.notion.site/Quest-Mobile-Case-Study-feb9febd40bf4ead87b4fe959fb014b6">
                    <img src={questMobile} alt="" className='right-img'/>
                </a>
            </div>            
        </div>

        {/* ------------------------------------------------------ LAST PROJECT HAS DIFFERENT MARGIN BOTTOM --------------------------------------------------------------------------------- */}
    </div>
  )
}

export default NewPortfolio