import styled from "styled-components"
import logements from "../../utils/data"

const CarouselWrapper = styled.div`
    display: flex;
	justify-content: center;
	margin: 0 10%;
    border-radius: 25px;
`

const CarouselPictures = styled.img`
    border-radius: 25px;
	display: flex;
	justify-content: center;
	width: 100%;
`

const locationID = window.location.href.searchParams.get('locationID')

function filterById (location) {
    if (location.id === locationID) {
        return true
    } else {
        return false
    }
}

const logementPictures = logements.filter(filterById)
console.log(window.location.href)

function Carousel() {

    return (
        <CarouselWrapper>
            {logementPictures.map((picture) => (
				<CarouselPictures src={picture} />
            ))}
        </CarouselWrapper>
    )
}

export default Carousel