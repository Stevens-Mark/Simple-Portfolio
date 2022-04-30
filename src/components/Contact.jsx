import PropTypes from 'prop-types'
import coffee from '../assets/images/coffee.jpg'
import ContactForm from './Form'
/**
 * Renders the contact section on page
 * @function Contact
 * @param {object} siteText
 * @returns {JSX}
 */
const Contact = ( { siteText } ) => {

  const { title, subheading1 } = siteText.portfolio

    return (
      <section id="contact details" className="py-5 bg-light">
        <div className="container" >
          <div className="row mt-5">
            <div  className="col">
              <h2>{title}</h2>
              <h3 className="fs-5 fw-light">{subheading1}</h3>
            </div>
          </div>

          <div className="row mt-5 gy-4 gy-md-0 align-items-center">
            <div className="col-12 col-md-5">
              <img src={coffee} alt="screen showing react code" className="rounded-3 shadow w-100"/>
            </div>

            <div className="col-12 col-md-6 offset-md-1">
              <ContactForm siteText={siteText} />
            </div>
          </div>

          </div>
      </section>
    )
}

export default Contact

// Prototypes
Contact.propTypes = {
  siteText: PropTypes.object.isRequired,
}