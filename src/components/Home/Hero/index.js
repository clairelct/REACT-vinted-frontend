import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Button from "../../Shared/Button";

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="intro-hero">
          <span>Prêts à faire du tri dans vos placards ?</span>
          <Link to="/publish">
            <Button text="Commencer à vendre" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
