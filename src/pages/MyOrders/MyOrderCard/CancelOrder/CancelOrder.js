import {
  faExclamationTriangle,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CancelOrder = ({ id, handleCancel }) => {
  const [show, setShow] = useState(false);

  // handle modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* modal button */}
      <div onClick={handleShow}>
        <Button variant="danger">
          <span className="pe-2">Cancel</span>
          <FontAwesomeIcon icon={faSkullCrossbones} />
        </Button>
      </div>

      {/* modal message */}
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
          <div onClick={handleClose}>
            <Button variant="danger" onClick={() => handleCancel(id)}>
              Yes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CancelOrder;
