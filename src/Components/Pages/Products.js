import "../../Styles/_styles.scss";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div className="list-products ppal-image">
      <h1>Nuestros Vinos</h1>
      <hr />
      <Link to="/productos/blancos">
        <h2>Blancos</h2>
      </Link>
      <Link to="/productos/tintos">
        <h2>Tintos</h2>
      </Link>
      <Link to="/productos/rosados">
        <h2>Rosados</h2>
      </Link>
      <Link to="/productos/espumantes">
        <h2>Espumantes</h2>
      </Link>
      <Link to="/productos/blends">
        <h2>Blends</h2>
      </Link>
    </div>
  );
};
