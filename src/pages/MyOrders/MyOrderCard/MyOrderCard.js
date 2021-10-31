import {
  faClock,
  faSkullCrossbones,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import CancelOrder from './CancelOrder/CancelOrder';

const MyOrderCard = (props) => {
  const { myOrder, handleCancel } = props;

  const [food, setFood] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://infinite-woodland-69947.herokuapp.com/food/${myOrder.product_id}`
      )
      .then((response) => setFood(response.data));
  }, [myOrder.product_id]);

  const cancelOrderButton = (
    <Button variant="danger" className="me-3">
      <span className="pe-2">Cancel</span>
      <FontAwesomeIcon icon={faSkullCrossbones} />
    </Button>
  );
  const cancelOrderMessage = 'Are you sure? You want to cancel this order.';
  const deleteOrderButton = (
    <Button variant="warning" className="me-3">
      <FontAwesomeIcon icon={faTrashAlt} className="text-primary" />
    </Button>
  );
  const deleteOrderMessage = 'do you want to delete this';

  return (
    <Card
      style={{ maxWidth: '35rem' }}
      className="rounded-3 my-3 px-md-0 px-3 me-3"
    >
      <div className="d-flex justify-content-between aligin-items-center my-2">
        <Card.Text className="ms-3">
          <FontAwesomeIcon icon={faClock} style={{ color: '#F50EBB' }} />
          <span className="ps-2" style={{ color: '#F50EBB' }}>
            {myOrder.order_time}
          </span>
        </Card.Text>
        <div className="text-center">
          {myOrder.status === 'pending' ? (
            <CancelOrder
              id={myOrder._id}
              handleCancel={handleCancel}
              cancelOrderButton={cancelOrderButton}
              cancelOrderMessage={cancelOrderMessage}
            />
          ) : (
            <CancelOrder
              id={myOrder._id}
              handleCancel={handleCancel}
              cancelOrderButton={deleteOrderButton}
              cancelOrderMessage={deleteOrderMessage}
            />
          )}
        </div>
      </div>
      <Row className="align-items-start">
        <Col xs={12} sm>
          <Card.Body>
            <Card.Title>{food.name}</Card.Title>

            <Card.Text>
              price: <span className="text-primary fw-bold">${food.price}</span>
            </Card.Text>
            <Card.Text>
              <span className="pe-2">Status:</span>
              <Badge bg={myOrder.status === 'pending' ? 'danger' : 'success'}>
                {myOrder.status}
              </Badge>
            </Card.Text>
            <Card.Text
              className="d-flex align-items-center"
              style={{ fontSize: 11 }}
            >
              <span className="pe-2">Order Id:</span>
              <span>{myOrder._id}</span>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col xs={12} sm>
          <Card.Img
            className="img-fluid mt-2 pe-3 pb-3 rounded-3"
            variant="top"
            src={food.image}
            alt={food.name}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default MyOrderCard;
