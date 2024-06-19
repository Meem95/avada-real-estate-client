import React, { useContext } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import UseAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const RealStateCheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const propertyPayments =useLoaderData();
  
  const propertyPayment =propertyPayments[0];
  const totalPrice =  propertyPayment.offer_price;
  console.log(totalPrice)
  console.log("boughtPropertyPrice", propertyPayment);
  useEffect(() => {
    if (totalPrice > 0) {
      console.log("inside here")
      axiosSecure.post("/create-payment-intent", {
          price: totalPrice,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          console.log("payment", res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
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
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName || "anoymous",
          },
          
        },
        
      });
      
    if (confirmError) {
      console.log("confirmerror", confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          userEmail: user?.email,
          userName: user?.name,
          agentName: propertyPayment.agentName,
          agentEmail: propertyPayment.agentEmail,
          offer_price: totalPrice,
          transctionId: paymentIntent.id,
          date: new Date(),
        };
        const updatedData={
          transactionId:paymentIntent.id
        }
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
                if (res.data?.paymentResult?.insertedId) {
                  const updateTransection = await axiosSecure.patch(`/update-offer-status/${propertyPayment._id}`,updatedData);
                  console.log(updateTransection);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the transection",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
       
      }
    }
  };
  return (
    <div>
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
        <button
          className="btn bg-primary text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
      </form>
    </div>
  );
};

export default RealStateCheckoutFrom;
