import express from "express";
import authenticate from "../middleware.js/Auth.js";
import ProductController from "../controllers/ProductController.js";
import PaymentController from "../controllers/PaymentController.js";
import UserController from "../controllers/UserController.js";
import OrderController from "../controllers/OrderController.js";
const router = express.Router();
// Protected route
// router.get('/', authenticate, (req, res) => {
//   // Access the authenticated user's information
//   const user = req.user;
//   res.status(200).json({ message: 'Protected route accessed successfully', user });
// });

router.post("/signUp", UserController.signUp);
router.post("/login", UserController.logIn);

router.get("/products", ProductController.books);

router.post("/createOrder", PaymentController.createOrder);
router.post("/paymentSuccess", PaymentController.processPaymentSuccess);

router.get("/api/orderDetails/:userId", OrderController.getOrderDetails)

export default router;
