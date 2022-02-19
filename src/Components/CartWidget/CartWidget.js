import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { IoCartOutline } from "react-icons/io5";

export const CartWidget = () => {
  const { cantidadCart, totalCart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <div className="cart-icon">
        <IoCartOutline alt="shopping cart widget" className="nav-cart-icon" />
      </div>
      <div className="cart-counter">
        <span className="cartCounter">{cantidadCart()}</span>
      </div>
      <div className="cart-total">
        <span className="cartTotal">Total: ${totalCart()}</span>
      </div>
    </Link>
  );
};
