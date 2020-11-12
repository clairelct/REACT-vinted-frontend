import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navigation = ({ logo, token, setUser }) => {
  return (
    <section className="main-nav">
      <div className="topbar">
        <div className="container">
          <div>
            <Link to="/">
              <img className="topbar-logo" src={logo} alt="Vinted" />
            </Link>
          </div>
          <div className="search-container">
            <FontAwesomeIcon icon="search" />
            <input type="text" placeholder="Recherche" />
          </div>
          {/* Conditionnelle si user connecté */}
          {token ? (
            <Link to="/login">
              <button
                className="btn-disconnect"
                onClick={() => {
                  setUser(null);
                }}
              >
                Se déconnecter
              </button>
            </Link>
          ) : (
            <div>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
          {/* Fin conditionelle */}

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
