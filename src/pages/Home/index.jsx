import HomeIllustration from "../../assets/Banner.png"
import Card1 from "../../components/Card1"
import logements from "../../utils/data"
import "../../utils/style/Home.css"

function Home() {
	const isMobile = window.matchMedia('(max-width: 600px)').matches
	
    return (
        <div className='home-wrapper'>
            <div className='home-container'>
				<div className='banner-container'>
					<img className='home-banner' src={HomeIllustration} alt='coast-landscape' />
					{isMobile ? (
						<p className='banner-text-content'>Chez vous, <br />partout et ailleurs</p>
					) : (
						<p className='banner-text-content'>Chez vous, partout et ailleurs</p>
					)}
				</div>
				<div className='card-container'>
				{logements.map((logement) => (
					<Card1
						key={logement.id}
						title={logement.title}
						picture={logement.cover}
						id={logement.id}
					/>
                ))}
				</div>
            </div>
        </div>
    )
}

export default Home
