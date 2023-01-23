import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavoritesContext } from "../../context/FavoritesContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import Modal from "../Modal/Modal";

function MyNavBar() {

  const { favorites } = useFavoritesContext();

  const navigate = useNavigate();
  const activeClassName = "activeLink";
  const [searchInput, setSearchInput] = useState('');
	const [modalStatus, setModalStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/duck-kingdom/search/${searchInput}`);
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleModal = () => {
    setModalStatus(!modalStatus);
  }
  
  return (
    <div>
      <Navbar expand="lg" className="main__navbar">
        <Container fluid>
          <Link to={"/duck-kingdom"}>
            <img src={process.env.PUBLIC_URL + "/assets/images/full-logo.png"} alt = "Logo" className = "navbar__logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center flex-md-row justify-content-md-around navbar__links"
            >
              <NavLink
                to={"/duck-kingdom/products"}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                >Todos los patitos
              </NavLink>
              <NavLink
                to={"/duck-kingdom/category/comics"}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                >Patitos de comics
              </NavLink>
              <NavLink
                to={"/duck-kingdom/category/games"}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                >Patitos de juegos
              </NavLink>
              <NavLink
                to={"/duck-kingdom/category/movies"}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                >Patitos de películas
              </NavLink>
              <Button className="navbar__favorites" onClick={handleModal}>
                <FontAwesomeIcon
                  icon={ faHeart }
                  className={favorites.length > 0 ? 'active' : ''}
                /> Favoritos
              </Button>
              <CartWidget />
            </Nav>
            <Form className="d-flex navbar__form" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="¿Qué patito buscas?"
                className="me-2"
                aria-label="Search"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <Button className="navbar__button" type="submit">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
      />
    </div>
  );
}

export default MyNavBar;