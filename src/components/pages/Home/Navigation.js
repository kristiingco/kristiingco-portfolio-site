import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = ({navigationLinks}) => {
    return (
        <div className='navigation-links'>
            <ul>
                {navigationLinks.map(link => (
                    <li key={link.title}>
                        <Link to={link.link}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation
