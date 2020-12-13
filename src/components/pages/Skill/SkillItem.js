import React from 'react'
import PropTypes from 'prop-types'

const SkillItem = ({ skill }) => {
    return (
        <div>
            <span>{skill}</span>
        </div>
    )
}

SkillItem.propTypes = {
    skill: PropTypes.string.isRequired,
}

export default SkillItem
