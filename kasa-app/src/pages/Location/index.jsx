import { useParams } from "react-router-dom"
import styled from "styled-components"
import logements from "../../utils/data"
import RightVector from "../../assets/Vector-right.png"
import LeftVector from "../../assets/Vector-left.png"
import EmptyStar from "../../assets/Empty-star.png"
import FreeStar from "../../assets/Free-star.png"
import UpVector from "../../assets/Vector-up.png"
import colors from "../../utils/style/colors"

const LocationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`

const LeftArrow = styled.img`
    position: absolute;
    top: 40%;
    left: 20px;
    cursor: pointer;
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
`

const Tag = styled.div`
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 5px 20px;
    margin-right: 15px;
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
    @media (max-width: 426px) {
		width: 90%;
        flex-direction: column;
	}
`

const DescriptionWrapper = styled.div`
    width: 50%;
    @media (max-width: 426px) {
		margin-bottom: 20px;
        width: 100%;
	}
`

const DropdownTitle = styled.div`
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const ToogleButton = styled.img`
    cursor: pointer;
`

const DescriptionText = styled.div`
    background-color: ${colors.backgroundLight};
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: ${colors.primary};
    height: 200px;
    display: none;
    align-items: center;
`

const EquipmentsWrapper = styled.div`
    width: 50%;
    margin-left: 75px;
    @media (max-width: 426px) {
		margin-left: 0;
        width: 100%;
	}
`

const EquipmentsList = styled.ul`
    background-color: ${colors.backgroundLight};
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: ${colors.primary};
    margin: 0;
    height: 200px;
    display: none;
    flex-direction: column;
    justify-content: center;
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
                    button.style.transform = 'rotate(0)'
                }
            }

            return (
                <LocationWrapper>
                    <BannerCarousel>
                        <CarouselWrapper id={'Carousel-Wrapper'} style={widthCarousel}>
                            {carouselPictures.map((picture, index) => (
                                <CarouselItems style={widthImage}>
                                    {index === 0 ? (<LeftArrow src={LeftVector} onClick={() => nextCarousel(carouselPictures.length-1)} />) : (<LeftArrow src={LeftVector} onClick={() => prevCarousel(1)} />)}
                                    {index === carouselPictures.length-1 ? (<RightArrow src={RightVector} onClick={() => prevCarousel(carouselPictures.length-1)} />) : (<RightArrow src={RightVector} onClick={() => nextCarousel(1)} />)}
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
                        <DescriptionWrapper>
                            <DropdownTitle id='description-title'>Description<ToogleButton id='description-button' src={UpVector} onClick={() => toogleMenu('description-menu', 'description-title', 'description-button')} alt='menu déroulant'/></DropdownTitle>
                            <DescriptionText id='description-menu'>{logements[index].description}</DescriptionText>
                        </DescriptionWrapper>
                        <EquipmentsWrapper>
                            <DropdownTitle id='equipments-title'>Equipements<ToogleButton id='equipments-button' src={UpVector} onClick={() => toogleMenu('equipments-list', 'equipments-title', 'equipments-button')} alt='menu déroulant'/></DropdownTitle>
                            <EquipmentsList id='equipments-list'>
                                {locationEquipments.map((equipment) => (
                                    <EquipmentsListItems>{equipment}</EquipmentsListItems>
                                ))}
                            </EquipmentsList>
                        </EquipmentsWrapper>
                    </LocationBody>
                </LocationWrapper>
            )
        }
    }
}

export default Location
