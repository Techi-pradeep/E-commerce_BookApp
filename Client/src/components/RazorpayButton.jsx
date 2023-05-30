import React, { useState } from "react";
import axios from "axios";
// import { API_CONFIG } from "../config";
import RazorpayCheckout from "react-razorpay";

const RazorpayButton = ({ totalAmount }) => {
  const [orderId, setOrderId] = useState("");


  /**The createOrder function is called when the user clicks on the "Create Order" button. It sends a POST request to the /create-order endpoint on the server and sets the orderId state with the response data. */
  const createOrder = async () => {
    try {
      // ${API_CONFIG.BASE_URL}/${endpoint}
      // const response = await axios.post(`${API_CONFIG.BASE_URL}/${create-order}`, {
      const response = await axios.post("http://localhost:8080/create-order", {
        totalAmount: totalAmount,
      });

      setOrderId(response.data.orderId);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };


  /**
   * The handlePayment function is called when the user clicks on the "Pay with Razorpay" button. It creates a new instance of the Razorpay checkout with the specified options and opens the checkout form.
   */

  const handlePayment = () => {
    const options = {
      key: "rzp_test_LECvIyhGviKzTp", // Replace with your actual Razorpay Key ID
      amount: totalAmount * 100, //  Razorpay accepts the amount in paise or the smallest currency unit.
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "./images/bookstore logo.jpeg",
      order_id: orderId,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      // customer bedefault details
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <div className="App" style={{display:'flex', justifyContent:"space-between"}}>
      <button onClick={createOrder} className="btn btn-primary">Create Order</button>
      <button onClick={handlePayment} className="btn btn-primary">Pay with Razorpay</button>
    </div>
  );
};

export default RazorpayButton;
