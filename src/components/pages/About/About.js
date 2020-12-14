import React from 'react'
import './About.css'
import PropTypes from 'prop-types'

const About = ({ imageURL, description }) => {
    return (
        <div className="about-container">
            <img src={imageURL} className="about-image" alt="kristi"/>
            <div className="about-description">
                <p>{ description }</p>
            </div>
        </div>
    )
}

About.propTypes = {
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
export default About
