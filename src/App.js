import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/_styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/*</Footer>*/}
      </BrowserRouter>
    </>
  );
}

export default App;
