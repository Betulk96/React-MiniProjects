import React from 'react';
import Card from './card';
import cards from './cards';
import './sidebar.scss'

const CardMenu = () => {
 
  
  return (
    <div className='cardMenu'>
      <h1>Cat Menu</h1>
      {cards.map(card => (
        <Card key={card.id}  content={card.content}>
          
          <img src={card.src} alt="" />
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </Card>
      ))}
    </div>
  );
};

export default CardMenu;
