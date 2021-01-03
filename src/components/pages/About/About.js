import React, { Fragment } from 'react'
import './About.css'
import PropTypes from 'prop-types'
import Back from '../../Back'

const About = ({ imageURL, description }) => {
    return (
        <Fragment>
            <div className="about-container">
                <img src={imageURL} className="about-image" alt="kristi"/>
                <div className="about-description">
                    <p>{ description }</p>
                </div>
            </div>
        <Back />
        </Fragment>
    )
}

About.propTypes = {
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
export default About
