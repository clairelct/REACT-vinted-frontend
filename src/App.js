import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./containers/HomePage";
import OfferPage from "./containers/OfferPage";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import Logo from "./assets/Vinted_logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  return (
    <Router>
      <Navigation logo={Logo} />
      {/* Pages */}
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
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
