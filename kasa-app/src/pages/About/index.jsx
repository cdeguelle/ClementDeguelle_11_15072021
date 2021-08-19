import AboutIllustration from "../../assets/About-banner.png"
import AboutSmartphoneIllustration from "../../assets/About-banner-smartphone.png"
import Collapse from "../../components/Collapse"
import "../../utils/style/About.css"

function About() {
    const isMobile = window.matchMedia('(max-width: 600px)').matches
	
    return (
        <div className='about-wrapper'>
            {isMobile ? (
                <img className='about-banner' src={AboutSmartphoneIllustration} alt='mountain-landscape' />
            ) : (
                <img className='about-banner' src={AboutIllustration} alt='mountain-landscape' />
            )}
            <Collapse
                title='Fiabilité'
                content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
                menuId='fiability-menu'
                titleId='fiability-title'
                buttonId='fiability-button'
                className='collapse'
                contentClassName='collapse-content'
                titleClassName='collapse-title'
            />
            <Collapse
                title='Respect'
                content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                menuId='respect-menu'
                titleId='respect-title'
                buttonId='respect-button'
                className='collapse'
                contentClassName='collapse-content'
                titleClassName='collapse-title'
            />
            <Collapse
                title='Service'
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                menuId='service-menu'
                titleId='service-title'
                buttonId='service-button'
                className='collapse'
                contentClassName='collapse-content'
                titleClassName='collapse-title'
            />
            <Collapse
                title='Responsabilité'
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                menuId='responsability-menu'
                titleId='responsability-title'
                buttonId='responsability-button'
                className='collapse'
                contentClassName='collapse-content'
                titleClassName='collapse-title'
            />
        </div>
    )
}

export default About
