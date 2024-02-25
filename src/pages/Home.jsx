// components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const products = [
    { id: 1, title: "Product 1", image: "url_to_image_1", price: 20 },
    { id: 2, title: "Product 2", image: "url_to_image_2", price: 30 },
    // Add more products as needed
  ];
  
  const Home = () => {
    const { dispatch } = useCart();
  
    const addToCart = (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    };
  
    return (
      <div className="container mt-4">
        <h2>Home</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                  <button onClick={() => addToCart(product)} className="btn btn-success ml-2">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Home;
