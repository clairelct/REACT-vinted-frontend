import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Shared/Button";

const SignupPage = ({ setUser }) => {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handleUserEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
  };

  const handleUserPassChange = (e) => {
    const value = e.target.value;
    setUserPass(value);
  };

  const handleCheckboxChange = (e) => {
    console.log("checkbox e", e);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (userName && userEmail && userPass) {
        // Faire requête axios POST
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username: userName,
            email: userEmail,
            password: userPass,
          }
        );
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
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Nom d'utilisateur"
            value={userName}
            onChange={handleUserNameChange}
          />
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
          <div className="rgpd-signup">
            <label htmlFor="">
              <input type="checkbox" onChange={handleCheckboxChange} />{" "}
              S'inscrire à notre newsletter
            </label>
            <p className="legend">
              En m'inscrivant je confirme avoir lu et accepté les Termes &amp;
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.{" "}
            </p>
          </div>
          {/* <button type="submit">S'inscrire</button> */}
          <Button type="submit" text="S'inscrire" />
          <Link className="link" to="/login">
            Tu as déjà un compte ? Connecte-toi !
          </Link>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
