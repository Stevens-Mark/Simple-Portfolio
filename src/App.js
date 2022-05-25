import React, { useEffect, useState, lazy, Suspense } from "react"

// import data
import siteDataENG from './assets/data/projectsDataENG.json'
import siteDataFR from './assets/data/projectsDataFR.json'
import aboutMeEng from './assets/data/aboutMeDataENG'
import aboutMeFr from './assets/data/aboutMeDataFR'

// import components
import Nav from "./components/Nav"
import Introduction from "./components/Intro"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// import components when needed using lazy loading
const AboutMe = lazy(() => import('./components/AboutMe'))
const OffCanvas = lazy(() => import('./components/OffCanvas'))
const LegalModal = lazy(() => import('./components/Modal'))
const GoToTop = lazy(() => import('./helpers/GoToTop'))
const renderLoader = () => <p>Loading...</p>

 const App = () => {

   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [show, setShow] = useState(false) // state passed between footer & modal components
  const [english, setEnglish] = useState(false) // set language: passed to ToggleButton in Nav component
  const aboutToLoad = english? aboutMeEng : aboutMeFr
  const siteDataToLoad = english? siteDataENG : siteDataFR

  return ( 
    <main>
      <Nav value={english} setValue={setEnglish} siteText={siteDataToLoad.siteText} /> 
      <Introduction siteText={siteDataToLoad.siteText} />
      <Skills siteText={siteDataToLoad.siteText}/>
      <Portfolio siteData={siteDataToLoad} siteText={siteDataToLoad.siteText} />
      <Contact siteText={siteDataToLoad.siteText} />
      <Footer setShow={setShow} siteText={siteDataToLoad.siteText} />

      <Suspense fallback={renderLoader()}>
        <AboutMe aboutMe={aboutToLoad} />
        <LegalModal show={show} setShow={setShow} siteText={siteDataToLoad.siteText} />
        <OffCanvas siteData={siteDataToLoad} />
        <GoToTop />  
      </Suspense>
      
  </main>
  )
}

export default App