import { Link } from "react-router-dom";
import "../../Styles/_styles.scss";

export const FinalizarOrden = ({ order }) => {
  return (
    <div className="container my-5 thankYou">
      <h2>Gracias por tu compra!</h2>
      <hr />
      <h3>Tu número de orden es: {order}</h3>
      <Link to="/" className="btnCart">
        Volver
      </Link>
    </div>
  );
};
