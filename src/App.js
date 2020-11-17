import React, { useState } from "react";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage";
import OfferPage from "./containers/OfferPage";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import PublishPage from "./containers/PublishPage";
import PaymentPage from "./containers/PaymentPage";
import Cookies from "js-cookie";
import Logo from "./assets/Vinted_logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  // State token : interroge si le user est connecté
  // Ne peut être que null ou bien le token (enregistré dans le cookie)
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      // Stocker le token dans un cookie
      Cookies.set("token", tokenToSet, { expires: 7 });
      // Rafraichir le state token
      setToken(tokenToSet);
    } else {
      // Si fonction appelée sans argument, supprimer le cookie en place
      Cookies.remove("token");
      // Et repasser le state token à null
      setToken(null);
    }
  };
  return (
    <Router>
      <Header logo={Logo} token={token} setUser={setUser} />
      {/* Pages */}
      <Switch>
        <Route path="/signup">
          <SignupPage setUser={setUser} />
        </Route>
        <Route path="/login">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/publish">
          <PublishPage token={token} />
        </Route>
        <Route path="/payment">
          <PaymentPage token={token} />
        </Route>
        <Route path="/offer/:id">
          <OfferPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
