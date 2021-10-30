import {
  faExclamationTriangle,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <span className="pe-2">Cancel</span>
        <FontAwesomeIcon icon={faSkullCrossbones} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ color: 'red' }}
          />
          <span className="ps-2 fs-3">
            Are you sure? You want to cancel the order.
          </span>
        </Modal.Body>
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
