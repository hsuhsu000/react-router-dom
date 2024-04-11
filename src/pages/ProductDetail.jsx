import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>Product Details Page</h1>
      <h1>Product title - {title}</h1>
      <button onClick={navigateHandler} className="btn btn-primary">
        Go to Products
      </button>
    </>
  );
};

export default Product;
