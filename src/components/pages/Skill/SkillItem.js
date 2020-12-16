import React from 'react'
import './SkillItem.css'
import PropTypes from 'prop-types'

const SkillItem = ({ skill }) => {
    return (
        <div className="skill-item-container">
            {skill}
        </div>
    )
}

SkillItem.propTypes = {
    skill: PropTypes.string.isRequired,
}

export default SkillItem
