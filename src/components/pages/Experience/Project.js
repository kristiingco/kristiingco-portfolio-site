import React from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

const Project = ({ projectList }) => {
    return (
        <div>
           {projectList.map(project => (
               <ProjectItem project={ project }/>
               ))}  
        </div>
    )
}

Project.propTypes = {
    projectList: PropTypes.array.isRequired,
}

export default Project
