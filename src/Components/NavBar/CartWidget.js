import "../../Styles/Styles.scss";
import { IoCartOutline } from "react-icons/io5";

export const CartWidget = () => {
  return (
    <div className="shopping-cart">
      <IoCartOutline
        style={{ color: "#abb8c3", fontSize: "1.5rem" }}
        alt="shopping cart widget"
        className="nav-cart-icon"
      />
    </div>
  );
};
