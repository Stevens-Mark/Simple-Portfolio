import PropTypes from 'prop-types'
// import for react/Bootstrap5 tooltips
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
// import link preview
import preview from '../assets/icons/preview.svg'

/**
  * Links/icons to Github & Project websites
  * @function Links
  * @param {string} website: link to project webite
  * @param {string} github: link to project github repo
  * @param  {string} title: of a project
  * @returns {JSX}
  */
const Links = ({ website, github, title }) => {
  return (
    <>
    <div className='text-nowrap d-flex align-items-center'>
      {website ?
        ( 
          <a href={website} aria-label={`Link to ${title} website`} rel="noreferrer" target="_blank">
            <OverlayTrigger 
            placement={'top'} 
            overlay={<Tooltip>{`${title} Website`}</Tooltip>} >
              <img className='icons' src={preview} alt={`Link to ${title} website`}/>
            </OverlayTrigger>
          </a>
        ) : 
        ( 
          <OverlayTrigger 
          placement={'top'} 
          overlay={<Tooltip>No Preview</Tooltip>} >
            <img className='icons icons--none' src={preview} alt="No website"/> 
          </OverlayTrigger>
        )}

      {github ?
        ( 
          <a href={github} aria-label={`Link to ${title} Repo`} rel="noreferrer" target="_blank">
            <OverlayTrigger 
            placement={'top'} 
            overlay={<Tooltip>{`${title} Repo`}</Tooltip>} >
              <i className="fab fa-github icons text-black"></i>
            </OverlayTrigger>
          </a>
        ) : 
        ( 
          <OverlayTrigger 
          placement={'top'} 
          overlay={<Tooltip>No Project Repo</Tooltip>} >
            <i className="fab fa-github icons text-secondary"></i>
          </OverlayTrigger>
        )}

      </div>
    </>   
  )
}

export default Links

// Prototypes
Links.propTypes = {
  website: PropTypes.string,
  github: PropTypes.string,
  title: PropTypes.string,
}
