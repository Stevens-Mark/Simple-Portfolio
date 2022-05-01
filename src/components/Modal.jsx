
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'

/**
 * Renders a Modal for the legal notice when user clicks on it
 * @function LegalModal
 * @param {boolean} show (state: true/false) to display modal
 * @param {function} setShow (function to set modals state)
 * @param {object} siteText
 * @returns {JSX}
 */
 const LegalModal = ( { show, setShow, siteText } ) => {

  const handleClose = () => setShow(false)
  const { title, paragraph1, paragraph2,paragraph3, paragraph4, thanks } = siteText.modal

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p> 
          <p>{paragraph3}</p>
          <p>{paragraph4}</p> 
        </Modal.Body>
        <Modal.Footer>
          <p>{thanks}</p>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LegalModal

// Prototypes
LegalModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  siteText: PropTypes.object.isRequired,
}
