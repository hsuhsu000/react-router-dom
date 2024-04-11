import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>I am Main Page</h1>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
