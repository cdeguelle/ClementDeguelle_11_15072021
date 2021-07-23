import { StyledLink } from '../../utils/style/Atoms'
import styled from "styled-components"
import kasaLogo from "../../assets/kasa-logo.png"
import colors from '../../utils/style/colors'

const NavStyle = styled.nav`
    display: flex;
    & a {
        margin-left: 50px;
        color: ${colors.primary};
    }
`

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 10%;
`

const KasaLogo = styled.img`
    padding: 10px;
`

function Header() {
    return (
        <HeaderStyle>
            <KasaLogo src={kasaLogo} alt="kasa logo" />
            <NavStyle>
                <StyledLink to="/" $isFullLink>Accueil</StyledLink>
                <StyledLink to="/about">A propos</StyledLink>
            </NavStyle>
        </HeaderStyle>
    )
}

export default Header
