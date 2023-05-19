// Dotenv
import dotenv from "dotenv";
dotenv.config();

import Card from "./Models/Schema.js";


import express from "express";
import cors from "cors"; //Solving errors while connecting --back end to front end.
import connectDB from "../Server/Config/connectdb.js";

const app = express();

const PORT = process.env.PORT || 3067;
const MONGODB_URL = process.env.MONGODB_URL ||"mongodb+srv://pradeepk259909:HUet16YLyxP4zfFw@projectm.gx5iuhc.mongodb.net/BookStore?retryWrites=true&w=majority";
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"
// CORS Policy  - used for connecting backend to frontend smoothly
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
      // console.log(allBooks)

       res.json(allBooks)
      //front end -showing allbooks in json viewer
   } catch (err) {
      res.send(err);
   }
});

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
