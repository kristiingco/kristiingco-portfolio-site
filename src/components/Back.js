import React, { Fragment } from 'react'
import './Back.css'
import { Link } from 'react-router-dom'

const Back = () => {
    return (
        <Fragment>
            <Link to ="/" className="back-link">Return</Link>
        </Fragment>
    )
}

export default Back