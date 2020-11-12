import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="home-header">
      <div className="container">
        <div className="intro-hero">
          <span>Prêts à faire du tri dans vos placards ?</span>
          <button>Commencer à vendre</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
