import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/Logo-Drone.png";
import styled from "styled-components";

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
  const [ pilot, setPilot ] = useState('')
  
  useEffect(() => {
    const pilotName = localStorage.getItem('pilot')
    setPilot(pilotName)
  },[pilot])
  
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
        {pilot ? <h2>{pilot}</h2>: <div> <StyledLink to="/user-registry">Registrarme</StyledLink>
        <StyledLink to="/login">Iniciar sesión</StyledLink> </div> }
      </Session>
    </HeaderContainer>
  );
}

export default Header;
