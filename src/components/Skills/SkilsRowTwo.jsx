import React from "react"
// import image
import design from '../../assets/images/design.jpg'
// import icons from react-icons (npm react Icons package installed)
import { FaFigma } from "react-icons/fa"
import { FaPhotoVideo } from "react-icons/fa" 
import { FaPalette } from "react-icons/fa" 
import { FaVial } from "react-icons/fa" 
import { FaVideo } from "react-icons/fa"
// import for react/Bootstrap5 tooltips
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

/**
 * Renders the second row in the skills section
 * @function SkillsRowTwo
 * @returns {JSX}
 */
const SkillsRowTwo = () => {

    return (
      <div className="row mt-5 gy-4 gy-md-0 align-items-center">

        <div className="coll-12 col-md-4">
          <img src={design} alt="screen showing design" className="rounded-3 shadow w-100"/>
        </div>

        <div className="col-12 order-first col-md-7 offset-md-1 order-md-last">
            <div className="bg-white mb-3 px-3 py-4 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaFigma className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">Figma</p>
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
                    <FaPhotoVideo className="text-primary fa-3x me-3" />
                    <p className=" fw-bold m-0">Adobe Suites</p>
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
                    <FaPalette className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">UI design</p>
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
                    <FaVial className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">UX design</p>
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
            
            <div className="bg-white mb-3 px-3 py-4 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaVideo className="text-primary fa-2x me-3" />
                    <p className=" fw-bold m-0">Video</p>
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
    </div>
  )
}

export default SkillsRowTwo