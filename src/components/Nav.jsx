import PropTypes from 'prop-types'
import ToggleButton from './ToogleButton'

/**
* Renders top page navigation section
* @function Navigation
* @param {boolean} value: state (english)
* @param {function} setValue: set language:  (setEnglish)
* @param {object} siteText
* @returns {JSX}
*/
const Navigation = ( { value, setValue, siteText } ) => {

  const { about, skills, portfolio, contact } = siteText.nav

  return ( 
    <header className="py-4" >
      <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand text-uppercase fw-bold" href="/index.html">
            <span className="bg-primary p-1 rounded-3 text-white">Mark</span> Stevens
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="#aboutMe" className="nav-link" data-bs-toggle="offcanvas" role="button"
                    aria-controls="aboutMe">{about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">{skills}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">{portfolio}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact details">{contact}</a>
              </li>            
            </ul>
              <ToggleButton handleToggle={() => setValue(!value)} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation

// Prototypes
Navigation.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  siteText: PropTypes.object.isRequired,
}