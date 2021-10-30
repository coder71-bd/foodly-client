import {
  faExclamationTriangle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const RejectOrder = ({ id, handleRejectOrder }) => {
  const [show, setShow] = useState(false);

  // handle modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* modal button */}
      <div onClick={handleShow}>
        <Button variant="danger">
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>

      {/* modal message */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-danger"
          />
          <span className="ps-2 fs-3">
            Are you sure? You want to reject this order.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <div onClick={handleClose}>
            <Button variant="danger" onClick={() => handleRejectOrder(id)}>
              Yes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RejectOrder;
