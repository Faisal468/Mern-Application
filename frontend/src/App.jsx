import React from "react";
import "./App.css";
import { Header } from "./Components/header/Header";

import { Main } from "./Components/main/Main";
import { FooterBottom } from "./Components/footerbottom/FooterBottom";
import { Footer } from "./Components/footer/Footer";

import { Outlet } from "react-router";




function App() {
return (
     <>
      <Header />
      
      <Outlet />
      <Main />
      
      <Footer />
      <FooterBottom />

    </>
  );
}

export default App;
