// Dotenv
import dotenv from "dotenv";
dotenv.config();

import Card from "./Models/Schema.js";


import express from "express";
import cors from "cors"; //Solving errors while connecting --back end to front end.
import connectDB from "../Server/Config/connectdb.js";

const app = express();

const PORT = process.env.PORT || 3067;
const MONGODB_URL = process.env.MONGODB_URL ;
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"       /** development phase --using MongoDB Compass*/

// CORS Policy  - used for connecting backend to frontend smoothly---avoiding errors while connecting
app.use(cors());

// solving error in new version
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database Connection
connectDB(MONGODB_URL);

app.get("/", (req, res) => {})
app.get("/products", async (req, res) => {
   try {
      const allBooks = await Card.find();
      /* Testing the data is recevied on backend or not when some one hit - http://localhost:3046/products*/
      // console.log(allBooks)

       res.json(allBooks)  /**sending data to client{frontend} which is calling that route {/product} ---showing allbooks in json viewer*/
     
   } catch (err) {
      res.send(err);
   }
});
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
