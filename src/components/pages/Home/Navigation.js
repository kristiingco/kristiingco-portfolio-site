import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({navigationLinks}) => {
    return (
        <Fragment>
            <ul>
                {navigationLinks.map(link => (
                    <li key={link.title}>
                        <Link to={link.link}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Navigation
