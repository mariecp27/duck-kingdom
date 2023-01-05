import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function MyNavBar() {
  return (
    <Navbar expand="lg" className="main__navbar">
      <Container fluid>
        <img src = "/duck-kingdom/assets/images/full-logo.png" alt = "Logo" className = "navbar__logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center flex-md-row justify-content-md-around navbar__links"
          >
            <Nav.Link href="#">Todos los patitos</Nav.Link>
            <Nav.Link href="#">Series</Nav.Link>
            <Nav.Link href="#">Juegos</Nav.Link>
            <Nav.Link href="#">Divertidos</Nav.Link>
            <CartWidget />
          </Nav>
          <Form className="d-flex navbar__form">
            <Form.Control
              type="search"
              placeholder="¿Qué patito buscas?"
              className="me-2"
              aria-label="Search"
            />
            <Button className="navbar__button">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;