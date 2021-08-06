import { StyledLink } from '../../utils/style/Atoms'
import styled from "styled-components"
import kasaLogo from "../../assets/kasa-logo.png"
import colors from '../../utils/style/colors'
import { useState } from 'react'

const NavStyle = styled.nav`
    display: flex;
    & a {
        margin-left: 50px;
        color: ${colors.primary};
        @media (max-width: 426px) {
            margin-left: 5px;
            font-size: 1em;
        }
    }
`

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 10%;
    @media (max-width: 426px) {
        margin: 15px 5%;
    }
`

const KasaLogo = styled.img`
    padding: 10px;
    @media (max-width: 426px) {
        width: 150px;
        padding: 0;
    }
`

function Header() {
    const [isHomeCurrentPage, setIsHomeCurrentPage] = useState(true)
    const [isAboutCurrentPage, setIsAboutCurrentPage] = useState(false)

    return (
        <HeaderStyle>
            <KasaLogo src={kasaLogo} alt="kasa logo" />
            <NavStyle>
                {isHomeCurrentPage ? (<StyledLink to="/" $isFullLink onClick={() => {setIsHomeCurrentPage(true); setIsAboutCurrentPage(false)}}>Accueil</StyledLink>) : (<StyledLink to="/" onClick={() => {setIsHomeCurrentPage(true); setIsAboutCurrentPage(false)}}>Accueil</StyledLink>)}
                {isAboutCurrentPage ? (<StyledLink to="/about" $isFullLink onClick={() => {setIsAboutCurrentPage(true); setIsHomeCurrentPage(false)}}>A propos</StyledLink>) : (<StyledLink to="/about" onClick={() => {setIsAboutCurrentPage(true); setIsHomeCurrentPage(false)}}>A propos</StyledLink>)}
            </NavStyle>
        </HeaderStyle>
    )
}

export default Header
