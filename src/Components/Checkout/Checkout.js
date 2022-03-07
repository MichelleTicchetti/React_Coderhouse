import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { generarOrden } from "../../Firebase/GenerateOrder";
import { FinalizarOrden } from "./FinalizedCheckout";
import { validar } from "./Validate";

export const Checkout = () => {
  const { cart, totalCart, vaciarCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validar(values) &&
      generarOrden(values, cart, totalCart, setOrderId, vaciarCart);
  };

  if (orderId) {
    return <FinalizarOrden order={orderId} />;
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Finalizar Compra</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-3"
          type="text"
          placeholder="Tu nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />
        <input
          className="form-control my-3"
          type="email"
          placeholder="Tu email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          className="form-control my-3"
          type="tel"
          placeholder="Tu teléfono"
          value={values.tel}
          onChange={handleInputChange}
          name="tel"
        />

        <button type="submit" className="btnCart">
          Enviar
        </button>
      </form>
    </div>
  );
};
