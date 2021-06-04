import React from 'react'
import './ProjectItem.css'
import PropTypes from 'prop-types'

const ProjectItem = ({ project }) => {
    return (
        <div className="project-item-container">
            <div className="project-item-info">
                <h2>{project.title}</h2>
                <a href={project.link} className="project-link">Link</a>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
}

// talab
// bell and pedre
// the hackathon
// morse test


export default ProjectItem
