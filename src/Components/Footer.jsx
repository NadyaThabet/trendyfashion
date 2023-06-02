import "../Style/footer.css";
import Navbar from "react-bootstrap/Navbar";
import { GoPrimitiveSquare } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { CgCopyright } from "react-icons/cg";
import pic from "../Style/Images/payment.png";
import pic1 from "../Style/Images/clients/1.png";
import pic2 from "../Style/Images/clients/2.png";
import pic3 from "../Style/Images/clients/3.png";
import pic4 from "../Style/Images/clients/4.png";

const Footer = () => {
  return (
    <div className="w-100 bg-black text-light main mt-5">
      <div className=" container">
        <div className="row">
          <div className="col-md-3">
            <div className="mx-3 mt-5 logo">
              <Navbar.Brand href="#home" className="fs-2 brand">
                Trendy Fashion
                <GoPrimitiveSquare className="text-danger fs-5 dot" />
              </Navbar.Brand>
              <p className="mt-4 brand-p">
                The customer is as the heart of our unique business model, which
                includes design.
              </p>
              <img src={pic} className="mt-4 pay" alt="payment" />
            </div>
          </div>
          <div className="col-md-3 shopping">
            <div className="mx-3 mt-5 d-flex flex-column align-items-center">
              <h4 className="shop-head">Shopping</h4>
              <div>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-light d-block shop-btn"
                >
                  Home
                </button>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-light d-block shop-btn"
                >
                  Shop
                </button>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-light d-block shop-btn"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mx-3 mt-5 partners">
              <h4 className="shop-head">PARTNERS</h4>
              <div className="partner-img">
                <img src={pic1} className="mt-4 me-5" alt="icons" width="18%" />
                <img src={pic2} className="mt-4" alt="icons" width="18%" />
              </div>
              <div className="partner-img">
                <img src={pic3} className="mt-4 me-5" alt="icons" width="18%" />
                <img src={pic4} className="mt-4" alt="icons" width="18%" />
              </div>
            </div>
          </div>
          <div className="col-md-3 news">
            <div className="mx-3 mt-5 news-div">
              <h4 className="news-head">NEWSLETTER</h4>
              <p className="mt-4 news-text">
                subscribe to our newsletter and be the first to find to get our
                offers.
              </p>
              <input
                type="text"
                placeholder="Your Email"
                className="bg-black text-light mt-4 border border-0 inp p-2 news-text"
                variant="light"
              ></input>
              <BsEnvelopeAt className="news-text" />
              <hr />
            </div>
          </div>
        </div>
        <div className="line-div px-5 w-100 text-center">
          <hr className="mt-5" />
          <p className="copy">
            Copyrights Reserved <CgCopyright className="mb-1" /> 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
