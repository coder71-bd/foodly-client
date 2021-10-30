import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import ApproveOrder from './ApproveOrder/ApproveOrder';
import RejectOrder from './RejectOrder/RejectOrder';

const TableRow = ({ order, index, handleApproveOrder, handleRejectOrder }) => {
  const [food, setFood] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://infinite-woodland-69947.herokuapp.com/food/${order.product_id}`
      )
      .then((response) => setFood(response.data));
  }, [order.product_id]);

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
          <ApproveOrder
            id={order._id}
            handleApproveOrder={handleApproveOrder}
          />
        ) : (
          <Button variant="info">
            <FontAwesomeIcon icon={faThumbsUp} className="text-white" />
          </Button>
        )}
      </td>
      <td className="pb-2 text-center">
        <div className="me-2">
          <RejectOrder id={order._id} handleRejectOrder={handleRejectOrder} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
