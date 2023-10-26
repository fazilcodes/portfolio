import React from 'react'
import './home.css'

import profilepic from '../../assets/profilepic.png'
import shapeOne from '../../assets/shape-1.png'

import { FaLinkedinIn, FaGithubAlt} from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { Link } from 'react-scroll'
import { Fade} from 'react-awesome-reveal'


const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home_wrapper">
        <div className="home_container container">
          <Fade direction='down'>
            <p className="home_subtitle text-cs">
              Hello, <span>My Name Is</span>
            </p>

            <h1 className="home_title text-cs">
              <span>Fazil </span>Thekkan
            </h1>
            <p className="home_job">
              <span className="text-cs">I Am</span><b>Web Developer</b>
            </p>
          </Fade>

          <div class="blob-wobble" style={{background: profilepic}}></div>

          <Fade direction='up'>
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
          </Fade>

            <div className="home_btns">
              <Fade direction='left'>
                <a href="" className="btn text-cs">Download CV</a>
              </Fade>
              <Fade direction='right'>
                <Link to='skills' offset={-130}  className='hero_link text-cs'>My Skills</Link>
              </Fade>
            </div>
        </div>
      </div>
      
      <Fade direction='right'>
        <a href="#home" className='home_scroll-up'>
          <AiOutlineArrowUp />
        </a>
      </Fade>

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