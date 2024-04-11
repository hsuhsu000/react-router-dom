import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import { Products, ProductDetail, Home, About, Error } from "./pages/index";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as ProductDetailsLoader } from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: ProductsLoader,
      },
      {
        path: "/product/:postID",
        element: <ProductDetail></ProductDetail>,
        loader: ProductDetailsLoader,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
