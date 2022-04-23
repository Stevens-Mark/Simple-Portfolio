
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

/**
 * Renders a Modal for the legal notice when user clicks on it
 * @function LegalModal
 * @returns {JSX}
 */
 const LegalModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Legal Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus leo, volutpat vitae
              mi ultrices, sollicitudin blandit dui. Mauris ultricies iaculis leo id consequat. Class aptent taciti sociosqu ad
              litora torquentper conubia nostra, per inceptos himenaeos. Sed posuere risus viverra ornare porttitor. Nullam egestas
              nec libero eget sagittis. Phasellus vulputate ante a vulputate vehicula. Suspendisse nec dolor ante.</p>
           <p>Nunc auctor semper turpis. Duis quam velit, aliquam ut mi vel, sollicitudin dapibus erat.
              Etiam vitae malesuada urna. Vestibulum scelerisque lacus at molestie cursus. Donec placerat enim id enim feugiat
              gravida. Integer ut maximus libero. Nulla faucibus dolor vitae varius rutrum. Nunc neque sem, convallis id lorem quis, vulputate
              imperdieteros. Donec viverra commodo congue.</p> 
        </Modal.Body>
        <Modal.Footer>
          <p>Thank you</p>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LegalModal
