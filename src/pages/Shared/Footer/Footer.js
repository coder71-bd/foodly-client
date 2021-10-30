import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import appstore from '../../../images/footer-icons/appstore.png';
import playtore from '../../../images/footer-icons/playstore.png';

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark text-white py-3">
        <div className="d-flex felx-wrap justify-content-evenly">
          <div>
            <h2 className="mb-3 text-warning">Foodly</h2>
            <div>
              <FontAwesomeIcon
                icon={faFacebook}
                className="me-3 mb-2"
                style={{
                  color: '#0855d1',
                  fontSize: 25,
                  cursor: 'pointer',
                }}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="me-3 mb-2"
                style={{
                  color: '#c40c06',
                  fontSize: 25,
                  cursor: 'pointer',
                }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="me-3 mb-2"
                style={{
                  color: '#3d99f5',
                  fontSize: 25,
                  cursor: 'pointer',
                }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="me-3 mb-2"
                style={{
                  color: '#6451f5',
                  fontSize: 25,
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* footer icons */}
          <div>
            <img src={appstore} alt="appstore" width="135" />
            <br />
            <img className="mt-3" src={playtore} alt="playstore" width="135" />
          </div>
        </div>
        {/* copywright */}
        <p className="text-center mt-3">
          &copy;2021. All rights reserved by Foodly
        </p>
      </Container>
    </div>
  );
};

export default Footer;
