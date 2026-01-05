import "./CheckOut.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckOut({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);


  // useEffect(() => {
  //   axios
  //     .get("/api/delivery-options?expand=estimatedDeliveryTime")
  //   .then((response) => {
  //     setDeliveryOptions(response.data);
  //   });

  //   axios.get("/api/payment-summary").then((response) => {
  //     setPaymentSummary(response.data);
  //   });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    getData();
  }, [])

  return (
    <>
      <link rel="icon" href="cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader cart={cart}/>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
