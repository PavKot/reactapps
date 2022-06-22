import React, {useState} from 'react';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import '../faq/question.css';

export const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
        <div className='question-header'>
        <h2>{title}</h2>
        <button className='q-btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? <FiChevronUp/> : <FiChevronDown/>}</button>
        </div>
        {showInfo && <h4>{info}</h4>}
    </article>
  )
}
