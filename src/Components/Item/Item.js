import "../../Styles/_styles.scss";
import { Card } from "react-bootstrap";
import { ItemCount } from "../Item/ItemCount";
import { BtnCart } from "../Button/BtnCart";
import { Btn } from "../Button/Btn";
import { Link } from "react-router-dom";

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
    <Card style={{ width: "16rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} style={{ marginTop: "10px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Btn />
        </Link>
        <ItemCount initial={0} stock={stock} />
      </Card.Body>
      <BtnCart />
    </Card>
  );
};
