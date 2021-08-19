import { useParams } from "react-router-dom"
import logements from "../../utils/data"
import RightVector from "../../assets/Vector-right.png"
import LeftVector from "../../assets/Vector-left.png"
import EmptyStar from "../../assets/Empty-star.png"
import FreeStar from "../../assets/Free-star.png"
import Collapse from "../../components/Collapse"
import "../../utils/style/Location.css"    
import Error from "../../components/Error"

function Location() {
    const { locationId } = useParams()
    const ids = []
    logements.map((logement) => (
        ids.push(logement.id)
    ))

    for (let index = 0; index < logements.length; index++) {
        if (logements[index].id === locationId) {
            const carouselPictures = logements[index].pictures
            const locationTags = logements[index].tags
            const locationHost = logements[index].host
            const locationEquipments = logements[index].equipments

            const widthCarousel = {
                width: carouselPictures.length*100 + '%'
            }
            const widthImage = {
                width: (100/carouselPictures.length) + '%'
            }

            function nextCarousel (x) {
                const car = document.getElementById('Carousel-Wrapper')
                const translateX = -100 / carouselPictures.length
                car.style.transform += 'translateX(' + x*translateX + '%)'
            }

            function prevCarousel (x) {
                const car = document.getElementById('Carousel-Wrapper')
                const translateX = 100 / carouselPictures.length
                car.style.transform += 'translateX(' + x*translateX + '%)'
            }

            return (
                <div className='location-wrapper' key={`${logements[index].id}`}>
                    <div className='banner-carousel'>
                        <figure className='carousel-wrapper' id={'Carousel-Wrapper'} style={widthCarousel}>
                            {carouselPictures.map((picture, index) => (
                                <div className='carousel-items' key={`caroussel-${index}`} style={widthImage}>
                                    {carouselPictures.length === 1 ? ('') : index === 0 ? (<img className='left-arrow' key={`left-arrow-${index}`} alt='previous' src={LeftVector} onClick={() => nextCarousel(carouselPictures.length-1)} />) : (<img className='left-arrow' alt='previous' key={`left-arrow-${index}`} src={LeftVector} onClick={() => prevCarousel(1)} />)}
                                    {carouselPictures.length === 1 ? ('') : index === carouselPictures.length-1 ? (<img className='right-arrow' key={`right-arrow-${index}`} alt='next' src={RightVector} onClick={() => prevCarousel(carouselPictures.length-1)} />) : (<img className='right-arrow' alt='next' key={`right-arrow-${index}`} src={RightVector} onClick={() => nextCarousel(1)} />)}
                                    <img className='carousel-img' alt={`carousel ${index}`} key={`caroussel-picture-${index}`} src={picture} />
                                </div>
                            ))}
                        </figure>
                    </div>
                    <div className='infos-wrapper'>
                        <div className='infos-left'>
                            <h2 className='location-title'>{logements[index].title}</h2>
                            <h3 className='location-position'>{logements[index].location}</h3>
                            <div className='location-tags'>{locationTags.map((tag) => (
                                <div className='tag' key={`tag-${tag}`}>{tag}</div>
                            ))}</div>
                        </div>
                        <div className='infos-right'>
                            <div className='location-host'>
                                <div className='location-host-name'>{locationHost.name}</div>
                                <img className='location-host-picture' alt={`profile of ${locationHost.name}`} src={locationHost.picture} />
                            </div>
                            <div className='location-rating'>
                                {logements[index].rating >= 1 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {logements[index].rating >= 2 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {logements[index].rating >= 3 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {logements[index].rating >= 4 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {logements[index].rating >= 5 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                            </div>
                        </div>
                    </div>
                    <div className='location-body'>
                        <Collapse
                            title='Description'
                            content={logements[index].description}
                            menuId='description-menu'
                            titleId='description-title'
                            buttonId='description-button'
                            className='description-wrapper'
                            contentClassName='description-collapse-content'
                            titleClassName='location-collapse-title'
                        />
                        <Collapse
                            title='Equipements'
                            content={locationEquipments.map((equipment) => (
                                <li className='equipments-list-items' key={`equipment-${equipment}`}>{equipment}</li>
                            ))}
                            menuId='equipments-menu'
                            titleId='equipments-title'
                            buttonId='equipments-button'
                            className='equipments-wrapper'
                            contentClassName='equipments-collapse-content'
                            titleClassName='location-collapse-title'
                        />
                    </div>
                </div>
            )
        }
        if (!ids.includes(locationId)) {
            return (<Error />)
        }
    }
}

export default Location
