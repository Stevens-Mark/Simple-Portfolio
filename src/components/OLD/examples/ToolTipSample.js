

import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
function Tool() {
  return (
    <div>
      
      <OverlayTrigger
          placement={'bottom'}
          overlay={
            <Tooltip>
              Tooltip Bottom
            </Tooltip>
          }
        >
        <Button variant="danger">Bottom</Button>
      </OverlayTrigger>


      <OverlayTrigger
          placement={'top'}
          overlay={
            <Tooltip>
              Tooltip Top
            </Tooltip>
          }
        >
        <Button variant="danger">Top</Button>
      </OverlayTrigger>
      <OverlayTrigger
          placement={'left'}
          overlay={
            <Tooltip>
              Tooltip Left
            </Tooltip>
          }
        >
        <Button variant="danger">Left</Button>
      </OverlayTrigger>
      <OverlayTrigger
          placement={'right'}
          overlay={
            <Tooltip>
              Tooltip Right
            </Tooltip>
          }
        >
        <Button variant="danger">Right</Button>
      </OverlayTrigger>
    </div>
  );
}
export default Tool