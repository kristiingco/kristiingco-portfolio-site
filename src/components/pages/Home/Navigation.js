import React, {Fragment} from 'react'

const Navigation = ({navigationLinks}) => {
    return (
        <Fragment>
            <ul>
                {navigationLinks.map(link => (
                    <li key={link.title}>
                        <a href={link.link}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Navigation
