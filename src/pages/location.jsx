import React from 'react'
import { useParams } from 'react-router-dom';


export default function Location() {
    let { locationId } = useParams();
    
    return (
    
    <div>{locationId}</div>
  )
}
