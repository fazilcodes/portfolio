import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';

const List = ({ list, filterItems }) => {

  const [active, setActive] = useState(0);

  return (
    <div className='portfolio_list'>{list.map((category, id, index) => {
      return (
        <Fade direction='left' delay={index * 200} triggerOnce={true}>
          <button className={`${active === id ? 'active-work' : ''} portfolio_list-item text-cs`}
            key={id} 
            onClick={() => {
              setActive(id)
              filterItems(category)
            }}>
              {category}
          </button>
        </Fade>
      )
    })}</div>
  )
}

export default List