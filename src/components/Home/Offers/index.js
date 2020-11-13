import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DisplayUser from "../../Shared/DisplayUser";

const Offers = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="offers-container">
          {data.offers.map((offer, index) => {
            return (
              <div key={offer._id} className="card-container">
                <Link to={`/offer/${offer._id}`}>
                  <DisplayUser
                    src={offer.owner.account.avatar.secure_url}
                    alt={offer.owner.account.avatar.original_filename}
                    username={offer.owner.account.username}
                  />
                  <div className="display-productimg">
                    <img
                      src={offer.product_image.secure_url}
                      alt={offer.product_image.original_filename}
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
