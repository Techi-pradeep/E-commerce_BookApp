import { CartContext } from "../CartContext";

import React from "react";
import styled from "styled-components";
import NoOrderHistory from "../components/NoOrderHistory";



// -----------Adding data after successful completion of payment
// const addOrderToHistory = (orderData) => {
//   const { addOrderToHistory } = useContext(CartContext);
//   addOrderToHistory(orderData);
// };

const OrderHistory = () => {
  const orders = [
    {
      orderId: "12345",
      orderDate: "2023-05-20",
      items: [
        { itemId: "1", name: "Item 1", quantity: 2, price: "$10.00" },
        { itemId: "2", name: "Item 2", quantity: 1, price: "$20.00" },
        { itemId: "3", name: "Item 3", quantity: 3, price: "$5.00" },
      ],
      totalAmount: "$50.00",
      status: "Delivered",
    },
    // Add more order objects as needed
    {
        orderId: "12345",
        orderDate: "2023-05-20",
        items: [
          { itemId: "1", name: "Item 1", quantity: 2, price: "$10.00" },
          { itemId: "2", name: "Item 2", quantity: 1, price: "$20.00" },
          { itemId: "3", name: "Item 3", quantity: 3, price: "$5.00" },
        ],
        totalAmount: "$50.00",
        status: "Delivered",
      },
      {
        orderId: "12345",
        orderDate: "2023-05-20",
        items: [
          { itemId: "1", name: "Item 1", quantity: 2, price: "$10.00" },
          { itemId: "2", name: "Item 2", quantity: 1, price: "$20.00" },
          { itemId: "3", name: "Item 3", quantity: 3, price: "$5.00" },
        ],
        totalAmount: "$50.00",
        status: "Delivered",
      },
      {
        orderId: "12345",
        orderDate: "2023-05-20",
        items: [
          { itemId: "1", name: "Item 1", quantity: 2, price: "$10.00" },
          { itemId: "2", name: "Item 2", quantity: 1, price: "$20.00" },
          { itemId: "3", name: "Item 3", quantity: 3, price: "$5.00" },
        ],
        totalAmount: "$50.00",
        status: "Delivered",
      },
  ];
 

// const orders = [];
  return (
    <OrderSection>
      <OrderHistoryContainer>
        <h2 style={{ textAlign: 'center',color:"#B988C1" }}>Order History</h2>
        {orders.length === 0 ? (
          <NoOrderHistory />
        ) : (
            <table>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.orderId}>
                    <td>{index + 1}</td>
                    <td>{order.orderId}</td>
                    <td>{order.orderDate}</td>
                    <td>
                      <ul>
                        {order.items.map((item) => (
                          <li key={item.itemId}>
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {order.items.map((item) => (
                          <li key={item.itemId}>
                            {item.price}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {order.items.map((item) => (
                          <li key={item.itemId}>
                            {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </OrderHistoryContainer>
    </OrderSection>
  );
};

const OrderSection = styled.div``;



const OrderHistoryContainer = styled.div`
  padding: 20px;
  padding-top: 5rem;
  min-height: 100vh;
  color: #fff;

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-style: italic;
    color: #888;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f5f5f5;
    border-radius: 5px;
    overflow: hidden;

    th,
    td {
      padding: 12px;
      text-align: left;
    }

    th {
      background-color: #7C3190;
      color: #fff;
    }

    tr:nth-child(even) {
      background-color: #e8e8e8;
    }

    tr:last-child {
      border-bottom: none;
    }

    td ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    td ul li {
      margin-bottom: 5px;
    }
  }

  a img {
    display: block;
    max-width: 200px;
    margin: 0 auto;
  }
`;



export default OrderHistory;
