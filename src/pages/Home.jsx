import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => { 
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };
  return (
    <>
      <h1>I am Home Page</h1>
      <div><button className="btn btn-primary" onClick={navigateHandler}>Go To Products</button></div>
    </>
  );
};

export default Home;
