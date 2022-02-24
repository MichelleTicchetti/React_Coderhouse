import "../../Styles/_styles.scss";
import { Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { Btn } from "../Button/Btn";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const Item = ({
  id,
  name,
  price,
  img,
  stock,
  categoria,
  subcategoria,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    if (cantidad === 0) return;

    if (!isInCart(id)) {
      const addItem = {
        id,
        name,
        price,
        stock,
        cantidad,
      };

      agregarAlCarrito(addItem);
    }
  };

  return (
    <Card style={{ width: "16rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} style={{ marginTop: "10px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Btn />
        </Link>
      </Card.Body>
      {isInCart(id) ? (
        <div className="btn-container">
          <Link to="/cart">
            <button class="btnCart">Ir al carrito</button>
          </Link>
        </div>
      ) : (
        <>
          <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />

          <div className="btnCart-container d-grid gap-2">
            <button class="btnCart" size="lg" onClick={handleAgregar}>
              Agregar al carrito
            </button>
          </div>
        </>
      )}
    </Card>
  );
};
