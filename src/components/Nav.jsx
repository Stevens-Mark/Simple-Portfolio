import React from "react"
import { Link } from 'react-router-dom'

const Navigation = () => {
  
  return ( 
    <header className="py-4" >
      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">

      <div className="container">
        {/* <a className="navbar-brand text-uppercase fw-bold" href="/index.html">
          <span className="bg-primary bg-gradient p-1 rounded-3 text-light">John</span> Doe
        </a> */}
        <Link className="navbar-brand text-uppercase fw-bold" to={`/`}>
            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">John</span> Doe</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#johndoe">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact details">Contact details</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Navigation