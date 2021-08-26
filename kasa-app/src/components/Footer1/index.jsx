import React from 'react'
import kasaLogoWhite from "../../assets/kasa-logo-white.png"
import "../../utils/style/Footer.css"

class Footer1 extends React.Component {
    render() {
        return (
            <footer className='footer-container'>
                <img className='kasa-logo' src={kasaLogoWhite} alt="kasa logo" />
                <p className='legacy'>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer1