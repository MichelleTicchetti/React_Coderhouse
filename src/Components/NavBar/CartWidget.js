import { IoCartOutline } from "react-icons/io5";
import "../NavBar/CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="shopping-cart">
      <IoCartOutline
        style={{ color: "#8c734b", fontSize: "1.5rem" }}
        alt="shopping cart widget"
        className="nav-cart-icon"
      />
    </div>
  );
};
