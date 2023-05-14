// import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.css"; /* for using bootstrap Classnam="...." CSS */
import { NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/Bs"; /*Bs comes from 1st two leters of icon name */

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <Wrapper>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Books</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cart">
              <BsCartCheck className="cart_icon" />
              <span className="cart-total-items">10</span>
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li>
              <button className="btn btn-outline-danger ms-2 text-white"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="btn btn-outline-success ms- text-white"
              onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </ul>
      </Wrapper>
    </>
  );
};

/*Creating styled component  - <wrapper></wrapper>   
const customtag = styled{keyword}.htmltag{h1,button,title,section, etc}`
use ----css : noauto suggestion by vs codestyle;
`;

*/
const Wrapper = styled.nav`
  ${"" /* background-color: black !important; */}

  width: 60%;
  height: auto;
  margin-right: 8rem;
  margin-top: 10px;
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    color: white;
  }
  a:hover {
    font-size: 1.3rem;
    color: yellow;

    padding: 0.5rem;
  }

  .cart {
    position: relative;
  }
  .cart_icon {
    font-size: 1.5rem;
  }

  .cart-total-items {
    display: flex;
    align-items: flex-start;
    background-color: #ff5757;
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    font-size: 0.4rem;
    margin-left: 0.5rem;
    margin-top: 0px;

    position: absolute;
    top: 0;
    left: 1rem;
  }
  .active{
     border:2 px solid blue;
     background-color: blue;
     color: white;
     border-radius: .5rem;
     padding:0.2rem 0.5rem;
  }
`;

export default Navbar;
