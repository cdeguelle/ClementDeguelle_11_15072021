import PropTypes from "prop-types"
import DefaultPicture from "../../assets/profile.png"
import styled from "styled-components"
import { StyledLink } from '../../utils/style/Atoms'

const CardImage = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 75%;
    object-fit: cover;
`

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 25px;
    text-align: center;
`

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #FF6060 0%, rgba(138, 130, 130, 0.418) 100%);
    border-radius: 10px;
    width: 340px;
    height: 340px;
    margin: 15px 0;
`

function Card({ title, picture, id }) {
    return (
        <StyledLink to={`/location/${id}`}>
            <CardWrapper>
                <CardImage src={picture} alt={`location${id}`} />
                <CardTitle>{title}</CardTitle>
            </CardWrapper>
        </StyledLink>
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
