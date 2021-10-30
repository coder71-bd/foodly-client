import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const email = 'user3@gmail.com'; // would get from context api
  useEffect(() => {
    fetch(`https://infinite-woodland-69947.herokuapp.com/order/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
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
