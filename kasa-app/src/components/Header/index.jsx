import { StyledLink } from '../../utils/style/Atoms'
import styled from "styled-components"
import shinyLogo from "../../assets/shiny-logo.png"

const NavStyle = styled.nav`
    display: flex;
`

const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

function Header() {
    return (
        <HeaderStyle>
            <img src={shinyLogo} alt="shiny logo" />
            <NavStyle>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
            </NavStyle>
        </HeaderStyle>
        
    )
}

export default Header
