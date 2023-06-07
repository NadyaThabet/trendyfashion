import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../Style/addproduct.css";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  const addProduct = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://trendyfashiondata.onrender.com/products/",
      data: {
        name,
        price,
        img,
        sort,
      },
    });
    setTimeout(() => {
      navigate("/productsdashboard");
    });
  };

  return (
    <div className="mt-5 container w-50 product-div">
      <Form className="fw-bold fs-4" onSubmit={addProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price:</Form.Label>
          <Form.Control
            className="form-inp"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Image:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            image must be uploaded as : 'https://********/.jpg'
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sort:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center w-100">
          <Button variant="primary" type="submit" className="mt-3">
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProducts;
