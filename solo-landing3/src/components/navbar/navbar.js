import React, { Component } from 'react';
import '../navbar/navbar.css';
import logo from '../../assets/logo.png';
import {FaInstagram, FaTwitter, FaLinkedinIn, FaTelegram} from 'react-icons/fa';
import {BiCaretRight} from 'react-icons/bi';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {HiMenu} from 'react-icons/hi';

export class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
render(){
  return (
    <nav className='NavbarItems'>
        <div className='navbar-logo'>
            <img src={logo}/>
        </div>
        <div className='menu-icon' onClick={this.handleClick}>
            {this.state.clicked ?  <RiArrowDropDownLine/>: <HiMenu/> }
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a className='nav-links' href='#'>Features</a>
            </li>
            <li>
                <a className='nav-links' href='#'>Community</a>
            </li>
            <li>
                <a className='nav-links' href='#'>About Us</a>
            </li>
            <li>
                <a className='nav-links' href='#'>Faqs</a>
            </li>
            <li className='nav-btn-resp'>
                <a className='nav-links' href='#'>join our discord</a>
            </li>
        </ul>
        <div className='navbar-social'>
            <a href='#'><FaTelegram/></a>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaTwitter/></a>
            <a href='#'><FaLinkedinIn/></a>
        </div>
        <div className='navbar-button'>
            <a className='nav-btn' href='#'>join our discord <BiCaretRight/></a>
        </div>
    </nav>
  )
}
}