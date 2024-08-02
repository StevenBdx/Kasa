import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function ErrorUrl() {
    const error = useRouteError()
    
  return (
    <>
    <div>
         '404'
    </div>
    <div>'Oups! La page que vous demandez n'existe pas.'</div>
    <Link to="/">
        <p>Retour à la page d'acceuil</p>
      </Link>
    </>
  )
}
