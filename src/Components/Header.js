<<<<<<< HEAD
import React from "react";
import { Link, Router, BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "../../src/Logo-Drone.png";
import styled from "styled-components";
=======
import React from 'react';
import logo from '../../src/Logo-Drone.png';
import styled from 'styled-components';
>>>>>>> 32be49cd163bce367e0b3892be4a3341b00e4aa6

const HeaderContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
`;

const HeaderLogoContainer = styled.div`
  flex: 1 1 30%;
  img {
    width: 16rem;
  }
`;

const Ulist = styled.ul`
  display: flex;
  flex: 1 1 40%;
  font-size: 1.5rem;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
  align-items: center;
  font-family: "Montserrat";
`;

const List = styled.li`
  cursor: pointer;
  padding: 0.3rem 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2) rotate(-8deg);
    box-shadow: 0.6rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const Session = styled.li`
  display: flex;
  flex: 1 1 30%;
  font-size: 1.5rem;
  justify-content: flex-end;
  text-decoration: none;
  list-style: none;
  align-items: center;
  font-family: "Montserrat";

  .signup {
    margin-right: 3rem;
    font-weight: 600;
  }

  .login {
    font-weight: 600;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 0.3rem 1rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.2) rotate(-8deg);
    box-shadow: 0.6rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <img width="100px" src={logo} alt="logo_drone_services" />
      </HeaderLogoContainer>
      <Ulist>
        <StyledLink to="/">Home</StyledLink>
        <List>Blog </List>
        <StyledLink to="/explora">Explora</StyledLink>
        <List>About</List>
        <List>Ayuda</List>
      </Ulist>

      <Session>
        <List className="signup">Sign Up</List>
        <List className="login">Login</List>
      </Session>
    </HeaderContainer>
  );
}

export default Header;
