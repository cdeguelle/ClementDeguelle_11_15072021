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
    color: ${colors.primary};
    @media (max-width: 426px) {
		font-size: 6em;
        margin-top: 180px;
	}
`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.primary};
    @media (max-width: 426px) {
		text-align: center;
        margin-bottom: 139px;
	}
`

function Error() {
    const isMobile = window.matchMedia('(max-width: 600px)').matches

    return (
        <ErrorWrapper>
            <ErrorTitle>404</ErrorTitle>
            {isMobile ? (
                <ErrorSubtitle>Oups! La page que<br /> vous demandez n'existe pas.</ErrorSubtitle>
            ) : (
                <ErrorSubtitle>Oups! La page que vous demandez n'existe pas.</ErrorSubtitle>
            )}
            <StyledLink to="/" $isFullLink>Retourner sur la page d'acceuil</StyledLink>
        </ErrorWrapper>
    )
}

export default Error
