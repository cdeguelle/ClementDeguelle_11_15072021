import React from 'react'
import "../../utils/style/Card.css"

class Card1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { title, id, picture } = this.props
        return (
            <a className='styled-link' href={`/location/${id}`}>
                <div className='card-wrapper'>
                    <img src={picture} className='card-image' alt={`location${id}`} />
                    <div className='card-title'>{title}</div>
                </div>
            </a>
        )
    }
}

export default Card1