import styled from "styled-components"
import AboutIllustration from "../../assets/About-banner.png"
import AboutSmartphoneIllustration from "../../assets/About-banner-smartphone.png"
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
    @media (max-width: 426px) {
		height: 220px;
		margin: 0;
		width: 90%;
        margin-bottom: 20px;
        object-fit: cover;
	}
`

const AboutTitle = styled.div`
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    font-size: 1.5em;
    margin-bottom: 30px;
    @media (max-width: 426px) {
        width: 80%;
        font-size: 1em;
    }
`

const ToogleButton = styled.img`
    cursor: pointer;
    width: 30px;
    height: 20px;
    @media (max-width: 426px) {
        height: 15px;
        width: 25px;
    }
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
    @media (max-width: 426px) {
        font-size: 0.8em;
        width: 80%;
    }
`

function About() {
    const isMobile = window.matchMedia('(max-width: 600px)').matches

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
            {isMobile ? (
                <AboutBanner src={AboutSmartphoneIllustration} />
            ) : (
                <AboutBanner src={AboutIllustration} />
            )}
            <AboutTitle id='fiability-title'>Fiabilité<ToogleButton id='fiability-button' src={DownVector} onClick={() => toogleMenu('fiability-menu', 'fiability-title', 'fiability-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='fiability-menu'>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </AboutText>
            <AboutTitle id='respect-title'>Respect<ToogleButton id='respect-button' src={DownVector} onClick={() => toogleMenu('respect-menu', 'respect-title', 'respect-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='respect-menu'>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </AboutText>
            <AboutTitle id='service-title'>Service<ToogleButton id='service-button' src={DownVector} onClick={() => toogleMenu('service-menu', 'service-title', 'service-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='service-menu'>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </AboutText>
            <AboutTitle id='responsability-title'>Responsabilité<ToogleButton id='responsability-button' src={DownVector} onClick={() => toogleMenu('responsability-menu', 'responsability-title', 'responsability-button')} alt='menu déroulant'/></AboutTitle>
            <AboutText id='responsability-menu'>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </AboutText>
        </AboutWrapper>
    )
}

export default About
