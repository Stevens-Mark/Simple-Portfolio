import React from "react"
import design from '../assets/images/design.jpg'
import code from '../assets/images/code.jpg'
// import icons from reat-icons (npm package installed)
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa" 
import { FaJsSquare } from "react-icons/fa" 
import { FaSass } from "react-icons/fa" 
import { FaPhp } from "react-icons/fa"

const Skills = () => {
  return ( 
    <section id="skills" className="py-5 bg-light">
    
      <div className="container">
        <h2>My Skills</h2>
        <h3 className="fs-5 fw-light">Web development and design</h3>

        <div className="row mt-5 gy-4 gy-md-0 align-items-center">
          <div className="col-12 col-md-7">
            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaHtml5 className="text-primary fs-2 me-3" />
                    <p className=" fw-bold m-0">HTML5</p>
                  </div>

                </div>
                <div className="col">
                  <div class="progress m-1">
                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaCss3Alt className="text-primary fs-2 me-3" />
                    <p className=" fw-bold m-0">CSS3</p>
                  </div>

                </div>
                <div className="col">
                  <div class="progress m-1">
                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaJsSquare className="text-primary fs-2 me-3" />
                    <p className=" fw-bold m-0">JS</p>
                  </div>

                </div>
                <div className="col">
                  <div class="progress m-1">
                    <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                  <div className="d-flex align-items-center">
                    <FaPhp className="text-primary fs-2 me-3" />
                    <p className=" fw-bold m-0">PHP</p>
                  </div>

                </div>
                <div className="col">
                  <div class="progress m-1">
                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="bg-white mb-3 p-3 rounded-3 shadow-sm">
            <div className="row align-items-center">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <FaSass className="text-primary fs-2 me-3" />
                  <p className=" fw-bold m-0">SASS</p>
                </div>

              </div>
              <div className="col">
                <div class="progress m-1">
                  <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>
            </div>
          </div>


          <div className="col-12 offset-md-1 col-md-4">
            <img src={code} alt="screen showing php code"  className="rounded-3 shadow w-100 h-50"/>
          </div>
        </div>

        <div className="row mt-5 gy-4 gy-md-0">
          <div className="coll-12  col-md-4">
            <img src={design} alt="screen showing design"  className="rounded-3 shadow w-100"/>
          </div>

          <div className="col-12 col-md-7 offset-md-1">
            <div className="border bg-secondary h-100 w-100 py-5 text-center">Information Block</div>
          </div>
        </div>

      </div>
    
    </section>
  )
}

export default Skills