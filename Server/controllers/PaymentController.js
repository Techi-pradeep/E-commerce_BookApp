/* 
   folder or static method- name in lowercase or camelCase 
   Class name in PascalCase or Uppercase
 */
import dotenv from "dotenv";
dotenv.config();

import Razorpay from "razorpay";
import { PaymentDetailsModel } from "../models/paymentSchema.js";


class PaymentController {

 
  static processPaymentSuccess = async (req, res) => {
   
    try {
      console.log(req.body);
       console.log("handlePaymentSuccess is called");
      //  Get payment details through post request form frontend---&----object destructuing
      const { paymentId,orderId, signature,cartData,userId } = req.body;

      /* Save the payment information to the database or perform other actions*/
      // creatin an instance of the payment object
      const payment = new PaymentDetailsModel({
        paymentId,
        orderId,
        signature,
        cartData,
        userId,
      });

      // save the payment information to the ti database
      const paymentDetails = await payment.save();
      console.log(paymentDetails);

      res.status(200).json({ message: "Payment success & uploaded to Database" });
    } catch (error) {
      console.error("Error processing payment:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };


  static createOrder = async (req, res) => {
   
    const { totalAmount } = req.body;
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZOR_PAY_KEY_ID,
        key_secret: process.env.RAZOR_PAY_KEY_SECRET,
      });

      const options = {
        amount:  totalAmount* 100, // Amount in paise or the smallest currency unit
        currency: "INR",
        receipt: "order_receipt",
        payment_capture: 1,
      };

      const order = await instance.orders.create(options);

      if (!order) return res.status(500).send("Some error occured");
// sending response as object 
      res.json({orderId:order.id});
    } catch (error) {
      res.status(500).send(error);
    }
  };
}
export default PaymentController;
