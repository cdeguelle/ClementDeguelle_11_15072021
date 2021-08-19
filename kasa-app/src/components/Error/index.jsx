import "../../utils/style/Error.css"

function Error() {
    const isMobile = window.matchMedia('(max-width: 600px)').matches

    return (
        <div className='error-wrapper'>
            <h1 className='error-title'>404</h1>
            {isMobile ? (
                <h2 className='error-subtitle'>Oups! La page que<br /> vous demandez n'existe pas.</h2>
            ) : (
                <h2 className='error-subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
            )}
            <a className='styled-link' href="/">Retourner sur la page d'acceuil</a>
        </div>
    )
}

export default Error
