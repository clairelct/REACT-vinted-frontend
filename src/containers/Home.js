import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Home/Header";
import Offers from "../components/Home/Offers";

const Home = ({ data }) => {
  return (
    <div>
      <Link to="/offer">Go to offer</Link>
      <Header />
      <Offers data={data} />
    </div>
  );
};

export default Home;
