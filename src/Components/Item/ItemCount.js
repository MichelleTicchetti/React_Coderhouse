import { BtnCant } from "../Button/BtnCant";
import { useState, useEffect } from "react";

export const ItemCount = ({ initial, stock }) => {
  const [clicks, setClicks] = useState(initial);

  const addClick = () => {
    if (clicks < stock) {
      setClicks(clicks + 1);
    } else {
      setClicks(stock);
    }
  };

  const deductClick = () => {
    clicks < 1 ? setClicks(initial) : setClicks(clicks - 1);
  };

  useEffect(() => {
    console.log("Clicker actualizado");
  }, [clicks]);

  useEffect(() => {
    console.log("Clicker montado");

    return () => {
      console.log("Clicker desmontado");
    };
  }, []);

  return (
    <div className="cant-control">
      <BtnCant click={addClick}>+</BtnCant>
      <p>{clicks}</p>
      <BtnCant click={deductClick}>-</BtnCant>
    </div>
  );
};
