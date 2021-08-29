import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

    const style = {
        backgroundColor : 'red'}

    


function Cards(props) {
  return (
    <>
      <div id='cards' className='cards' style={style}>
        <h1>{props.name}</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                label='Adventure'
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                path='/marketplace'
              />
              <CardItem
                src='images/img-2.jpg'
                label='Luxury'
                path='/marketplace'
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='hero-btns'>
        <Button
          className='btn'
          onClick={console.log('hey')}
        >
          Connect Wallet
        </Button>
      </div>
    </>
    
  );
}

export default Cards;
