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

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderHistory from "./pages/OrderHistory";

import PrivateRoutes from "./auth/PrivateRoutes";
import AuthProvider from "./auth/AuthProvider";
import {SearchProvider} from "./SearchFeature/SearchContext"

// import {Home, About,Products, Contact, SingleProduct, ErrorPage} from "./Pages";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        
        <AuthProvider>
          <SearchProvider>
          <Header />
          </SearchProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
            {/* PrivateRoutes holds "Outlet" which is parrent of following components & if outlet is true when user is authenticated than 
              child components will be routed otherwise navigate to "/login" route */}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders/:userId" element={<OrderHistory />} />

              <Route path="/products" element={<Products />} />
              
              <Route path="/single_product/:id" element={<Single_product />} />
            </Route>
            {/* ----------Public routes----------  */}
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/logout" element={<LogIn />} />

            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<ErrorPage />} />

         
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
      
    </React.Fragment>
  );
};

export default App;
