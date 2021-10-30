import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = ({ message, buttonIcon }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* modal button */}
      <div onClick={handleShow}>{buttonIcon}</div>

      {/* modal message */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
