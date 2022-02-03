import React from 'react';
import CardItem from '../CardItem';
import './Service.css';

function Services() {
  return (
    <div className='services'>
      <h5>He are here for you!</h5>
      <div className='services__container'>
        <div className='services__wrapper'>
          <ul className='services__items'>
            <CardItem
              src='images/garantee.jpg'
              text='Best price guarantee'
              label='More informations'
            />
            <CardItem
              src='images/covid.jpg'
              text='Travel Safe'
              label='More informations'
   
            />
            <CardItem
              src='images/press.jpg'
              text='Stay Informed'
              label='Press'

            />
              <CardItem
              src='images/multibanco.jpg'
              text='Credit Card '
              label='Dont miss nothing'

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;

// import React from 'react';
// import '../../App.css';

// export default function Services() {
//   return <h1 className='services'>SERVICES</h1>;
// }
