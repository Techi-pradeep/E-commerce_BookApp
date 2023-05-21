// Indian Rupee symbol html code:&#8377;

import { useState } from "react";
import styled from "styled-components";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      price: 10.99,
      quantity: 1,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/547/9789390122547.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      quantity: 2,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 20.99,
      quantity: 3,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 10.99,
      quantity: 1,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/547/9789390122547.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      quantity: 2,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 20.99,
      quantity: 3,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 10.99,
      quantity: 1,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/547/9789390122547.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      quantity: 2,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 20.99,
      quantity: 3,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 10.99,
      quantity: 1,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/547/9789390122547.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      quantity: 2,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 20.99,
      quantity: 3,
      image:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/188/9781476753188.jpg",
    },
  ]);





  // const [items, setItems] = useState([]);
  const handleQuantityChange = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    // Calculate discount logic goes here
    return 0; // Replace with actual discount calculation
  };

  const calculateDeliveryCharges = () => {
    // Calculate delivery charges logic goes here
    return 0; // Replace with actual delivery charges calculation
  };

  const calculateTotalAmount = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const deliveryCharges = calculateDeliveryCharges();
    return subtotal - discount + deliveryCharges;
  };

  return (
    <CartPage>
      <div className="cart">
        {items.length === 0 ? (
          <div className="empty-cart">
           {/* imgage when no item is added in the Cart */}
            <img src="./images/Empty Cart img.jpeg" alt="" />
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">
                      &#8377;
                      {item.price.toFixed(2)}
                    </div>
                    <div className="item-quantity">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="quantity-button"
                        style={{backgroundColor:"red"}}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="quantity-button"
                        style={{backgroundColor:"green"}}
                      >
                        +
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
              <button className="proceed-button">Proceed to Payment</button>
            </div>
          </div>
        )}
      </div>
    </CartPage>
  );
};

const CartPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;

  .cart {
    padding: 20px;
    margin-top:3rem/*** Header is fixed so we wrapped whole component in a div and provide margin */
  }

  ${'' /* css for empty card  */}
  .empty-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* height: 200px; */}
    ${'' /* width: 100%; */}
    height: 90vh;
    width:calc(100%+120px);
    ${'' /* margin-bottom: 20px; */}
  }

  .empty-cart img {
    max-width: 100%;
    max-height: 100%;
    ${'' /* object-fit: contain; */}
    ${'' /* object-fit: cover; */}
  }
  .cart-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    &#8377;
{'' /* flex-wrap: wrap; */}
  }

  .cart-items {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
    background-color: #eee;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 5px;
    color:#fff;
  }




${'' /*-----------------------------price-details CSS---------------  */}
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

  @media (max-width: 768px) {
    .cart-container {
      flex-direction: column;
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
