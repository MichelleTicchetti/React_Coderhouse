import "../../Styles/_styles.scss";
import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  id,
  name,
  img,
  desc,
  price,
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
    <section className="itemDetail">
      <Card style={{ width: "16rem", margin: "10px" }}>
        <Card.Img variant="top" src={img} style={{ marginTop: "10px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Precio: ${price}</p>
          </Card.Text>
        </Card.Body>

        {isInCart(id) ? (
          <div className="btn-container">
            <Link to="/cart">
              <button class="btnCart">Ir al carrito</button>
            </Link>
            <Link to="/productos">
              <button class="btnCart">Continuar comprando</button>
            </Link>
          </div>
        ) : (
          <>
            <ItemCount
              max={stock}
              counter={cantidad}
              setCounter={setCantidad}
            />
            <div className="btnCart-container d-grid gap-2">
              <button class="btnCart" size="lg" onClick={handleAgregar}>
                Agregar al carrito
              </button>
            </div>
          </>
        )}
      </Card>
      <Card style={{ width: "16rem", margin: "10px" }}>
        <Card.Body>
          <Card.Text>
            <p>{desc}</p>
            <p>Categoria: {categoria}</p>
            <p>Variedad: {subcategoria}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};
