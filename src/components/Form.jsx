/**
 * Renders the contact form in the contact section
 * (submit button disabled)
 * @function Form
 * @returns {JSX}
 */
const ContactForm = () => {

  return (
    <form  className="row gy-4">
     
        <div className="col-12 col-sm-6">
          <label htmlFor="inputFirstName" className="form-label">First Name</label>
          <input name="inputFirstName" type="text" className="form-control" id="inputFirstName" aria-describedby="NameHelp"/>
          <div id="NameHelp" className="form-text">Use only letters</div>
        </div>

        <div className="col-12 col-sm-6">
          <label htmlFor="inputLastName" className="form-label">Last Name</label>
          <input name="inputLastName" type="text" className="form-control" id="inputLastName" aria-describedby="NameHelp"/>
        </div>

        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input name="inputEmail" type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="col-12">
          <label htmlFor="formControlTextarea" className="form-label" aria-describedby="textareaHelp">Message</label>
          <textarea name="formControlTextarea" className="form-control" id="formControlTextarea" rows="3"></textarea>
          <div id="textareaHelp" className="form-text">Write a short message</div>
        </div>

        <div className="col-12">
          <button type="submit"  disabled className="btn btn-primary w-100">Submit</button>
        </div>

    </form>

  )
}

export default ContactForm

