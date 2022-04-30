import React from "react"
// import components
import SkillsRowOne from "./SkillsRowOne"
import SkillsRowTwo from "./SkilsRowTwo"
// import data for skills rows
import { skillsListOne } from "../../assets/data/otherData"
import { skillsListTwo } from "../../assets/data/otherData"
/**
 * Renders the skills section on page
 * @function Skills
 * @param {object} siteText
 * @returns {JSX}
 */
const Skills = ( { siteText } ) => {

  const { title, subheading1 } = siteText.skills

  return ( 
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2>{title}</h2>
        <h3 className="fs-5 fw-light">{subheading1}</h3>
        <SkillsRowOne skillsList={skillsListOne}/>
        <SkillsRowTwo skillsList={skillsListTwo}/>
      </div>
    </section>
  )
}

export default Skills