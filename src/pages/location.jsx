import React from 'react'
import Slidershow from '../components/slidershow'
import { listlogements } from '../data/logement'
import { useNavigate, useParams } from 'react-router-dom'


export default function Location() {
  const {logementId} = useParams()
  const navigate = useNavigate()
  const logementfiltered = listlogements.filter(logementItem => logementItem.id === logementId)
  
  if (logementfiltered.length === 0) {
    navigate('/');
  }

  let logement = logementfiltered[0];

  return (
    <>
      {logement && <Slidershow listImage={logement.pictures} />}
    </>
  )
}
