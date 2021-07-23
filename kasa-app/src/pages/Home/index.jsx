import styled from "styled-components"
import HomeIllustration from "../../assets/Banner.png"
import Card from "../../components/Card"
import logements from "../../utils/data"
import colors from "../../utils/style/colors"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
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
	display: flex;
	justify-content: center;
	margin: 0 10%;
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
`

const CardContainer = styled.div`
	border-radius: 25px;
	background-color: ${colors.backgroundLight};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 20px 10%;
	padding: 0 20px;
`

function Home() {
	
    return (
        <HomeWrapper>
            <HomeContainer>
				<BannerContainer>
					<HomeBanner src={HomeIllustration} />
					<BannerTextContent>Chez vous, partout et ailleurs</BannerTextContent>
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
