import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import appstore from '../../../images/footer-icons/appstore.png';
import playtore from '../../../images/footer-icons/playstore.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-3 text-warning">Foodly</h2>
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="me-3"
                  style={{
                    color: '#0855d1',
                    fontSize: 25,
                    cursor: 'pointer',
                  }}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="me-3"
                  style={{
                    color: '#c40c06',
                    fontSize: 25,
                    cursor: 'pointer',
                  }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="me-3"
                  style={{
                    color: '#3d99f5',
                    fontSize: 25,
                    cursor: 'pointer',
                  }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="me-3"
                  style={{
                    color: '#6451f5',
                    fontSize: 25,
                    cursor: 'pointer',
                  }}
                />
              </div>
            </Col>

            {/* footer icons */}
            <Col>
              <img src={appstore} alt="appstore" width="135" />
              <img
                className="mt-3"
                src={playtore}
                alt="playstore"
                width="135"
              />
            </Col>
          </Row>

          {/* copywright */}
          <p className="text-center mt-3">
            &copy;2021. All rights reserved by Foodly
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
