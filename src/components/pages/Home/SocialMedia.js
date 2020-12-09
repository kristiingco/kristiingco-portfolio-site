import React, {Fragment} from 'react'

const SocialMedia = ({socialLinks}) => {
    return (
        <Fragment>
            <ul>
                {socialLinks.map(link => (
                    <li>
                        <a href={link.link}>
                            <i className={`fab fa-${link.socialMedia}`}/>
                        </a>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default SocialMedia
