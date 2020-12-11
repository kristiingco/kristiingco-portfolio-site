import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = ({ project }) => {
    return (
        <div>
            <h1>{project.title}</h1>
            <a href={project.link}>Link</a>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title}/>
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
