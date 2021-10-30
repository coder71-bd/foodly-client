import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const email = 'user3@gmail.com'; // would get from context api
  useEffect(() => {
    axios
      .get(`https://infinite-woodland-69947.herokuapp.com/order/${email}`)
      .then((response) => setMyOrders(response.data));
  }, []);
  return (
    <Row className="justify-content-evenly">
      {myOrders.map((myOrder) => (
        <MyOrderCard key={myOrder._id} myOrder={myOrder} />
      ))}
    </Row>
  );
};

export default MyOrder;
