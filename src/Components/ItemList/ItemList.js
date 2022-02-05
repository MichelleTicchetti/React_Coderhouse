import "../../Styles/_styles.scss";
import { Contenedor } from "../../Helpers/Contenedor/Contenedor";
import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <Contenedor>
      <div className="row m-2 justify-content-center">
        {productos.map((element) => (
          <Item key={element.id} {...element} />
        ))}
      </div>
    </Contenedor>
  );
};
