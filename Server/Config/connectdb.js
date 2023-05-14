import mongoose from "mongoose";
// Dotenv
// import dotenv from "dotenv";
// dotenv.config();


const MONGODB_URL = process.env.MONGODB_URL ||"mongodb+srv://pradeepk259909:HUet16YLyxP4zfFw@projectm.gx5iuhc.mongodb.net/BookStore?retryWrites=true&w=majority";
const connectDB = async (MONGODB_URL) => {
  console.log("conntecting to db....");
  await mongoose.connect(MONGODB_URL, {
    //   useNewUrlParser:true,
    //   useUnifiedTopology:true,
  });
  console.log("Connected Successfully..");
};

export default connectDB;
