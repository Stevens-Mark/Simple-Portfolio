import React from "react"
import design from '../assets/images/design.jpg'
import code from '../assets/images/code.jpg'

const Skills = () => {
  return ( 
    <section className="py-5 bg-light">
    
      <div className="container">

        <h2 className="">My Skills</h2>
        <h3 className="">Web development and design</h3>

        <div className="row mt-5">

          <div className="col-7">
            <div className="border bg-secondary h-100 w-100"></div>
          </div>

          <div className="offset-1 col-4">
            <img src={code} alt="screen showing php code"  className="rounded-3 shadow w-100"/>
          </div>
        </div>

        <div className="row mt-5">
          <div className=" col-4">
            <img src={design} alt="screen showing design"  className="rounded-3 shadow w-100"/>
          </div>

          <div className="col-7 offset-1">
            <div className="border bg-secondary h-100 w-100"></div>
          </div>
        </div>

      </div>
    
    </section>
  )
}

export default Skills