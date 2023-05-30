import mongoose from "mongoose";

// Defining Schema----registration
const userSchema = new mongoose.Schema({
  // no use of semicolon ";" here only comma for seperation

  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  mobile: { type: String, required: true, trim: true },
  confirmPassword: { type: String, required: true, trim: true },
  join: { type: Date, default: Date.now },
});

// Compiling Schema
const userModel = mongoose.model("user", userSchema);

export { userModel };
