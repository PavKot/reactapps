import React from 'react';
import "../card/card.css";
import {SiEthereum} from 'react-icons/si'

export const Card = ({name, image, author, price, category}) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={image}/>
        </div>
        <div className='card-details'>
            <div className='card-details-text'>
                <h3>{name}</h3>
                <h4>by {author}</h4>
            </div>
            <div className='card-details-link'>
                <a href='#'>bild</a>
            </div>
        </div>
        <div className='card-details pricing'>
            <div className='card-details-text'>
                <SiEthereum className="eth" />
            </div>
            <div className='card-details-link'>
                <h4>Price</h4>
                <h4 id='price-eq'>{price} ETH</h4>
            </div>
        </div>
    </div>
  )
}
