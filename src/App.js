import { NavBar } from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Styles.scss";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Coders!" />
    </>
  );
}

export default App;
