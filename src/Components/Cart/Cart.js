import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../Styles/_styles.scss";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos">
          <button class="btnCart">Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="cart-title">TU COMPRA</h2>
      <hr />

      {cart.map((item) => (
        <div key={item.id} className="compra-container">
          <div>
            <h4 className="item-title">{item.name}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.cantidad * item.price}</p>
          </div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => eliminarItem(item.id)}
            >
              <BsFillTrashFill />
            </button>
          </div>
        </div>
      ))}

      <hr />
      <h2 className="cart-total">TOTAL: ${totalCart()}</h2>

      <div className="my-2">
        <button className="btnCart" onClick={vaciarCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btnCheckOut">
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
};
