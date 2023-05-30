import mongoose from "mongoose";

const BooksApiSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "string",
    required: true,
  },
  original_price: {
    type: "string",
    required: true,
  },
  categories: {
    // type: "array",
    // items: {
    //   type: "string",
    // }
    type: [String],

    required: true,
  },
  rating: {
    type: "number",
    required: true,
  },
  image: {
    type: "string",
    format: "uri",
    required: true,
  },

  CartQuantity:{
    type:Number,
    required: true,
    default: 0,
  }
  // createdAt: {
  //   type: "string",
  //   format: "date-time",
  //   required: true,
  // },

  //   required: [
  //     "name",
  //     "price",
  //     "original_price",
  //     "categories",
  //     "rating",
  //     "image",
  //     "createdAt",
  //   ],
});
const Card = mongoose.model("Card", BooksApiSchema);

export default Card;
