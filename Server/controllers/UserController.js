import { userModel } from "../models/userSchema.js"; /**use .js extension for avoding error */

class UserController {
  static signUp = async (req, res) => {
    try {
      console.log(req.body)   /** using postman to check logic for backend on specific route*/

      // Extract the data from the request body- object destructuring
      const { name, email, mobile, confirmPassword } = req.body;

      // Create a new user using the userModel
      const newUser = new userModel({
        name,
        email,
        mobile,
        confirmPassword,
      });

      // Save the new user to the database
      const savedUser = await newUser.save();
      // console.log(savedUser);
      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
   
      res.status(500).json({ error });
    }
  };

  static logIn = async (req, res) => {
    try {
      // Extract the data from the request body
      const { email, password } = req.body;

      // Find the user in the database
      const user = await userModel.findOne({ email, password });

      // If user is not found, return an error
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // If user is found, return a success message
      res.status(200).json({ message: "User signed in successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
export default UserController;
