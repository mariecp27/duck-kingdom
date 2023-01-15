import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";

function MyNavBar() {

  const productName = useRef();
  const navigate = useNavigate();
  const activeClassName = "activeLink";
  
  const handleSearch = () => {
    navigate(`/search/${productName.current.value}`);
  }

  const handleAvoidReload = (e) => {
    if (e.keyCode === 13 ) {
      e.preventDefault();
      handleSearch();
    }  
  }
  
  return (
    <Navbar expand="lg" className="main__navbar">
      <Container fluid>
        <Link to={"/"}>
          <img src={process.env.PUBLIC_URL + "/assets/images/full-logo.png"} alt = "Logo" className = "navbar__logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center flex-md-row justify-content-md-around navbar__links"
          >
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >Todos los patitos
            </NavLink>
            <NavLink
              to={"/category/comics"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >Patitos de comics
            </NavLink>
            <NavLink
              to={"/category/games"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >Patitos de juegos
            </NavLink>
            <NavLink
              to={"/category/movies"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >Patitos de películas
            </NavLink>
            <CartWidget />
          </Nav>
          <Form className="d-flex navbar__form">
            <Form.Control
              type="search"
              placeholder="¿Qué patito buscas?"
              className="me-2"
              aria-label="Search"
              ref = {productName}
              onKeyDown = {handleAvoidReload}
            />
            <Button className="navbar__button" onClick={handleSearch}>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;