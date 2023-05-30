/* 
   folder or static method- name in lowercase or camelCase 
   Class name in PascalCase or Uppercase
 */

   class PaymentController{
    static createOrder = async (req,res) => {
        try {
       const { totalAmount } = req.body;

       const order = await razorpay.orders.create({
         amount: totalAmount * 100, // Amount in paise or the smallest currency unit
         currency: 'INR',
         receipt: 'order_receipt',
         payment_capture: 1,
       });

       res.json({ orderId: order.id });
     } catch (error) {
       console.error('Error creating order:', error);
       res.status(500).send('Something went wrong!');
     }
    }
   }
   export default PaymentController;