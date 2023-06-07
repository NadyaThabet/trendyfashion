import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../Style/editproduct.css";

const Edit = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [sort, setSort] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://trendyfashiondata.onrender.com/products/${id}`,
    }).then((details) => {
      setImg(details.data.img);
      setName(details.data.name);
      setPrice(details.data.price);
      setSort(details.data.sort);
    });
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();

    const details = { img, name, price, sort };

    axios({
      method: "put",
      url: `https://trendyfashiondata.onrender.com/products/${id}`,
      data: details,
    });
    setTimeout(() => {
      navigate("/productsdashboard");
    });
  };

  return (
    <div className="w-50 container fw-bold fs-5 edit-div">
      <Form className="p-5 mt-5" onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            className="frm-inp "
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Form.Text className="text-dark">
            image must be uploaded as : 'https://********/.jpg'
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            className="frm-inp "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>price:</Form.Label>
          <Form.Control
            className="frm-inp "
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sort:</Form.Label>
          <Form.Control
            className="frm-inp "
            type="text"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center w-100">
          <Button variant="primary" type="submit" className="mt-3">
            Edit Product
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Edit;
