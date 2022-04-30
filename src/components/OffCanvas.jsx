import PropTypes from 'prop-types'
import ProjectCarousel from './ProjectCarousel'

/**
 * Renders (offcanvas page) additional information for each project
 * when user clicks on 'Find out more' button
 * @function OffCanvas
 * @param {object} siteData
 * @returns {JSX}
 */
const OffCanvas = ( { siteData } ) => {

  const projects = siteData.projects

  return (
    <>
      {projects.map((proj) => 
        <div key={proj.id} className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id={`project${proj.id}Info`} aria-labelledby={`project${proj.id}Label`}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id={`project${proj.id}Label`}>Project {proj.id} - {proj.title}</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <div className="text-dark">
                <ProjectCarousel project={proj} />
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default OffCanvas

// Prototypes
OffCanvas.propTypes = {
  siteData: PropTypes.object.isRequired,
}