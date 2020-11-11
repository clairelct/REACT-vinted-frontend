import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Home/Header";
import Offers from "../components/Home/Offers";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/offer">Go to offer</Link>
      <Header />
      <Offers />
    </div>
  );
};

export default Home;
