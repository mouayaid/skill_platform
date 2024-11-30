import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import './Footer.css'; // Import your custom CSS for styling

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Navbar.Brand className="footer-brand" href="#home">iQBoost</Navbar.Brand>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h6>Made by:</h6>
            <ul className="footer-list">
              <li>Mouayaid Zammit Chatti</li>
              <li>Wajdi Bouon</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h6>For info:</h6>
            <ul className="footer-list">
              <li>mouayaidchatti@gmail.com</li>
              <li>bouonwajdy@gmail.com</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h6>Partners</h6>
            <ul className="footer-list">
              <li>Sololearn</li>
              <li>Udemy</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
