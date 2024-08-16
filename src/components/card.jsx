import React from 'react'
import { listlogements } from '../data/logement'
import '../assets/style/cards.scss'
import { Link } from 'react-router-dom'

export default function Cards() {

  return (
    <ul>
      {listlogements.map((logement, id) => (
        <li key={id} className='card-container'>
          <Link to={`/location/${logement.id}`}>
          <img src={logement.cover} className='cover' alt="Image représentant le logement" />
          <span className='overlay-title'>
            {logement.title}
          </span>
          </Link>

        </li>


      ))}
    </ul>
  )
}
