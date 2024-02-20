"use client"

import '../../styles/accordion.css'
import { useEffect } from 'react'

function FaqAccordion({handleClick, isActive, index, question, answer}) {

  return (
    <div className={`faq ${isActive === index ? 'active' : ''}`} onClick={handleClick} >
      <div className='question'>
        <h1>{question}</h1>
      </div>
      <div className='answer'>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FaqAccordion