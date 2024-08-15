import React, { useState } from 'react'
import { listlogements } from '../data/logement'
import ArrowNext from '../assets/images/arrow-next.png'
import ArrowPrev from '../assets/images/arrow-prev.png'
import '../assets/style/slidershow.scss'

export default function Slidershow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = listlogements[0].pictures.length

      const nextSlide = () => {
        return setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1)
      }

      const prevSlide = () => {
        return setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1)
      }
    
  return (
    <div className="carousel">
      <button onClick={prevSlide} className='button-arrow prev'>
        <img className='image-arrow' src={ArrowPrev} alt="Arrow Previous" />
      </button>
      <img key={listlogements.id} className='image-carousel' src={listlogements[0].pictures[currentIndex]} alt="" />

      <button onClick={nextSlide} className='button-arrow next'>
        <img className='image-arrow' src={ArrowNext} alt="Arrow Next" />
      </button>
    </div>
  )
}
