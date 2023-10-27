import React, { useState, useEffect } from 'react'

const Card = ({id, title, subtitle, description, date}) => {

  const [ showInfo, setShowInfo ] = useState(false);

  return (
    <div className='resume_item' key={id}>
      <div className="resume_header" onClick={() => (setShowInfo(!showInfo))}>
        <h3 className="resume_subtitle">{title}</h3>
        <a className='resume_icon'>{showInfo? '-' : '+'}</a>
      </div>
      
      <div className={`${showInfo ? 'show-content' : ''} resume_content`}>
        <div className="resume_date-title">
          <h3 className="resume_title">{subtitle}</h3>
          <span className="resume_data text-cs">{date}</span>
        </div>
        <p className="resume_description">{description}</p>
      </div>
    </div>
  )
}

export default Card