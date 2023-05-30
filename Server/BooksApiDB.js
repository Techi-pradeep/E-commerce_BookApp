
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

// const MONGODB_URL = "mongodb+srv://pradeepk259909:HUet16YLyxP4zfFw@projectm.gx5iuhc.mongodb.net/BookStore?retryWrites=true&w=majority";

import connectDB from "../Server/config/connectdb.js";

//targeting schema and .json file
// import { Card } from "../Server/Models/Schema.js";  ---used when we have multiple export {... , ... , ...}
import Card from "../Server/models/bookSchema.js";
// import BooksApiJson from "./BooksApi.json"
import BooksApiJson from "./BooksApi.json" assert { type: "json" };

const share = async () => {
  try {
    await connectDB(MONGODB_URL);
    //creatin document
    await Card.create(BooksApiJson);

    console.log("successed in sending BooksApi-Cards to cluster");
  } catch (err) {
    console.log(err);
  }
};
share();
// Major projects\E-commerce\Server>------path must be in server to run following command
//run in terminal --node BooksApiDB
