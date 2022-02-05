import "../../Styles/_styles.scss";

export const BtnCant = ({ children, click }) => {
  return (
    <button className="btn" onClick={click}>
      {children}
    </button>
  );
};
