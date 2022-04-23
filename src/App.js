import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Project from "./pages/Project"
import Footer from "./components/Footer"
import { projects } from './assets/data/projects'
 
const App = () => {

  return ( 
    <Router>
        <Switch>
          <Route path="/" exact component={()=> <Home siteData={projects} />}/>
          <Route path="/project/:id" exact component={()=> <Project siteData={projects} />}/>
        </Switch> 
      <Footer/>
    </Router> 
  )
}

export default App