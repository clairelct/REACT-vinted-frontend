import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers";

const HomePage = () => {
  // State requête axios
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // State affichage des boutons de page, tab. car mapper dessus pour afficher x boutons
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/offers");
        // const response = await axios.get(
        //   "https://vinted-phoenix.herokuapp.com/offers"
        // );
        setData(response.data);

        // Pagination
        let elem = 1;
        let limit = 3; // À modifier avec state du <select>
        const newPages = [...pages];

        for (let i = 1; i <= response.data.count; i += limit) {
          newPages.push(elem);
          elem = elem + 1;
        }
        console.log("newPages", newPages);
        setPages(newPages);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setData]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Hero />
      <Offers data={data} />
      {/* Afficher pages */}
      <div className="pages-container">
        {pages.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default HomePage;
