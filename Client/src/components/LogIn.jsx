import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";

import { FiGithub, FiFacebook } from "react-icons/fi";
import { GrGoogle } from "react-icons/Gr";

import usePostData from "../hooks/usePostData.js";
import AuthContext from "../auth/AuthContext.jsx";

import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';  /** main.jsx */

const LogIn = () => {
  const{login,setAuthUser}= useContext(AuthContext);
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // //----------------------------------------------------------------
    // try {
    //   // Make a POST request to the backend login endpoint
    //   const response = await fetch("http://localhost:8080/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();

    //   if (response.ok) {
    //     // If login is successful, redirect to the home page
    //     navigate('/home');
    //   } else {
    //     // If login fails, show an error message
    //     console.log(result.message); // You can handle this error message in your UI
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    // ------------------cutom hook for PostData-------------------------------


  try {
    const result = await usePostData("login", formData);
    // console.log(result);
    // console.log(result.user)
    setAuthUser(result.user);
    if (result.message && result.message==="User signed in successfully" ) {
      // If login is successful, set the authenticated state to true
      toast.success("User Login in successfully");
      login();
      /**setTimeout logic runs after some time so that react toastify can show message */
      setTimeout(() =>{ navigate("/home")}, 4000);
      // navigate("/home");
    } else {
      // If login fails, show an error message
      console.log(result.message); // You can handle this error message in your UI
      toast.error("Login failed")
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <LogInCard>
    <ToastContainer/>
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
              autoComplete="off"
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
              autoComplete="off"
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
            <FiGithub />
          </SocialButton>
          <SocialButton className="facebook">
            <FiFacebook />
          </SocialButton>
        </SocialIcons>
        <SignupButton>
          <h4>Don't have an Account</h4>
          <Link to="/">
            <button className="btn btn-primary">SignUp</button>
          </Link>
        </SignupButton>
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
  height: 85vh;
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
  color: blue;

  > * {
    flex: 1;
    background-color: #f19828;
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
const SignupButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;
export default LogIn;
