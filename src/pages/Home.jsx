import React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Introduction from "../components/Intro"
import Nav from "../components/Nav"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
import Test from "../components/Test"

 
const Home = () => {
  return ( 
    <main>
      <Nav/>
      <Introduction/>
<Test/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Home