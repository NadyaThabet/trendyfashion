import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/newaccount.css";

const NewAccount = () => {
  const firstName = useRef();
  const [firstError, setFirstError] = useState(false);
  const lastName = useRef();
  const [lastError, setLastError] = useState(false);
  const userName = useRef();
  const [userError, setUserError] = useState(false);
  const email = useRef();
  const [emailError, setEmailError] = useState(false);
  const password = useRef();
  const [passError, setPassError] = useState(false);
  const image = useRef();
  const [imageError, setImageError] = useState(false);
  const city = useRef();
  const [cityError, setCityError] = useState(false);
  const [gender, setGender] = useState("Male");
  const [genderError, setGenderError] = useState(false);
  const phoneNumber = useRef();
  const [phoneError, setPhoneError] = useState(false);
  const navigate = useNavigate();

  const accountVerfication = (e) => {
    e.preventDefault();
    const myFirstName = firstName.current.value;
    const myLastName = lastName.current.value;
    const myUserName = userName.current.value;
    const myEmail = email.current.value;
    const myPass = password.current.value;
    const myImage = image.current.value;
    const myCity = city.current.value;
    const myGender = gender;
    const myPhoneNumber = phoneNumber.current.value;

    if (myFirstName === "") {
      setFirstError(true);
    } else if (myLastName === "") {
      setLastError(true);
    } else if (myUserName === "") {
      setUserError(true);
    } else if (myEmail === "") {
      setEmailError(true);
    } else if (myPass === "") {
      setPassError(true);
    } else if (myImage === "") {
      setImageError(true);
    } else if (myCity === "") {
      setCityError(true);
    } else if (myGender !== gender) {
      setGenderError(true);
    } else if (myPhoneNumber === "") {
      setPhoneError(true);
    } else {
      setFirstError(false);
      setLastError(false);
      setUserError(false);
      setEmailError(false);
      setPassError(false);
      setImageError(false);
      setCityError(false);
      setPhoneError(false);
      localStorage.firstName = myFirstName;
      localStorage.lastName = myLastName;
      localStorage.userName = myUserName;
      localStorage.email = myEmail;
      localStorage.image = myImage;
      localStorage.city = myCity;
      localStorage.gender = myGender;
      localStorage.phoneNumber = myPhoneNumber;
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="mt-5 container w-50 h-25 fw-bold">
        <form className="row g-3 new-form" onSubmit={accountVerfication}>
          <div className="col-md-6">
            <label className="form-label">First Name:</label>
            <input
              ref={firstName}
              type="text"
              className="form-control inpt"
              id="inputEmail4"
              placeholder="Enter First Name"
            />
            {firstError && (
              <p className="text-danger">Please enter your first name.</p>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name:</label>
            <input
              ref={lastName}
              type="text"
              className="form-control inpt"
              id="inputPassword4"
              placeholder="Enter Last Name"
            />
            {lastError && (
              <p className="text-danger">Please enter your last name.</p>
            )}
          </div>
          <div className="col-12">
            <label className="form-label">User Name:</label>
            <input
              ref={userName}
              type="text"
              className="form-control inpt"
              id="inputAddress"
              placeholder="Enter User Name"
            />
            {userError && (
              <p className="text-danger">Please enter your user name.</p>
            )}
          </div>
          <div className="col-12">
            <label className="form-label">Email:</label>
            <input
              ref={email}
              type="text"
              className="form-control inpt"
              id="inputAddress2"
              placeholder="Enter Your Email"
            />
            {emailError && (
              <p className="text-danger">Please enter your email adress.</p>
            )}
          </div>
          <div className="col-12">
            <label className="form-label">Password:</label>
            <input
              ref={password}
              type="text"
              className="form-control inpt"
              id="inputAddress2"
              placeholder="Enter Your Password"
            />
            {passError && (
              <p className="text-danger">Please enter your password.</p>
            )}
          </div>
          <div className="col-12">
            <label className="form-label">Image:</label>
            <input
              ref={image}
              type="text"
              className="form-control inpt"
              id="inputAddress"
              placeholder="image must be uploaded as : 'https://********/.jpg'"
            />
            {imageError && (
              <p className="text-danger">Please enter your image adress.</p>
            )}
          </div>
          <div className="col-md-4">
            <label className="form-label">City:</label>
            <input
              ref={city}
              type="text"
              className="form-control inpt"
              id="inputCity"
              placeholder="Enter City Name"
            />
            {cityError && (
              <p className="text-danger">Please enter your city name.</p>
            )}
          </div>
          <div className="col-md-4">
            <label className="form-label">Gender:</label>
            <select
              id="inputState"
              className="form-select inpt"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            {genderError && (
              <p className="text-danger">Please select your gender.</p>
            )}
          </div>
          <div className="col-md-4">
            <label className="form-label inpt">Phone Number:</label>
            <input
              ref={phoneNumber}
              type="text"
              className="form-control inpt"
              id="inputZip"
            />
            {phoneError && (
              <p className="text-danger">Please enter your phone number.</p>
            )}
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input inpt"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label text-primary">
                Apply Terms & Conditions
              </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mt-3 crt-acc">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
