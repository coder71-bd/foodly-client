import {
  faExclamationTriangle,
  faThumbsUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const TableRow = ({ order, index }) => {
  const [food, setFood] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://infinite-woodland-69947.herokuapp.com/food/${order.product_id}`
      )
      .then((response) => setFood(response.data));
  }, [order.product_id]);

  // reject modal
  const messageOfReject = (
    <div>
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger" />
      <span className="ps-2 fs-3">
        Are you sure? You want to reject this order.
      </span>
    </div>
  );

  const buttonIconOfReject = (
    <Button variant="danger">
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  );

  // approval modal
  const messageOfApproval = (
    <div>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        style={{ color: 'green' }}
      />
      <span className="ps-2 fs-3">Do you want to approve this order.</span>
    </div>
  );

  const buttonIconOfApproval = <Button variant="success">approve</Button>;

  return (
    <tr>
      <td className="py-4 text-center">{index + 1}</td>
      <td className="pb-2">
        <div className="ms-4">
          <div>{order.user_name}</div>
          <div>{order.email}</div>
        </div>
      </td>
      <td className="pb-2 " style={{ whiteSpace: 'nowrap' }}>
        <div className="d-flex align-items-center">
          <div
            style={{
              height: 'height: 2.5rem',
              width: '2.5rem',
              flexShrink: 0,
            }}
          >
            <img
              className="rounded-circle"
              src={food.image}
              alt={food.name}
              style={{ width: '2.5rem', height: '2.5rem' }}
            />
          </div>
          <div className="ms-4">
            <div style={{ fontSize: '.875rem', lineHeight: '1.5rem' }}>
              {food.name}
            </div>
            <div style={{ fontSize: '.875rem', lineHeight: '1.5rem' }}>
              ordered on {order.order_time}
            </div>
          </div>
        </div>
      </td>
      <td className="pb-2 text-center">
        {order.status === 'pending' ? (
          <Badge bg="danger" className="mt-3">
            {order.status}
          </Badge>
        ) : (
          <Badge bg="info" className="mt-3">
            {order.status}
          </Badge>
        )}
      </td>
      <td className="pb-2 text-center">
        {order.status === 'pending' ? (
          <ConfirmModal
            message={messageOfApproval}
            buttonIcon={buttonIconOfApproval}
          />
        ) : (
          <Button variant="success">
            <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
        )}
      </td>
      <td className="pb-2 text-center">
        <div className="me-2">
          <ConfirmModal
            message={messageOfReject}
            buttonIcon={buttonIconOfReject}
          />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
