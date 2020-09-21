import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/Logo-Drone.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetGlobalUser, setGlobalUser } from "../store";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import "./Header.css";
import avatar from "../img/img_avatar.png";

const HeaderContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`;

const ModalContainer = styled.div`
  height: 200px;
  width: 200px;
  border: none !important;
  background-color: white;
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

function Header() {
  const dispatch = useDispatch();
  const pilotName = useSelector((state) => state.userName);
  const history = useHistory();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(setGlobalUser({ name: sessionStorage.getItem("userName") }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(resetGlobalUser());
    history.push("/");
  };

  const handleProfileRedirect = () => {
    sessionStorage.getItem("userType") === "pilot"
      ? history.push("/pilot-profile")
      : history.push("/client-profile");
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link to="/">
          <img width="100px" src={logo} alt="logo_drone_services" />
        </Link>
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
          <div className="dropmenu">
            <nav role="navigation">
              <ul>
                <li>
                  <a href="#">
                    <img src={avatar} alt="Avatar" class="avatar" />
                  </a>
                  <ul class="dropdown">
                    <li>
                      <a onClick={handleProfileRedirect}>Mi perfil</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Cerrar sesión</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          // <div>
          //   <h1>{pilotName}</h1>
          //   <button onClick={handleLogout}>Cerrar sesión</button>
          //   <button onClick={handleProfileRedirect}>Mi perfil</button>
          // </div>
          <div>
            <StyledLink to="" onClick={() => setShow(!show)}>
              Iniciar sesión
            </StyledLink>
          </div>
        )}
      </Session>

      <Modal show={show} handleClose={hideModal}>
        <LoginForm handleClose={hideModal} />
      </Modal>
    </HeaderContainer>
  );
}

export default Header;
