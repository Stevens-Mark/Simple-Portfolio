import Toast from 'react-bootstrap/Toast'
import { useState } from 'react'

const Notification = () => {
 
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
  
    return (
      <div className='row'>
        <div md={6} className="col-6 mb-2">
          <button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </div>

        <div md={6} className="col-6 mb-2">

          <button onClick={toggleShowB} className="mb-2">
            Toggle Toast <strong>without</strong> Animation
          </button>
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </div>

        <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="position-fixed bottom-0 end-0 p-3 test">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="..." />
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
        
      </div>
    )
  
}

export default Notification

