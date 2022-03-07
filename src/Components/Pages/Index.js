import "../../Styles/_styles.scss";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <main class="main">
      <div class="ppal-image">
        <div class="img-text">
          <h1>Winehouse</h1>
          <Link to={`productos/`}>
            <button class="btnEnter">Ver Productos</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
