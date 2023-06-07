import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../Style/editprofile.css";

const EditProfile = () => {
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fashionmale.onrender.com/users/${id}`,
    }).then((details) => {
      setUserName(details.data.username);
      setFirstName(details.data.firstname);
      setLastName(details.data.lastname);
      setEmail(details.data.email);
      setPass(details.data.pass);
      setGender(details.data.gender);
      setCity(details.data.city);
      setPhone(details.data.phone);
      setRole(details.data.role);
      setImage(details.data.image);
    });
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();

    const details = {
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
    };

    axios({
      method: "put",
      url: `https://fashionmale.onrender.com/users/${id}`,
      data: details,
    });
    setTimeout(() => {
      navigate(`/profile/${id}`);
    });
  };

  return (
    <div className="w-50 container fw-bold fs-5 edit-form">
      <Form className="p-5 mt-5 edt-frm" onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label>User Name: </Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            className="form-input"
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Form.Text className="text-dark">
            image must be uploaded as : 'https://********/.jpg'
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 edt-btn">
          Edit Profile
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
