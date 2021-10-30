import { Accordion, Col, Container, Row } from 'react-bootstrap';
import faq from '../../../images/faq.png';

const Faq = () => {
  return (
    <Container className="my-3">
      <h3 className="text-center text-primary">Frequently Asked Questions</h3>

      <Row className="align-items-center">
        {/* faqs */}
        <Col xs={12} lg>
          <Accordion defaultActiveKey="0">
            {/* faq 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>What if we reject your order.</Accordion.Header>
              <Accordion.Body>
                Don't worry about it. If you give wrong information about your
                address or credit card, we can reject your order. But if it's
                our mistake, we are sorry for that inconvenience. You can
                contact with our customer care service. They will help you to
                get your money back or you can order again.
              </Accordion.Body>
            </Accordion.Item>

            {/* faq 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What if I didn't recieve my delivered food.
              </Accordion.Header>
              <Accordion.Body>
                We are extremely sorry for that. But nothing to worry about it.
                Just inform us That you didn't recieve the ordered food. We will
                take necessary action.
              </Accordion.Body>
            </Accordion.Item>

            {/* faq 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can I get the food ordered in less than an hour
              </Accordion.Header>
              <Accordion.Body>
                Yes you can. It is possible beacuse our branches are located in
                many areas. When you order something from us. We inform our
                local branches that are situated near you. They will deliver
                your ordered food.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* faq image */}
        <Col xs={12} lg>
          <img className="img-fluid" src={faq} alt="faq" />
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
