import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'

/**
 * Renders (carousel on offcanvas page) for each project
 * when user clicks on 'Find out more' button
 * @function OffCanvas
 * @param {array} project : data of one project
 * @returns {JSX}
 */
const ProjectCarousel = ( { project } ) => {

  const mode = project.textColor==='dark'? 'carousel-dark' : null 

  return (

    <Carousel pause='hover' className={`shadow ${mode}`}>
      {project.slides.map((projSlide) => 

        <Carousel.Item key={projSlide.alt} interval={10000}>
          <img
            className="d-block w-100 slide rounded pic"
            src={projSlide.path}
            alt={projSlide.alt}
          />
          <Carousel.Caption>
            {/* <h3 className={`projectHeading d-none d-sm-block mb-0 text-${project.textColor}`}>{projSlide.heading}</h3> */}
            <p className={`projectText mb-0 text-${project.textColor}`}>{projSlide.text}</p>
          </Carousel.Caption>
        </Carousel.Item> 
      )}  
    </Carousel>
  )
}

export default ProjectCarousel

// Prototypes
ProjectCarousel.propTypes = {
  project: PropTypes.object.isRequired,
}