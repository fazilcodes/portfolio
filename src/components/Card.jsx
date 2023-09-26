import React, { useState } from 'react'

const Card = ({ title, subtitle, description, date}) => {

  const [ showInfo, setShowInfo ] = useState(false);

  return (
    <div className='resume_item'>
      <div className="resume_header" onClick={() => (setShowInfo(!showInfo))}>
        <h3 className="resume_subtitle">{title}</h3>
        <span className='resume_icon'>{showInfo? '-' : '+'}</span>
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