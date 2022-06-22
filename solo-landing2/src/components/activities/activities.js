import React from 'react';
import activities from '../../assets/activities.png';
import '../activities/activities.css';

export const Activities = () => {
  return (
    <div className='activities-container'>
        <div className='activities-content'>
            <h1>Cabin Activities</h1>
            <h4>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</h4>
        </div>
        <div className='activities-image'>
            <img src={activities}/>
        </div>
    </div>
  )
}
