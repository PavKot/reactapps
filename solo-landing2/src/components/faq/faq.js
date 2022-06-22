import React from 'react';
import '../faq/faq.css';
import { Question } from './question';

export const Faq = () => {
  return (
    <div className='faq-container'>
        <div className='faq-content'>
            <p>Start your jorney!</p>
            <h1>How to Get My Room?</h1>
            <h4>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</h4>
            <a className='btn-link' >Contact us</a>
        </div>
        <div className='faq-accordion'>
            <Question title="1. Choose a room and date" info="Choose a room and date."/>
            <Question title="2. Check for room availability" info="Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting."/>
            <Question title="3. Enjoy your room" info="Just enjoy your room!"/>
        </div>
    </div>
  )
}
