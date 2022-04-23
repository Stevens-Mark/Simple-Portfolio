
import Carousel from 'react-bootstrap/Carousel'

const ProjectCarousel = ( { project } ) => {

  return (
    <Carousel>
      {project.slides.map((proj) => 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={proj.path}
            alt={proj.alt}
          />
          <Carousel.Caption>
            <h3>{proj.heading}</h3>
            <p>{proj.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}  
    </Carousel>
  )
}

export default ProjectCarousel