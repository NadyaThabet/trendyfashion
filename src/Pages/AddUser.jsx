import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../Style/adduser.css";

const AddUser = () => {
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://fashionmale.onrender.com/users/",
      data: {
        username,
        firstname,
        lastname,
        email,
        pass,
        gender,
        city,
        phone,
        role,
        image,
      },
    });
    setTimeout(() => {
      navigate("/usersdashboard");
    });
  };

  return (
    <div className="mt-5 container w-50 usr-div">
      <Form className="fw-bold fs-4" onSubmit={addUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            className="form-inp"
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Role:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            className="form-inp"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Form.Text className="text-dark">
            image must be uploaded as : 'https://********/.jpg'
          </Form.Text>
        </Form.Group>

        <div className="d-flex justify-content-center w-100">
          <Button variant="primary" type="submit" className="mt-3">
            Add User
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddUser;
