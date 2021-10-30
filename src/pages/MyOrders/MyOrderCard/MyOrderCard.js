import {
  faClock,
  faExclamationTriangle,
  faSkullCrossbones,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const MyOrderCard = ({ myOrder }) => {
  const [food, setFood] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://infinite-woodland-69947.herokuapp.com/food/${myOrder.product_id}`
      )
      .then((response) => setFood(response.data));
  }, [myOrder.product_id]);

  const message = (
    <div>
      <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'red' }} />
      <span className="ps-2 fs-3">
        Are you sure? You want to cancel the order.
      </span>
    </div>
  );

  const buttonIcon = (
    <Button variant="danger">
      <span className="pe-2">Cancel</span>
      <FontAwesomeIcon icon={faSkullCrossbones} />
    </Button>
  );

  return (
    <Card style={{ maxWidth: '35rem' }} className="rounded-3 my-3 px-md-0 px-3">
      <div className="d-flex justify-content-between aligin-items-center my-2">
        <Card.Text>
          <FontAwesomeIcon icon={faClock} style={{ color: '#F50EBB' }} />
          <span className="ps-2" style={{ color: '#F50EBB' }}>
            {myOrder.order_time}
          </span>
        </Card.Text>
        <div className="text-center">
          {myOrder.status === 'pending' ? (
            <ConfirmModal message={message} buttonIcon={buttonIcon} />
          ) : (
            <Button variant="success">
              <FontAwesomeIcon icon={faThumbsUp} />
            </Button>
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
            style={{ borderRadius: '10%' }}
            className="img-fluid mt-2"
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
