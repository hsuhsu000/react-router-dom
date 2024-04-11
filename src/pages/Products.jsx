import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const PRODUCTS = useLoaderData();
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`} key={product.id}>
          <div key={product.id} className="bg-warning m-3 p-2 text-dark">
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    //code
  } else {
    const products = await response.json();
    return products;
  }
};
