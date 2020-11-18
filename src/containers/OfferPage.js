import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Offer from "../components/Offer";
import axios from "axios";
import Loader from "react-loader-spinner";

const OfferPage = () => {
  // Récupérer l'id en paramètre
  const { id } = useParams();
  // State requête axios
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/offer/${id}`);
        // const response = await axios.get(
        //   `https://vinted-phoenix.herokuapp.com/offer/${id}`
        // );
        setData(response.data);
        //console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

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
    <main className="offer-main margin-top-58">
      <div className="container">
        <Offer data={data} />
      </div>
    </main>
  );
};

export default OfferPage;
