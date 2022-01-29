import "../../Styles/Styles.scss";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <header className="header container-fluid">
      <a className="navbar-brand" href="#">
        <h1>WINEHOUSE</h1>
      </a>
      <nav className="header-nav">
        <p className="nav-link">
          <h3>Blancos</h3>
        </p>
        <p className="nav-link">
          <h3>Naranjos</h3>
        </p>
        <p className="nav-link">
          <h3>Rosados</h3>
        </p>
        <p className="nav-link">
          <h3>Tintos</h3>
        </p>
        <p className="nav-link">
          <h3>Espumantes</h3>
        </p>
        <p className="nav-link">
          <h3>
            <CartWidget />
          </h3>
        </p>
      </nav>
    </header>
  );
};
