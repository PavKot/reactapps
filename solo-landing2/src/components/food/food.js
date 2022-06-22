import React from 'react';
import food from '../../assets/food.png';
import '../food/food.css';

export const Food = () => {
  return (
    <div className='food-container'>
        <div className='food-image'>
            <img src={food}/>
        </div>
        <div className='food-content'>
            <h1>100% Organic Food</h1>
            <h4>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</h4>
        </div>
    </div>
  )
}
