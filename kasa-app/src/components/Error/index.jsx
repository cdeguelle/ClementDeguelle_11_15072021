import styled from "styled-components"
import colors from "../../utils/style/colors"
import { StyledLink } from "../../utils/style/Atoms"

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300;
    font-size: 18em;
    margin: 0;
    color: #FF6060;
`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.secondary};
    color: #FF6060;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubtitle>Oups ! Il semblerait que la page que vous cherchez n’existe pas</ErrorSubtitle>
            <StyledLink to="/" $isFullLink>Retourner sur la page d'acceuil</StyledLink>
        </ErrorWrapper>
    )
}

export default Error
