import portrait from '../assets/images/portrait.jpg'

const Introduction = () => {
  return ( 
    <section id="top" className="py-5">
      <div className= "container">

        <div className="row gy-4 gy-md-0 align-items-center">

          <div className="col-12 col-md-6 ">
            <h1 className="fw-bold title">I'm John Doe, Web Developer and Designer</h1>
            <h2 className="fw-light slogan">Welcome to my creative universe</h2>
            <button type="button" className="btn btn-primary mt-5">My web skills</button>
            {/* <a className="btn btn-primary mt-5" href="#skills">My web skills</a> */}
          </div>

          <div className="col-12 col-md-6">
            <img src={portrait} alt='The author' className='rounded-3 shadow'/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Introduction