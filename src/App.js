import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Header from "./Components/Header";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </div>
        
      </Router>
    </CartProvider>
  );
}

export default App;