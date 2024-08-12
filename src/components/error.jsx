import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from "react-router-dom"
import '../assets/style/error.scss'

export default function ErrorUrl() {
    const error = useRouteError()
    
  return (
    <div className='body-error'>
    <div className='error'>
         404
    </div>
    <div className='message'>Oups! La page que vous demandez n'existe pas.</div>
    <Link to="/">
        <p className='message-return'>Retour à la page d'acceuil</p>
      </Link>
      </div>
  )
}
