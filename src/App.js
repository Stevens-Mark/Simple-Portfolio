import React from "react"
import Home from './pages/Home'
import { projects } from './assets/data/projects'
 
const App = () => {

  return ( 
     <Home siteData={projects} />
  )
}

export default App