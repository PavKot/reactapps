import React from 'react';
import '../rooms/rooms.css';
import card from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import { Card } from './card';

export const Rooms = () => {
  return (
    <div className='rooms-container'>
        <div className='rooms-header'>
            <h1>Many Rooms to Choose</h1>
            <h4>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</h4>
            <a className='btn-link' >Explore more</a>
        </div>
        <div className='rooms-cards'>
            <Card image={card} name="Single Room" desc="Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others."/>
            <Card image={card2} name="Double Room" desc="Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two"/>
            <Card image={card3} name="Cootage" desc="Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends"/>
        </div>
    </div>
  )
}
