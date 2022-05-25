import React from "react"
import PropTypes from 'prop-types'
// import image
import design from '../../assets/images/designThree.webp'
// import for react/Bootstrap5 tooltips
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

/**
 * Renders the second row in the skills section
 * @function SkillsRowTwo
* @param {array} skillsList: icons, title & progress %
 * @returns {JSX}
 */
const SkillsRowTwo = ( { skillsList } ) => {

  return (
    <div className="row mt-5 gy-4 gy-md-0 align-items-center">

        <div className="coll-12 col-md-4">
          <img src={design} alt="screen showing developer's multiple monitor setup" className="rounded-3 shadow w-100"/>
        </div>

        <div className="col-12 order-first col-md-7 offset-md-1 order-md-last">
          {skillsList.map((skill) => 
            <div key={skill.title} className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <img className='skillIcons m-0 me-3' src={skill.path} alt={skill.title}/>  
                    <p className="fw-bold m-0">{skill.title}</p>
                  </div>

                </div>
                <div className="col">
                  <div className="progress m-1">
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>{skill.progress}%</Tooltip>} >
                        <div className={`progress-bar w-${skill.progress}`} role="progressbar" aria-valuenow={skill.progress} aria-label={skill.title} aria-valuemin="0" aria-valuemax="100"></div>
                    </OverlayTrigger>
                  </div>
                </div>

              </div>
            </div>
          )}     
        </div>

    </div>
  )
}

export default SkillsRowTwo

// Prototypes
SkillsRowTwo.propTypes = {
  skillsList: PropTypes.array.isRequired,
}