import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Announcement from "./Components/Announcement";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import NewAccount from "./Pages/NewAccount";
import ProductsDashBoard from "./Pages/ProductsDashBoard";
import ViewProduct from "./Pages/ViewProduct";
import EditProduct from "./Pages/EditProduct";
import AddProduct from "./Pages/AddProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckOut from "./Pages/CheckOut";
import Profile from "./Pages/Profile";
import DashBoard from "./Pages/DashBoard";
import UsersDashBoard from "./Pages/UsersDashBoard";
import EditProfile from "./Pages/EditProfile";
import ViewUser from "./Pages/ViewUser";
import EditUser from "./Pages/EditUser";
import AddUser from "./Pages/AddUser";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://trendyfashiondata.onrender.com/products",
    }).then((data) => {
      setProducts(data.data);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://trendyfashiondata.onrender.com/users",
    }).then((details) => {
      setUsers(details.data);
    });
  }, []);

  const addProduct = (obj) => {
    const product = cart.find((product) => product.id === obj.id);

    if (product) {
      const newCart = [...cart];
      const productIndex = newCart.indexOf(product);
      newCart[productIndex].count++;
      setCart(newCart);
    } else {
      const newProduct = { ...obj, count: 1 };
      setCart([...cart, newProduct]);
    }
  };

  const deleteProduct = (obj) => {
    const newCart = cart.filter((product) => {
      return product.id !== obj.id;
    });
    setCart(newCart);
  };

  const increment = (obj) => {
    const newCart = cart.map((product) => {
      if (product.id === obj.id) {
        product.count++;
      }
      return product;
    });
    setCart(newCart);
  };

  const decrement = (obj) => {
    const newCart = cart.map((product) => {
      if (product.id === obj.id) {
        if (product.count > 0) {
          product.count--;
        } else if (product.count === 0) {
        }
      }
      return product;
    });
    setCart(newCart);
  };

  return (
    <div>
      <Announcement />
      <Header cart={cart} users={users} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={products} addProduct={addProduct} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increment={increment}
              decrement={decrement}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/new-account" element={<NewAccount />} />
        <Route
          path="/productsdashboard"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <ProductsDashBoard />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <DashBoard products={products} users={users} />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="/usersdashboard"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <UsersDashBoard users={users} />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route path="/profile/:id" element={<Profile users={users} />}></Route>
        <Route
          path="/viewproduct/:id"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <ViewProduct />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="/editproduct/:id"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <EditProduct />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <AddProduct />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/editprofile/:id" element={<EditProfile />}></Route>
        <Route
          path="/viewuser/:id"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <ViewUser />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="/edituser/:id"
          element={
            localStorage.email === "nadia@hotmail.com" ? (
              <EditUser />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="/adduser"
          element={
            localStorage.email === "nadia@hotmail.com" ? <AddUser /> : <Login />
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
