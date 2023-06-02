import React from "react";
import "../Style/checkout.css";

const CheckOut = () => {
  const checkOut = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="mt-5 container w-50 h-25 fw-bold">
        <form className="row g-3 frm" onSubmit={checkOut}>
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control inp" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control inp"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control inp"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Address 2</label>
            <input
              type="text"
              className="form-control inp"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control inp" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <select id="inputState" className="form-select inp">
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">Zip Code</label>
            <input type="text" className="form-control inp" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label inp" required>
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mt-3 proceed">
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
