import React from "react";
import styled from "styled-components";
import NoOrderHistory from "../components/NoOrderHistory";
// custom hook to fetch data after matching userId
import { usefetchOrderDetails } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const OrderHistory = () => {
  const { userId } = useParams();
  const orderedItems = usefetchOrderDetails(`api/orderDetails/${userId}`);
  console.log(orderedItems);
  return (
<>
     <OrderHistoryContainer>
      <h2 style={{ textAlign: "center", color: "#B988C1" }}>Order History</h2>
      {/* orderedItems && ---avoiding null error */}
      {orderedItems && orderedItems.length === 0 ? (
        <NoOrderHistory />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Order ID</th>
              <th>Order Date & Time</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderedItems && orderedItems.map((order, index) => (
              <tr key={order.orderId}>
                <td>{index + 1}</td>
                <td>{order.orderId}</td>
                <td>{order.orderDate}</td>
                <td>
                  <ul>
                    {order.cartData.map((item) => (
                      <li key={item._id}>{item.name}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {order.cartData.map((item) => (
                      <li key={item._id}>
                        &#8377;
                        {item.price}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {order.cartData.map((item) => (
                      <li key={item._id}>{item.quantity}</li>
                    ))}
                  </ul>
                </td>
                <td>Payment successful </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </OrderHistoryContainer>
  </>
  );
};

// const OrderSection = styled.div``;

const OrderHistoryContainer = styled.div`
  padding: 20px;
  padding-top: 5rem;
  min-height: 100vh;
  color: black;

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
      ${"" /* text-align: left; */}
      text-align: center;
    }

    th {
      background-color: #7c3190;
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
