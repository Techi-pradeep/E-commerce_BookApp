import React, { useState } from "react";
import styled from "styled-components";
import { FiGithub, FiFacebook } from "react-icons/fi";
import {GrGoogle} from "react-icons/Gr";


const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login submission or validation here
  };

  return (
    <LogInCard>
      <CardImage>
        <img src="./images/LogIn.jpeg" alt="Log In" />
      </CardImage>
      <CardContent>
        <Title>Log In</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
        <SocialIcons>
          <SocialButton className="google">
            <GrGoogle />
          </SocialButton>
          <SocialButton className="github">
            <FiGithub  />
          </SocialButton>
          <SocialButton className="facebook">
            <FiFacebook  />
          </SocialButton>
        </SocialIcons>
      </CardContent>
    </LogInCard>
  );
};

const LogInCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 6.5rem 7rem;
  padding-bottom: 20px;
  backcolor: green;

  @media (max-width: 786px) {
    flex-direction: column-reverse;
    width: 100vw;
  }


  min-height: 100vh;
  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
`;

const CardImage = styled.div`
  flex: 1;
  text-align: center;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 786px) {
    display: none;
  }
`;

const CardContent = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  height:85vh;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;

const SocialButton = styled.button`
  flex: 1;
  background-color: #ccc;
  color: blue;
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  color:blue;

  > * {
    flex: 1;
    background-color: #F19828;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
`;

export default LogIn;
