import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import React from "react";
import "../Style/shop.css";

const Cards = ({ products, addProduct }) => {
  return (
    <div className="w-100 vh-75">
      <div className="w-75 vh-50 mt-3 mb-5 container">
        <div className="row">
          {products.map((product) => (
            <Card
              className="border border-0 col-3 mt-5 custom-card container d-flex align-items-center mb-2"
              key={product.id}
            >
              <Card.Img
                variant="top"
                src={`${product.img}`}
                className="card-img"
                alt={`${product.name}`}
              />
              <Card.Body className="crd">
                <Card.Title className="mt-3 name">{product.name}</Card.Title>
                <Card.Text className="stars">
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiOutlineStar />
                </Card.Text>
                <Card.Text className="fw-semi-bold fs-4 price">
                  ${product.price}
                </Card.Text>
              </Card.Body>
              <button
                type="button"
                className="btn btn-primary fw-bold  w-50 text-center add-crt"
                onClick={() => addProduct(product)}
              >
                Add To Cart
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
