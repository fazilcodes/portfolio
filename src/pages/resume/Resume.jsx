import React, {useEffect} from 'react'
import './resume.css'
import { cv } from '../../assets/Data'
import Card from '../../components/Card'
import shapeOne from '../../assets/shape-1.png'

import { Fade} from 'react-awesome-reveal'


const Resume = () => {

  return (
    <section className="resume section" id="resume">
        <Fade direction='up' triggerOnce={true}>
            <h2 className="section_title text-cs">
                Resume
            </h2>

            <p className="section_subtitle">
                My <span>Story</span>
            </p>
        </Fade>
        
        <div className="resume_container container grid">
            <div className="resume_group">
                <Fade direction='left' triggerOnce={true}>
                    <h3 className="resume_heading">Education</h3>
                </Fade>
                
                <div className="resume_items">
                    {cv.map((val, id) => {
                        if (val.category === 'education') {
                            return <Card 
                                key={id} 
                                title={val.title} 
                                subtitle={val.subtitle} 
                                date={val.date} 
                                description={val.description} 
                            />
                        }
                    })}
                </div>
            </div>

            <div className="resume_group">
                <Fade direction='right' triggerOnce={true}>
                    <h3 className="resume_heading">Experience</h3>
                </Fade>

                <div className="resume_items">
                    {cv.map((val, id) => {
                        if (val.category === 'experience') {
                            return  <Card 
                                        key={id} 
                                        title={val.title}
                                        subtitle={val.subtitle} 
                                        date={val.date} 
                                        description={val.description} 
                                    />
                        }
                    })}
                </div>
            </div>
        </div>

        <div className="section_deco deco_right">
            <img src={shapeOne} className='shape' alt="" />
        </div>

        <div className="section_bg-wrapper">
            <span className='bg_title'>Resume</span>
        </div>
    </section>
  )
}

export default Resume