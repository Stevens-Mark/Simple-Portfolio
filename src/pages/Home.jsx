import React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Introduction from "../components/Intro"
import Nav from "../components/Nav"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
 
const Home = () => {
  return ( 
    <>
    <main>
      <Nav/>
      <Introduction/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default Home