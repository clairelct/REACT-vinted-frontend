import React from "react";
import DisplayUser from "../Shared/DisplayUser";
import "./index.css";
import Button from "../Shared/Button";

const Offer = ({ data }) => {
  console.log(data);
  const arrFiles = Object.keys(data.product_image);

  return (
    <div className="offer-container">
      <div className="offer-product-image">
        {/* Conditionnelle nb. de photos */}
        {arrFiles.length > 1 ? (
          arrFiles.map((item, index) => {
            return (
              <div key={index} className="">
                <img
                  src={data.product_image[item].result.secure_url}
                  alt={data.product_image[item].result.original_filename}
                />
              </div>
            );
          })
        ) : (
          <p>1 photo</p>
        )}
        {/* Si plusieurs photos */}
      </div>
      <div className="offer-product-details">
        <div>
          <p className="offer-price">{data.product_price} €</p>
          <ul>
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              return (
                <li key={index}>
                  <span>{keys[0]}</span> <span>{elem[keys[0]]}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="product-name">{data.product_name}</p>
          <p>{data.product_description}</p>
          <DisplayUser
            src={data.owner.account.avatar}
            alt={data.owner.account.avatar.original_filename}
            username={data.owner.account.username}
          />
        </div>
        <Button text="Acheter" />
      </div>
    </div>
  );
};

export default Offer;
