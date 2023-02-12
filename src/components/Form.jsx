import PropTypes from 'prop-types'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { validRegex } from '../assets/data/otherData'
// import Toast Notification component
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * Renders the contact form in the contact section
 * (submit button disabled)
 * @function Form
 * @param {object} siteText
 * @returns {JSX}
 */
const ContactForm = ( { siteText } ) => {

  const { name, namePrompt, nameError, email, emailPrompt, 
          emailError, message, messagePrompt, messageError, submit } = siteText.form
  const { success, fail } = siteText.toast

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
   * Displays success or fail toast notification
   * @functions notifySuccess & notifyError
   * @returns {JSX} Toast Notification
   */
  const notifySuccess = () => toast.success(`${success}`, {
    theme: "colored"
    });

  const notifyError = () => toast.error(`${fail}`, {
    theme: "colored"
    });

  /**
   * Emails the user's form data (via emailjs) if
   * it passes the simple form validation checks
   * @function handleSubmit
   * @returns ...
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      setDisabledStatus(true)
      emailjs.send('service_jz4n8kk', 'template_w9casrx', input, 'rNFxVJaeHZGL2769x')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setInput(initialState)
          setError(errorState)
          setDisabledStatus(false)
          notifySuccess()
        }, function(error) {
            console.log('FAILED...', error)
            setDisabledStatus(false)
            notifyError()
        }) 
    } else 
    { 
      return
    }
  }
  
  return (
    <>
      <Form className="row gy-4"onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>{name}</Form.Label>
          <Form.Control
            required 
            name='name' 
            type="text" 
            value={input.name}
            maxLength={30} 
            onChange={(e) => handleText(e)}/>
            {!error.name && <Form.Text className="text-muted">{namePrompt}</Form.Text>}
            {error.name && <p>{nameError}</p>}       
        </Form.Group>
            
        <Form.Group controlId="email">
          <Form.Label>{email}</Form.Label>
          <Form.Control
            required
            name='email'
            type="email"
            placeholder="name@example.com"
            value={input.email}
            onChange={(e) => setInput({...input, email: e.target.value})} />
            {!error.email && <Form.Text className="text-muted">{emailPrompt}</Form.Text>}
            {error.email && <p>{emailError}</p>} 
        </Form.Group>

        <Form.Group  controlId="message">
          <Form.Label>{message}</Form.Label>
          <Form.Control
            required
            name='message'
            as="textarea"
            placeholder=''
            value={input.message}
            rows={3}
            maxLength={400}
            onChange={(e) => setInput({...input, message: e.target.value})} />
            {!error.message && <Form.Text className="text-muted">{messagePrompt}</Form.Text>}
            {error.message && <p>{messageError}</p>} 
        </Form.Group>

        <div className="col-12">
        <button variant="primary" disabled={disabledStatus} type="submit" className="btn btn-primary w-100 ">
                {submit}
        </button>
        </div>
      </Form>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "20px" }} />
    </>
  )
}

export default ContactForm

// Prototypes
ContactForm.propTypes = {
  siteText: PropTypes.object.isRequired,
}


