import { CartWidget } from "../CartWidget/CartWidget";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <NavLink to="/" className="header-link-brand">
            <h1>Winehouse</h1>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav">
          <Nav className="mr-auto nav-links">
            <NavLink to="/productos/blancos" className="header-link">
              Blancos
            </NavLink>
            <NavLink to="/productos/rosados" className="header-link">
              Rosados
            </NavLink>
            <NavLink to="/productos/tintos" className="header-link">
              Tintos
            </NavLink>
            <NavLink to="/productos/blends" className="header-link">
              Blends
            </NavLink>
            <NavLink to="/productos/espumantes" className="header-link">
              Espumantes
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="#" className="header-link">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
