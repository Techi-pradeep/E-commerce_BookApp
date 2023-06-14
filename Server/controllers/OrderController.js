import { PaymentDetailsModel } from "../models/paymentSchema.js";


class OrderController {
    static getOrderDetails = async(req,res)=>{ 

        // what is query?????????????????????
        // const userId = req.query.userId;
        // const {userId} = req.query;
        const { userId } = req.params;
        console.log("userId:in backend " , userId);
        try{
            const userOrdersDetails = await PaymentDetailsModel.find({ userId: userId});
//             const userOrdersDetails = await PaymentDetailsModel.find({ userId: userId}).filter(function(order) {
//   return order.status === 'completed';
// });

            // const userOrdersDetails = await PaymentDetailsModel.find();
            console.log("Backend",userOrdersDetails);
            res.status(200).json(userOrdersDetails);
        }
        catch(error){
            console.log(`orderDetails error: ${error}`);
            res.status(500).json({message: error.message});
        }
     }
}
export default OrderController;