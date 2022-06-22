import React from 'react'
import homeimage from '../../assets/home.png'
import "../home/home.css"

const Home = () => {
  return (
    <div className='home-container' id='home'>
        <div className='home-content'>
            <h1 className='title'>The beauty of every <span>NFT</span></h1>
            <h4 className='subtitle'>Art does not exist only to entertain, but also to challenge one to think, to provoke, even to disturb</h4>
            <div className='links'>
                <a href='#'>bild now</a>
                <a href='#'>learn more</a>
            </div>
        </div>
            <div className='ellipse pink'></div>
            <div className='ellipse orange'></div>

        <div className='home-image'>
            <img src={homeimage}/>
        </div>
    </div>
  )
}

export default Home