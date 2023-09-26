import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import { AnimatePresence } from 'framer-motion'

import List from '../../components/List'
import Items from '../../components/Items'

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
        <h2 className="section_title text-cs">
            Portfolio
        </h2>

        <p className="section_subtitle">
            My <span>Projects</span>
        </p>

        <List list={navList} filterItems={filterItems}/>

        <div className="portfolio_container container grid">
            <AnimatePresence > 
              <Items  projectItems={projectItems} />
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Portfolio