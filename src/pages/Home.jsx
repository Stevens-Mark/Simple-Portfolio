import React, { useEffect } from "react"
import Nav from "../components/Nav"
import Introduction from "../components/Intro"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

const Home = ( { siteData } ) => {

  useEffect(() => {
    document.title = 'Home'
    window.scrollTo(0, 0)
  }, [])

  return ( 
    <main>
      <Nav/>
      <Introduction/>
      <Skills/>
      <Portfolio projects={siteData} />
      <Contact/>
    </main>
  )
}

export default Home