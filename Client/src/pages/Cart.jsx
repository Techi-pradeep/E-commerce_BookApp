/* Indian Rupee symbol html code:&#8377;*/
import RazorpayButton from '../components/RazorpayButton';



import AuthContext from '../auth/AuthContext';


// ============================================
import {Link} from "react-router-dom"
import { useState, useContext,useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";
const Cart = () => {
  /**----------------------Dynamic Data getting by useContext hook----------------------------- */
  const { items, removeFromCart,cartCount,setCartCount } = useContext(CartContext);
  console.log("AddtoCart---items", items);

  const [quantities, setQuantities] = useState({});
/** authuser for getting specific user order history */
  const { authUser } = useContext(AuthContext);
 const userId = authUser._id;
  // updating CartCount according to no of cards in cart.jsx
  useEffect(() =>{
    setCartCount(items.length);
  },[items])
console.log(cartCount)
  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
    console.log("CartQuantities",quantities)
  };

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };


  /**--------------------------------used with static  data ------------------------------------------------- */

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: "Item 1",
  //     price: 10.99,
  //     quantity: 1,
  //     image:
  //       "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/547/9789390122547.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Item 2",
  //     price: 15.99,
  //     quantity: 2,
  //     image:
  //       "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Item 3",
  //     price: 20.99,
  //     quantity: 3,
  //     image:
  //       "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
  //   },

  // ]);

  // const [items, setItems] = useState([]);        /** when cart is empty */

  // const handleQuantityChange = (itemId, newQuantity) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === itemId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  /**----------------------------------static data end --------------------------------------- */

  const calculateSubtotal = () => {
    return items.reduce(
      (total, item) => total + item.price * (quantities[item._id] || 1),
      0
    );
  };

  const calculateDiscount = () => {
    // Calculate discount logic goes here
    return 0; // Replace with actual discount calculation
  };

  const calculateDeliveryCharges = () => {
    // Calculate delivery charges logic goes here
    return 50; // Replace with actual delivery charges calculation
  };

  const calculateTotalAmount = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const deliveryCharges = calculateDeliveryCharges();
    return subtotal - discount + deliveryCharges;
  };

  return (
    <>
      <OrdersButton>
      

        <div><Link to={`/orders/${userId}`}>
          <button className="btn btn-primary">Order History</button></Link>
          </div>
        <div> <Link to="/products">  <button className="btn btn-primary">BookStore</button></Link></div>
      </OrdersButton>

      {/* ------------------- */}
      <CartPage>
        <div className="cart">
          {items.length === 0 ? (
            <div className="empty-cart">
              {/* img will shown when no item is added in the Cart */}
              <img src="./images/Empty Cart img.jpeg" alt="" />
            </div>
          ) : (
            <div className="cart-container">
              <div className="cart-items">
                {/* Point- unique key is passed in outermost/ parrent div */}
                {/* map method is used to parse -- array and find to filter one specific element  */}
                {items.map((item) => (
                  <div key={item._id} className="cart-item">
                    <img
                      src={item.image}
                      alt="book-img"
                      className="item-image"
                    />
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">
                        &#8377;
                        {item.price}
                      </div>
                      <div className="item-quantity">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item._id,
                              Math.max(1, quantities[item._id] - 1)
                            )
                          }
                          disabled={
                            !quantities[item._id] || quantities[item._id] === 1
                          }
                          className="quantity-button"
                        >
                          -
                        </button>
                        <div className="quantity-box">
                          <div className="quantity-label">
                            {quantities[item._id] || 1}
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item._id,
                              (quantities[item._id] || 1) + 1
                            )
                          }
                          className="quantity-button"
                        >
                           +
                        </button>
                        <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>

              
              <div className="price-details">
                <div className="price-section">
                  <div className="price-label">Price:</div>
                  <div className="price-value">
                    &#8377;
                    {calculateSubtotal().toFixed(2)}
                  </div>
                </div>
                <div className="price-section">
                  <div className="price-label">Discount:</div>
                  <div className="price-value">
                    &#8377;
                    {calculateDiscount().toFixed(2)}
                  </div>
                </div>
                <div className="price-section">
                  <div className="price-label">Delivery Charges:</div>
                  <div className="price-value">
                    &#8377;
                    {calculateDeliveryCharges().toFixed(2)}
                  </div>
                </div>
                <div className="price-section total-amount">
                  <div className="price-label">Total Amount:</div>
                  <div className="price-value">
                    &#8377;
                    {calculateTotalAmount().toFixed(2)}
                  </div>
                </div>
                {/* here component has  two props: amount (the total amount to be paid) and onSuccess (a callback function that will be called when the payment is successful). */}
                <RazorpayButton totalAmount={calculateTotalAmount()} quantities={quantities} />
               
              </div>
            </div>
          )}
        </div>
      </CartPage>
    </>
  );
};

const OrdersButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4.5rem;
  gap:2rem;
`;

const CartPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  padding: 0 2rem;

  .cart {
   padding: 10px; 
  }

  ${"" /* css for empty card  */}
  .empty-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    ${"" /* height: 200px; */}
    ${"" /* width: 100%; */}
    height: 100vh;
    width:calc(100%+120px);
    ${"" /* margin-bottom: 20px; */}
  }

  .empty-cart img {
    max-width: 100%;
    max-height: 80%;
    ${"" /* object-fit: contain; */}
    ${"" /* object-fit: cover; */}
  }
  .cart-container {
    display: flex;
    flex-direction: row;
    ${'' /* align-items: flex-start; */}
    align-items:center;
    justify-content: space-between;
    &#8377;
{'' /* flex-wrap: wrap; */}
  }

  .cart-items {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    margin:4rem
   
  }

  .cart-item {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
  }

  .item-image {
    width: 150px;
    height: 200px;
    object-fit: cover;
    margin-right: 20px;
    padding:1rem;
   backgroundColor:#fff
  }

  .item-details {
    display: flex;
    flex-direction: column;
  }

  .item-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .item-price {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .item-quantity {
    display: flex;
    align-items: center;
  }

  .quantity-button {
    width: 30px;
    height: 30px;
    font-size:16px;
    background-color: #5B686E;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 5px;
    color:#fff;
  }

  ${"" /* --------------- */}
  .quantity-box {
  display: inline-block;
  width: 40px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;
  text-align: center;
}

.quantity-label {
  font-size: 16px;
  line-height: 30px;
}




${"" /*-----------------------------price-details CSS---------------  */}
.price-details {
  position: sticky;
  top: 4rem; /* Adjust the top offsetor starting point as per your design */
  background-color: #6c818a;
  padding: 20px;
  border-radius: 5px;
  text-align: right;
  width: 100%;
  max-width: 400px;
}


  .price-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
   
  }

  .price-label {
    font-weight: bold;
  }

  .total-amount {
    font-size: 18px;
    margin-top: 10px;
    color:black;
  }

  .proceed-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 778px) {
    .cart-container {
      display:flex;
      flex-direction: column;
      
    .price-details {
      position: static;
      margin-top: 20px;
      flex-direction:column
    }
    }

    .cart-item {
      max-width: 100%;
    }

    .price-details {
      margin-top: 20px;
    }
  }
`;

export default Cart;
