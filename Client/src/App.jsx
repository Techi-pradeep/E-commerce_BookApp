import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* npm i react-router-dom@6.0.2 */

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Single_product from "./pages/Single_product";
import ErrorPage from "./pages/ErrorPage";


import Header from "./Components/Header";
import Footer from "./components/Footer";

// import {Home, About,Products, Contact, SingleProduct, ErrorPage} from "./Pages";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single_product/:id" element={<Single_product/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer/>
    </React.Fragment>
  );
};

export default App;
