import "../../Styles/_styles.scss";
import { IoCartOutline } from "react-icons/io5";

export const CartWidget = () => {
  return (
    <div className="shopping-cart">
      <IoCartOutline
        style={{ color: "#8B9A46", fontSize: "2rem" }}
        alt="shopping cart widget"
        className="nav-cart-icon"
      />
    </div>
  );
};
