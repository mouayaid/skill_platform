import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import "./Navbar.css";
function Naavbar() {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand className="title">
         <Nav.Link as={Link} to='/'> iQBoost</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ms-lg-5 me-lg-auto">
            <li className="nav-item">
              <Nav.Link
                className="nav-link  active custom-nav-item"
                href="#home"
              >
                Offers
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                className="nav-link  active custom-nav-item"
                href="#home"
              >
                FORMATIONS
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                className="nav-link  active custom-nav-item"
                href="#home"
              >
                Contact us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                className="nav-link  active custom-nav-item"
                href="#home"
              >
                About us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                className="nav-link  active custom-nav-item"
                href="#home"
              >
                QUIZ!!
              </Nav.Link>
            </li>
          </ul>
          <Nav className="ms-auto top-right-btn">
          <Nav.Link as={Link} to="/Login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block custom-hover">
            Join Now <i className="fa fa-arrow-right ms-3"></i>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
