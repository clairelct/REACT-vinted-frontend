import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DisplayUser from "../../Shared/DisplayUser";
import axios from "axios";

const Offers = ({ data }) => {
  //console.log(data.count);

  // // State Nb. d'offres par page
  // // Par défaut le nb. total de produits
  // const [nbOffersPage, setNbOffersPage] = useState(data.count);

  // let limit;

  // const handleNbOffers = (e) => {
  //   const value = e.target.value;
  //   setNbOffersPage(value);
  //   console.log(nbOffersPage);
  //   limit = value;
  //   console.log("limit :", limit);
  // };

  return (
    <main>
      <div className="container">
        <div className="pagination">
          <span>Nombre de produits par page :</span>
          {/* <select
            value={nbOffersPage}
            onChange={handleNbOffers}
            name="nbOffersPerPage"
            id="nbOffersPerPage"
          >
            <option value="">--Please choose an option--</option>
            <option value="3">3 produits par page</option>
            <option value="6">6 produits par page</option>
            <option value="9">9 produits par page</option>
          </select> */}
        </div>

        <div className="offers-container">
          {data.offers.map((offer, index) => {
            return (
              <div key={offer._id} className="card-container">
                <Link to={`/offer/${offer._id}`}>
                  <DisplayUser
                    src={offer.owner.account.avatar}
                    alt=""
                    username={offer.owner.account.username}
                  />
                  <div className="display-productimg">
                    {/* Modifier */}
                    <img
                      src={offer.product_image.picture.result.secure_url}
                      alt={offer.product_image.picture.result.original_filename}
                    />
                  </div>
                  <div className="display-productinfos">
                    <span>{offer.product_price} €</span>
                    <span>{offer.product_details[1].TAILLE}</span>
                    <span>{offer.product_details[0].MARQUE}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Offers;
