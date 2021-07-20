import { useParams } from "react-router-dom"
import styled from "styled-components"
import logements from "../../utils/data"
import RightVector from "../../assets/Vector-right.png"
import LeftVector from "../../assets/Vector-left.png"

const LocationWrapper = styled.div`
    display: flex;
    justify-content: center;
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

function Location() {
    const { locationId } = useParams()

    for (let index = 0; index < logements.length; index++) {
        if (logements[index].id === locationId) {
            const carouselPictures = logements[index].pictures

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
                </LocationWrapper>
            )
        }
    }
}

export default Location
