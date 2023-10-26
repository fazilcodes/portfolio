import React from 'react'
import './skills.css'
import {skills} from '../../assets/Data'
import shapeOne from '../../assets/shape-1.png'

import { Fade } from 'react-awesome-reveal'


const Skills = () => {

    return (
    <section className="skills section" id="skills" name='skills'>
        
        <Fade direction='up' triggerOnce>
            <h2 className="section_title text-cs">
                Professional Skills
            </h2>

            <p className="section_subtitle">
                My <span>Skills</span>
            </p>
        </Fade>
            <div className="skills_container container grid">
                {skills.map(({name, percentage, description, img}, index) => {
                    return (
                        <Fade direction='up' cascade={false} delay={index * 200} triggerOnce>
                            <div className="skills_item" key={index}>
                                <div className="skills_titles">
                                    <div className="skills_n">
                                        <h3 className="skills_name">
                                            {name}
                                        </h3>
                                        <img className='skills_nimg' src={img} alt="" />
                                    </div>
                                    <span className="skills_number">
                                        {percentage} <span>%</span>
                                    </span>
                                </div>

                                <p className="skills_description">
                                    {description}
                                </p>

                                <div className="skills_bar">
                                    <span className='skills_percentage' style={{width: `${percentage}%`}}>
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        <div className="section_deco deco_right">
            <img src={shapeOne} className='shape' alt="" />
        </div>

        <div className="section_bg-wrapper">
            <span className='bg_title'>Skills</span>
        </div>

    </section>


)
}

export default Skills