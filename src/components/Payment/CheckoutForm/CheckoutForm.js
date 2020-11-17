import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Button from "../../../components/Shared/Button";

const CheckoutForm = ({ orderRef }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Récupérer les données bancaires
      const cardElement = elements.getElement(CardElement);
      // 2. Demander un token à Stripe (API), envoyer les données bancaires
      const stripeResponse = await stripe.createToken(cardElement, {
        name: orderRef.ownerUsername,
      });
      //console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      // 3. Envoyer le token reçu par Stripe dans notre serveur
      const response = await axios.post("http://localhost:3001/pay", {
        stripeToken: stripeToken,
      });
      console.log("reponse serveur:", response.data);
      // Si réponse serveur OK, la transation est passé, succeed:true
    } catch (error) {
      console.log(error);
    }
  };

  return !completed ? (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" text="Valider" />
    </form>
  ) : (
    <span>Paiement effectué !</span>
  );
};

export default CheckoutForm;
