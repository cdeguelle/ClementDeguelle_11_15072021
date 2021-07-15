import styled from "styled-components"
import HomeIllustration from "../../assets/Banner.png"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const BannerContainer = styled.div`
	position: relative;
	text-align: center;
	border-radius: 25px;
	background-color: #000000;
`

const HomeBanner = styled.img`
	border-radius: 25px;
	display: flex;
	align-items: center;
	opacity: 0.7;
`
const BannerTextContent = styled.p`
	color: white;
	font-size: 3em;
	font-weight: 100;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0;
	width: 100%;
`

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
				<BannerContainer>
					<HomeBanner src={HomeIllustration} />
					<BannerTextContent>Chez vous, partout et ailleurs</BannerTextContent>
				</BannerContainer>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home
