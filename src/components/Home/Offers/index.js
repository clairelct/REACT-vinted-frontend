import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DisplayUser from "../../Shared/DisplayUser";
import axios from "axios";

const Offers = ({ data }) => {
  return (
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
  );
};

export default Offers;
