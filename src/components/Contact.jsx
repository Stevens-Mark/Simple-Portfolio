import React from "react"
import coffee from '../assets/images/coffee.jpg'

const Contact = () => {
    return (
      <section className="py-5 bg-light">

        <div className="container" >

          <div className="row mt-5">
            <div className="col">
              <h2 className="">Have a web design project in mind ?</h2>
              <h3 className="">Let's discuss it over a coffee !</h3>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-5">
              <img src={coffee} alt="screen showing php code" className="rounded-3 shadow w-100"/>
            </div>

            <div className="col-6 offset-1">
              <div className="border bg-secondary h-100 w-100"></div>
            </div>
          </div>

          </div>
      </section>
    )
}

export default Contact