import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://trendyfashiondata.onrender.com/users/${id}`,
    }).then((details) => {
      setUsers(details.data);
    });
  });

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h3 className="text-center mt-4 text-danger fw-bold">User Details:</h3>
      <h3 className="mt-4 fw-bold">First Name: {users.firstname}</h3>
      <h3 className="mt-4 fw-bold">Last Name: {users.lastname}</h3>
      <h3 className="mt-4 fw-bold">User Name: {users.username}</h3>
      <h3 className="mt-4 fw-bold">Email: {users.email}</h3>
      <h3 className="mt-4 fw-bold">Role: {users.role}</h3>
      <img
        src={`${users.image}`}
        width="15%"
        className="rounded-circle d-block mt-3"
        alt={`${users.username}`}
      />
      <Link to="/usersdashboard">
        <button type="button" className="btn btn-primary mt-5 btn-lg">
          Back To Users
        </button>
      </Link>
    </div>
  );
};

export default ViewUser;
