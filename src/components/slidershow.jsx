import React, { useState } from 'react'
import { listlogements } from '../data/logement'
import ArrowNext from '../assets/images/arrow-next.png'
import ArrowPrev from '../assets/images/arrow-prev.png'
import '../assets/style/slidershow.scss'

export default function Slidershow() {
  const [currentIndex, setCurrentIndex] = useState(0)



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
        console.log(prevIndex) // Log de la valeur de prevIndex avant l'incrémentation
        return prevIndex + 1
    })
}

      
    
  


  return (
    <div className="carousel">
      <button className='button-arrow prev'>
        <img className='image-arrow' src={ArrowPrev} alt="Arrow Previous" />
      </button>
      <img className='image-carousel' src={listlogements[0].pictures[0]} alt="" />

      <button onClick={nextSlide} className='button-arrow next'>
        <img className='image-arrow' src={ArrowNext} alt="Arrow Next" />
      </button>
    </div>
  )
}
