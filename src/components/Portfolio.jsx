import React from "react"

const Portfolio = () => {
    return ( 
      <section id="portfolio" className="py-5">
        <div className="container">
          <h2>My Portfolio</h2>
          <h3 className="fs-5 fw-light">Personal and professional projects</h3>
   
          <div className="row mt-5 gy-4 gy-md-0">
            <div className="col-12 col-md-3">
              <div className="bg-secondary h-100 w-100 py-5">
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="bg-secondary h-100 w-100 py-5">
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="bg-secondary h-100 w-100 py-5">
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="bg-secondary h-100 w-100 py-5">
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Portfolio