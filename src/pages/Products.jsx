import { json, Link, useLoaderData } from "react-router-dom";
import User from "../components/User";

const Products = () => {
  const PRODUCTS = useLoaderData();
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div key={product.id} className="bg-warning m-3 p-2 text-dark">
            <p>{product.title}</p>
            <User userID={product.userId}></User>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw json({ message: "Can't get posts now" }, { status: 500 });
  } else {
    const products = await response.json();
    return products;
  }
};
