import React from "react";
import styled from "styled-components";

const NoOrderHistory = () => {
  return (
    <NoOrderContainer>
      <NoOrderImage src="https://th.bing.com/th/id/R.4417134de9896dc79d767223b4764ba1?rik=JoGoFWEz4KdXGQ&riu=http%3a%2f%2fwww.chrispacke.com%2fwp-content%2fuploads%2f2013%2f11%2fno-book-list-1.jpg&ehk=2kJopSi3NwfPQsnNfFzVBmIOMqvtyOne7pr6efH%2bEb8%3d&risl=&pid=ImgRaw&r=0" alt="No Order" />
      <NoOrderText>
        Oops! You don't have any order history yet.
        <br />
        Start shopping and discover amazing products!
      </NoOrderText>
      <ShopButton href="/products">Shop Now</ShopButton>
    </NoOrderContainer>
  );
};

const NoOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  color: #888;
`;

const NoOrderImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

const NoOrderText = styled.p`
  margin-bottom: 20px;
`;

const ShopButton = styled.a`
  padding: 10px 20px;
  background-color: #7C3190;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #B988C1;
  }
`;

export default NoOrderHistory;
