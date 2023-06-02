import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRef, useState } from "react";
import "../Style/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = (users) => {
  const email = useRef();
  const [emailError, setEmailError] = useState(false);
  const pass = useRef();
  const [passError, setPassError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginForm = (e) => {
    e.preventDefault();
    const myEmail = email.current.value;
    const myPass = pass.current.value;

    if (myEmail === "" || myPass === "") {
      setEmailError(true);
      setPassError(true);
    } else {
      setEmailError(false);
      setPassError(false);
      localStorage.email = myEmail;
      navigate("/", { state: { email } });
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-5 mb-5 fw-bold login-div">
      <Form onSubmit={loginForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={email}
            type="text"
            placeholder="Enter email"
            className="fw-bold"
          />
          {emailError && (
            <p className="text-danger">Please enter your email address.</p>
          )}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              ref={pass}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="fw-bold"
            />

            <InputGroup.Text
              onClick={togglePasswordVisibility}
              className="bg-transparent text-primary fw-bold fs-5"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </InputGroup.Text>
          </InputGroup>
          {passError && (
            <p className="text-danger">Please enter a valid Password.</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit" className="me-3 sub">
          Login
        </Button>
        <Link to="/new-account">
          <Button variant="primary" className="sub" type="submit">
            Create New Account
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
