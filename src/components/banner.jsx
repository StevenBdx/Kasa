import React from 'react'
import '../assets/style/banner.scss'

export default function Banner({img, titre}) {
  return (
    <div className='banner-container'>
      {titre && <div className='title-banner'>{titre}</div>}
      <img src={img} className='cover-banner' alt="Bannière représentant un paysage" />
    </div> 
  )
}

