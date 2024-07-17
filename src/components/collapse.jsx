import React, { useState } from 'react'


export default function Collapse({children}) {
    const [isVisible, setIsVisible] = useState(false)

    const buttonForVisibility = () => {
        setIsVisible(!isVisible)
    }
  return (
    <div>
        <button onClick={buttonForVisibility}>
            {isVisible ? 'Masquer' : 'Afficher'}
        </button>
        {isVisible && <div>{children}</div>}
    </div>
  )
}
