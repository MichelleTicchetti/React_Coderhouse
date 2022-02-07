import "../../Styles/_styles.scss";
import { Card } from "react-bootstrap";
import { ItemCount } from "../Item/ItemCount";
import { BtnCart } from "../Button/BtnCart";

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
  return (
    <section className="itemDetail">
      <Card style={{ width: "16rem", margin: "10px" }}>
        <Card.Img variant="top" src={img} style={{ marginTop: "10px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Precio: ${price}</p>
          </Card.Text>
          <ItemCount initial={0} stock={stock} />
        </Card.Body>
        <BtnCart />
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
