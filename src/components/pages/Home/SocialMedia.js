import React from 'react'
import './SocialMedia.css'

const SocialMedia = ({socialLinks}) => {
    return (
        <div className="social-links">
            <ul>
                {socialLinks.map(link => (
                    <li key={link.socialMedia}>
                        <a href={link.link}>
                            <i className={`fab fa-${link.socialMedia}`}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialMedia
