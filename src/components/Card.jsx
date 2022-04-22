import React from "react"

const Card = ( { project } ) => {

  const { id, title, description, cover, alt } = project

  return ( 
    <div className="card">
      <img src={cover} alt={alt} className="card-img-top" />
        <div className="card-body text-dark">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <a href={`#project${id}Info`} className="btn btn-primary" data-bs-toggle="offcanvas" role="button"
              aria-controls={`project${id}Info`}>Find out More</a>

          <div className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id={`project${id}Info`} aria-labelledby={`project${id}Label`}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id={`project${id}Label`}>Offcanvas</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div>
              {id}
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Card