import React, { Component } from 'react';
import {HiMenu} from 'react-icons/hi';
import {RiArrowDropDownLine} from 'react-icons/ri';
import "../navbar/navbar.css";

export class Navbar extends Component {
    state = { clicked: false }
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Cootels</h1>
        <div className='menu-icon' onClick={this.handleClick}>
            {this.state.clicked ?  <RiArrowDropDownLine/>: <HiMenu/> }
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href='#' className='menu-links'>Rooms</a>
            </li>
            <li>
                <a href='#' className='menu-links'>Reservation</a>
            </li>
            <li>
                <a href='#' className='menu-links'>Contacs</a>
            </li>
            <li>
                <a className='btn-link' id='nav-btn-resp'>Get Started</a>
            </li>
        </ul>
        <a className='btn-link' id='nav-btn'>Get Started</a>
    </nav>
  );
}
}