import React from 'react'
import kasaLogo from "../../assets/kasa-logo.png"
import "../../utils/style/Header.css"

class Header1 extends React.Component {
    constructor(props) {
        super(props)
        this.setIsHomeCurrentPage = this.setIsHomeCurrentPage.bind(this)
        this.setIsAboutCurrentPage = this.setIsAboutCurrentPage.bind(this)
        this.state = {
            isHomeCurrentPage: true,
            isAboutCurrentPage: false
        }
    }

    setIsHomeCurrentPage() {
        this.setState({ isHomeCurrentPage: !this.state.isHomeCurrentPage })
    }

    setIsAboutCurrentPage() {
        this.setState({ isAboutCurrentPage: !this.state.isAboutCurrentPage })
    }

    render() {
        const { isHomeCurrentPage } = this.state
        const { isAboutCurrentPage } = this.state
        
        const style = {
            textDecoration: 'underline'
        }
        
        return (
            <div className='header-style'>
                <img className='kasa-logo' src={kasaLogo} alt="kasa logo" />
                <nav className='nav-style'>
                    {isHomeCurrentPage ? (<a className='styled-link' href="/" style={style} onClick={() => {this.setIsHomeCurrentPage(true); this.setIsAboutCurrentPage(false)}}>Accueil</a>) : (<a className='styled-link' href="/" onClick={() => {this.setIsHomeCurrentPage(true); this.setIsAboutCurrentPage(false)}}>Accueil</a>)}
                    {isAboutCurrentPage ? (<a className='styled-link' href="/about" style={style} onClick={() => {this.setIsAboutCurrentPage(true); this.setIsHomeCurrentPage(false)}}>A propos</a>) : (<a className='styled-link' href="/about" onClick={() => {this.setIsAboutCurrentPage(true); this.setIsHomeCurrentPage(false)}}>A propos</a>)}
                </nav>
            </div>
        )
    }
}

export default Header1