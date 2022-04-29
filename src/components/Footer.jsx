import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import for react/Bootstrap5 tooltips
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
// import 'other' website links
import { gitLink, linkedInLink } from '../assets/data/siteData'

/**
 * Renders the Footer on the page
 * @function Footer
 * @param {function} setShow (function to set modals state)
 * @returns {JSX}
 */
const Footer = ( { setShow } ) => {

    const handleShow = () => setShow(true)

    return ( 
      <footer className="border-top">
        <div className="container py-5">

          <div className="row gy-4 gy-md-0 align-items-center">
            
            <div className="col-12 col-md-4">
              <ul className="list-inline list-unstyled mb-0">
                <li className="list-inline-item ">
                  <a href='#top' className='text-decoration-none text-uppercase fw-bold text-dark' aria-label="Link to Top">
                    <span className="bg-primary bg-gradient p-1 rounded-3 text-light">Mark</span> Stevens
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-md-center">
              <ul className="list-inline list-unstyled mb-0">
                <li className="list-inline-item">
                  <button type="button" aria-label="Open Legal Notice" className="btn btn-white text-dark" variant="primary" onClick={handleShow}> Legal Notice</button>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-md-end">
              <ul className="list-inline list-unstyled mb-0">
                <li className="list-inline-item">
                  <a href={linkedInLink} className='text-decoration-none text-dark' aria-label="Link to LinkedIn" rel="noreferrer" target='_blank'>
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>LinkedIn</Tooltip>} >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </OverlayTrigger>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href={gitLink} className='text-decoration-none text-dark' aria-label="Link to GitHub" rel="noreferrer" target='_blank'>
                    <OverlayTrigger 
                      placement={'top'} 
                      overlay={<Tooltip>GitHub</Tooltip>} >
                        <i className="fab fa-github fa-2x"></i>
                    </OverlayTrigger>
                  </a>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </footer>
    )
}

export default Footer

// Prototypes
Footer.propTypes = {
  setShow: PropTypes.func.isRequired,
}