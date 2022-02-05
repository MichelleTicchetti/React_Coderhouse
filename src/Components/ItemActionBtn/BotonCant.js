import "../../Styles/_styles.scss";

export const BotonCant = ({ children, click }) => {
  return (
    <button className="btn" onClick={click}>
      {children}
    </button>
  );
};
