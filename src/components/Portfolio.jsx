import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
// import component
import Card from "./Card"
import ASC from '../assets/icons/ascending.svg'
import DESC from '../assets/icons/descending.svg'

/**
* Renders Portfolio section on page
* @function Portfolio
* @param {object} siteData
* @param {object} siteText
* @returns {JSX}
*/
const Portfolio = ( { siteData, siteText } ) => {

  const projects = siteData.projects
  const { title, subheading1 } = siteText.portfolio
  const [data, setData] = useState(projects)
  const [desc, setDesc] = useState(true)

  useEffect(() => {
    setData(projects)
  }, [projects, siteData])

  const HandleSort = () => {    // ascending/descending order function
    setDesc(!desc)
    const sorted = desc ? [...projects].sort((a, b) => (a.date > b.date ? -1 : 1)) : [...projects].sort((a, b) => (a.date < b.date ? -1 : 1))
    setData(sorted)
  }

  return ( 
    <section id="portfolio" className="py-5">
      <div className="container">
        <div className='d-flex justify-content-between'>
          <h2>{title}</h2>
          <span  aria-label="Sort by date"
            onClick={() => HandleSort()}>{desc? <img className='icons cursor-pointer' src={DESC} alt='descending'/> : <img className='icons cursor-pointer' src={ASC} alt='ascending'/>}</span>
        </div>
        <h3 className="fs-5 fw-light">{subheading1}</h3>

        <div className="row mt-5 gy-4">
            {data.map((project) => 
              <div key={project.id}  className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <Card project={project} cardButton={siteText.cardButton}/>
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
  siteData: PropTypes.object.isRequired,
  siteText: PropTypes.object.isRequired,
}
