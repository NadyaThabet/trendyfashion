import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../Style/productsdash.css";

const ProductsDashBoard = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios({
      method: "get",
      url: "https://fashionmale.onrender.com/products",
    }).then((data) => {
      setProducts(data.data);
    }, []);
  };

  const deleteProduct = (product) => {
    Swal.fire({
      imageUrl: `${product.img}`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      title: `${product.name} will be deleted !`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios({
          method: "delete",
          url: `https://fashionmale.onrender.com/products/${product.id}`,
        });
      }
      getData();
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="mt-4">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="text-center text-primary fw-bold fs-1">Products</h1>

        <Table
          striped
          bordered
          hover
          variant="dark"
          className="mt-4 text-center w-100"
        >
          <thead className="tbl-hd">
            <tr>
              <th className="tbl-th">ID</th>
              <th className="tbl-th">Product</th>
              <th className="tbl-th">Product Price</th>
              <th className="tbl-th">Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="table-td">{product.id}</td>
                <td className="w-25 image-td">
                  <img
                    src={`${product.img}`}
                    width="12%"
                    className="rounded img-td"
                    alt={`${product.name}`}
                  />
                </td>
                <td className="table-td">${product.price}</td>
                <td>
                  <div className="btns-td">
                    <Link to={`/viewproduct/${product.id}`}>
                      <button type="button" className="btn btn-primary">
                        View
                      </button>
                    </Link>
                    <Link to={`/editproduct/${product.id}`}>
                      <button type="button" className="btn btn-warning mx-5">
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger del-btn"
                      onClick={() => deleteProduct(product)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="/addproduct">
          <button type="button" className="btn btn-success btn-lg mt-2">
            Add New Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsDashBoard;
