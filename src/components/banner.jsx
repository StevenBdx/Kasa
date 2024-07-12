import React from 'react'

export default function Banner({img, titre}) {
  return (
    <div>
      {titre && <h1>{titre}</h1>}
      <img src={img} alt="" />
    </div> 
  )
}

