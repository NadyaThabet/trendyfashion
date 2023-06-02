import React from "react";
import "../Style/cart.css";
import { Link } from "react-router-dom";
import { GiShoppingCart, GiWallet } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import Table from "react-bootstrap/Table";

const Cart = ({ cart, increment, decrement, deleteProduct }) => {
  return (
    <div className="row">
      <div className="container mb-5">
        {cart.length === 0 ? (
          <div className="container">
            <div className="cart-text ms-auto text-dark mt-5">
              <h5 className="mt-3 mx-3 total">CART TOTAL</h5>
              <h5 className="mt-3 mx-3 d-flex justify-content-between w-25 wallet">
                $0 <GiWallet className="wallet" />
              </h5>
              <button className="text-center btn btn-primary mt-2 px-5 check-btn">
                Check Out
              </button>
            </div>
            <div className="w-100 cart">
              <Link to="/shop">
                <button
                  type="button"
                  className="btn btn-success py-2 rounded fw-bold mt-5 now-btn"
                >
                  Shop Now <GiShoppingCart />
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="container w-100">
            <div className="cart-text ms-auto mt-5 text-dark">
              <h5 className="mt-3 mx-3 total">CART TOTAL</h5>
              <span className="mt-3 mx-3 d-flex justify-content-between w-50">
                <span className="fw-bold fs-5 wallet">
                  $
                  {cart
                    .map((product) => product.price * product.count)
                    .reduce((x, y) => x + y)}
                </span>
                <GiWallet className="mt-2 wallet" />
              </span>
              <Link to="/checkout">
                <button className="text-center btn btn-primary mt-2 px-5 check-btn">
                  Check Out
                </button>
              </Link>
            </div>
            <Table className="table fw-bold w-75 cart-full">
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id} className="table-tr">
                    <td className="table-img">
                      <img
                        src={`${product.img}`}
                        alt={`${product.name}`}
                        width="30%"
                        className="crd-img"
                      />
                    </td>
                    <td className="fs-5 prodct-name">{product.name}</td>
                    <td>
                      <div className="d-flex flex-row w-75 h-25 align-items-center">
                        <button
                          className="btn btn-outline-secondary border-0 fs-3 fw-bold prodct-name"
                          onClick={() => decrement(product)}
                        >
                          -
                        </button>
                        <span className="ms-3 me-2 text-center mt-1 fs-5 fw-bold prodct-name">
                          {product.count}
                        </span>
                        <button
                          className="btn btn-outline-secondary mx-3 border-0 fs-3 fw-bold prodct-name"
                          onClick={() => increment(product)}
                        >
                          +
                        </button>
                        <span className="ms-3 me-2 text-center mt-1 fs-5 fw-bold prodct-name">
                          ${product.price}
                        </span>
                        <button
                          className="btn border-0 ms-auto fs-3 fw-bold"
                          onClick={() => deleteProduct(product)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
