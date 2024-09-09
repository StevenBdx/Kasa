import React from 'react'
import Slidershow from '../components/slidershow'
import { listlogements } from '../data/logement'
import { useNavigate, useParams } from 'react-router-dom'
import Collapse from '../components/collapse'

export default function Location() {
  const {logementId} = useParams()
  const navigate = useNavigate()
  const logementfiltered = listlogements.filter(logementItem => logementItem.id === logementId)
  
  if (logementfiltered.length === 0) {
    navigate('/')
  }

  let logement = logementfiltered[0];

  return (
    <>
      {logement && <Slidershow listImage={logement.pictures} />}
      <div className='collapse-logement'>
      <Collapse title='Description'/>
      <Collapse title='Equipements'/>
      </div>
    </>
  )
}
