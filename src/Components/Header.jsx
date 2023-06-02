import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiShoppingBag } from "react-icons/bi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { GoPrimitiveSquare } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../Style/header.css";

const Header = ({ cart, users }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" className="fw-bold">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-2 brand">
            Trendy Fashion
            <GoPrimitiveSquare className="text-danger fs-5 dot" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav ul-header" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="w-100 d-flex justify-content-center fs-5">
              <Nav.Link as={Link} to="/" className="middle-links nav-div">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="middle-links nav-div">
                Shop
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto fs-3">
              <Nav.Link
                as={Link}
                to="/cart"
                className=" text-black  w-100 d-flex flex-row align-items-center"
              >
                <BiShoppingBag />
                {cart.length > 0 ? (
                  <span className="fs-5 text-danger fw-bold">
                    {cart.length}
                  </span>
                ) : (
                  <span className="fs-5 text-danger fw-bold">0</span>
                )}
              </Nav.Link>
              {localStorage.email ? (
                <Nav.Link className="text-primary" onClick={logOut}>
                  <FiLogOut />
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="login" className="text-primary">
                  <FiLogIn />
                </Nav.Link>
              )}
              <Dropdown>
                <Dropdown.Toggle
                  className="fs-5 border-0 mt-2"
                  variant=""
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu className="drp dropdown-menu dropdown-menu-lg-end">
                  {users.map((user) => {
                    if (
                      user.role === "admin" &&
                      localStorage.email === "nadia@hotmail.com"
                    ) {
                      return (
                        <div key={user.id}>
                          <Dropdown.Item as={Link} to="/dashboard">
                            Control
                          </Dropdown.Item>
                          {localStorage.email && (
                            <div>
                              <Dropdown.Item
                                as={Link}
                                to={`/profile/${user.id}`}
                              >
                                Profile
                              </Dropdown.Item>
                              <Dropdown.Divider />
                            </div>
                          )}
                        </div>
                      );
                    } else if (
                      user.role !== "admin" &&
                      localStorage.email !== "nadia@hotmail.com"
                    ) {
                      return (
                        <div key={user.id}>
                          {localStorage.email && (
                            <div>
                              <Dropdown.Item
                                as={Link}
                                to={`/profile/${user.id}`}
                              >
                                Profile
                              </Dropdown.Item>
                              <Dropdown.Divider />
                            </div>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                  {users.length > 0 && (
                    <>
                      {localStorage.email ? (
                        <Dropdown.Item
                          href="#/action-3"
                          as={Link}
                          to="/login"
                          onClick={logOut}
                        >
                          Log Out
                        </Dropdown.Item>
                      ) : (
                        <Dropdown.Item href="#/action-3" as={Link} to="/login">
                          Log In
                        </Dropdown.Item>
                      )}
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
