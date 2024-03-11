import React from 'react'


const Card = (props) => {
  return (
    <div className='card-item'>
          
          <h3>{props.title}</h3>
          {props.children}
    </div>
  )
}

export default Card;
