import Spinner from "react-bootstrap/Spinner";
import "../../Styles/_styles.scss";

export const SpinnerLoading = () => {
  return (
    <div className="spinner-container text-muted text-center fs-5">
      <p>Cargando...</p>
      <Spinner animation="border" variant="warning" />
    </div>
  );
};
