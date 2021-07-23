import styled from "styled-components"
import AboutIllustration from "../../assets/About-banner.png"
import DownVector from "../../assets/Vector-down.png"
import colors from "../../utils/style/colors"

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const AboutBanner = styled.img`
	border-radius: 25px;
	display: flex;
	justify-content: center;
    width: 80%;
    margin-bottom: 30px;
`

const AboutTitle = styled.div`
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 30px;
`

const ToogleButton = styled.img`
    cursor: pointer;
`

const AboutText = styled.div`
    background-color: #F6F6F6;
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: ${colors.primary};
    display: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    width: 60%;
    font-size: 1.5em;
`

function About() {

    function toogleMenu (menuId, titleId, buttonId) {
        const menu = document.getElementById(menuId)
        const title = document.getElementById(titleId)
        const button = document.getElementById(buttonId)
        if (!menu.getAttribute('style') || menu.getAttribute('style') === 'display: none;') {
            menu.style.display = 'flex'
            title.style.borderBottomLeftRadius = 0
            title.style.borderBottomRightRadius = 0
            title.style.marginBottom = 0
            button.style.transform = 'rotate(180deg)'
        } else {
            menu.style.display = 'none'
            title.style.borderRadius = '10px'
            title.style.marginBottom = '30px'
            button.style.transform = 'rotate(0)'
        }
    }
	
    return (
        <AboutWrapper>
			<AboutBanner src={AboutIllustration} />
            <AboutTitle id='fiability-title'>Fiabilité<ToogleButton id='fiability-button' src={DownVector} onClick={() => toogleMenu('fiability-menu', 'fiability-title', 'fiability-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='fiability-menu'></AboutText>
            <AboutTitle id='respect-title'>Respect<ToogleButton id='respect-button' src={DownVector} onClick={() => toogleMenu('respect-menu', 'respect-title', 'respect-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='respect-menu'>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </AboutText>
            <AboutTitle id='service-title'>Service<ToogleButton id='service-button' src={DownVector} onClick={() => toogleMenu('service-menu', 'service-title', 'service-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='service-menu'></AboutText>
            <AboutTitle id='responsability-title'>Responsabilité<ToogleButton id='responsability-button' src={DownVector} onClick={() => toogleMenu('responsability-menu', 'responsability-title', 'responsability-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='responsability-menu'></AboutText>
        </AboutWrapper>
    )
}

export default About
