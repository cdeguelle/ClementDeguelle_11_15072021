import styled from "styled-components"
import Carousel from "../../components/Carousel"

const LocationWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const BannerCarousel = styled.img`
    display: flex;
    justify-content: center;
`

function Location() {

    return (
        <LocationWrapper>
            <BannerCarousel>
                <Carousel />
            </BannerCarousel>
        </LocationWrapper>
    )
}

export default Location
