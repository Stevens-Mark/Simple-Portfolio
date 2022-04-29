import coffee from '../assets/images/coffee.jpg'
import ContactForm from './Form'
/**
 * Renders the contact section on page
 * @function Contact
 * @returns {JSX}
 */
const Contact = () => {

    return (
      <section id="contact details" className="py-5 bg-light">
        <div className="container" >
          <div className="row mt-5">
            <div  className="col">
              <h2>Have a web design project in mind?</h2>
              <h3 className="fs-5 fw-light">Let's discuss it over a coffee!</h3>
            </div>
          </div>

          <div className="row mt-5 gy-4 gy-md-0 align-items-center">
            <div className="col-12 col-md-5">
              <img src={coffee} alt="screen showing react code" className="rounded-3 shadow w-100"/>
            </div>

            <div className="col-12 col-md-6 offset-md-1">
              <ContactForm />
            </div>
          </div>

          </div>
      </section>
    )
}

export default Contact