import React from 'react'
import PropTypes from 'prop-types'

const About = ({ imageURL, description }) => {
    return (
        <div>
            <img src={imageURL}/>
            <p>{ description }</p>
        </div>
    )
}

About.propTypes = {
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
export default About
