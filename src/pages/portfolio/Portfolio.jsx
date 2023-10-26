import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import { AnimatePresence } from 'framer-motion'

import List from '../../components/List'
import Items from '../../components/Items'
import shapeOne from '../../assets/shape-1.png'

import { Fade, Bounce, Flip, Roll, Rotate, Zoom, Hinge, JackInTheBox, Slide } from 'react-awesome-reveal'

import './portfolio.css'
import { projects } from '../../assets/Data'

const allNavList = ['all', ...new Set(projects.map((project) => project.category))];

const Portfolio = () => {

  const [ projectItems, setProjectItems ] = useState(projects);
  const [ navList, setNavList ] = useState(allNavList);

  const filterItems = (category) => {
    if (category === 'all') {
      setProjectItems(projects)
      return;
    }

    const newProjectItems = projects.filter((item) => item.category === category)

    setProjectItems(newProjectItems)
  };

  return (
    <section className="portfolio section" id="work">
        <Fade direction='up' triggerOnce>
          <h2 className="section_title text-cs">
              Portfolio
          </h2>

          <p className="section_subtitle">
              My <span>Projects</span>
          </p>
        </Fade>

        <List list={navList} filterItems={filterItems}/>


        <div className="portfolio_container container grid">
            <AnimatePresence> 
              <Items  projectItems={projectItems} />
            </AnimatePresence>
        </div>

        <div className="section_deco deco_left">
          <img src={shapeOne} className='shape' alt="" />
      </div>

      <div className="section_bg-wrapper">
        <span className='bg_title'>Portfolio</span>
      </div>
    </section>
  )
}

export default Portfolio