"use client"

import '../../styles/accordion.css'
import { useState } from 'react'

function FaqAccordion(props) {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <div className={`faq ${active ? 'active' : ''}`} onClick={handleClick} >
      <div className='question'>
        <h1>{props.question}</h1>
      </div>
      <div className='answer'>
        <p>Simple animations are animations that are created using only CSS. Dynamic animations are animations that are created using CSS and JavaScript.</p>
      </div>
    </div>
  )
}

export default FaqAccordion