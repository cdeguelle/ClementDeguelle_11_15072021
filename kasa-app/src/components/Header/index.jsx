import kasaLogo from "../../assets/kasa-logo.png"
import { useState } from 'react'
import "../../utils/style/Header.css"

function Header() {
    const [isHomeCurrentPage, setIsHomeCurrentPage] = useState(true)
    const [isAboutCurrentPage, setIsAboutCurrentPage] = useState(false)

    const style = {
        textDecoration: 'underline'
    }

    return (
        <div className='header-style'>
            <img className='kasa-logo' src={kasaLogo} alt="kasa logo" />
            <nav className='nav-style'>
                {isHomeCurrentPage ? (<a className='styled-link' href="/" style={style} onClick={() => {setIsHomeCurrentPage(true); setIsAboutCurrentPage(false)}}>Accueil</a>) : (<a className='styled-link' href="/" onClick={() => {setIsHomeCurrentPage(true); setIsAboutCurrentPage(false)}}>Accueil</a>)}
                {isAboutCurrentPage ? (<a className='styled-link' href="/about" style={style} onClick={() => {setIsAboutCurrentPage(true); setIsHomeCurrentPage(false)}}>A propos</a>) : (<a className='styled-link' href="/about" onClick={() => {setIsAboutCurrentPage(true); setIsHomeCurrentPage(false)}}>A propos</a>)}
            </nav>
        </div>
    )
}

export default Header
