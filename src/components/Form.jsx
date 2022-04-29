import emailjs from 'emailjs-com'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { validRegex } from '../assets/data/siteData'

/**
 * Renders the contact form in the contact section
 * (submit button disabled)
 * @function Form
 * @returns {JSX}
 */
const ContactForm = () => {

   // local states
  const initialState = { name: "", email: "", message: "", }
  const errorState = { name: false, email: false, message: false, }
  const [input, setInput] = useState(initialState)
  const [disabledStatus, setDisabledStatus] = useState(false)
  const [error, setError] = useState(errorState)

  /**
   * Restricts what the user can enter in the TEXT input fields & saves to state
   * @function handleText
   * @param {object} the targeted input 
   */
  const handleText = (e) => { // permits letters only
    setInput({
      ...input,
      [e.target.id]: (e.target.value.replace(/[^a-zA-ZÀ-ÿ-.\s]/g, '')).trimStart(),
    })
  }
  
  /**
   * Simple validation check
   * @function ValidateForm
   * @returns {boolean}
   */
  const validateForm = () => {

    let name, email, message

    if (input.name.trim().length<2) { name = true }
    if (!input.email.trim().match(validRegex)) { email = true }
    if (input.message.trim().length<10) { message = true }
      
    if ( name || email|| message ) 
      {
        setError({ name, email, message })
        return false
      }
    return true
  }

    /**
   * Emails the user's form data (via emailjs) if
   * it passes the simple form validation checks
   * @function handleSubmit
   * @returns
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      setDisabledStatus(true)
      emailjs.send('service_8qn8ghr', 'template_w9casrx', input, 'rNFxVJaeHZGL2769x')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setInput(initialState)
          setError(errorState)
          setDisabledStatus(false)
        }, function(error) {
            console.log('FAILED...', error)
            setDisabledStatus(false)
        }) 
    } else 
    { 
      return
    }
  }
  

  return (
    <Form className="row gy-4"onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required 
            name='name' 
            type="text" 
            value={input.name}
            maxLength={30} 
            onChange={(e) => handleText(e)}/>
            {!error.name && <Form.Text className="text-muted">Minimum 2 letters...</Form.Text>}
            {error.name && <p>⚠️ Enter a valid name</p>}       
        </Form.Group>
            
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name='email'
            type="email"
            placeholder="name@example.com"
            value={input.email}
            onChange={(e) => setInput({...input, email: e.target.value})} />
            {!error.email && <Form.Text className="text-muted">I'll never share your email with anyone...</Form.Text>}
            {error.email && <p>⚠️ Enter a valid email address</p>} 
        </Form.Group>

        <Form.Group  controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            name='message'
            as="textarea"
            placeholder=''
            value={input.message}
            rows={3}
            maxLength={400}
            onChange={(e) => setInput({...input, message: e.target.value})} />
            {!error.message && <Form.Text className="text-muted">Write a short message...</Form.Text>}
            {error.message && <p>⚠️ Please add a real message ?</p>} 
        </Form.Group>

        <div className="col-12">
        <button variant="primary" disabled={disabledStatus} type="submit" className="btn btn-primary w-100 ">
                Submit
        </button>
        </div>
      </Form>
  )
}

export default ContactForm

