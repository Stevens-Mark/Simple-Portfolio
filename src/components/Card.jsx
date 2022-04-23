import React from "react"
import { Link } from 'react-router-dom'

const Card = ( { project } ) => {

  const { id, title, description, cover, alt } = project

  return ( 
    <div className="card">
      <img src={cover} alt={alt} className="card-img-top" />
        <div className="card-body text-dark">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link className="btn btn-primary" to={`/project/${id}`}>Find out More</Link>
        </div>
    </div>
  )
}

export default Card