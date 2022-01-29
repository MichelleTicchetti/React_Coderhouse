import "../../Styles/Styles.scss";
import { IoCartOutline } from "react-icons/io5";

export const CartWidget = () => {
  return (
    <div className="shopping-cart">
      <IoCartOutline
        style={{ color: "#fefbf3", fontSize: "1.5rem" }}
        alt="shopping cart widget"
        className="nav-cart-icon"
      />
    </div>
  );
};
