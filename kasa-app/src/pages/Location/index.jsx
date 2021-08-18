import { useParams } from "react-router-dom"
import styled from "styled-components"
import logements from "../../utils/data"
import RightVector from "../../assets/Vector-right.png"
import LeftVector from "../../assets/Vector-left.png"
import EmptyStar from "../../assets/Empty-star.png"
import FreeStar from "../../assets/Free-star.png"
import colors from "../../utils/style/colors"
import Collapse from "../../components/Collapse"
import "../../utils/style/Location.css"    

const LocationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 200px;
`

const BannerCarousel = styled.div`
    margin-top: 10px;
    width: 80%;
    overflow: hidden;
    @media (max-width: 426px) {
		width: 90%;
	}
`

const CarouselWrapper = styled.figure`
    display: flex;
    margin: 0;
`

const CarouselItems = styled.div`
    position: relative;
`

const CarouselImg = styled.img`
    border-radius: 25px;
	height: 400px;
    object-fit: cover;
    width: 100%;
`

const RightArrow = styled.img`
    position: absolute;
    top: 40%;
    right: 20px;
    cursor: pointer;
    @media (max-width: 426px) {
        width: 12px;
        height: 20px;
        top: 50%;
    }
`

const LeftArrow = styled.img`
    position: absolute;
    top: 40%;
    left: 20px;
    cursor: pointer;
    @media (max-width: 426px) {
        width: 12px;
        height: 20px;
        top: 50%;
    }
`

const InfosWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    @media (max-width: 426px) {
		flex-direction: column;
        width: 90%;
	}
`

const InfosLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const InfosRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    @media (max-width: 426px) {
		flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
	}
`
const Title = styled.h2`
    color: ${colors.primary};
    font-size: 2em;
    margin: 25px 0 10px;
`

const Position = styled.h3`
    color: ${colors.primary};
    margin: 0;
    font-size: 1em;
    font-weight: 500;
`

const Tags = styled.div`
    display: flex;
    margin-top: 20px;
    @media (max-width: 426px) {
        flex-wrap: wrap;
    }
`

const Tag = styled.div`
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 5px 20px;
    margin-right: 15px;
    @media (max-width: 426px) {
        margin-bottom: 15px;
    }
`

const Host = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
    @media (max-width: 426px) {
		margin: 0;
	}
`

const HostName = styled.div`
    color: ${colors.primary};
    width: 80px;
`

const HostPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 15px;
`

const Rating = styled.div`
    display: flex;
    justify-content: space-between;
`

const Star = styled.img`
    margin-left: 10px;
    @media (max-width: 426px) {
		width: 15px;
        height: 15px;
	}
`

const LocationBody = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 30px;
    @media (max-width: 426px) {
		width: 90%;
        flex-direction: column;
	}
`

const EquipmentsListItems = styled.li`
    list-style: none;
`

function Location() {
    const { locationId } = useParams()

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
                <LocationWrapper key={`${logements[index].id}`}>
                    <BannerCarousel>
                        <CarouselWrapper id={'Carousel-Wrapper'} style={widthCarousel}>
                            {carouselPictures.map((picture, index) => (
                                <CarouselItems key={`caroussel-${index}`} style={widthImage}>
                                    {carouselPictures.length === 1 ? ('') : index === 0 ? (<LeftArrow key={`left-arrow-${index}`}  src={LeftVector} onClick={() => nextCarousel(carouselPictures.length-1)} />) : (<LeftArrow key={`left-arrow-${index}`} src={LeftVector} onClick={() => prevCarousel(1)} />)}
                                    {carouselPictures.length === 1 ? ('') : index === carouselPictures.length-1 ? (<RightArrow key={`right-arrow-${index}`} src={RightVector} onClick={() => prevCarousel(carouselPictures.length-1)} />) : (<RightArrow key={`right-arrow-${index}`} src={RightVector} onClick={() => nextCarousel(1)} />)}
                                    <CarouselImg key={`caroussel-picture-${index}`} src={picture} />
                                </CarouselItems>
                            ))}
                        </CarouselWrapper>
                    </BannerCarousel>
                    <InfosWrapper>
                        <InfosLeft>
                            <Title>{logements[index].title}</Title>
                            <Position>{logements[index].location}</Position>
                            <Tags>{locationTags.map((tag) => (
                                <Tag key={`tag-${tag}`}>{tag}</Tag>
                            ))}</Tags>
                        </InfosLeft>
                        <InfosRight>
                            <Host>
                                <HostName>{locationHost.name}</HostName>
                                <HostPicture src={locationHost.picture}></HostPicture>
                            </Host>
                            <Rating>
                                {logements[index].rating >= 1 ? <Star src={EmptyStar}></Star> : <Star src={FreeStar}></Star>}
                                {logements[index].rating >= 2 ? <Star src={EmptyStar}></Star> : <Star src={FreeStar}></Star>}
                                {logements[index].rating >= 3 ? <Star src={EmptyStar}></Star> : <Star src={FreeStar}></Star>}
                                {logements[index].rating >= 4 ? <Star src={EmptyStar}></Star> : <Star src={FreeStar}></Star>}
                                {logements[index].rating >= 5 ? <Star src={EmptyStar}></Star> : <Star src={FreeStar}></Star>}
                            </Rating>
                        </InfosRight>
                    </InfosWrapper>
                    <LocationBody>
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
                                <EquipmentsListItems key={`equipment-${equipment}`}>{equipment}</EquipmentsListItems>
                            ))}
                            menuId='equipments-menu'
                            titleId='equipments-title'
                            buttonId='equipments-button'
                            className='equipments-wrapper'
                            contentClassName='equipments-collapse-content'
                            titleClassName='location-collapse-title'
                        />
                    </LocationBody>
                </LocationWrapper>
            )
        }
    }
}

export default Location
