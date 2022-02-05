import "../../Styles/_styles.scss";
import { Card } from "react-bootstrap";
import { ItemCount } from "../Item/ItemCount.js";

export const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <Card style={{ width: "16rem", margin: "5px" }}>
      <Card.Img variant="top" src={img} style={{ marginTop: "10px" }} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        <ItemCount initial={0} stock={stock} />
      </Card.Body>
      <div className="btnCart-container d-grid gap-2">
        <button class="btnCart" size="lg">
          Agregar al carrito
        </button>
      </div>
    </Card>
  );
};
