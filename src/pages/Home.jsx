import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import components
import Nav from "../components/Nav"
import AboutMe from "../components/AboutMe"
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
 * @param {object} props : data for site
 * @returns {JSX}
 */

const Home = ( props ) => {

  const [value, setValue] = useState(false)
  console.log(value)

  const { projects, aboutMe } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // state passed between footer & modal component
  const [show, setShow] = useState(false)

  return ( 
    <main>
      <Nav value={value} setValue={setValue}/>
      <AboutMe aboutMe={aboutMe} />
      <Introduction/>
      <Skills/>
      <Portfolio projects={projects} />
      <Contact/>
      <Footer setShow={setShow}/>
      <LegalModal show={show} setShow={setShow} />
      <OffCanvas projects={projects} />
      <GoToTop />    
    </main>
  )
}

export default Home

// Prototypes
Home.propTypes = {
  props: PropTypes.object,
}
