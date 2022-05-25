import PropTypes from 'prop-types'
import portrait from '../assets/images/portraitM.webp'

/**
 * Renders the authors photo/Intro section on page
 * @function Introduction
 * @param {object} siteText
 * @returns {JSX}
 */
const Introduction = ( { siteText } ) => {

  const { title, subheading1, skillsButton } = siteText.intro

  return ( 
    <section id="top" className="py-4">
      <div className= "container">

        <div className="row gy-4 gy-md-0 align-items-center">

          <div className="col-12 col-md-6 ">
            <h1 className="fw-bold">{title}</h1>
            <h2 className="fw-light">{subheading1}</h2>
            <a className="btn btn-primary mt-5" href="#skills">{skillsButton}</a>
          </div>

          <div className="col-12 col-md-6">
            <img src={portrait} alt='The author' className='rounded-3 shadow'/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Introduction

// Prototypes
Introduction.propTypes = {
  siteText: PropTypes.object.isRequired,
}