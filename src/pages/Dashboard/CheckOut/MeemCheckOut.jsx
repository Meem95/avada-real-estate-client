import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import RealStateCheckoutFrom from "./RealStateCheckoutFrom";


// todo add publishable key 
const stripePromise=loadStripe(import.meta.env.VITE_Stripe)
const MeemCheckOut = () => {
  return (
    <div>
      <div>
        <div>
          <Elements stripe={stripePromise}>
            <div className="border-2 min-h-56 my-16 p-4">
              {" "} 
              <RealStateCheckoutFrom></RealStateCheckoutFrom>
            </div>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default MeemCheckOut;
