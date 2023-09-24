import React from 'react'
import './home.css'

import profilepic from '../../assets/profilepic.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'

import { FaLinkedinIn, FaGithubAlt,  } from 'react-icons/fa'

import transition from '../../transition';


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

          <div className="home_img-wrapper">
            <div className="home_banner">
              <img src="" alt="" className='home_profile'/>
            </div>

            <p className="home_data home_data-one">
              <span className='text-lg'>
                12<b>+</b>
              </span>
              <span className='text-sm text-cs'>
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home_data home_data-two">
              <span className='text-lg'>
                200
              </span>
              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape_1" />
            <img src={shapeTwo} alt="" className="shape shape_2" />
            <img src={shapeTwo} alt="" className="shape shape_3" />
          </div>

          <p className="home_text">
          Continuously learning and growing,
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
            <a href="" className='hero_link text-cs'>My Skills</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default transition(Home);