import React, { useState } from 'react';
import '../reviews/reviews.css';
import review1 from '../../assets/review1.png';
import quotes from '../reviews/reviewdata.js';

export const SingleReview = () => {

  const [current, setCurrent] = useState(quotes[0]);
  const [active, setActive] = useState(0);
  const handleSetClick = (event) =>{
    setCurrent(quotes[event.target.getAttribute('data-quote')]);
    setActive(event.target.getAttribute('data-quote'));
  }
  console.log(current);
  return (
    <article className='review'>
        <div className='review-img'>
            <img src={review1}/>
        </div>
        <div className='review-text'>
            <h4>{current.text}</h4>
            <h3>{current.client}</h3>
        </div>
        <div className='review-button-container'>
            {Object.keys(quotes).map(index=>(
                <span onClick={event => handleSetClick(event)}
                data-quote={index}
                key={index} id="test"
                />
            ))}
        </div>
    </article>
  )
}
