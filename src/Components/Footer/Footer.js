import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Navbar className="footer">
        <Navbar.Brand>
          <NavLink to="/" className="footer-link-brand">
            <h1>Winehouse</h1>
          </NavLink>
        </Navbar.Brand>
        <h1>by Michelle Ticchetti</h1>
      </Navbar>
    </footer>
  );
};
