import PropTypes from "prop-types"
import DefaultPicture from "../../assets/profile.png"
import "../../utils/style/Card.css"

function Card({ title, picture, id }) {
    return (
        <a className='styled-link' href={`/location/${id}`}>
            <div className='card-wrapper'>
                <img src={picture} className='card-image' alt={`location${id}`} />
                <div className='card-title'>{title}</div>
            </div>
        </a>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: "",
    label: "",
    picture: DefaultPicture,
}

export default Card
