
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
        </div>
    </div>
  )
}

export default Card