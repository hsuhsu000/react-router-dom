import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate("/");
    }
  return (
      <>
      <h1>Page not found.</h1>
      <button class="btn btn-primary" onClick={navigateHandler}>Go Back Home</button></>
  )
}

export default Error