import React, {Component} from 'react';
import {FaBars, FaAngleDown} from 'react-icons/fa';
import "../navbar/navbar.css"

export class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked});
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>NFT Landing Page</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                {this.state.clicked ? <FaAngleDown/>: <FaBars/>}
                
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    <li>
                        <a className='nav-links' href='#home'>Home</a>
                    </li>
                    <li>
                        <a className='nav-links' href='#about'>About</a>
                    </li>
                    <li>
                        <a className='nav-links' href='#cards'>Cards</a>
                    </li>
                    <li>
                        <a className='nav-links' href='#'>Testimonials</a>
                    </li>
                </ul>
            </nav>
        );
    }
}