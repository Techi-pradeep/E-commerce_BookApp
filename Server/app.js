// Dotenv
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"; //Solving errors while connecting --back end to front end.
import cookieParser from "cookie-parser";
import session from "express-session";


import connectDB from "./config/connectdb.js";
import User from "./routes/customer.js";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"       /** development phase --using MongoDB Compass*/


// CORS Policy  - used for connecting backend to frontend smoothly---avoiding errors while connecting
app.use(
  cors({
    origin: 'https://creative-piroshki-9c860e.netlify.app', // Replace with your frontend domain
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed request headers
  })
);

// solving error in new version
import mongoose from "mongoose";
mongoose.set("strictQuery", true);


// body parsre is deprecated--this is updated approach 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(session({
//   secret: JWT_SECRET_KEY ,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false } // Set 'secure' to true for HTTPS
// }));

// Database Connection
connectDB(MONGODB_URL);
// registering all routes
app.use("/", User);







// =============================================================--------------------
/*--------------------------Bridging frontend to backend------------------------
axios is package which here is hitting the backend route{What to Show}  and used following code in frontend{Where to show} for using SideEffects by useEffect Hook
 const response = await axios.get("http://localhost:3046/products");
        const data = response.data;
 */


const start = async () => {
  try {
    // await connectDB()
    app.listen(PORT, () => {
      console.log(`listening at  http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
