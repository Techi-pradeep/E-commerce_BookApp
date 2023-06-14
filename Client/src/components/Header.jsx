// import React from 'reacti
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css"; /* for using bootstrap Classnam="...." CSS */
import { BsSearch} from "react-icons/Bs";

import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useState,useContext } from "react";


import {SearchContext} from "../SearchFeature/SearchContext"
 

const Header = () => {
  const{searchQuery, setSearchQuery,handleSubmit} = useContext(SearchContext)
 
  return (
    <Head className="navbar navbar-expand-lg navbar-sm bg-dark bg-gradient" style={{position:"fixed"}}>
      <NavLink to="/">
        {/* how we are accessing direct public folder ---./ by default */}
        <div className="logo" ><img src="./images/bookstore logo.jpeg" alt="logo image" /></div>
      </NavLink>
      <div className="position-relative">
        <input type="text" className="form-control w-100" name="search"  id="search" placeholder="Search Books" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}

        />
        <BsSearch onClick={handleSubmit}className="search-icon" />
      </div>
    
    <Navbar />
    

    </Head>
  );
};

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: black;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  img {
    width: 70px;
    height: 64px;
    border-radius: 50%;
    padding: 0.5rem;
  }
  .search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

`;

export default Header;
