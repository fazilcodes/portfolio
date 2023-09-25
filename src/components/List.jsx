import React, { useState } from 'react'

const List = ({ list, filterItems }) => {

  const [active, setActive] = useState(0);

  return (
    <div className='portfolio_list'>{list.map((category, id) => {
      return (
        <button className={`${active === id ? 'active-work' : ''} portfolio_list-item text-cs`}
          key={id} 
          onClick={() => {
            setActive(id)
            filterItems(category)
          }}>
            {category}
        </button>
      )
    })}</div>
  )
}

export default List