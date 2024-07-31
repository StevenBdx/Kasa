import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorUrl() {
    const error = useRouteError()
    
  return (
    <div>
         'Erreur 404'
    </div>
  )
}
