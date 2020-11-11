import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navigation from "./components/Navigation";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
  return (
    <Router>
      <Navigation />
      {/* Pages */}
      <Switch>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
