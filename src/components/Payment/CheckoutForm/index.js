import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../Shared/Button";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const CheckoutForm = ({ orderRef }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const userId = Cookies.get("userId");
  //console.log("userId", userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Récupérer les données bancaires
      const cardElement = elements.getElement(CardElement);
      // 2. Demander un token à Stripe (API), envoyer les données bancaires
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      //console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      // 3. Envoyer le token reçu par Stripe dans notre serveur
      const response = await axios.post(
        "https://vinted-phoenix.herokuapp.com/pay",
        {
          stripeToken: stripeToken,
          productName: orderRef.productName,
          price: orderRef.price,
        }
      );
      //console.log("reponse serveur:", response.data);

      // Si réponse serveur OK, la transation est passé, succeed:true
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !completed ? (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" text="Valider" />
    </form>
  ) : (
    <div className="checkout-succeed">
      <div>
        <FontAwesomeIcon icon="check-circle" />
        <span>Paiement effectué !</span>
      </div>
      <Link className="link" to="/">
        Continuer mes achats
      </Link>
    </div>
  );
};

export default CheckoutForm;
