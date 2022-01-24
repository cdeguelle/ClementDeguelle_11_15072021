import React from 'react'
import logements from "../../utils/data"
import Collapse from "../../components/Collapse"
import RightVector from "../../assets/Vector-right.png"
import LeftVector from "../../assets/Vector-left.png"
import EmptyStar from "../../assets/Empty-star.png"
import FreeStar from "../../assets/Free-star.png"
import Error1 from "../../components/Error1"
import "../../utils/style/Location.css"

class Location1 extends React.Component {
    constructor(props) {
        super(props)
        let ids = []
        let carouselPictures = null
        let locationTags = null
        let locationHost = null
        let locationEquipments = null
        let logementId = null
        let logement = null
        let styleCarousel = null
        let widthImage = null
        let locationId = this.props.match.params.locationId
        for (let index = 0; index < logements.length; index++) {
            const logement = logements[index]
            ids.push(logement.id)
        }
        
        this.nextCarousel = this.nextCarousel.bind(this)
        this.prevCarousel = this.prevCarousel.bind(this)
        for (let index = 0; index < logements.length; index++) {
            if (logements[index].id === locationId) {
                carouselPictures = logements[index].pictures
                locationTags = logements[index].tags
                locationHost = logements[index].host
                locationEquipments = logements[index].equipments
                logementId = logements[index].id
                logement = logements[index]
                styleCarousel = {
                    width: carouselPictures.length*100 + '%'
                }
                widthImage = {
                    width: (100/carouselPictures.length) + '%'
                }
            }
        } 

        this.state = {
            locationId: locationId,
            logements: logements,
            ids: ids,
            carouselPictures: carouselPictures,
            locationHost: locationHost,
            locationEquipments: locationEquipments,
            locationTags: locationTags,
            styleCarousel: styleCarousel,
            widthImage: widthImage,
            logementId: logementId,
            logement: logement
        }
    }

    nextCarousel (x) {
        const translateX = -100 / this.state.carouselPictures.length
        this.setState({styleCarousel: {...this.state.styleCarousel, transform: 'translateX(' + x*translateX + '%)'}})
    }

    prevCarousel (x) {
        const translateX = 100 / this.state.carouselPictures.length
        this.setState({styleCarousel: {...this.state.styleCarousel, transform: 'translateX(' + -x*translateX + '%)'}})
    }

    render() {
        if (this.state.ids.includes(this.state.locationId)) {
            return (
                <div className='location-wrapper' key={this.state.logementId}>
                    <div className='banner-carousel'>
                        <figure className='carousel-wrapper' id={'Carousel-Wrapper'} style={this.state.styleCarousel}>
                            {this.state.carouselPictures.map((picture, index) => (
                                <div className='carousel-items' key={`caroussel-${index}`} style={this.state.widthImage}>
                                    {this.state.carouselPictures.length === 1 ? ('') : index === 0 ? (<img className='left-arrow' key={`left-arrow-${index}`} alt='previous' src={LeftVector} onClick={() => this.nextCarousel(this.state.carouselPictures.length-1)} />) : (<img className='left-arrow' alt='previous' key={`left-arrow-${index}`} src={LeftVector} onClick={() => this.prevCarousel(index-1)} />)}
                                    {this.state.carouselPictures.length === 1 ? ('') : index === this.state.carouselPictures.length-1 ? (<img className='right-arrow' key={`right-arrow-${index}`} alt='next' src={RightVector} onClick={() => this.prevCarousel(0)} />) : (<img className='right-arrow' alt='next' key={`right-arrow-${index}`} src={RightVector} onClick={() => this.nextCarousel(index+1)} />)}
                                    <img className='carousel-img' alt={`carousel ${index}`} key={`caroussel-picture-${index}`} src={picture} />
                                </div>
                            ))}
                        </figure>
                    </div>
                    <div className='infos-wrapper'>
                        <div className='infos-left'>
                            <h2 className='location-title'>{this.state.logement.title}</h2>
                            <h3 className='location-position'>{this.state.logement.location}</h3>
                            <div className='location-tags'>{this.state.locationTags.map((tag) => (
                                <div className='tag' key={`tag-${tag}`}>{tag}</div>
                            ))}</div>
                        </div>
                        <div className='infos-right'>
                            <div className='location-host'>
                                <div className='location-host-name'>{this.state.locationHost.name}</div>
                                <img className='location-host-picture' alt={`profile of ${this.state.locationHost.name}`} src={this.state.locationHost.picture} />
                            </div>
                            <div className='location-rating'>
                                {this.state.logement.rating >= 1 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {this.state.logement.rating >= 2 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {this.state.logement.rating >= 3 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {this.state.logement.rating >= 4 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                                {this.state.logement.rating >= 5 ? <img src={EmptyStar} alt='empty star' /> : <img src={FreeStar} alt='free star' />}
                            </div>
                        </div>
                    </div>
                    <div className='location-body'>
                        <Collapse
                            title='Description'
                            content={this.state.logement.description}
                            menuId='description-menu'
                            titleId='description-title'
                            buttonId='description-button'
                            className='description-wrapper'
                            contentClassName='description-collapse-content'
                            titleClassName='location-collapse-title'
                        />
                        <Collapse
                            title='Equipements'
                            content={this.state.locationEquipments.map((equipment) => (
                                <li className='equipments-list-items' key={`equipment-${equipment}`}>{equipment}</li>
                            ))}
                            menuId='equipments-menu'
                            titleId='equipments-title'
                            buttonId='equipments-button'
                            className='equipments-wrapper'
                            contentClassName='equipments-collapse-content'
                            titleClassName='location-collapse-title'
                        />
                    </div>
                </div>
            )
        } else {
            return (<Error1 />)
        }
    }
}

export default Location1