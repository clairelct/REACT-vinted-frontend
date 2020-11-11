import React from "react";
import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  return (
    <main>
      <div className="container">
        {console.log(data)}

        <div className="offers-container">
          {data.map((offer, index) => {
            return (
              <div key={index} className="card-container">
                <Link to={`/product/${offer._id}`}>
                  <div className="display-user">
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt={offer.owner.account.avatar.original_filename}
                    />
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <div className="display-productimg">
                    <img
                      src={offer.product_image.secure_url}
                      alt={offer.product_image.original_filename}
                    />
                  </div>
                  <div className="display-productinfos">
                    <span>{offer.product_price}</span>
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
