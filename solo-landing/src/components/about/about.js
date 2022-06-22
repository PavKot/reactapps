import React from 'react';
import box from '../../assets/box.png';
import box1 from '../../assets/box1.png';
import box2 from '../../assets/box2.png';
import box3 from '../../assets/box3.png';
import '../about/about.css'


export const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='about-images'>
            <img src={box}/>
            <img src={box1}/>
            <img src={box2}/>
            <img src={box3}/>
        </div>
        <div className='about-content'>
            <h1>We give the best quality NFT For you</h1>
            <h4>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h4>
            <div className='links'>
                <a href='#'>bild now</a>
                <a href='#'>learn more</a>
            </div>
        </div>
    </div>
  )
}
