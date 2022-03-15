import React from "react";
import logo from "./assets/images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.img`
  width: 150px;
  height: 3vh
  padding: 10px 10px;
  margin-left: 20px;
  `;

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand text-white ml-5">
        <Logo src={logo}></Logo>
      </Link>
    </nav>
  );
};

export default Nav;
