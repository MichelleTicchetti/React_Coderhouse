import { BotonCant } from "../ItemActionBtn/BotonCant";
import { useState, useEffect } from "react";

export const ItemCount = ({ initial, stock }) => {
  const [clicks, setClicks] = useState(initial);

  const sumarClick = () => {
    if (clicks < stock) {
      setClicks(clicks + 1);
    } else {
      setClicks(stock);
    }
  };

  const restarClick = () => {
    clicks < 1 ? setClicks(initial) : setClicks(clicks - 1);
  };

  useEffect(() => {
    console.log("Clicker actualizado");
  }, []);

  return (
    <div className="cant-control">
      <BotonCant click={sumarClick}>+</BotonCant>
      <p>{clicks}</p>
      <BotonCant click={restarClick}>-</BotonCant>
    </div>
  );
};
