import "../../Styles/_styles.scss";
import { Contenedor } from "../../Helpers/Contenedor/Contenedor";
import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <Contenedor>
      <div className="row justify-content-center">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </Contenedor>
  );
};
