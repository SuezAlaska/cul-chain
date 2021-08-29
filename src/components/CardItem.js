import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Culchain NFTs'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__title'>Owner</h4>
            <h4 className='cards__item__title'>Price</h4>
            <h2 className='cards__item__details'>{props.nftname}</h2>
            <h2 className='cards__item__details'>{props.amount}</h2>
          </div>
        </Link>
      </li>
      
    </>
  );
}

export default CardItem;
