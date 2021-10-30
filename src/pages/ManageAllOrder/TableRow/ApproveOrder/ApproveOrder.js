import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ApproveOrder = ({ id, handleApproveOrder }) => {
  const [show, setShow] = useState(false);

  // handle modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* modal button */}
      <div onClick={handleShow}>
        <Button variant="success">approve</Button>
      </div>

      {/* modal message */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ color: 'green' }}
          />
          <span className="ps-2 fs-3">Do you want to approve this order?</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <div onClick={handleClose}>
            <Button variant="danger" onClick={() => handleApproveOrder(id)}>
              Yes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApproveOrder;
