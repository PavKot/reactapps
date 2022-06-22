import React from 'react';
import nature from '../../assets/nature-img.png';
import '../nature/nature.css';

export const Nature = () => {
  return (
    <div className='nature-container'>
        <div className='nature-image'>
            <img src={nature}/>
        </div>
        <div className='nature-content'>
            <h1>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
            <h4>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</h4>
            <h4 id='sec-p'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</h4>
            <a className='btn-link'>Learn More</a>
        </div>
    </div>
  )
}
