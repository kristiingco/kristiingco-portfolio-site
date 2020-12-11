import React from 'react'
import PropTypes from 'prop-types'

const WorkItem = ({ work }) => {
    return (
        <div>
            <h1>{work.title}</h1>
            <p>{work.description}</p>
            <img src={work.image} alt={work.title}/>
            <p>{work.timelime}</p>
        </div>
    )
}

WorkItem.propTypes = {
    work: PropTypes.object.isRequired,
}
// vp 
// freelancer intern

export default WorkItem
