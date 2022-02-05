import "./Styles/_styles.scss";
import { NavBar } from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting="Every day is Winesday" />
    </>
  );
}

export default App;
