import mongoose from "mongoose";
import { userModel } from "./userSchema.js";
const paymentSchema = new mongoose.Schema({
    // attaching orders to a specific user account
    // userId:{
    //   type:mongoose.Schema.Types.ObjectId,
    //   ref:"user",
    //   required:true,
    // },

    userId:{
      type:String,
      required:true,
    },
    paymentId: {
      type: String,
      required: true
    },
    orderId: {
      type: String,
      required: true
    },
    signature: {
      type: String,
      required: true
    },
    cartData: {
      type:[Object],
      required: true
    },
    
    orderDate: {
      type: Date,
      default: Date.now
    }
  });
  

 const PaymentDetailsModel = mongoose.model("PaymentDetails", paymentSchema   );

 export { PaymentDetailsModel}