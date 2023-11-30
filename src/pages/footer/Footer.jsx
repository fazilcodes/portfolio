import React from 'react'
import './footer.css'

import { FaLinkedinIn, FaGithubAlt,  } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container grid">
            <div className="footer_socials">
                <a href="" className='footer_social-link'>
                <FaLinkedinIn />
                </a>
                <a href="" className='footer_social-link'>
                <FaGithubAlt />
                </a>
            </div>

            <p className="footer_copyright text-cs">
                &copy; 2023 <span>Fazicodes</span>. All Rights Reserved
            </p>
            
            <p className="footer_copyright text-cs">
                Developed by <span>fazicodes</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer