import express from "express";
const router = express.Router();

import ProductController from "../controllers/ProductController.js";
import PaymentController from "../controllers/PaymentController.js";
import UserController from "../controllers/UserController.js";

router.post("/signUp", UserController.signUp);

router.get("/products", ProductController.books);
router.post("/create-order", PaymentController.createOrder);



export default router;
