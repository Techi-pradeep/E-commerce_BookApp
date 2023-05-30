/* 
   folder or static method- name in lowercase or camelCase 
   Class name in PascalCase or Uppercase
 */

import Card from "../models/bookSchema.js";

class ProductController {
  static books = async (req, res) => {
    try {
      const allBooks = await Card.find();
      /* Testing the data is recevied on backend or not when some one hit - http://localhost:3046/products*/
      // console.log(allBooks)

      res.json(
        allBooks
      ); /**sending data to client{frontend} which is calling that route {/product} ---showing allbooks in json viewer*/
    } catch (err) {
      res.send(err);
    }
  };
}

export default ProductController;







/* ================================Alternativ approch of using class methods==========================
 const userController = () => {
  return {
    products: async (req, res) => {
      try {
        const allBooks = await Card.find();
        // ...
        res.json(allBooks);
      } catch (err) {
        res.send(err);
      }
    }
  };
};

export default userController;


In this updated code, userController is a factory function that returns an object containing the products static method. This allows you to use the returned object as a controller and access the products method as userController.products elsewhere in your code.

Please note that in this approach, you'll need to assign the result of the userController function to a variable and use that variable as your controller. For example
--------------------------------------------------------
const UserController = userController();

// To use the products method:
UserController.products(req, res);
-----------------------------------------------------------
Although this approach is valid, the class-based approach provides better readability and adheres to standard JavaScript conventions for defining static methods within a class.
 */
