import "../../Styles/_styles.scss";
import ListGroup from "react-bootstrap/ListGroup";

export const Products = () => {
  return (
    <ListGroup>
      <ListGroup.Item action href="/productos/blancos">
        Blancos
      </ListGroup.Item>
      <ListGroup.Item action href="/productos/tintos">
        Tintos
      </ListGroup.Item>
      <ListGroup.Item action href="/productos/rosados">
        Rosados
      </ListGroup.Item>
      <ListGroup.Item action href="/productos/espumantes">
        Espumantes
      </ListGroup.Item>
      <ListGroup.Item action href="/productos/blends">
        Blends
      </ListGroup.Item>
    </ListGroup>
  );
};
