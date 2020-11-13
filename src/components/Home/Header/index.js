import React from "react";
import "./index.css";
import Button from "../../Shared/Button";

const Header = () => {
  return (
    <header className="home-header">
      <div className="container">
        <div className="intro-hero">
          <span>Prêts à faire du tri dans vos placards ?</span>
          <Button text="Commencer à vendre" />
        </div>
      </div>
    </header>
  );
};

export default Header;
