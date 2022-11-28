import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm ";
const stripePromise = loadStripe(
  "pk_test_51M8qqCKkUSsdEEDqR3b7LyYQypGOEpmneFl34njQTKoH5WOtxCoRPsvLg9IlpdIcPYmAYfHH2Fi8xsqOEvd19kKM00n6Zdwcd3"
);
const Payment = () => {
  const Payment = useLoaderData();
  console.log(Payment);
  return (
    <div className="flex justify-center max-w-screen-xl mx-auto ">
      <div className="w-80">
        <Elements stripe={stripePromise}>
          <CheckoutForm Payment={Payment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
