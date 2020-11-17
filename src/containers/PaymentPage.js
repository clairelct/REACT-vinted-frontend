import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/Payment/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HoUcYDFzwG2nKEzaG8lfOxuPS6ot4VshGnGhYnhTOhQXPR8KTl32FWSQCmrguGs94ePcyI5HQ5crT2cLB37e3Ie00Zugk6yFu"
);

const PaymentPage = ({ token }) => {
  const location = useLocation();
  const orderRef = location.orderRef;
  console.log("Ref. commande, page payment:", orderRef);

  return (
    <main>
      <div className="container">
        <div className="payment-container">
          <h2>Résumé de la commande</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm orderRef={orderRef} />
          </Elements>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
