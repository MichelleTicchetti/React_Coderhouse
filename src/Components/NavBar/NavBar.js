import "../../Styles/Styles.scss";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <header className="header">
      <a className="navbar-brand" href="#">
        <h1>WINEHOUSE</h1>
      </a>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
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
        </div>
      </nav>
    </header>
  );
};
