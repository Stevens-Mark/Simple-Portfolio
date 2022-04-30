import React, { useEffect, useState } from "react"
// import data
import siteDataENG from './assets/data/projectsDataENG.json'
import siteDataFR from './assets/data/projectsDataFR.json'
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
  const siteDataToLoad = english? siteDataENG : siteDataFR

  return ( 
    <main>
      <Nav value={english} setValue={setEnglish} siteText={siteDataToLoad.siteText} />
      <AboutMe aboutMe={aboutToLoad} />
      <Introduction siteText={siteDataToLoad.siteText} />
      <Skills siteText={siteDataToLoad.siteText}/>
      <Portfolio siteData={siteDataToLoad} siteText={siteDataToLoad.siteText} />
      <Contact siteText={siteDataToLoad.siteText}/>
      <Footer setShow={setShow} siteText={siteDataToLoad.siteText}/>
      <LegalModal show={show} setShow={setShow} />
      <OffCanvas siteData={siteDataToLoad}/>
      <GoToTop />    
  </main>
  )
}

export default App