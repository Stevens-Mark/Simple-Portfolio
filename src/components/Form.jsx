/**
 * Renders the contact form in the contact section
 * (submit button disabled)
 * @function Form
 * @returns {JSX}
 */
const ContactForm = () => {

  return (

    <form>
      <div className="row">
        <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label htmlFor="inputFirstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="inputFirstName" aria-describedby="NameHelp"/>
              <div id="NameHelp" className="form-text">Use only letters</div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label htmlFor="inputLastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="inputLastName" aria-describedby="NameHelp"/>
            </div>
        </div>
      </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>

          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="formControlTextarea" className="form-label" aria-describedby="textareaHelp">Message</label>
          <textarea className="form-control" id="formControlTextarea" rows="3"></textarea>

          <div id="textareaHelp" className="form-text">Write a short message</div>
        </div>

        <button type="submit"  disabled className="btn btn-primary w-100">Submit</button>
    </form>

  )
}

export default ContactForm

