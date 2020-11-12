import React from "react";
import "./index.css";

const Offer = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <img
          src={data.product_image.secure_url}
          alt={data.product_image.original_filename}
        />
      </div>
      <div className="offer-product-details">
        <div>
          <p>{data.product_price}</p>
          <div>
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              return (
                <p key={index}>
                  {keys[0]} {elem[keys[0]]}
                </p>
              );
            })}
          </div>
        </div>

        <div>
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
        </div>
        <button>Acheter</button>
      </div>
    </>
  );
};

export default Offer;
