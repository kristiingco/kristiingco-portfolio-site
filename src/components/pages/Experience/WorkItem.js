import React from 'react'
import './WorkItem.css'
import PropTypes from 'prop-types'

const WorkItem = ({ work }) => {
    return (
        <div className="work-item-container">
            <div className="work-item-info">
                <h2>{work.title}</h2>
                <h3>{work.company}</h3>
                <span className="work-item-timeline">{work.timeline}</span>
                <p>{work.description}</p>
            </div>
           
        </div>
    )
}

WorkItem.propTypes = {
    work: PropTypes.object.isRequired,
}
// vp 
// freelancer intern

export default WorkItem
