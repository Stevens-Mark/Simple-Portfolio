import emailjs from 'emailjs-com'

/**
 * Renders the contact form in the contact section
 * (submit button disabled)
 * @function Form
 * @returns {JSX}
 */
const ContactForm = () => {

  const sendEmail = (e) => {
      e.preventDefault()
      emailjs.sendForm ('service_8qn8ghr', 'template_w9casrx', 
          e.target, 'rNFxVJaeHZGL2769x')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        e.target.reset()
     }, function(error) {
        console.log('FAILED...', error);
     });      
  }

  return (
    <form id='formData' className="row gy-4" onSubmit={sendEmail}>
     
        <div className="col-12 col-sm-6">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input name="name" type="text" className="form-control" id="name" aria-describedby="NameHelp" required/>
          <div id="NameHelp" className="form-text">Use only letters</div>
        </div>

        <div className="col-12 col-sm-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input name="lastName" type="text" className="form-control" id="lastName" aria-describedby="NameHelp" required/>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label" aria-describedby="textareaHelp">Message</label>
          <textarea name="message" className="form-control" id="message" rows="3" required></textarea>
          <div id="textareaHelp" className="form-text" >Write a short message</div>
        </div>

        <div className="col-12">
          <button type="submit"  className="btn btn-primary w-100">Submit</button>
        </div>

    </form>

  )
}

export default ContactForm

