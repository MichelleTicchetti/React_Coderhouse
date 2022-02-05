export const ItemDetail = ({ id, name, img, desc, price, stock, cat }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{desc}</p>
      <h5>Precio: ${price}</h5>

      {/* CONTADOR */}
    </div>
  );
};
