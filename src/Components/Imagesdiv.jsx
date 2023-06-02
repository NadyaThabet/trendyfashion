import { Link } from "react-router-dom";
import "../Style/imagesdiv.css";
import { TiArrowRightThick } from "react-icons/ti";

const Imagesdiv = () => {
  return (
    <div className="firstimg d-flex justify-content-center align-items-end">
      <div className="text-div d-flex flex-column justify-content-center align-items-baseline">
        <h3 className="text-danger fw-bold fs-5">SUMMER COLLECTION</h3>
        <h1 className="fw-bold mt-3 mb-3">Fall - Winter Collections 2023</h1>
        <p className="fw-bold text-secondary mb-4 paragraph">
          A specialist label creating luxury essentials. Ethically crafted with
          an unwavering commitment to exceptional quality.
        </p>
        <Link to="/shop">
          <button className="btn btn-danger fw-bold px-5 py-3 shop">
            Shop Now
            <TiArrowRightThick className="fw-bold" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Imagesdiv;
