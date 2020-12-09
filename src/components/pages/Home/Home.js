import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';

const Home = ({imageURL, description, navigationLinks, socialLinks}) => {
    return (
        <Fragment>
            <img src={imageURL} className="main-image" alt="kristi" />
            <p className="description">{description}</p>
            <Navigation navigationLinks = {navigationLinks} />
            <SocialMedia socialLinks = {socialLinks} />
        </Fragment>
    )
}

Home.propTypes = {
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    navigationLinks: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
}

export default Home
