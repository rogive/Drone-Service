import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/Logo-Drone.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetGlobalUser, setGlobalUser } from "../store";
import Chatbot from 'react-chatbot-kit';
import { ActionProvider, MessageParser, config}  from './ChatBot';
import { ConditionallyRender } from "react-util-kit";
import droneboticon from "../img/dronebot-icon.png";

const HeaderContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`;

const HeaderLogoContainer = styled.div`
  flex: 1 1 30%;
  img {
    width: 10rem;
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

const Chatbotcontainer = styled.div`
  height: 40rem;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 1;
  box-shadow: 5px 5px 13px rgba(91, 81, 81, 0.4);
  border-radius: 5px;
`;

const Chatbotbutton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #1f3646;
  border: none;
  position: fixed;
  bottom: 15px;
  z-index: 9999;
  right: 40px;
  img{
    width: 50px;
    height: 50px;
    fill: #fff;
    filter: brightness(0) invert(1);
  }
`;


function Header() {
  const dispatch = useDispatch();
  const pilotName = useSelector((state) => state.userName);
  const history = useHistory();
  const [showChatbot, toggleChatbot] = useState(false);

  useEffect(() => {
    dispatch(setGlobalUser({ name: sessionStorage.getItem("userName") }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(resetGlobalUser());
    history.push("/login");
  };

  const handleProfileRedirect = () => {
    sessionStorage.getItem("userType") === "pilot"? history.push("/pilot-profile"): history.push("/client-profile")
    
  };

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
        {pilotName ? (
          <div>
            <h1>{pilotName}</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <button onClick={handleProfileRedirect}>Mi perfil</button>
          </div>
        ) : (
          <div>
            <StyledLink to="/login">Iniciar sesión</StyledLink>
          </div>
        )}
      </Session>
      <Chatbotcontainer>
        <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
            }
        />
      </Chatbotcontainer>
      <Chatbotbutton onClick={() => toggleChatbot((prev) => !prev)}>
        <img src={droneboticon}/>
      </Chatbotbutton>
    </HeaderContainer>
  );
}

export default Header;
