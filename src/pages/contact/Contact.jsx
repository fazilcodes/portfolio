import React, { useState } from 'react'
import './contact.css'
import shapeOne from '../../assets/shape-1.png'

import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import axios from 'axios'

const Contact = () => {

    const [ form, setForm ] = useState({
        name: '', 
        email: '', 
        subject: '', 
        message: ''
    })  

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/a261274a-2f5a-454d-926b-1253051d91c6', form)
        .then((response) => {
            console.log(response);
            setForm({name: '', email: '', subject: '', message: ''})
        })
    }

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title text-cs">
            Contact Me
        </h2>

        <p className="section_subtitle">
            Let's <span>Talk</span>
        </p>

        <div className="contact_container container grid">
            <div className="contact_content">
                <div className="contact_card">
                    <span className="contact_card-icon">
                        <FaRegMap />
                    </span>

                    <h3 className='contact_card-title'>Address</h3>
                    <p className="contact_card-data">Kochi, Kerala, INDIA</p>
                </div>
                <div className="contact_card">
                    <span className="contact_card-icon">
                        <FaRegUser />
                    </span>

                    <h3 className='contact_card-title'>Work</h3>
                    <p className="contact_card-data">Available Now</p>
                </div>
                <div className="contact_card">
                    <span className="contact_card-icon">
                        <FaRegEnvelope />
                    </span>

                    <h3 className='contact_card-title'>Email</h3>
                    <p className="contact_card-data">fazilthekkan01@gmail.com</p>
                </div>
                <div className="contact_card">
                    <span className="contact_card-icon">
                        <FaRegAddressBook />
                    </span>

                    <h3 className='contact_card-title'>Phone</h3>
                    <p className="contact_card-data">+91 7736222685</p>
                </div>
            </div>

            <form className="contact_form" onSubmit={handleSubmit}>
                <div className="contact_form-group grid">
                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag text-cs">Full Name <b>*</b></label>
                        <input 
                            type="text" 
                            name='name' 
                            value={form.name}
                            onChange={handleChange} 
                            className="contact_form-input" 
                        />
                    </div>

                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag text-cs">Email Address <b>*</b></label>
                        <input 
                            type="email" 
                            name='email' 
                            value={form.email}
                            onChange={handleChange}
                            className="contact_form-input" 
                        />
                    </div>
                </div>
                <div className="contact_form-div">
                    <label htmlFor="" className="contact_form-tag text-cs">Subject <b>*</b></label>
                    <input 
                        type="text" 
                        className="contact_form-input" 
                        name='subject' 
                        value={form.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="contact_form-div contact_form-area">
                    <label htmlFor="" className="contact_form-tag text-cs">Message <b>*</b></label>
                    <textarea 
                        type="text" 
                        className="contact_form-input"
                        name='message' 
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>

                <div className="contact_submit">
                    <p>* Accept terms and conditions</p>
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
            </form>
        </div>

        <div className="section_deco deco_left">
            <img src={shapeOne} className='shape' alt="" />
        </div>
    </section>
  )
}

export default Contact