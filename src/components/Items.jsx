import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import { FaArrowRight } from 'react-icons/fa'
import shapeTwo from '../assets/shape-2.png'

import { Fade} from 'react-awesome-reveal'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Items = ({ projectItems }) => {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <>
      {projectItems.map((projectItem) => {
        const {id, img, category, title, description, live, code} = projectItem;
        return (
            <div data-aos="fade-up" className="portfolio_items card card-two" key={id}>
              <div className="portfolio_img-wrapper">
                <img src={img} alt="" className="portfolio_img" />
              </div>

              <span className="portfolio_category text-cs">{category}</span>
              <h3 className='portfolio_title'>{title}</h3>
              <p className="portfolio_description">{description}</p>

              <a href={code} className="link gap">
                Code
                <FaArrowRight className='link_icon'></FaArrowRight> 
              </a>

              { live && <a href={live} className="link">
                Live
                <FaArrowRight className='link_icon'></FaArrowRight> 
              </a>  }
              
              <img src={shapeTwo} alt="" className="shape c_shape" />
            </div>
        )
      })}
    </>
  )
}

export default Items