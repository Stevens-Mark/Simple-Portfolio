import React from "react"
// import components
import SkillsRowOne from "./SkillsRowOne"
import SkillsRowTwo from "./SkilsRowTwo"

/**
 * Renders the skills section on page
 * @function Skills
 * @returns {JSX}
 */
const Skills = () => {

  return ( 
    <section id="skills" className="py-5 bg-light">
    
      <div className="container">
        <h2>My Skills</h2>
        <h3 className="fs-5 fw-light">Web development and design</h3>

        <SkillsRowOne/>
        <SkillsRowTwo/>
      </div>
  
    </section>
  )
}

export default Skills