import React from 'react';
import '../footer/footer.css';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-block'>
            <h1>Cootels</h1>
            <h4>Your Best Private Hideway From Crowd. Back to Nature.</h4>
            <div className='footer-block-social'>
            <a href='#'><FaTwitter/></a>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaFacebookF/></a>
            </div>
        </div>
        <div className='footer-links'>
            <a href='#' className='b-link'>Rooms</a>
            <a href='#'>Single Room</a>
            <a href='#'>Double Room</a>
            <a href='#'>Cabin</a>
            <a href='#'>Custom Room</a>
        </div>
        <div className='footer-links'>
            <a href='#' className='b-link'>Rooms</a>
            <a href='#'>Single Room</a>
            <a href='#'>Double Room</a>
        </div>
        <div className='footer-links'>
            <a href='#' className='b-link'>Rooms</a>
            <a href='#'>Single Room</a>
            <a href='#'>Double Room</a>
            <a href='#'>Cabin</a>
        </div>
    </footer>
  )
}
