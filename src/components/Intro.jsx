import React from "react"
import portrait from '../assets/images/portrait.jpg'

const Introduction = () => {
  return ( 
    <section className="py-5">
      <div className= "container">

        <div className="row">

          <div className="col">
            <h1>I'm John Doe, Web Developer and Designer</h1>
            <p>Welcome to my creative universe</p>
            <button>My web skills</button>
          </div>

          <div className="col">
            <img src={portrait} alt='The author' className='rounded-3 shadow'/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Introduction