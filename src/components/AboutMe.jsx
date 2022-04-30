import PropTypes from 'prop-types'
import ListCreate from './ListCreate'

/**
 * Renders (offcanvas page) information about the author
 * @function AboutOffCanvas
 * @param {array} aboutMe: data about author
 * @returns {JSX}
 */
const AboutOffCanvas = ( { aboutMe } ) => {

  const { subheading1, subheading2, motivations, subheading3, future, subheading4, skills } = aboutMe

  return (
   
    <div className="offcanvas offcanvas-start h-100" tabIndex="-1" id="aboutMe" aria-labelledby="aboutMeTitile">
      <div className="offcanvas-header">
        <h3 className="offcanvas-title" id="aboutMeTitile">{subheading1}</h3>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
        <div className="text-dark">
          <h4>{subheading2}</h4>
          <ListCreate group='motivations' data={motivations}/>
        
          <h4>{subheading3}</h4>
          <ListCreate group='motivations' data={future}/>

          <h4>{subheading4}</h4>
          <ListCreate group='motivations' data={skills}/>
        </div>

      </div>
    </div>
   
  )
}

export default AboutOffCanvas

// Prototypes
AboutOffCanvas.propTypes = {
  aboutMe: PropTypes.object.isRequired,
}
