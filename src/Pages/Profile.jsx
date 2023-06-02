import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/profile.css";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/users/${id}`,
    }).then((data) => {
      setUsers(data.data);
    });
  }, [id]);

  return (
    <div className="w-100 h-75">
      <div className="w-100 h-75 d-flex align-items-center info">
        <div className="w-25 vh-100 info-img">
          <img
            src={users.image}
            alt="avatar"
            width="100%"
            className="rounded-circle mt-3 p-5 ms-5"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-evenly w-75 fs-2 fw-bold info-main">
          <div className="w-100 d-flex justify-content-evenly info-text">
            <span>
              User Name:{" "}
              <span className="text-primary user-text"> {users.username}</span>
            </span>
            <span>
              First Name:{" "}
              <span className="text-primary">{users.firstname}</span>
            </span>
          </div>
          <div className="w-100 d-flex justify-content-evenly info-text">
            {" "}
            <span>
              Last Name: <span className="text-primary">{users.lastname}</span>
            </span>
            <span className="email00">
              Email:{" "}
              <span className="text-primary email01 "> {users.email}</span>
            </span>
          </div>
          <div className="w-100 d-flex justify-content-evenly info-text info-text01 pass-gen">
            <span>
              Password: <span className="text-primary">{users.pass}</span>
            </span>
            <span>
              Gender: <span className="text-primary">{users.gender}</span>
            </span>
          </div>
          <div className="w-100 d-flex justify-content-evenly info-text city">
            <span>
              City: <span className="text-primary"> {users.city}</span>
            </span>
            <span>
              Phone Number: <span className="text-primary">{users.phone}</span>
            </span>
          </div>
          <div className="w-100 h-25 d-flex flex-column align-items-center justify-content-evenly info-text info-text01 role00 ">
            <span className=" role">
              Role: <span className="text-primary">{users.role}</span>
            </span>
            <Link
              to={`/editprofile/${users.id}`}
              className=" edit text-decoration-none"
            >
              <button className="btn btn-success fs-3 px-3">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
