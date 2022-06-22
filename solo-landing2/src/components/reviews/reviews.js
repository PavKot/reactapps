import React from 'react';
import '../reviews/reviews.css';
import { SingleReview } from './singlereview';

export const Reviews = () => {
  return (
    <div className='reviews-container'>
        <div className='reviews-title'>
            <h1>Hear From Our Happy Customers</h1>
        </div>
        <SingleReview/>
    </div>
  )
}
