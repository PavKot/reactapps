import React from 'react';
import '../keepyou/keepyou.css';
import {BiCaretRight} from 'react-icons/bi';

export const KeepYou = () => {
  return (
    <div className='keepyou-container'>
        <div className='keepyou-content'>
        <h1>Let’s keep you up to date</h1>
        <h4>With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</h4>
        <h3>Be the first to know when we add new NFTs are added to the store!</h3>
        <div className='keepyou-input'>
        <input type="text" size="40" placeholder='Enter your email here'/>
        <a className='nav-btn' href='#'>view collection <BiCaretRight/></a>
        </div>
        </div>
    </div>
  )
}
