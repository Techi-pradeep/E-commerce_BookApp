import React, { useState } from "react";
import styled from "styled-components";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { BsGoogle} from "react-icons/Bs";


const apiUrl = "http://localhost:8080/"
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
let name, value;
  const handleChange = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;


    setFormData({
      ...formData,
      [name]:value,
      // [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    PostData(`${apiUrl}signUp`,formData)
  };
  const PostData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};



  return (
    <SignUpCard>
    <CardImage>
      <img src="./images/SignUpImg.jpeg" alt="Sign Up" />
    </CardImage>
    <CardContent>
      <Title>Create an Account</Title>
      <Form onSubmit={handleSubmit} method="POST">
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
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
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
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
        <FormGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
      <SocialIcons>
        <SocialButton className="google">
        <BsGoogle/>
        </SocialButton>
        <SocialButton className="github">
          <FiGithub />
        </SocialButton>
        <SocialButton className="facebook">
          <FiFacebook />
        </SocialButton>
      </SocialIcons>
    </CardContent>
  </SignUpCard>
  );
};

const SignUpCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding:5rem 7rem;
  padding-bottom:20px
  

${'' /* removing image part and showing SignUp form data */}
  @media (max-width: 786px) {
    flex-direction: column-reverse;
    
  }

  min-height: 100vh;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
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
  height:85.6vh;
  object-fit: contain;
 


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
  padding-top: 10px;

  &:hover {
    background-color: #555;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  > * {
    flex: 1;
    background-color: #ccc;
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

export default SignUp;
