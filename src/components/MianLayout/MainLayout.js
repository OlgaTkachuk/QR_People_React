import React from "react";
import {BrowserRouter} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../router/Router";

export const MainLayout = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
};
