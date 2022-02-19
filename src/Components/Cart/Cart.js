import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import "../../Styles/_styles.scss";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

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
        <button className="btn btn-danger" onClick={vaciarCart}>
          Vaciar carrito
        </button>
        <button className="btn btn-success mx-2">Terminar mi compra</button>
      </div>
    </div>
  );
};
