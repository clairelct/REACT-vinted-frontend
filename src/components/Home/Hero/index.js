import React from "react";
import "./index.css";
import Button from "../../Shared/Button";

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="intro-hero">
          <span>Prêts à faire du tri dans vos placards ?</span>
          <Button text="Commencer à vendre" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
