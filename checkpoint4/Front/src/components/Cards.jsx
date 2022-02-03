import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Brazil.jpg'
              text='Explore the hidden waterfall - Brazil 899eur'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Seychelles.jpg'
              text='Travel through the Islands of Seychelles 1199eur'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Mozambique.jpg'
              text='Travel through Mozambique 799eur'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Dubai.jpg'
              text='Everyone wants some lux - Dubai 999eur'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/Hong Kong.jpg'
              text='Wondelfull things in Hong Kong 1099eur'
              label='Luxury'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour 599eur'
              label='Adreline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
