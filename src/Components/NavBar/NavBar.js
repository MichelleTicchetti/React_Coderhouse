import { CartWidget } from "./CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <h1>Winehouse</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav">
          <Nav className="mr-auto">
            <Nav.Link href="#blancos">
              <p>Blancos</p>
            </Nav.Link>
            <Nav.Link href="#naranjos">
              <p>Naranjos</p>
            </Nav.Link>
            <Nav.Link href="#rosados">
              <p>Rosados</p>
            </Nav.Link>
            <Nav.Link href="#tintos">
              <p>Tintos</p>
            </Nav.Link>
            <Nav.Link href="#espumantes">
              <p>Espumantes</p>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
