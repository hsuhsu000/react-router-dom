import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./layouts/Main";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/products", element: <Products></Products> },
      {path:"/product/:id", element: <Product></Product>}
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
