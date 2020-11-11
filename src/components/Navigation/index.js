import React from "react";
import "./index.css";

const Navigation = ({ logo }) => {
  return (
    <section className="main-nav">
      <div className="topbar">
        <div className="container">
          <div>
            <img className="topbar-logo" src={logo} alt="Vinted" />
          </div>
          <div className="search-container">
            <input type="text" placeholder="Recherche" />
          </div>
          <div>
            <button>S'inscrire</button>
            <button>Se connecter</button>
          </div>
          <button>Vends tes articles</button>
        </div>
      </div>
      <div className="nav">
        <nav className="container">
          <ul>
            <li>Femmes</li>
            <li>Hommes</li>
            <li>Enfants</li>
            <li>Maison</li>
            <li>À propos</li>
            <li>Notre plateforme</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
