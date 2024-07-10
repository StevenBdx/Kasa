import React from 'react'
import logoWhite from '../assets/images/logo-white.png'
import '../assets/style/footer.scss'

export default function Footer() {
  return (
    <footer>
        <div className='copyright'>
            <img src={logoWhite} alt="logo Kasa" />
                <div>
        © 2020 Kasa. All rights reserved
                </div>
        </div>
    </footer>
  )
}
