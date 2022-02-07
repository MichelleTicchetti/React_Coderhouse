import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/_styles.scss";
import { Index } from "./Components/Pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/index" element={<Index />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
