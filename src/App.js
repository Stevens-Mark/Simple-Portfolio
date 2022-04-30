import React, { useEffect, useState } from "react"
// import data
import { projects } from './assets/data/projectsData'
import aboutMeEng from './assets/data/aboutMeDataENG'
import aboutMeFr from './assets/data/aboutMeDataFR'

// import components
import Nav from "./components/Nav"
import AboutMe from "./components/AboutMe"
import Introduction from "./components/Intro"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import OffCanvas from "./components/OffCanvas"
import LegalModal from "./components/Modal"
import GoToTop from "./helpers/GoToTop"

 const App = () => {

   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [show, setShow] = useState(false) // state passed between footer & modal components
  const [english, setEnglish] = useState(false) // set language for site
  const aboutToLoad = english? aboutMeEng : aboutMeFr

  return ( 
    <main>
    <Nav value={english} setValue={setEnglish}/>
    <AboutMe aboutMe={aboutToLoad} />
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

export default App