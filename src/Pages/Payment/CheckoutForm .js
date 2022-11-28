import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const CheckoutForm = ({ Payment }) => {
  const { price, BuyerName, BuyerEmail, ProductName, Product_id, SellerEmail } =
    Payment;
  const [CardError, setCardError] = useState("");
  const [TID, setTID] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const dateObj = String(new Date());
  const date = dateObj.substring(0, 16);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    const { paymentIntent, error: ConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: BuyerName,
            email: BuyerEmail,
          },
        },
      });
    console.log(paymentIntent.id);
    if (ConfirmError) {
      setCardError(ConfirmError.message);

      return;
    } else {
      setCardError("");
    }
    if (paymentIntent.status === "succeeded") {
      setTID(paymentIntent.id);
      const PaymentInfo = {
        ProductName,
        BuyerEmail,
        SellerEmail,
        TID,
        date,
      };
      fetch("http://localhost:5000/addPayment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(PaymentInfo),
      });
      fetch(`http://localhost:5000/product/paid/${Product_id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
      }).then((res) => res.json());
      fetch(`http://localhost:5000/order/paid/${Payment._id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
      }).then((res) => res.json());
      swal({
        icon: "success",
        title: `Payment Successfully.`,
        button: "OK",
      });
      navigate("/Dashboard/MyOrders");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p className="text-red-600 text-center text-xl">{CardError}</p>
    </>
  );
};

export default CheckoutForm;
