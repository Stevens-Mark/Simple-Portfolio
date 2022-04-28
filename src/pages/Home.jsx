import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import components
import Nav from "../components/Nav"
import Introduction from "../components/Intro"
import Skills from "../components/Skills/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import OffCanvas from "../components/OffCanvas"
import LegalModal from "../components/Modal"
import GoToTop from "../helpers/GoToTop"

/**
 * Renders main page
 * @function Home
 * @param {array} siteData : projects data
 * @returns {JSX}
 */

const Home = ( { siteData } ) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // state passed between footer & modal component
  const [show, setShow] = useState(false)

  return ( 
    <main>
      <Nav/>
      <Introduction/>
      <Skills/>
      <Portfolio projects={siteData} />
      <Contact/>
      <Footer setShow={setShow}/>
      <LegalModal show={show} setShow={setShow} />
      <OffCanvas projects={siteData} />
      <GoToTop />
    </main>
  )
}

export default Home

// Prototypes
Home.propTypes = {
  siteData: PropTypes.array.isRequired,
}
