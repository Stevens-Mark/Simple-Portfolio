import React from "react"
// import image
import code from '../../assets/images/react.jpg'
// import icons from react-icons (npm react Icons package installed)
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa" 
import { FaJsSquare } from "react-icons/fa" 
import { FaSass } from "react-icons/fa" 
import { FaReact } from "react-icons/fa"
// import for react/Bootstrap5 tooltips
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

/**
 * Renders the first row in the skills section
 * @function SkillsRowOne
 * @returns {JSX}
 */
const SkillsRowOne = () => {

    return (
      <div className="row mt-5 gy-4 gy-md-0 align-items-center">
        
          <div className="col-12 col-md-7">
            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaHtml5 className="text-primary fa-2x me-3" />
                    <p className="fw-bold m-0">HTML5</p>
                  </div>

                </div>
                <div className="col">
                  <div className="progress m-1">
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>75%</Tooltip>} >
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </OverlayTrigger>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaCss3Alt className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">CSS3</p>
                  </div>

                </div>
                <div className="col">
                  <div className="progress m-1">
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>75%</Tooltip>} >
                      <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </OverlayTrigger>                    
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaJsSquare className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">JS</p>
                  </div>

                </div>
                <div className="col">
                  <div className="progress m-1">
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>100%</Tooltip>} >
                      <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </OverlayTrigger> 
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaReact className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0 ">React</p>
                  </div>

                </div>
                <div className="col">
                  <div className="progress m-1">
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>75%</Tooltip>} >
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </OverlayTrigger>                     
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaSass className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">SASS</p>
                  </div>

                </div>
                <div className="col">
                  <div className="progress m-1">
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>50%</Tooltip>} >
                      <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </OverlayTrigger>                         
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-12 offset-md-1 col-md-4">
            <img src={code} alt="screen showing react code"  className="rounded-3 shadow w-100"/>
          </div>
      </div>
  )
}

export default SkillsRowOne