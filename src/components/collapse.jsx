import React, { useState } from 'react'
import ArrowUp from '../assets/images/arrow_up.png'
import ArrowDown from '../assets/images/arrow_down.png'
import '../assets/style/collapse.scss'

export default function Collapse({children, title}) {
    const [isVisible, setIsVisible] = useState(false)

    const buttonForVisibility = () => {
        setIsVisible(!isVisible)
    }
    const chooseArrow = isVisible ? ArrowUp : ArrowDown
  return (
    <div className='collapse-container'>
        <button onClick={buttonForVisibility} className='button-collapse'>
        {title && <div className='title-collapse'>{title}</div>}
            <img src={chooseArrow} className='arrow' alt="Arrow" />
        </button>
        {isVisible && <div>{children}</div>}
    </div>
  )
}
