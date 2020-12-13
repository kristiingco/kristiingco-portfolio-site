import React from 'react'
import SkillItem from './SkillItem'
import PropTypes from 'prop-types'

const Skill = ({ skillList }) => {
    return (
        <div>
            {skillList.map(skilL => (
                <SkillItem skill={skilL}/>
            ))}
        </div>
    )   
}

Skill.propTypes = {
    skillList: PropTypes.array.isRequired,
}

export default Skill
