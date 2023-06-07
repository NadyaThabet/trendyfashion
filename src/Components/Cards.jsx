import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Style/card.css";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://trendyfashiondata.onrender.com/products",
    }).then((data) => {
      setProducts(data.data);
    });
  });

  const showProducts = products.filter((product) => product.id <= 4);

  return (
    <div className="w-75 h-75 mt-5 container">
      <div className="row row-cards">
        {showProducts.map((product) => (
          <Card className="border border-0 col-3 mt-3 cards" key={product.id}>
            <Card.Img
              variant="top"
              src={`${product.img}`}
              className="card-img"
              alt={`${product.name}`}
              width="10%"
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="card-text">
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiOutlineStar />
              </Card.Text>
              <Card.Text className="card-text00">${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
