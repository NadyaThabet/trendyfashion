import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "../Style/userdash.css";
const UsersDashBoard = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/users",
    }).then((data) => {
      setUsers(data.data);
    });
  };

  const deleteUser = (user) => {
    Swal.fire({
      imageUrl: `${user.image}`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      title: `${user.username} will be deleted !`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:5000/users/${user.id}`,
        }).then(() => {
          getData();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  const makeAdmin = (user) => {
    const updatedUser = { ...user, role: "admin" };
    axios({
      method: "put",
      url: `http://localhost:5000/users/${user.id}`,
      data: updatedUser,
    }).then(() => {
      getData();
    });
  };

  const removeAdmin = (user) => {
    const updatedUser = { ...user, role: "user" };
    axios({
      method: "put",
      url: `http://localhost:5000/users/${user.id}`,
      data: updatedUser,
    }).then(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-75 mt-5 container user-dash">
      <div className="text-center fs-4 table-div">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="table align-middle"
        >
          <thead className="t-head">
            <tr className="align-middle first-tr">
              <th className="th-txt">User Name</th>
              <th className="th-txt">Role</th>
              <th className="th-txt">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="align-middle scnd-tr">
                <td className="td-name">{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <div className=" btns-div">
                    <Link to={`/viewuser/${user.id}`}>
                      <button
                        type="button"
                        className="btn btn-primary two-btns"
                      >
                        View
                      </button>
                    </Link>
                    <Link to={`/edituser/${user.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning mx-5 two-btns"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger me-5 del-btn"
                      onClick={() => deleteUser(user)}
                    >
                      Delete
                    </button>
                    {user.role === "admin" ? (
                      <button
                        type="button"
                        className="btn btn-secondary admn-btn"
                        onClick={() => removeAdmin(user)}
                      >
                        Remove Admin
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success make-btn"
                        onClick={() => makeAdmin(user)}
                      >
                        Make Admin
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="/adduser">
          <button type="button" className="btn btn-success btn-lg mt-4 mb-5">
            Add New User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UsersDashBoard;
