import React from 'react'
import WorkItem from './WorkItem'
import PropTypes from 'prop-types'

const Work = ({ workList }) => {
    return (
        <div>
            <h1>Work/Extracurricular Experience</h1>
           {workList.map(work => (
               <WorkItem work={ work }/>
           ))}  
        </div>
    )
}

Work.propTypes = {
    workList: PropTypes.array.isRequired,
}

export default Work
