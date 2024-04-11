import React from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import User from "../components/User";
const ProductDetail = () => {
  const post = useLoaderData();
  const { title, body, userId } = post;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>Product Details Page</h1>
      <h1>Post Title - {title}</h1>
      <User userID={userId}></User>
      <h1>{body}</h1>
      <button onClick={navigateHandler} className="btn btn-primary">
        Go to Posts
      </button>
    </>
  );
};

export default ProductDetail;

export const loader = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`);
  if (!response.ok) {
    throw json({ message: "Can't found your post" }, { status: 404 });
  } else {
    const post = await response.json();
    return post;
  }
};
