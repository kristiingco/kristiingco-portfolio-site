import React, { Fragment } from 'react'
import './Skill.css'
import SkillItem from './SkillItem'
import PropTypes from 'prop-types'
import Back from '../../Back'

const Skill = ({ skillList }) => {
    return (
        <div className="skill-container">
            <h1 className="skills-header">Skills</h1>
            <div className="skills-container">
                {skillList.map(skilL => (
                    <SkillItem skill={skilL}/>
                ))}
            </div>
            <Back />
        </div>
    )   
}

Skill.propTypes = {
    skillList: PropTypes.array.isRequired,
}

export default Skill
