// CartContext.js

import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {


  const [items, setItems] = useState([]);


  // Adding pertiuclar book in array with previous items
  const addToCart = (item) => {
    console.log("addToCart", item);
    setItems((prevItems) => [...prevItems, item]);  /**updating items variable which holds array */
  };



  const removeFromCart = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };
 







  return (
    <CartContext.Provider value={{ items, setItems, addToCart,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };


/**  ----------------children prop
 * In React, the children prop[not a fixed keyword can be changed] is a special prop that allows you to pass components or elements as children to another component. In this case, the 
CartProvider component is a higher-order component that wraps around other components and provides them with access to the 
CartContext. The children prop is used to render the child components that are wrapped by the CartProvider.


------------line no 12.
In this case, we are using the functional form of the setState method, which takes the previous state as an argument and returns the new state. The prevItems argument represents the previous state of the items variable.
We are using the spread operator ... to create a new array that contains all the elements of the previous state array prevItems, followed by the new item that we want to add to the array. This new array is then passed as the new value to the setItems function, which updates the state of the items variable to this new array.
 */