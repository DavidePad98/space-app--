import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navv = () => {
  return (
    <Navbar bg="black" data-bs-theme="dark" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">SPACE-art</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            to="/"
            className={
              "nav-link font-weight-bold" +
              (location.pathname === "/" ? " active" : "")
            }
          >
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navv;
