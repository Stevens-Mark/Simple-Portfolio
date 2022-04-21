import React from "react"
import design from '../assets/images/design.jpg'
import code from '../assets/images/code.jpg'

const Skills = () => {
  return ( 
    <section id="skills" className="py-5 bg-light">
    
      <div className="container">

        <h2>My Skills</h2>
        <h3 className="fs-5 fw-light">Web development and design</h3>

        <div className="row mt-5 gy-4 gy-md-0">

          <div className="col-12 col-md-7">
            <div className="border bg-secondary h-100 w-100 py-5">Information Block</div>
          </div>

          <div className="col-12 offset-md-1 col-md-4">
            <img src={code} alt="screen showing php code"  className="rounded-3 shadow w-100"/>
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