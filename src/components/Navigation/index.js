import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

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
              <Button
                className="btn-small btn-disconnect"
                text="Se déconnecter"
                setUser={setUser}
              />
            </Link>
          ) : (
            <div>
              <Link to="/signup">
                <Button
                  className="btn-small btn-inverted btn-signup"
                  text="S'inscrire"
                />
              </Link>
              <Link to="/login">
                <Button
                  className="btn-small btn-inverted btn-login"
                  text="Se connecter"
                />
              </Link>
            </div>
          )}
          {/* Fin conditionelle */}

          <Button className="btn-small btn-sell" text="Vends tes articles" />
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
