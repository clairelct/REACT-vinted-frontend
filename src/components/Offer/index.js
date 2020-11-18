import React from "react";
import { useHistory } from "react-router-dom";
import DisplayUser from "../Shared/DisplayUser";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import Cookies from "js-cookie";

const Offer = ({ data }) => {
  //console.log(data);
  const history = useHistory();
  const arrFiles = Object.keys(data.product_image);

  const token = Cookies.get("token");

  const handleClickToCheckout = () => {
    if (token) {
      history.push({
        pathname: "/payment",
        orderRef: {
          ownerId: data.owner._id,
          ownerUsername: data.owner.account.username,
          productName: data.product_name,
          productDesc: data.product_description,
          price: data.product_price,
          productImg: data.product_image,
        },
      });
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="offer-container">
      <div className="offer-product-image">
        {/* Conditionnelle nb. de photos */}

        {arrFiles.length > 1 ? (
          <Carousel>
            {arrFiles.map((item, index) => {
              return (
                <div key={index} className="">
                  <img
                    src={data.product_image[item].result.secure_url}
                    alt={data.product_image[item].result.original_filename}
                  />
                </div>
              );
            })}
          </Carousel>
        ) : (
          arrFiles.map((item, index) => {
            return (
              <div key={index} className="display-one-pic">
                <img
                  src={data.product_image[item].result.secure_url}
                  alt={data.product_image[item].result.original_filename}
                />
              </div>
            );
          })
        )}
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
        <button
          onClick={() => {
            handleClickToCheckout();
          }}
        >
          Acheter
        </button>
      </div>
    </div>
  );
};

export default Offer;
