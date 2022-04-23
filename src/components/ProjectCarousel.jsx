import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Renders (carousel on offcanvas page) for each project
 * when user clicks on 'Find out more' button
 * @function OffCanvas
 * @param {array} project : data of one project
 * @returns {JSX}
 */
const ProjectCarousel = ( { project } ) => {

  return (

    <Carousel  pause='hover' className='shadow'>
      {project.slides.map((projSlide) => 
        <Carousel.Item key={projSlide.alt} interval={10000}>
          <img
            className="d-block w-100 slide rounded"
            src={projSlide.path}
            alt={projSlide.alt}
          />
          <Carousel.Caption>
            <h3 className='projectHeading mb-0 '>{projSlide.heading}</h3>
            <p className='projectText d-none d-sm-block mb-0'>{projSlide.text}</p>
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