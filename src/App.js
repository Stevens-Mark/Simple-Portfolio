import React from "react"
import Home from './pages/Home'
import { projects } from './assets/data/projectsData'
import aboutMe from './assets/data/aboutMeData'
 
const App = () => {

  return ( 
     <Home projects={projects} aboutMe={aboutMe} />
  )
}

export default App