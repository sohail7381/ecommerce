import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {id}</p>
      <p>Product Detail for product {id}</p>
      
    </div>
  );
};

export default ProductPage;