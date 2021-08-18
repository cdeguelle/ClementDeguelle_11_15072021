import styled from "styled-components"
import kasaLogoWhite from "../../assets/kasa-logo-white.png"
import colors from "../../utils/style/colors"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    padding: 30px 0;
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
`

const KasaLogo = styled.img`
    padding: 10px;
    display: flex;
    align-items: center;
`

const Legacy = styled.p`
    color: ${colors.secondary};
    margin-top: 20px;
`

function Footer() {
    return (
        <FooterContainer>
            <KasaLogo src={kasaLogoWhite} alt="kasa logo" />
            <Legacy>© 2020 Kasa. All rights reserved</Legacy>
        </FooterContainer>
    )
}

export default Footer
