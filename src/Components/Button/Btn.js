import "../../Styles/_styles.scss";

export const Btn = ({ children, click }) => {
  return (
    <div className="btn-container d-grid gap-2">
      <button class="btnMore" size="lg">
        Ver más
      </button>
    </div>
  );
};
