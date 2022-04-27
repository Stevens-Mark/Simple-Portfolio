import PropTypes from 'prop-types'
import Links from './Links'
/**
 * Renders a card for each project
 * @function Card
 * @param {object} projects : data
 * @returns {JSX}
 */
const Card = ( { project } ) => {

  const { id, title, description, cover, alt, website, github } = project

  return ( 
    <div className="card">
        
      <img src={cover} alt={alt} className="card-img-top" />

        <div className="card-body text-dark">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className="card-title mb-0 text-truncate">{title}</h5>
            <Links website={website} github={github} />
          </div>
          <p className="card-text mt-1">{description}</p>

          <a href={`#project${id}Info`} className="btn btn-primary" data-bs-toggle="offcanvas" role="button"
          aria-controls={`project${id}Info`}>See More</a>

        </div>
    </div>
  )
}

export default Card

// Prototypes
Card.propTypes = {
  projects: PropTypes.object,
}