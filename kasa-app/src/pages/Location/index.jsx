import { useParams } from "react-router-dom"
import styled from "styled-components"
import logements from "../../utils/data"
import RightVector from "../../assets/Vector-right.png"
import LeftVector from "../../assets/Vector-left.png"
import EmptyStar from "../../assets/Empty-star.png"
import FreeStar from "../../assets/Free-star.png"
import UpVector from "../../assets/Vector-up.png"

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
`

const InfosLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const InfosRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`
const Title = styled.h2`
    color: #FF6060;
    font-size: 2em;
    margin: 25px 0 10px;
`

const Position = styled.h3`
    color: #FF6060;
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
    background-color: #FF6060;
    color: white;
    padding: 5px 20px;
    margin-right: 15px;
`

const Host = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
`

const HostName = styled.div`
    color: #FF6060;
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
`

const LocationBody = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 25px;
`

const DescriptionWrapper = styled.div`
    width: 50%;
`

const DescriptionTitle = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #FF6060;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const ToogleButton = styled.img`
    cursor: pointer;
`

const DescriptionText = styled.div`
    background-color: #F6F6F6;
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #FF6060;
    height: 200px;
    display: flex;
    align-items: center;
`

const EquipmentsWrapper = styled.div`
    width: 50%;
    margin-left: 75px;
`

const EquipmentsTitle = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #FF6060;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const EquipmentsList = styled.ul`
    background-color: #F6F6F6;
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #FF6060;
    margin: 0;
    height: 200px;
    display: flex;
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

            function nextCarousel () {
                const car = document.getElementById('Carousel-Wrapper')
                const translateX = -100 / carouselPictures.length
                car.style.transform += 'translateX(' + translateX + '%)'
            }

            function prevCarousel () {
                const car = document.getElementById('Carousel-Wrapper')
                const translateX = 100 / carouselPictures.length
                car.style.transform += 'translateX(' + translateX + '%)'
            }

            function toogleMenu (menuId, titleId) {
                const menu = document.getElementById(menuId)
                const title = document.getElementById(titleId)
                if (menu.getAttribute('style') === 'display: none;') {
                    menu.style.display = 'flex'
                    title.style.borderBottomLeftRadius = 0
                    title.style.borderBottomRightRadius = 0
                } else {
                    menu.style.display = 'none'
                    title.style.borderBottomLeftRadius = '10px'
                    title.style.borderBottomRightRadius = '10px'
                }
                
            }

            return (
                <LocationWrapper>
                    <BannerCarousel>
                        <CarouselWrapper id={'Carousel-Wrapper'} style={widthCarousel}>
                            {carouselPictures.map((picture, index) => (
                                <CarouselItems style={widthImage}>
                                    {index === 0 ? ('') : (<LeftArrow src={LeftVector} onClick={() => prevCarousel()} />)}
                                    {index === carouselPictures.length-1 ? ('') : (<RightArrow src={RightVector} onClick={() => nextCarousel()} />)}
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
                            <DescriptionTitle id='description-title'>Description<ToogleButton src={UpVector} onClick={() => toogleMenu('description-menu', 'description-title')} alt='menu déroulant'/></DescriptionTitle>
                            <DescriptionText id='description-menu'>{logements[index].description}</DescriptionText>
                        </DescriptionWrapper>
                        <EquipmentsWrapper>
                            <EquipmentsTitle id='equipments-title'>Equipements<ToogleButton src={UpVector} onClick={() => toogleMenu('equipments-list', 'equipments-title')} alt='menu déroulant'/></EquipmentsTitle>
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
