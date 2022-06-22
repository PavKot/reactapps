import React from 'react';
import home from '../../assets/home-img.png';
import '../home/home.css'

export const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content'>
            <h1>Nature, Warmth, and Beauty in One Space</h1>
            <h4>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</h4>
            <a className='btn-link'>Reservation</a>
        </div>
        <div className='home-image'>
            <img src={home}/>
        </div>
    </div>
  )
}
