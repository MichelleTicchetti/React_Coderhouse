import "../../Styles/_styles.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCount } from "../Item/ItemCount";
import { BtnCart } from "../Button/BtnCart";
import { Button } from "bootstrap";

export const Item = ({
  id,
  name,
  price,
  img,
  stock,
  categoria,
  subcategoria,
}) => {
  return (
    <Card style={{ width: "16rem", margin: "5px" }}>
      <Card.Img variant="top" src={img} style={{ marginTop: "10px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <ItemCount initial={0} stock={stock} />
      </Card.Body>
      <BtnCart />
    </Card>
  );
};
