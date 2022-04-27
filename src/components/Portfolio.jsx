import PropTypes from 'prop-types'
import { useState } from 'react'
// import component
import Card from "./Card"
import ASC from '../assets/icons/ascending.svg'
import DESC from '../assets/icons/descending.svg'

/**
 * Renders Portfolio section on page
 * @function Portfolio
 * @param {array} projects : data
 * @returns {JSX}
 */
const Portfolio = ( { projects } ) => {

  const [data, setData] = useState(projects)
  const [desc, setDesc] = useState(true)

  const HandleSort = () => {    // ascending/descending order function
    setDesc(!desc)
    const sorted = desc ? [...projects].sort((a, b) => (a.date > b.date ? -1 : 1)) : [...projects].sort((a, b) => (a.date < b.date ? -1 : 1))
    setData(sorted)
  }

  return ( 
    <section id="portfolio" className="py-5">
      <div className="container">
        <div className='d-flex justify-content-between'>
          <h2>My Portfolio</h2>
          <span  aria-label="Sort by date"
            onClick={() => HandleSort()}>{desc? <img className='icons cursor-pointer' src={DESC} alt='descending'/> : <img className='icons cursor-pointer' src={ASC} alt='ascending'/>}</span>
        </div>
        <h3 className="fs-5 fw-light">Personal and professional projects</h3>

        <div className="row mt-5 gy-4">
            {data.map((project) => 
              <div key={project.id}  className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Card project={project}/>
              </div>
            )}

        </div>
      </div>
    </section>
  )
}

export default Portfolio

// Prototypes
Portfolio.propTypes = {
  projects: PropTypes.array.isRequired,
}
