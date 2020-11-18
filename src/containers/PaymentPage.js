import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HoUcYDFzwG2nKEzaG8lfOxuPS6ot4VshGnGhYnhTOhQXPR8KTl32FWSQCmrguGs94ePcyI5HQ5crT2cLB37e3Ie00Zugk6yFu"
);

const PaymentPage = ({ token }) => {
  const location = useLocation();
  const orderRef = location.orderRef;

  return (
    <main className="payment-main">
      <div className="container">
        <div className="payment-container">
          <div className="order-header">
            <h2>Résumé de la commande</h2>
            <div>
              <span className="legend">Produit</span>
              <p>{orderRef.productName}</p>
            </div>
            <div>
              <span className="legend">Description</span>
              <p>{orderRef.productDesc}</p>
            </div>
            <div className="pricing">
              <p>Montant</p>
              <p>{orderRef.price} €</p>
            </div>
            <div className="pricing">
              <p>Frais de port</p>
              <p>Gratuit</p>
            </div>
          </div>
          <div className="order-footer">
            <div>
              <div className="order-total">
                <p>Total</p>
                <p>{orderRef.price} €</p>
              </div>
              <span>
                {orderRef.ownerUsername}, plus qu'une étape avant d'acquérir{" "}
                {orderRef.productName} ! <br></br> Il ne vous reste plus qu'à
                payer {orderRef.price} € (Frais de port inclus).
              </span>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm orderRef={orderRef} />
            </Elements>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
