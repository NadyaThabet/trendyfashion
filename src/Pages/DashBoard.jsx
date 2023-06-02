import React from "react";
import { Link } from "react-router-dom";
import "../Style/dashboard.css";

const DashBoard = ({ products, users }) => {
  return (
    <div className="w-100 vh-100 d-flex align-items-center all-div">
      <div className="container h-75 d-flex flex-row justify-content-evenly users-div">
        <div className="mt-5 bg-black text-light h-50 text-center d-flex flex-column justify-content-evenly dash-text users-num">
          <h1 className="mt-3 text-danger">Users:</h1>
          <h4 className="h-text">
            Number Of Useres:{" "}
            <span className="text-success fs-4">
              {" "}
              <span className="text-success fs-4 span-txt">{users.length}</span>
            </span>
          </h4>
          <h4 className="h-text">
            Last User Registered:{" "}
            <span className="text-success fs-4 span-txt">
              {users
                .filter((user) => user.id === users[users.length - 1].id)
                .map((user) => user.username)}
            </span>
          </h4>
          <Link to="/usersdashboard">
            <button type="button" className="btn btn-primary mb-3 shw">
              Show Users
            </button>
          </Link>
        </div>
        <div className="mt-5 bg-black text-light h-50 text-center d-flex flex-column justify-content-evenly dash-text prdct-div">
          <h1 className="mt-3 text-danger">Products:</h1>
          <h4 className="h-text">
            Number Of Products:{" "}
            <span className="text-success fs-4 span-txt">
              {products.length}
            </span>
          </h4>
          <h4 className="h-text">
            Last Product Added:{" "}
            <span className="text-success fs-4 span-txt">
              {products
                .filter(
                  (product) => product.id === products[products.length - 1].id
                )
                .map((product) => product.name)}
            </span>
          </h4>
          <Link to="/productsdashboard">
            <button type="button" className="btn btn-primary shw">
              Show Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
