import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navigation from "./components/Navigation";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Logo from "./assets/Vinted_logo.png";

function App() {
  // State requête axios
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data.offers);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Router>
      <Navigation logo={Logo} />
      {/* Pages */}
      <Switch>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
