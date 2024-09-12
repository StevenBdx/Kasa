import React from 'react'
import Slidershow from '../components/slidershow'
import { listlogements } from '../data/logement'
import { useNavigate, useParams } from 'react-router-dom'
import Collapse from '../components/collapse'
import '../assets/style/location.scss'

export default function Location() {
  const { logementId } = useParams()
  const navigate = useNavigate()
  const logementfiltered = listlogements.filter(logementItem => logementItem.id === logementId)

  if (logementfiltered.length === 0) {
    navigate('/')
  }

  let logement = logementfiltered[0];

  let equipementItems = logement.equipments.map((equipment) =>
    <li key={equipment}>{equipment}</li>
  )

  let pillTags = logement.tags.map((tag) =>
    <div key={tag} className='pill'>{tag}</div>
  )

  return (
    <>
      {logement && <Slidershow listImage={logement.pictures} />}
      <div className='title-logement'>
        {logement.title}
      </div>
      <div className='location-logement'>
        {logement.location}
      </div>
      <div className='pills-tags'>
        {pillTags}
      </div>
      <div className='collapse-logement'>
        <Collapse title='Description'>
          <div className='collapse-description'>
            {logement.description}
          </div>
        </Collapse>
        <Collapse title='Equipements'>
          <div className='collapse-equipements'>
            <ul>{equipementItems}</ul>
          </div>
        </Collapse>
      </div>
    </>
  )
}
