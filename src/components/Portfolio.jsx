import Card from "./Card"

const Portfolio = ( { projects } ) => {

  return ( 
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2>My Portfolio</h2>
        <h3 className="fs-5 fw-light">Personal and professional projects</h3>
  
        <div className="row mt-5 gy-4">
            {projects.map((project) => 
              <div key={project.id}  className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Card project={project}/>
              </div>
            )}

        </div>
      </div>
    </section>
  )
}

export default Portfolio