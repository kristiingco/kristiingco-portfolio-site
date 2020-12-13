import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import './Home.css';

const Home = ({imageURL, description, navigationLinks, socialLinks}) => {
    return (
        <div className="container">
            <img src={imageURL} className="main-image" alt="kristi" />
            <p className="description">{description}</p>
            <Navigation navigationLinks = {navigationLinks} />
            <SocialMedia className='social-links' socialLinks = {socialLinks} />
        </div>
    )
}

Home.propTypes = {
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    navigationLinks: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
}

export default Home
