import { NavBar } from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Coders!" />
    </>
  );
}

export default App;
