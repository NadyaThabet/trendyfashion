import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://trendyfashiondata.onrender.com/products/${id}`,
    }).then((details) => {
      setProducts(details.data);
    });
  });

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h1 className="text-center mt-4 text-danger fw-bold">Product Details:</h1>
      <h1 className="mt-4 fw-bold">Name: {products.name}</h1>
      <h1 className="mt-4 fw-bold">Price: {products.price}$</h1>
      <img
        src={`${products.img}`}
        width="20%"
        className="rounded d-block mt-3"
        alt={`${products.name}`}
      />
      <Link to="/productsdashboard">
        <button type="button" className="btn btn-primary mt-5 btn-lg">
          Back To Products
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;
