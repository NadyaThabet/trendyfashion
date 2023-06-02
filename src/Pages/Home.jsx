import React, { useEffect } from "react";
import Imagesdiv from "../Components/Imagesdiv";
import Collection from "../Components/Collection";
import Free from "../Components/Free";
import Cards from "../Components/Cards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <Imagesdiv />
      <Collection />
      <Free />
      <Cards />
    </div>
  );
};

export default Home;
