import "../Style/collection.css";
import pic1 from "../Style/Images/banner/banner-1.jpg";
import pic2 from "../Style/Images/banner/banner-2.jpg";
import pic3 from "../Style/Images/banner/banner-3.jpg";

const Collection = () => {
  return (
    <div className="collection-div container w-100 h-75 mt-5">
      <div className="row row-div">
        <div className="col-6 d-flex">
          <div className="mt-5 w-100 d-flex justify-content-center align-items-center flex-row-reverse acc">
            <img src={pic2} className="img image" width="60%" alt="error" />
            <div className="acc-div text01">
              <h2 className="text text00 me-3">Accessories</h2>
              <button
                type="button"
                className="btn btn-link text-dark fw-bold shop-btn"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="mt-5 w-100 d-flex flex-row-reverse second-div">
            <img src={pic1} className="img" width="60%" alt="error" />
            <div className="d-flex flex-column justify-content-center align-items-start ms-5 acc-div">
              <h2 className="fs-3 text text00">Clothing Collection 2023</h2>
              <button
                type="button"
                className="btn btn-link text-dark fw-bold shop-bt"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="mt-5 w-100 d-flex flex-row-reverse second-div">
            <img src={pic3} className="img" width="60%" alt="error" />
            <div className="d-flex flex-column justify-content-center align-items-start ms-5 acc-div">
              <h2 className="fs-3 text text00">Shoes Collection 2023</h2>
              <button
                type="button"
                className="btn btn-link text-dark fw-bold shop-bt"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
