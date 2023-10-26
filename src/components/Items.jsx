import React from 'react'
import { motion } from 'framer-motion'

import { FaArrowRight } from 'react-icons/fa'
import shapeTwo from '../assets/shape-2.png'

import { Fade, Bounce, Flip, Roll, Rotate, Zoom, Hinge, JackInTheBox, Slide } from 'react-awesome-reveal'

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const {id, img, category, title, description} = projectItem;
        return (
          <Fade direction='down' triggerOnce>
          <motion.div 
          layout
          animate = {{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0.8, scale: 0.6 }}
          exit={{ opacity: 0.8, scale: 0.6 }}
          transition={{ duration: .8 }}
          className="portfolio_items card card-two" key={id}>
            <div className="portfolio_img-wrapper">
              <img src="{img}" alt="" className="portfolio_img" />
            </div>

            <span className="portfolio_category text-cs">{category}</span>
            <h3 className='portfolio_title'>{title}</h3>
            <p className="portfolio_description">{description}</p>

            <a href="" className="link">
              See Pricing
              <FaArrowRight className='link_icon'></FaArrowRight> 
            </a>

            <img src={shapeTwo} alt="" className="shape c_shape" />
          </motion.div>
          </Fade>
        )
      })}
    </>
  )
}

export default Items