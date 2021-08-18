import styled from "styled-components"
import HomeIllustration from "../../assets/Banner.png"
import Card from "../../components/Card"
import logements from "../../utils/data"
import colors from "../../utils/style/colors"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
	@media (max-width: 426px) {
		align-items: center;
	}
`

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
	@media (max-width: 426px) {
		align-items: center;
	}
`

const BannerContainer = styled.div`
	position: relative;
	text-align: center;
	border-radius: 25px;
	background-color: #000000;
	display: flex;
	justify-content: center;
	margin: 0 10%;
	@media (max-width: 426px) {
		height: 110px;
		margin: 0;
		width: 90%;
	}
`

const HomeBanner = styled.img`
	border-radius: 25px;
	display: flex;
	justify-content: center;
	opacity: 0.7;
	width: 100%;
`
const BannerTextContent = styled.p`
	color: ${colors.secondary};
	font-size: 3em;
	font-weight: 100;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0;
	width: 100%;
	@media (max-width: 426px) {
		font-size: 1.5em;
		text-align: left;
		margin-left: 15px;
	}
`

const CardContainer = styled.div`
	border-radius: 25px;
	background-color: ${colors.backgroundLight};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 20px 10%;
	padding: 0 20px;
	@media (max-width: 426px) {
		flex-direction: column;
		background-color: white;
		padding: 0;
		margin: 20px 0;
		width: 90%;
	}
`

function Home() {
	const isMobile = window.matchMedia('(max-width: 600px)').matches
	
    return (
        <HomeWrapper>
            <HomeContainer>
				<BannerContainer>
					<HomeBanner src={HomeIllustration} />
					{isMobile ? (
						<BannerTextContent>Chez vous, <br />partout et ailleurs</BannerTextContent>
					) : (
						<BannerTextContent>Chez vous, partout et ailleurs</BannerTextContent>
					)}
				</BannerContainer>
				<CardContainer>
				{logements.map((logement) => (
					<Card
						key={logement.id}
						title={logement.title}
						picture={logement.cover}
						id={logement.id}
					/>
                ))}
				</CardContainer>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home
