import { NavLink } from "react-router-dom";
import logoRed from '../assets/images/logo-red.png' 
import '../assets/style/header.scss'

function Header() {
    return (
        <header>
        <nav className="navigation">
            <img src={logoRed} alt="Logo Kasa" />
            <div className="links">
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/about'>A propos</NavLink>
            </div>
        </nav>
        </header>
    )
}

export default Header;