import { BtnCant } from "../Button/BtnCant";

export const ItemCount = ({ max, initial = 0, counter, setCounter }) => {
  const handleSumar = () => {
    if (counter < max) {
      setCounter(counter + 1);
    } else {
      setCounter(max);
    }
  };

  const handleRestar = () => {
    counter < 1 ? setCounter(initial) : setCounter(counter - 1);
  };

  return (
    <div className="cant-control">
      <BtnCant click={handleSumar}>+</BtnCant>
      <p>{counter}</p>
      <BtnCant click={handleRestar}>-</BtnCant>
    </div>
  );
};
