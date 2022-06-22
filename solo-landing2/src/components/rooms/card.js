import React from 'react';
import {BsArrowRightShort} from 'react-icons/bs';

export const Card = ({image, name, desc}) => {
  return (
    <div className='card'>
        <img src={image}/>
        <h2>{name}</h2>
        <h4>{desc}</h4>
        <a href='#'>Learn more<BsArrowRightShort/></a>
    </div>
  )
}
