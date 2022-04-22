import React from "react"

const Card = ( { project } ) => {

  const { id, title, description, cover, alt } = project

  return ( 
    <div className="card">
      <img src={cover} alt={alt} className="card-img-top" />
        <div className="card-body text-dark">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="linkaddress" className="btn btn-primary" aria-controls={`project${id.toString()}Info`}>Find out More</a>
        </div>
    </div>
  )
}

export default Card