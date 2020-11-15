import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers";
import Loader from "react-loader-spinner";

const HomePage = () => {
  // State requête axios
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // State affichage des boutons de page, tab. car mapper dessus pour afficher x boutons
  //const [pages, setPages] = useState([]);
  // Au clic sur une page
  const [page, setPage] = useState(1);

  // State Nb. d'offres par page (par défaut fixé à 5)
  const [nbItems, setNbItems] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/offers?page=${page}&limit=${nbItems}`
        );
        // const response = await axios.get(
        //   "https://vinted-phoenix.herokuapp.com/offers"
        // );
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setData, page, nbItems]);

  // Fonction de sélection du nombre d'offres/pages
  const handleNbItems = (e) => {
    const value = Number(e.target.value);
    //console.log(value);
    setNbItems(value);
    // à chaque changement de state, afficher la page 1
    setPage(1);
  };

  // Fonction qui créé un tableau pour la pagination
  const pagesFunc = () => {
    let elem = 1;
    let arrPages = [];

    for (let i = 1; i <= data.count; i += nbItems) {
      arrPages.push(elem);
      elem = elem + 1;
    }
    return arrPages;
  };

  // Fonction d'affichage d'une page
  const handleClickPage = (item) => {
    console.log("clic sur page ", item);
    setPage(item);
  };

  return isLoading ? (
    <Loader
      className="loader"
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  ) : (
    <main>
      <Hero />
      <div className="container">
        {/* Selecteur affichage des offres */}
        <div>
          <span>Nombre de produits par page :</span>
          <select
            value={nbItems}
            onChange={handleNbItems}
            name="nbItemsPerPage"
            id="nbItemsPerPage"
          >
            <option value="">--Please choose an option--</option>
            <option value="5">5 produits par page</option>
            <option value="10">10 produits par page</option>
            <option value="15">15 produits par page</option>
          </select>
        </div>

        <Offers data={data} />

        {/* Pagination */}

        <div className="pages-container">
          {pagesFunc().map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  handleClickPage(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
