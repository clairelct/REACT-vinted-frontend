import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Shared/Button";

const LoginPage = ({ setUser }) => {
  let history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleUserEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
  };

  const handleUserPassChange = (e) => {
    const value = e.target.value;
    setUserPass(value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (userEmail && userPass) {
        // Faire requête axios POST
        const response = await axios.post("http://localhost:3001/user/login", {
          email: userEmail,
          password: userPass,
        });
        // Si response, envoyer le token à la fonction qui se charge de
        // stocker le token dans un cookie ET de set le State token (qui interroge si user est connecté)
        if (response.data.token) {
          setUser(response.data.token);
          console.log(response.data.token);
          history.push("/");
        }
      } else {
        alert("Tous les champs doivent être remplis !");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="margin-top-58">
      <div className="container">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            value={userEmail}
            onChange={handleUserEmailChange}
          />
          <input
            type="password"
            name="userPass"
            placeholder="Mot de passe"
            value={userPass}
            onChange={handleUserPassChange}
          />
          {/* <button type="submit">Se connecter</button> */}
          <Button text="Se connecter" type="submit" />
          <Link className="link" to="/signup">
            Pas encore de compte ? Inscris-toi !
          </Link>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
