import React from 'react';
import '../home/home.css';
import {BiCaretRight} from 'react-icons/bi';
import homeimg from '../../assets/home-img.png';

export const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content'>
            <h1>Shop our latest collection of 10000 billionaire apes NFTs</h1>
            <h4>Earlier this year, a mysterious force coming from another galaxy summoned the most influential people on planet Earth to a secret party. Acquiring one of them will give you access to an ever-growing community of investors and entrepreneurs.</h4>
            <a className='nav-btn' href='#'>join our discord <BiCaretRight/></a>
            <div className='home-content-counters'>
                <h4><span>180+</span> hand drawn traits</h4>
                <h4><span>5.5k</span> owners</h4>
                <h4><span>10.3k</span> items</h4>
            </div>
        </div>
        <div className='home-image'>
            <img src={homeimg}/>
        </div>
        <div className='line'></div>
        <div className='line2'></div>
        <div className='line3'></div>
    </div>
  )
}
