import React, { useEffect, useState } from 'react';
import './navbar.css';
import { links } from '../assets/Data';
import shapeOne from '../assets/shape-1.png'

import { FaLinkedinIn, FaGithubAlt,  } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

const Navbar = () => {

    const [ showMenu, setShowMenu ] = useState(false)
    const [ scrollNav, setScrollNav ] = useState(false)
    const [ theme, setTheme ] = useState('dark-theme')

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        }
        else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu)
    }, [showMenu])

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

  return (
    <header className={`${scrollNav ? 'scroll-header': ''} header`}>
        <nav className="nav">
            <Link to='/' onClick={scrollTop} className='nav_logo text-cs'>Fazicodes</Link>

            <div className={`${showMenu ? 'nav_menu show-menu' : 'nav_menu'}`}>
                <div className="nav_data">
                    <ul className="nav_list">
                        {links.map((link, index) => {
                            return (
                                <li className="nav_item" key={index}>
                                    <Link 
                                        className='nav_link text-cs' 
                                        to={link.path}
                                        spy={true} 
                                        hashSpy={true}
                                        smooth={true} 
                                        offset={-130} 
                                        duration={500}
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                        <div className="navbar_socials">
                            <a href="" className='navbar_social-link'>
                            <FaLinkedinIn />
                            </a>
                            <a href="" className='navbar_social-link'>
                            <FaGithubAlt />
                            </a>
                        </div>
                    </ul>

                </div>

                <div className="section_deco deco_left  header_deco">
                    <img src={shapeOne} className='shape' alt="" />
                </div>
            </div>

            <div className="nav_btns">
                <div className="theme_toggler" onClick={toggleTheme}>
                    { theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <div className={`${showMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar