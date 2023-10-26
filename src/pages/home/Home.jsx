import React from 'react'
import './home.css'

import profilepic from '../../assets/profilepic.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'

import { FaLinkedinIn, FaGithubAlt} from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { Link } from 'react-scroll'


const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home_wrapper">
        <div className="home_container container">
          <p className="home_subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home_title text-cs">
            <span>Fazil </span>Thekkan
          </h1>

          <p className="home_job">
            <span className="text-cs">I Am</span><b>Web Developer</b>
          </p>

          <div class="blob-wobble" style={{background: profilepic}}></div>

          <p className="home_text">
          Continuously learning and growing
          in this ever-evolving field, my expertise keeps on flowing.
          </p>

          <div className="home_socials">
            <a href="" className='home_social-link'>
              <FaLinkedinIn />
            </a>
            <a href="" className='home_social-link'>
              <FaGithubAlt />
            </a>
          </div>

          <div className="home_btns">
            <a href="" className="btn text-cs">Download CV</a>
            <Link to='skills' offset={-130}  className='hero_link text-cs'>My Skills</Link>
          </div>
        </div>
      </div>

      <a href="#home" className='home_scroll-up'>
        <AiOutlineArrowUp />
      </a>

      <div className="section_deco deco_left">
        <img src={shapeOne} className='shape' alt="" />
      </div>

      <div className="section_bg-wrapper">
        <span className='bg_title'>Developer</span>
      </div>
    </section>
  )
}

export default Home;