import React from 'react';
import logo from '../../src/Logo-Drone.png';
import styled from 'styled-components';

const HeaderContainer = styled.div`
width: 90%;
margin: 1rem auto;
display: flex;
`

const HeaderLogoContainer = styled.div`
flex: 1 1 30%;
  img{
    width: 16rem;
  }
`

const Ulist = styled.ul`
display: flex;
flex: 1 1 40%;
font-size: 1.5rem;
justify-content: space-between;
text-decoration: none;
list-style: none;
align-items: center;
font-family: 'Montserrat';
`

const List = styled.li`
cursor: pointer;
padding: .3rem 1rem;
transition: all .3s ease-in-out;
&:hover{
  transform: scale(1.2) rotate(-8deg);
  box-shadow: .6rem .5rem .5rem rgba(0,0,0, .2);
}
`

const Session = styled.li`
display: flex;
flex: 1 1 30%;
font-size: 1.5rem;
justify-content: flex-end;
text-decoration: none;
list-style: none;
align-items: center;
font-family: 'Montserrat';

.signup{
  margin-right: 3rem;
  font-weight: 600;
}

.login{
  font-weight: 600;
}
`

function Header(){
  return(
    <HeaderContainer>
      <HeaderLogoContainer>
        <img width="100px" src = {logo} alt="logo_drone_services"/>
      </HeaderLogoContainer>
      <Ulist>
        <List>Home</List>
        <List>Blog </List>
        <List>Explora</List>
        <List>About</List>
        <List>Ayuda</List>
      </Ulist>
      <Session>
        <List className="signup">Sign Up</List>
        <List className="login">Login</List>
      </Session> 
    </HeaderContainer>
  )
}

export default Header